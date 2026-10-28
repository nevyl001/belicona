import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShopChannelLink from "../components/ShopChannelLink";
import {
  SHOP_INSTAGRAM,
  SHOP_WHATSAPP,
  getShopChannelsByType,
} from "../data/shopChannels";

const LOGO_SRC = "/optimized/LOGO BELICONA-medium.webp";
/** Latas oficiales aisladas (fondo transparente) — no cartel promocional */
const CANS = [
  { src: "/optimized/c1.webp", alt: "Belicona Cantarito", className: "shop-can shop-can-left" },
  { src: "/optimized/p1.webp", alt: "Belicona Pepino Limón", className: "shop-can shop-can-center" },
  { src: "/optimized/p2.webp", alt: "Belicona Maracuyá", className: "shop-can shop-can-right" },
];
const CANONICAL = "https://www.belicona.mx/shop";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const Shop = () => {
  const online = getShopChannelsByType("online");
  const nearbyQuiet = getShopChannelsByType("nearby").filter(
    (c) => !(c.enabled && c.url)
  );
  const nearbyLive = getShopChannelsByType("nearby").filter(
    (c) => c.enabled && c.url
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Belicona | Dónde comprar";
    upsertMeta(
      "name",
      "description",
      "Encuentra dónde comprar Belicona en línea y descubre nuestros puntos de venta."
    );
    upsertMeta("property", "og:title", "Belicona | Dónde comprar");
    upsertMeta(
      "property",
      "og:description",
      "Encuentra dónde comprar Belicona en línea y descubre nuestros puntos de venta."
    );
    upsertMeta("property", "og:url", CANONICAL);
    upsertMeta("property", "og:image", "https://belicona.mx/becabe.png");
    upsertMeta("name", "twitter:title", "Belicona | Dónde comprar");
    upsertMeta(
      "name",
      "twitter:description",
      "Encuentra dónde comprar Belicona en línea y descubre nuestros puntos de venta."
    );
    upsertLink("canonical", CANONICAL);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="shop-page relative min-h-[100svh] overflow-x-hidden bg-[#050505] text-white">
      {/* Profundidad: glow rojo + acento tenue + viñeta */}
      <div className="shop-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shop-shell relative z-10 mx-auto grid w-full max-w-[520px] grid-cols-1 gap-7 px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] sm:max-w-[560px] sm:gap-8 sm:px-6 md:max-w-[640px] min-[1100px]:max-w-[1180px] min-[1100px]:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] min-[1100px]:items-center min-[1100px]:gap-x-14 min-[1100px]:gap-y-0 min-[1100px]:px-14 min-[1100px]:py-14 xl:gap-x-16 xl:px-16">
        {/* ——— Identidad + producto ——— */}
        <header className="shop-reveal shop-reveal-1 flex flex-col items-center text-center min-[1100px]:items-start min-[1100px]:text-left">
          <img
            src={LOGO_SRC}
            alt="Belicona"
            width={180}
            height={68}
            className="h-auto w-[140px] object-contain sm:w-[156px] min-[1100px]:w-[172px]"
            decoding="async"
          />

          <h1 className="shop-reveal shop-reveal-2 mt-4 max-w-[14ch] font-compressed font-bold tracking-[0.012em] text-white [font-size:clamp(1.65rem,5.2vw,3rem)] [line-height:1.06] sm:mt-5 min-[1100px]:mt-6 min-[1100px]:max-w-[11ch]">
            LA REVOLUCIÓN BELICONA
          </h1>

          <p className="shop-reveal shop-reveal-3 mt-2.5 max-w-[28ch] text-[14px] leading-relaxed text-white/80 sm:mt-3 sm:text-[15px] min-[1100px]:mt-3.5 min-[1100px]:text-[17px]">
            Tu Belicona favorita, más cerca de ti.
          </p>

          {/* Cluster de latas oficiales — sin marco/sticker */}
          <div
            className="shop-reveal shop-reveal-4 shop-product-stage relative mt-5 flex w-full items-end justify-center min-[1100px]:mt-8 min-[1100px]:justify-start"
            aria-label="Productos Belicona"
          >
            <div className="shop-product-glow" aria-hidden="true" />
            <div className="shop-cans relative z-[1] flex h-[168px] w-[220px] items-end justify-center sm:h-[188px] sm:w-[250px] min-[1100px]:h-[300px] min-[1100px]:w-[380px] xl:h-[320px] xl:w-[400px]">
              {CANS.map((can) => (
                <img
                  key={can.src}
                  src={can.src}
                  alt={can.alt}
                  width={200}
                  height={280}
                  className={can.className}
                  decoding="async"
                  fetchPriority="high"
                />
              ))}
            </div>
          </div>
        </header>

        {/* ——— Canales ——— */}
        <div className="flex flex-col justify-center">
          <section
            className="shop-reveal shop-reveal-5"
            aria-labelledby="shop-online-heading"
          >
            <h2
              id="shop-online-heading"
              className="mb-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 min-[1100px]:mb-3 min-[1100px]:text-[12px]"
            >
              Compra en línea
            </h2>
            <div className="flex flex-col gap-2.5">
              {online.map((channel, index) => (
                <ShopChannelLink
                  key={channel.id}
                  channel={channel}
                  style={{ animationDelay: `${0.24 + index * 0.05}s` }}
                />
              ))}
            </div>
          </section>

          <section
            className="shop-reveal shop-reveal-6 mt-6 min-[1100px]:mt-7"
            aria-labelledby="shop-nearby-heading"
          >
            <h2
              id="shop-nearby-heading"
              className="mb-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 min-[1100px]:mb-3 min-[1100px]:text-[12px]"
            >
              Encuéntranos cerca de ti
            </h2>
            <div className="flex flex-col gap-2.5">
              {nearbyQuiet.map((channel, index) => (
                <ShopChannelLink
                  key={channel.id}
                  channel={channel}
                  style={{ animationDelay: `${0.38 + index * 0.05}s` }}
                />
              ))}

              {nearbyLive.map((channel, index) => (
                <ShopChannelLink
                  key={channel.id}
                  channel={{
                    ...channel,
                    description:
                      channel.description || "Consulta puntos de venta",
                  }}
                  featured
                  style={{ animationDelay: `${0.44 + index * 0.05}s` }}
                />
              ))}

              {nearbyLive.length === 0 ? (
                <a
                  href={SHOP_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shop-channel-link shop-channel-featured group flex min-h-[68px] w-full items-center gap-3 rounded-[14px] border px-5 py-4 transition-[border-color,background-color,transform,box-shadow] duration-200 active:scale-[0.995] min-[1100px]:min-h-[72px] min-[1100px]:rounded-[16px] min-[1100px]:px-6"
                >
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block font-heading text-[16px] font-semibold text-white">
                      Consultar por WhatsApp
                    </span>
                    <span className="mt-0.5 block text-[12px] text-white/75">
                      Te orientamos sobre puntos cercanos
                    </span>
                  </span>
                  <svg
                    className="shop-channel-arrow h-[18px] w-[18px] text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : null}
            </div>
          </section>

          <footer className="shop-reveal shop-reveal-7 mt-7 border-t border-white/[0.12] pt-5 text-center min-[1100px]:mt-9 min-[1100px]:pt-6 min-[1100px]:text-left">
            <nav
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] min-[1100px]:justify-start min-[1100px]:text-[14px]"
              aria-label="Enlaces Shop"
            >
              <Link
                to="/"
                className="text-white/78 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Sitio Belicona
              </Link>
              <a
                href={SHOP_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/78 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Instagram
              </a>
              <Link
                to="/terminos-y-condiciones"
                className="text-white/62 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Términos
              </Link>
              <Link
                to="/politica-de-privacidad"
                className="text-white/62 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Privacidad
              </Link>
            </nav>

            <p className="mt-4 text-[12px] leading-relaxed text-white/62 min-[1100px]:text-[13px]">
              Evita el exceso. Consumo responsable de alcohol. +18.
            </p>
            <p className="mt-1 text-[12px] text-white/52 min-[1100px]:text-[13px]">
              5.0% Alc. Vol. · Producto exclusivo para mayores de edad.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Shop;
