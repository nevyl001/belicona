import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShopChannelLink from "../components/ShopChannelLink";
import {
  SHOP_INSTAGRAM,
  getShopChannelsByType,
} from "../data/shopChannels";

const LOGO_SRC = "/optimized/LOGO BELICONA-small.webp";
const PRODUCT_SRC = "/optimized/pina-coco-edicion-limitada.png";
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

const ShopChannels = ({ online, nearby }) => (
  <>
    <section
      className="shop-reveal shop-reveal-5"
      aria-labelledby="shop-online-heading"
    >
      <h2
        id="shop-online-heading"
        className="mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 lg:text-[12px]"
      >
        Compra en línea
      </h2>
      <div className="flex flex-col gap-2.5 lg:gap-3">
        {online.map((channel, index) => (
          <ShopChannelLink
            key={channel.id}
            channel={channel}
            style={{ animationDelay: `${0.28 + index * 0.055}s` }}
          />
        ))}
      </div>
    </section>

    <section
      className="shop-reveal shop-reveal-6 mt-7 lg:mt-8"
      aria-labelledby="shop-nearby-heading"
    >
      <h2
        id="shop-nearby-heading"
        className="mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 lg:text-[12px]"
      >
        Encuéntranos cerca de ti
      </h2>
      <div className="flex flex-col gap-2.5 lg:gap-3">
        {nearby.map((channel, index) => (
          <ShopChannelLink
            key={channel.id}
            channel={channel}
            style={{ animationDelay: `${0.42 + index * 0.055}s` }}
          />
        ))}
      </div>
    </section>
  </>
);

const ShopFooter = () => (
  <footer className="shop-reveal shop-reveal-7 mt-9 border-t border-white/[0.08] pt-6 text-center lg:mt-12 lg:pt-8">
    <nav
      className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]"
      aria-label="Enlaces Shop"
    >
      <Link
        to="/"
        className="text-white/55 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        Sitio Belicona
      </Link>
      <a
        href={SHOP_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/55 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        Instagram
      </a>
      <Link
        to="/terminos-y-condiciones"
        className="text-white/40 transition-colors hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        Términos
      </Link>
      <Link
        to="/politica-de-privacidad"
        className="text-white/40 transition-colors hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        Privacidad
      </Link>
    </nav>

    <p className="mt-5 text-[12px] leading-relaxed text-white/40">
      Evita el exceso. Consumo responsable de alcohol. +18.
    </p>
    <p className="mt-1.5 text-[12px] text-white/30">
      5.0% Alc. Vol. · Producto exclusivo para mayores de edad.
    </p>
  </footer>
);

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
    <div className="shop-page relative min-h-[100svh] overflow-x-hidden bg-[#050505] text-white">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 42% at 18% 12%, rgba(237,1,127,0.08), transparent 55%), radial-gradient(ellipse 55% 40% at 88% 88%, rgba(255,183,27,0.045), transparent 52%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[540px] px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.15rem,env(safe-area-inset-top))] sm:px-6 md:max-w-[640px] lg:max-w-[1120px] lg:px-10 lg:pb-14 lg:pt-16 xl:max-w-[1160px]">
        {/* ——— MÓVIL / TABLET: columna única ——— */}
        <div className="lg:hidden">
          <header className="shop-reveal shop-reveal-1 flex flex-col items-center text-center">
            <img
              src={LOGO_SRC}
              alt="Belicona"
              width={160}
              height={64}
              className="h-11 w-auto object-contain xs:h-12 sm:h-14"
              decoding="async"
            />

            <h1 className="shop-reveal shop-reveal-2 mt-4 max-w-[20ch] font-compressed text-[26px] font-bold leading-[1.06] tracking-[0.02em] text-white sm:mt-5 sm:text-[32px]">
              LA REVOLUCIÓN BELICONA
            </h1>

            <p className="shop-reveal shop-reveal-3 mt-2.5 max-w-[22rem] text-[14px] leading-relaxed text-white/65 sm:mt-3 sm:text-[15px]">
              Tu Belicona favorita, más cerca de ti.
            </p>
            <p className="shop-reveal shop-reveal-3 mt-1 text-[13px] font-medium tracking-wide text-white/45 sm:text-[14px]">
              Elige dónde comprar.
            </p>

            <div className="shop-reveal shop-reveal-4 mt-4 mb-1 flex h-[96px] w-full items-end justify-center sm:mt-5 sm:h-[118px]">
              <img
                src={PRODUCT_SRC}
                alt="Belicona Piña-Coco Edición Limitada"
                width={110}
                height={148}
                className="h-full w-auto max-w-[108px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)] sm:max-w-[126px]"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </header>

          <div className="mt-6 sm:mt-7">
            <ShopChannels online={online} nearby={nearby} />
          </div>

          <ShopFooter />
        </div>

        {/* ——— ESCRITORIO: composición editorial 2 columnas ——— */}
        <div className="hidden lg:grid lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-x-14 xl:gap-x-16">
          <aside className="shop-reveal shop-reveal-1 flex flex-col justify-center pr-2">
            <img
              src={LOGO_SRC}
              alt="Belicona"
              width={200}
              height={80}
              className="h-16 w-auto object-contain xl:h-[4.5rem]"
              decoding="async"
            />

            <h1 className="shop-reveal shop-reveal-2 mt-8 max-w-[11ch] font-compressed text-[44px] font-bold leading-[0.98] tracking-[0.01em] text-white xl:text-[52px]">
              LA REVOLUCIÓN BELICONA
            </h1>

            <p className="shop-reveal shop-reveal-3 mt-5 max-w-[28ch] text-[16px] leading-relaxed text-white/65 xl:text-[17px]">
              Tu Belicona favorita, más cerca de ti.
            </p>
            <p className="shop-reveal shop-reveal-3 mt-2 text-[14px] font-medium tracking-[0.04em] text-white/45">
              Elige dónde comprar.
            </p>

            <div className="shop-reveal shop-reveal-4 mt-10 flex items-end">
              <img
                src={PRODUCT_SRC}
                alt="Belicona Piña-Coco Edición Limitada"
                width={220}
                height={300}
                className="h-auto w-[200px] max-w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] xl:w-[236px]"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </aside>

          <div className="shop-reveal shop-reveal-5 flex flex-col justify-center">
            <ShopChannels online={online} nearby={nearby} />
            <ShopFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
