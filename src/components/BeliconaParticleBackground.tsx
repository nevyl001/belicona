import { useEffect, useRef } from "react";

/**
 * BeliconaParticleBackground
 * ---------------------------------------------------------------------------
 * Motor "Particle Drift" adaptado a Belicona: partículas rojas en suspensión,
 * conexiones casi imperceptibles, estelas rojas ocasionales y un halo suave
 * que sigue al cursor (solo escritorio).
 *
 * - Canvas 2D propio, sin dependencias ni iframe.
 * - Todo el estado vive en el closure del efecto (sin re-renders por frame).
 * - Pausa con la pestaña oculta, respeta prefers-reduced-motion
 *   (dibuja un único frame estático) y libera todos los listeners al desmontar.
 * - El canvas nunca captura eventos (pointer-events: none).
 */

export interface BeliconaParticleBackgroundProps {
  /** Multiplicador de cantidad de partículas (1 = base). */
  density?: number;
  /** Multiplicador de velocidad ambiental (1 = base). */
  speed?: number;
  /** Opacidad global del sistema (0–1). */
  opacity?: number;
  /** Habilita halo y reacción al cursor en dispositivos con mouse. */
  interactive?: boolean;
  /** Color de acento (hex). Rojo Belicona por defecto. */
  accentColor?: string;
  className?: string;
}

type RGB = [number, number, number];
type Tone = 0 | 1 | 2; // 0 rojo, 1 rojo cálido (brasa), 2 blanco tenue

interface Particle {
  x: number;
  y: number;
  z: number; // profundidad 0.35 (lejos) – 1 (cerca)
  vx: number;
  vy: number;
  size: number;
  tone: Tone;
  alpha: number;
  phase: number;
  twinkle: number;
  pulse: number;
  wobble: number;
  ox: number; // desplazamiento por el cursor (se recupera con un resorte)
  oy: number;
  ovx: number;
  ovy: number;
}

interface Streak {
  x: number; // cabeza
  y: number;
  dx: number;
  dy: number;
  len: number;
  speed: number;
  life: number;
  age: number;
  width: number;
  peak: number;
}

const DEFAULT_ACCENT = "#E02020";
const WARM: RGB = [255, 96, 84];
const WHITE: RGB = [245, 245, 245];

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

function hexToRgb(hex: string): RGB {
  const m = hex.trim().replace("#", "");
  const full =
    m.length === 3
      ? m
          .split("")
          .map((c) => c + c)
          .join("")
      : m;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return [224, 32, 32];
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

/** Aproximación de gaussiana en rango ≈ [-1, 1]. */
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 0.8;

function makeGlowSprite(rgb: RGB): HTMLCanvasElement {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const g = c.getContext("2d");
  if (g) {
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.9)`);
    grad.addColorStop(0.35, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.28)`);
    grad.addColorStop(1, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
  }
  return c;
}

