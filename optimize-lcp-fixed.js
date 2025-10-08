import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para optimizar LCP
function optimizeLCP() {
  console.log("🎯 Optimizando LCP (Largest Contentful Paint)...\n");

  // 1. Crear CSS crítico optimizado para LCP
  const criticalLCPCSS = `/* CSS Crítico Optimizado para LCP */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #fff;
  background: #000;
  overflow-x: hidden;
}

/* Optimizaciones LCP específicas */
.font-bubbly {
  font-family: 'Bubbly', cursive, system-ui, sans-serif;
  font-display: swap; /* Optimización de fuentes */
}

.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.text-6xl { font-size: 3.75rem; line-height: 1; }
.text-7xl { font-size: 4.5rem; line-height: 1; }
.text-8xl { font-size: 6rem; line-height: 1; }

/* Hardware acceleration para LCP */
[data-lcp-element="true"] {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Optimizaciones de renderizado */
.glow-on-hover {
  transition: text-shadow 0.3s ease;
}

/* Responsive optimizations */
@media (max-width: 640px) {
  .text-4xl { font-size: 2rem; line-height: 2.25rem; }
  .text-5xl { font-size: 2.5rem; line-height: 1; }
}

@media (min-width: 768px) {
  .text-6xl { font-size: 3.5rem; line-height: 1; }
  .text-7xl { font-size: 4rem; line-height: 1; }
}

@media (min-width: 1024px) {
  .text-8xl { font-size: 5.5rem; line-height: 1; }
}`;

  fs.writeFileSync(
    path.join(__dirname, "src/styles/lcp-critical.css"),
    criticalLCPCSS
  );
  console.log("✅ CSS crítico LCP creado");

  // 2. Crear componente de preload para fuentes
  const fontPreload = `import React from "react";

// Componente para preload de fuentes críticas
export const FontPreloader = () => {
  return (
    <>
      {/* Preload de fuentes críticas */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Bubbly:wght@400;700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bubbly:wght@400;700&display=swap"
        />
      </noscript>
      
      {/* Preload hint para LCP element */}
      <div className="preload-hint" data-lcp-hint="true">
        LA REVOLUCIÓN BELICONA
      </div>
    </>
  );
};

export default FontPreloader;`;

  fs.writeFileSync(
    path.join(__dirname, "src/components/FontPreloader.jsx"),
    fontPreload
  );
  console.log("✅ Componente de preload de fuentes creado");

  // 3. Optimizar index.html para LCP
  const indexPath = path.join(__dirname, "index.html");
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, "utf8");

    // Agregar preload de fuentes críticas
    const fontPreloadHTML = `
    <!-- Preload de fuentes críticas para LCP -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bubbly:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bubbly:wght@400;700&display=swap"></noscript>
    
    <!-- Preload de recursos críticos -->
    <link rel="preload" href="/optimized/LOGO BELICONA-small.webp" as="image" type="image/webp">
    <link rel="preload" href="/optimized/becabe-small.webp" as="image" type="image/webp">`;

    // Insertar después del <head>
    indexContent = indexContent.replace("<head>", `<head>${fontPreloadHTML}`);

    // Agregar CSS crítico LCP inline
    const lcpCriticalCSS = `<style id="lcp-critical">
${criticalLCPCSS}
</style>`;

    indexContent = indexContent.replace(
      "</head>",
      `${lcpCriticalCSS}
</head>`
    );

    fs.writeFileSync(indexPath, indexContent);
    console.log("✅ index.html optimizado para LCP");
  }

  // 4. Crear script de medición LCP
  const lcpMeasurement = `// Script para medir LCP
(function() {
  'use strict';
  
  // Función para medir LCP
  function measureLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        console.log('🎯 LCP Element:', lastEntry.element);
        console.log('⏱️ LCP Time:', lastEntry.startTime + 'ms');
        console.log('📏 LCP Size:', lastEntry.size);
        
        // Enviar métricas a analytics si es necesario
        if (window.gtag) {
          gtag('event', 'lcp_measurement', {
            'lcp_time': Math.round(lastEntry.startTime),
            'lcp_size': lastEntry.size
          });
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }
  
  // Medir LCP cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', measureLCP);
  } else {
    measureLCP();
  }
})();`;

  fs.writeFileSync(
    path.join(__dirname, "public/lcp-measurement.js"),
    lcpMeasurement
  );
  console.log("✅ Script de medición LCP creado");

  console.log("\n📊 OPTIMIZACIONES LCP IMPLEMENTADAS:");
  console.log("1. ✅ CSS crítico LCP inline");
  console.log("2. ✅ Preload de fuentes críticas");
  console.log("3. ✅ Preload de recursos críticos");
  console.log("4. ✅ Script de medición LCP");

  console.log("\n🎯 BENEFICIOS ESPERADOS:");
  console.log("• LCP reducido de 3.26s a <2.5s");
  console.log("• Render delay reducido de 2.66s a <1.5s");
  console.log("• TTFB optimizado con preloads");
  console.log("• Mejor experiencia de usuario");

  console.log("\n🚀 PRÓXIMOS PASOS:");
  console.log("1. Ejecutar 'npm run build' para aplicar optimizaciones");
  console.log("2. Probar el sitio y medir LCP");
  console.log("3. Verificar que el título se carga más rápido");

  console.log("\n✨ Optimización LCP completada!");
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización de LCP...\n");

  try {
    optimizeLCP();
  } catch (error) {
    console.error("❌ Error durante la optimización:", error);
  }
}

main().catch(console.error);
