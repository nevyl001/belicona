import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShopChannelLink from "../components/ShopChannelLink";
import {
  SHOP_INSTAGRAM,
  SHOP_WHATSAPP,
  getShopChannelsByType,
} from "../data/shopChannels";

const LOGO_SRC = "/optimized/LOGO BELICONA-medium.webp";
const PRODUCT_SRC = "/optimized/sabores.webp";
const PRODUCT_FALLBACK = "/optimized/pina-coco-edicion-limitada.png";
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
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 22% 40%, rgba(237,1,127,0.07), transparent 60%), radial-gradient(ellipse 45% 40% at 78% 55%, rgba(255,183,27,0.04), transparent 55%)",
        }}
      />

      {/* Una sola composición: apilada en móvil, editorial 2 columnas desde ~1100px */}
      <div className="shop-shell relative z-10 mx-auto grid w-full max-w-[520px] grid-cols-1 gap-8 px-5 pb-[max(2.25rem,env(safe-area-inset-bottom))] pt-[max(1.1rem,env(safe-area-inset-top))] sm:max-w-[560px] sm:gap-9 sm:px-6 md:max-w-[640px] min-[1100px]:max-w-[1180px] min-[1100px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-[1100px]:items-center min-[1100px]:gap-x-14 min-[1100px]:gap-y-0 min-[1100px]:px-14 min-[1100px]:py-16 xl:gap-x-16 xl:px-16">
        {/* ——— Identidad + producto ——— */}
        <header className="shop-reveal shop-reveal-1 flex flex-col items-center text-center min-[1100px]:items-start min-[1100px]:text-left">
          <img
            src={LOGO_SRC}
            alt="Belicona"
            width={180}
            height={68}
            className="h-auto w-[148px] object-contain sm:w-[160px] min-[1100px]:w-[176px]"
            decoding="async"
          />

          <h1 className="shop-reveal shop-reveal-2 mt-5 max-w-[14ch] font-compressed text-[28px] font-bold leading-[1.08] tracking-[0.01em] text-white sm:mt-6 sm:text-[32px] min-[1100px]:mt-7 min-[1100px]:max-w-[12ch] min-[1100px]:text-[46px] min-[1100px]:leading-[1.05] xl:text-[50px]">
            LA REVOLUCIÓN BELICONA
          </h1>

          <p className="shop-reveal shop-reveal-3 mt-3 max-w-[26ch] text-[14px] leading-relaxed text-white/68 sm:text-[15px] min-[1100px]:mt-4 min-[1100px]:max-w-[28ch] min-[1100px]:text-[17px]">
            Tu Belicona favorita, más cerca de ti.
          </p>

          <div className="shop-reveal shop-reveal-4 shop-product-stage relative mt-6 flex w-full items-center justify-center min-[1100px]:mt-9 min-[1100px]:justify-start">
            <div
              className="pointer-events-none absolute inset-[12%] rounded-full bg-primary-500/12 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-[1] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] min-[1100px]:rounded-[1.75rem]">
              <img
                src={PRODUCT_SRC}
                alt="Productos Belicona"
                width={420}
                height={420}
                className="h-[150px] w-[150px] object-cover object-center drop-shadow-[0_20px_44px_rgba(0,0,0,0.5)] sm:h-[172px] sm:w-[172px] min-[1100px]:h-[280px] min-[1100px]:w-[280px] xl:h-[300px] xl:w-[300px]"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                  if (e.currentTarget.src.includes("sabores")) {
                    e.currentTarget.src = PRODUCT_FALLBACK;
                  }
                }}
              />
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
              className="mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 min-[1100px]:mb-3.5 min-[1100px]:text-[12px]"
            >
              Compra en línea
            </h2>
            <div className="flex flex-col gap-2.5">
              {online.map((channel, index) => (
                <ShopChannelLink
                  key={channel.id}
                  channel={channel}
                  style={{ animationDelay: `${0.26 + index * 0.05}s` }}
                />
              ))}
            </div>
          </section>

          <section
            className="shop-reveal shop-reveal-6 mt-7 min-[1100px]:mt-8"
            aria-labelledby="shop-nearby-heading"
          >
            <h2
              id="shop-nearby-heading"
              className="mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45 min-[1100px]:mb-3.5 min-[1100px]:text-[12px]"
            >
              Encuéntranos cerca de ti
            </h2>
            <div className="flex flex-col gap-2.5">
              {nearbyQuiet.map((channel, index) => (
                <ShopChannelLink
                  key={channel.id}
                  channel={channel}
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
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
                  style={{
                    animationDelay: `${0.45 + index * 0.05}s`,
                  }}
                />
              ))}

              {nearbyLive.length === 0 ? (
                <a
                  href={SHOP_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shop-channel-link group flex min-h-[68px] w-full items-center gap-3 rounded-[16px] border border-primary-500/35 bg-gradient-to-r from-primary-500/15 to-orange-500/10 px-6 py-4 transition-[border-color,background-color,transform] duration-200 hover:border-primary-500/55 active:scale-[0.995]"
                >
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block font-heading text-[16px] font-semibold text-white">
                      Consultar por WhatsApp
                    </span>
                    <span className="mt-0.5 block text-[12px] text-white/55">
                      Te orientamos sobre puntos cercanos
                    </span>
                  </span>
                  <svg
                    className="shop-channel-arrow h-[18px] w-[18px] text-white/60"
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

          <footer className="shop-reveal shop-reveal-7 mt-8 border-t border-white/[0.10] pt-5 text-center min-[1100px]:mt-10 min-[1100px]:pt-6 min-[1100px]:text-left">
            <nav
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] min-[1100px]:justify-start min-[1100px]:text-[14px]"
              aria-label="Enlaces Shop"
            >
              <Link
                to="/"
                className="text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Sitio Belicona
              </Link>
              <a
                href={SHOP_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Instagram
              </a>
              <Link
                to="/terminos-y-condiciones"
                className="text-white/55 transition-colors hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Términos
              </Link>
              <Link
                to="/politica-de-privacidad"
                className="text-white/55 transition-colors hover:text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Privacidad
              </Link>
            </nav>

            <p className="mt-4 text-[12px] leading-relaxed text-white/55 min-[1100px]:text-[13px]">
              Evita el exceso. Consumo responsable de alcohol. +18.
            </p>
            <p className="mt-1 text-[12px] text-white/45 min-[1100px]:text-[13px]">
              5.0% Alc. Vol. · Producto exclusivo para mayores de edad.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Shop;
