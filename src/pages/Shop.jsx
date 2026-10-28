import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShopChannelLink from "../components/ShopChannelLink";
import {
  SHOP_INSTAGRAM,
  SHOP_WHATSAPP,
  getShopChannelsByType,
} from "../data/shopChannels";

const LOGO_SRC = "/optimized/LOGO BELICONA-medium.webp";
/** Única lata con transparencia real (auditoría RGBA: p2/c1/m1 tienen fondo opaco). */
const PRODUCT_SRC = "/optimized/p1.webp";
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
      <div className="shop-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[520px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(0.85rem,env(safe-area-inset-top))] sm:max-w-[560px] sm:px-6 min-[1100px]:max-w-[1100px] min-[1100px]:px-12 min-[1100px]:py-12 xl:px-14">
        {/* Logo */}
        <div className="shop-reveal shop-reveal-1 flex justify-center min-[1100px]:justify-start">
          <img
            src={LOGO_SRC}
            alt="Belicona"
            width={168}
            height={64}
            className="h-auto w-[150px] object-contain sm:w-[160px] min-[1100px]:w-[168px]"
            decoding="async"
          />
        </div>

        {/*
          Móvil: título → producto → canales
          Desktop: producto izq (42%) | título+canales der (58%)
        */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:gap-6 min-[1100px]:mt-10 min-[1100px]:grid-cols-[0.42fr_0.58fr] min-[1100px]:grid-rows-[auto_1fr] min-[1100px]:gap-x-14 min-[1100px]:gap-y-6">
          {/* Título + subtítulo */}
          <header className="shop-reveal shop-reveal-2 order-1 text-center min-[1100px]:col-start-2 min-[1100px]:row-start-1 min-[1100px]:text-left">
            <h1 className="font-compressed font-bold tracking-[0.01em] text-white [font-size:clamp(1.75rem,4vw,2.5rem)] [line-height:1.08]">
              LA REVOLUCIÓN BELICONA
            </h1>
            <p className="mx-auto mt-2.5 max-w-[28ch] text-[14px] leading-relaxed text-white/80 sm:text-[15px] min-[1100px]:mx-0 min-[1100px]:mt-3 min-[1100px]:text-[16px]">
              Tu Belicona favorita, más cerca de ti.
            </p>
          </header>

          {/* Producto — una sola lata con transparencia real */}
          <div className="shop-reveal shop-reveal-3 shop-product-stage relative order-2 flex items-end justify-center min-[1100px]:col-start-1 min-[1100px]:row-span-2 min-[1100px]:row-start-1 min-[1100px]:self-center">
            <div className="shop-product-glow" aria-hidden="true" />
            <img
              src={PRODUCT_SRC}
              alt="Belicona Pepino Limón"
              width={320}
              height={420}
              className="shop-product-can relative z-[1] h-[200px] w-auto max-w-[150px] object-contain sm:h-[220px] sm:max-w-[165px] min-[1100px]:h-[340px] min-[1100px]:max-w-[250px]"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Canales */}
          <div className="order-3 flex flex-col min-[1100px]:col-start-2 min-[1100px]:row-start-2">
            <section
              className="shop-reveal shop-reveal-4"
              aria-labelledby="shop-online-heading"
            >
              <h2
                id="shop-online-heading"
                className="mb-2 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50"
              >
                Compra en línea
              </h2>
              <div className="flex flex-col gap-2.5">
                {online.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    style={{ animationDelay: `${0.18 + index * 0.04}s` }}
                  />
                ))}
              </div>
            </section>

            <section
              className="shop-reveal shop-reveal-5 mt-5"
              aria-labelledby="shop-nearby-heading"
            >
              <h2
                id="shop-nearby-heading"
                className="mb-2 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50"
              >
                Encuéntranos cerca de ti
              </h2>
              <div className="flex flex-col gap-2.5">
                {nearbyQuiet.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    style={{ animationDelay: `${0.3 + index * 0.04}s` }}
                  />
                ))}
                {nearbyLive.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    featured
                    style={{ animationDelay: `${0.34 + index * 0.04}s` }}
                  />
                ))}
                {nearbyLive.length === 0 ? (
                  <a
                    href={SHOP_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shop-channel-link shop-channel-featured group flex min-h-[60px] w-full items-center gap-3 rounded-xl border px-4 py-3 transition-[border-color,background-color,transform] duration-[180ms] active:scale-[0.995]"
                  >
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block font-heading text-[15px] font-semibold text-white">
                        Consultar por WhatsApp
                      </span>
                      <span className="mt-0.5 block text-[12px] text-white/70">
                        Escríbenos por WhatsApp y te orientamos
                      </span>
                    </span>
                    <svg
                      className="shop-channel-arrow h-4 w-4 text-white/65"
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
          </div>
        </div>

        <footer className="shop-reveal shop-reveal-6 mt-8 border-t border-white/[0.12] pt-5 text-center min-[1100px]:mt-10 min-[1100px]:text-left">
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
              className="text-white/65 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Términos
            </Link>
            <Link
              to="/politica-de-privacidad"
              className="text-white/65 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Privacidad
            </Link>
          </nav>
          <p className="mt-4 text-[12px] leading-relaxed text-white/65 min-[1100px]:text-[13px]">
            Evita el exceso. Consumo responsable de alcohol. +18.
          </p>
          <p className="mt-1 text-[12px] text-white/55 min-[1100px]:text-[13px]">
            5.0% Alc. Vol. · Producto exclusivo para mayores de edad.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Shop;
