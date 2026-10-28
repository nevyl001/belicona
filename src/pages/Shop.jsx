import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShopChannelLink from "../components/ShopChannelLink";
import {
  SHOP_INSTAGRAM,
  SHOP_WHATSAPP,
  getShopChannelsByType,
} from "../data/shopChannels";

const LOGO_SRC = "/optimized/LOGO BELICONA-medium.webp";
/** Imagen oficial de tres sabores con texto "SABORES REFRESCANTES". */
const PRODUCT_SRC = "/optimized/sabores.webp";
const PRODUCT_SRC_MD = "/optimized/sabores-medium.webp";
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
  const nearby = getShopChannelsByType("nearby");

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
    <div className="shop-page relative min-h-[100svh] overflow-x-hidden text-white">
      <div className="shop-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="shop-vignette pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shop-shell relative z-10 mx-auto flex w-full max-w-[440px] flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:max-w-[520px] sm:px-6 lg:max-w-[1200px] lg:min-h-[100svh] lg:justify-between lg:px-10 lg:pb-8 lg:pt-7 xl:px-12">
        {/* HEADER */}
        <header className="shop-reveal shop-reveal-1 flex justify-center lg:justify-start">
          <img
            src={LOGO_SRC}
            alt="Belicona"
            width={180}
            height={68}
            className="shop-logo h-auto w-[152px] object-contain sm:w-[164px] lg:w-[168px]"
            decoding="async"
          />
        </header>

        {/*
          Móvil: logo → título → producto → canales → footer
          Desktop: izq título+producto | der canales
        */}
        <div className="shop-layout mt-5 grid grid-cols-1 gap-6 sm:mt-6 sm:gap-7 lg:mt-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-12 lg:gap-y-0 xl:gap-x-14">
          {/* Columna editorial: título + producto */}
          <div className="shop-editorial order-1 flex flex-col lg:order-1">
            <div className="shop-reveal shop-reveal-2 text-center lg:text-left">
              <h1 className="shop-title font-compressed font-bold text-white">
                LA REVOLUCIÓN BELICONA
              </h1>
              <p className="shop-subtitle mx-auto mt-2.5 max-w-[30ch] text-[14px] leading-relaxed text-white/78 sm:text-[15px] lg:mx-0 lg:mt-2.5 lg:text-[16px] lg:leading-relaxed">
                Tu Belicona favorita, más cerca de ti.
              </p>
            </div>

            <div className="shop-reveal shop-reveal-3 shop-product-stage relative mx-auto mt-5 w-full max-w-[300px] sm:mt-6 sm:max-w-[340px] lg:mx-0 lg:mt-4 lg:max-w-[440px]">
              <div className="shop-product-glow" aria-hidden="true" />
              <div className="shop-product-frame">
                <img
                  src={PRODUCT_SRC_MD}
                  srcSet={`${PRODUCT_SRC_MD} 600w, ${PRODUCT_SRC} 3000w`}
                  sizes="(max-width: 1023px) min(78vw, 340px), min(40vw, 440px)"
                  alt="Sabores Refrescantes Belicona: Pepino Limón, Maracuyá y Cantarito"
                  width={600}
                  height={600}
                  className="shop-product-image relative z-[1] mx-auto block h-auto w-full select-none object-contain"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Columna canales */}
          <div className="shop-channels order-2 flex flex-col lg:order-2 lg:justify-center">
            <section
              className="shop-reveal shop-reveal-4"
              aria-labelledby="shop-online-heading"
            >
              <h2
                id="shop-online-heading"
                className="shop-section-label mb-2.5 text-left"
              >
                Compra en línea
              </h2>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {online.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                  />
                ))}
              </div>
            </section>

            <section
              className="shop-reveal shop-reveal-5 mt-6"
              aria-labelledby="shop-nearby-heading"
            >
              <h2
                id="shop-nearby-heading"
                className="shop-section-label mb-2.5 text-left"
              >
                Encuéntranos cerca de ti
              </h2>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {nearby.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    featured={Boolean(
                      channel.enabled &&
                        channel.url &&
                        channel.url === SHOP_WHATSAPP
                    )}
                    style={{ animationDelay: `${0.34 + index * 0.05}s` }}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className="shop-reveal shop-reveal-6 shop-footer mt-8 border-t border-white/[0.1] pt-5 text-center lg:mt-6 lg:pt-5 lg:text-left">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] lg:justify-start lg:text-[14px]"
            aria-label="Enlaces Shop"
          >
            <Link
              to="/"
              className="text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)]"
            >
              Sitio Belicona
            </Link>
            <span className="hidden text-white/25 sm:inline" aria-hidden="true">
              ·
            </span>
            <a
              href={SHOP_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)]"
            >
              Instagram
            </a>
            <span className="hidden text-white/25 sm:inline" aria-hidden="true">
              ·
            </span>
            <Link
              to="/terminos-y-condiciones"
              className="text-white/65 transition-colors duration-200 hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)]"
            >
              Términos
            </Link>
            <span className="hidden text-white/25 sm:inline" aria-hidden="true">
              ·
            </span>
            <Link
              to="/politica-de-privacidad"
              className="text-white/65 transition-colors duration-200 hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)]"
            >
              Privacidad
            </Link>
          </nav>
          <p className="mt-4 text-[12px] leading-relaxed text-white/68 lg:text-[13px]">
            Evita el exceso. Consumo responsable de alcohol. +18.
          </p>
          <p className="mt-1 text-[12px] text-white/55 lg:text-[13px]">
            5.0% Alc. Vol. · Producto exclusivo para mayores de edad.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Shop;