export default function BeliconaParticleBackground({
  density = 1,
  speed = 1,
  opacity = 1,
  interactive = true,
  accentColor = DEFAULT_ACCENT,
  className = "",
}: BeliconaParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // sin canvas: queda el fondo CSS estático

    const accent = hexToRgb(accentColor);
    const tones: RGB[] = [accent, WARM, WHITE];
    const sprites = tones.map(makeGlowSprite);
    const colorStr = tones.map((c) => `rgb(${c[0]},${c[1]},${c[2]})`);
    const lineBase = `${accent[0]},${accent[1]},${accent[2]}`;

    // Capacidad del dispositivo -------------------------------------------
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const lowPower =
      (nav.hardwareConcurrency ?? 8) <= 4 ||
      (nav.deviceMemory ?? 8) <= 4 ||
      Boolean(nav.connection?.saveData);
    const minFrameMs = lowPower ? 32 : 0;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const canInteract = interactive && finePointer.matches;

    // Estado del motor (refs locales, nunca React state) -------------------
    let W = 0;
    let H = 0;
    let dpr = 1;
    let small = false;
    let raf = 0;
    let last = 0;
    let t = 0;
    let running = false;
    let particles: Particle[] = [];
    const streaks: Streak[] = [];
    let streakTimer = 1.4;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, hover: 0, target: 0 };

    const targetCount = () => {
      const area = W * H;
      const n = small ? (area / 9000) * 0.8 : area / 12500;
      const scaled = n * density * (lowPower ? 0.6 : 1);
      return Math.round(small ? clamp(scaled, 14, 40) : clamp(scaled, 20, 110));
    };

    const spawn = (): Particle => {
      const z = 0.35 + Math.pow(Math.random(), 1.4) * 0.65;
      let x: number;
      let y: number;
      const r = Math.random();
      if (r < 0.36) {
        // concentración inferior izquierda (luz ambiental)
        x = W * (0.2 + gauss() * 0.18);
        y = H * (0.74 + gauss() * 0.16);
      } else if (r < 0.62) {
        // zona del producto
        x = W * (0.7 + gauss() * 0.16);
        y = H * (0.46 + gauss() * 0.22);
      } else {
        x = Math.random() * W;
        y = Math.random() * H;
      }
      x = clamp(x, -10, W + 10);
      y = clamp(y, -10, H + 10);

      const tr = Math.random();
      const tone: Tone = tr < 0.74 ? 0 : tr < 0.88 ? 1 : 2;
      const sizeBase = 0.95 + Math.pow(Math.random(), 2.6) * 2.3;
      return {
        x,
        y,
        z,
        vx: (Math.random() - 0.35) * 7,
        vy: -(2.5 + Math.random() * 7),
        size: sizeBase * (0.55 + 0.45 * z),
        tone,
        alpha:
          tone === 2
            ? 0.14 + Math.random() * 0.18
            : (0.45 + Math.random() * 0.5) * (0.65 + 0.35 * z),
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.4 + Math.random() * 0.9,
        pulse: 0,
        wobble: Math.random() * Math.PI * 2,
        ox: 0,
        oy: 0,
        ovx: 0,
        ovy: 0,
      };
    };

    const spawnStreak = () => {
      const ltr = Math.random() < 0.72;
      const angle = ((14 + Math.random() * 24) * Math.PI) / 180;
      const dirX = (ltr ? 1 : -1) * Math.cos(angle);
      const dirY = -Math.sin(angle);
      const life = 2.6 + Math.random() * 1.6;
      const travel = W * (0.42 + Math.random() * 0.25);
      streaks.push({
        x: ltr ? W * (-0.05 + Math.random() * 0.4) : W * (0.65 + Math.random() * 0.4),
        y: H * (0.3 + Math.random() * 0.65),
        dx: dirX,
        dy: dirY,
        len: (small ? 110 : 170) + Math.random() * (small ? 140 : 260),
        speed: travel / life,
        life,
        age: 0,
        width: 0.8 + Math.random() * 1.1,
        peak: 0.2 + Math.random() * 0.2,
      });
    };

    // Dimensionado ----------------------------------------------------------
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nw = Math.max(1, Math.round(rect.width));
      const nh = Math.max(1, Math.round(rect.height));
      if (nw === W && nh === H && particles.length) return;
      const ow = W;
      const oh = H;
      W = nw;
      H = nh;
      small = W < 768;
      dpr = Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (ow > 0 && oh > 0) {
        const sx = W / ow;
        const sy = H / oh;
        for (const p of particles) {
          p.x *= sx;
          p.y *= sy;
        }
      }
      const target = targetCount();
      while (particles.length < target) particles.push(spawn());
      if (particles.length > target) particles.length = target;
      if (reduceMq.matches) drawFrame(true);
    };

    // Simulación -------------------------------------------------------------
    const step = (dt: number) => {
      const spd = speed;
      const R = 170;
      const R2 = R * R;

      if (canInteract) {
        const k = 1 - Math.exp(-dt * 9);
        mouse.x += (mouse.tx - mouse.x) * k;
        mouse.y += (mouse.ty - mouse.y) * k;
        mouse.hover += (mouse.target - mouse.hover) * (1 - Math.exp(-dt * 3));
      }
      const interacting = canInteract && mouse.hover > 0.01;

      const damp = Math.exp(-2.4 * dt);
      const margin = 20;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let slow = 1;

        if (interacting) {
          const dx = p.x + p.ox - mouse.x;
          const dy = p.y + p.oy - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const prox = 1 - d / R;
            const push = prox * prox * 90 * mouse.hover * (0.4 + 0.6 * p.z) * dt;
            p.ovx += (dx / d) * push;
            p.ovy += (dy / d) * push;
            slow = 1 - 0.65 * prox * mouse.hover; // amortigua el movimiento cercano
          }
        }

        // resorte de recuperación + amortiguación
        p.ovx += -p.ox * 1.6 * dt;
        p.ovy += -p.oy * 1.6 * dt;
        p.ovx *= damp;
        p.ovy *= damp;
        p.ox += p.ovx * dt;
        p.oy += p.ovy * dt;

        const wx = Math.sin(t * 0.35 + p.wobble) * 6 * p.z;
        const wy = Math.cos(t * 0.28 + p.wobble) * 4 * p.z;
        p.x += (p.vx * p.z + wx) * spd * slow * dt;
        p.y += (p.vy * p.z + wy) * spd * slow * dt;

        if (p.x < -margin) p.x = W + margin;
        else if (p.x > W + margin) p.x = -margin;
        if (p.y < -margin) p.y = H + margin;
        else if (p.y > H + margin) p.y = -margin;

        // destellos ocasionales
        if (p.pulse > 0) p.pulse = Math.max(0, p.pulse - dt * 0.8);
        else if (Math.random() < dt * 0.03) p.pulse = 1;
      }

      // estelas
      streakTimer -= dt;
      const maxStreaks = small ? 1 : 2;
      if (streakTimer <= 0 && streaks.length < maxStreaks) {
        spawnStreak();
        streakTimer = 3.4 + Math.random() * 4.6;
      } else if (streakTimer <= 0) {
        streakTimer = 1;
      }
      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i];
        s.age += dt;
        s.x += s.dx * s.speed * dt;
        s.y += s.dy * s.speed * dt;
        if (s.age >= s.life) streaks.splice(i, 1);
      }
    };

    // Render -----------------------------------------------------------------
    const drawFrame = (isStatic = false) => {
      ctx.clearRect(0, 0, W, H);
      const A = clamp(opacity, 0, 1);
      if (A <= 0) return;
      const showMouse = !isStatic && canInteract && mouse.hover > 0.02;

      // halo del cursor
      if (showMouse) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
        g.addColorStop(0, `rgba(${lineBase},${(0.14 * mouse.hover * A).toFixed(3)})`);
        g.addColorStop(1, `rgba(${lineBase},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(mouse.x - 240, mouse.y - 240, 480, 480);
      }

      // estelas
      if (!isStatic) {
        ctx.lineCap = "round";
        for (const s of streaks) {
          const u = s.age / s.life;
          const env = Math.pow(Math.sin(Math.PI * u), 1.3) * s.peak * A;
          if (env < 0.004) continue;
          const tx = s.x - s.dx * s.len;
          const ty = s.y - s.dy * s.len;
          const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
          g.addColorStop(0, `rgba(${lineBase},0)`);
          g.addColorStop(0.7, `rgba(${lineBase},${(env * 0.55).toFixed(3)})`);
          g.addColorStop(1, `rgba(${WARM[0]},${WARM[1]},${WARM[2]},${env.toFixed(3)})`);
          ctx.strokeStyle = g;
          // borde suave: trazo ancho tenue + núcleo fino
          ctx.globalAlpha = 0.28;
          ctx.lineWidth = s.width * 5;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.lineWidth = s.width;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();
        }
      }

      // conexiones
      const maxD = small ? 100 : 135;
      const maxD2 = maxD * maxD;
      const n = particles.length;
      let lines = 0;
      const maxLines = small ? 60 : 150;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < n && lines < maxLines; i++) {
        const p = particles[i];
        const px = p.x + p.ox;
        const py = p.y + p.oy;
        for (let j = i + 1; j < n; j++) {
          const q = particles[j];
          const dx = px - (q.x + q.ox);
          const dy = py - (q.y + q.oy);
          const d2 = dx * dx + dy * dy;
          if (d2 > maxD2) continue;
          const f = 1 - Math.sqrt(d2) / maxD;
          let a = f * f * 0.22 * Math.min(p.z, q.z);
          if (showMouse) {
            const mx = px - dx * 0.5 - mouse.x;
            const my = py - dy * 0.5 - mouse.y;
            const md = Math.sqrt(mx * mx + my * my);
            if (md < 190) a += (1 - md / 190) * mouse.hover * 0.34 * f;
          }
          a *= A;
          if (a < 0.012) continue;
          ctx.strokeStyle = `rgba(${lineBase},${a.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(q.x + q.ox, q.y + q.oy);
          ctx.stroke();
          if (++lines >= maxLines) break;
        }
      }

      // partículas
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        const tw = isStatic ? 1 : 0.8 + 0.2 * Math.sin(t * p.twinkle + p.phase);
        const a = clamp((p.alpha * tw + p.pulse * 0.35) * A, 0, 1);
        const x = p.x + p.ox;
        const y = p.y + p.oy;
        if (p.size > 1.1 || p.pulse > 0.2) {
          const s = p.size * 7;
          ctx.globalAlpha = a * 0.6;
          ctx.drawImage(sprites[p.tone], x - s / 2, y - s / 2, s, s);
        }
        ctx.globalAlpha = a;
        ctx.fillStyle = colorStr[p.tone];
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    // Bucle ------------------------------------------------------------------
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (minFrameMs && now - last < minFrameMs) return;
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      t += dt;
      step(dt);
      drawFrame();
    };

    const start = () => {
      if (running || reduceMq.matches || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : start());
    const onReduceChange = () => {
      stop();
      if (reduceMq.matches) {
        streaks.length = 0;
        drawFrame(true);
      } else {
        start();
      }
    };
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (mouse.hover < 0.02) {
        mouse.x = x;
        mouse.y = y;
      }
      mouse.tx = x;
      mouse.ty = y;
      mouse.target = inside ? 1 : 0;
    };
    const onLeave = () => {
      mouse.target = 0;
    };

    // Arranque ---------------------------------------------------------------
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMq.matches) {
      drawFrame(true);
    } else {
      start();
    }
    // aparición progresiva del sistema (el fondo CSS ya está visible)
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    document.addEventListener("visibilitychange", onVisibility);
    reduceMq.addEventListener("change", onReduceChange);
    if (canInteract) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
    }

    return () => {
      stop();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      reduceMq.removeEventListener("change", onReduceChange);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      particles = [];
      streaks.length = 0;
    };
  }, [density, speed, opacity, interactive, accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`shop-particles ${className}`.trim()}
      aria-hidden="true"
      role="presentation"
    />
  );
}
