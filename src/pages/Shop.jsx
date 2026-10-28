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
      {/* Atmosphere — tonal shift only */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 45% at 50% -8%, rgba(237,1,127,0.09), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(255,183,27,0.04), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[540px] flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6">
        {/* HERO */}
        <header className="shop-reveal shop-reveal-1 flex flex-col items-center text-center">
          <img
            src={LOGO_SRC}
            alt="Belicona"
            width={160}
            height={64}
            className="h-12 w-auto object-contain sm:h-14"
            decoding="async"
          />

          <h1 className="shop-reveal shop-reveal-2 mt-5 font-compressed text-[28px] font-bold leading-[1.05] tracking-[0.02em] text-white sm:text-[34px]">
            LA REVOLUCIÓN BELICONA
          </h1>

          <p className="shop-reveal shop-reveal-3 mt-3 max-w-[22rem] text-[14px] leading-relaxed text-white/65 sm:text-[15px]">
            Tu Belicona favorita, más cerca de ti.
          </p>
          <p className="shop-reveal shop-reveal-3 mt-1 text-[13px] font-medium tracking-wide text-white/45 sm:text-[14px]">
            Elige dónde comprar.
          </p>

          <div className="shop-reveal shop-reveal-4 mt-5 mb-1 flex h-[112px] w-full items-end justify-center sm:h-[128px]">
            <img
              src={PRODUCT_SRC}
              alt="Belicona Piña-Coco Edición Limitada"
              width={120}
              height={160}
              className="h-full w-auto max-w-[120px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)] sm:max-w-[132px]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </header>

        {/* COMPRA EN LÍNEA */}
        <section
          className="shop-reveal shop-reveal-5 mt-7"
          aria-labelledby="shop-online-heading"
        >
          <h2
            id="shop-online-heading"
            className="mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40"
          >
            Compra en línea
          </h2>
          <div className="flex flex-col gap-[10px]">
            {online.map((channel, index) => (
              <ShopChannelLink
                key={channel.id}
                channel={channel}
                style={{ animationDelay: `${0.28 + index * 0.055}s` }}
              />
            ))}
          </div>
        </section>

        {/* CERCA DE TI */}
        <section
          className="shop-reveal shop-reveal-6 mt-8"
          aria-labelledby="shop-nearby-heading"
        >
          <h2
            id="shop-nearby-heading"
            className="mb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40"
          >
            Encuéntranos cerca de ti
          </h2>
          <div className="flex flex-col gap-[10px]">
            {nearby.map((channel, index) => (
              <ShopChannelLink
                key={channel.id}
                channel={channel}
                style={{ animationDelay: `${0.42 + index * 0.055}s` }}
              />
            ))}
          </div>
        </section>

        {/* FOOTER MINIMAL */}
        <footer className="shop-reveal shop-reveal-7 mt-10 border-t border-white/[0.08] pt-6 text-center">
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
      </div>
    </div>
  );
};

export default Shop;
