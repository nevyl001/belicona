import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopChannelLink from "../components/ShopChannelLink";
import BeliconaParticleBackground from "../components/BeliconaParticleBackground";
import BeliconaProductShowcase from "../components/BeliconaProductShowcase";
import { SHOP_SHOWCASE } from "../data/shopShowcase";
import {
  DEFAULT_OPEN_CHANNEL_ID,
  SHOP_INSTAGRAM,
  SHOP_WHATSAPP,
  getShopChannelsByType,
} from "../data/shopChannels";
import "../styles/shop.css";

const LOGO_SRC = "/optimized/LOGO BELICONA-medium.webp";
const CANONICAL = "https://www.belicona.mx/shop";
const SHOP_DESCRIPTION =
  "Encuentra dónde comprar Belicona en línea y descubre nuestros puntos de venta.";

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
  const [openChannelId, setOpenChannelId] = useState(DEFAULT_OPEN_CHANNEL_ID);

  const handleToggleChannel = (channelId) => {
    setOpenChannelId((prev) => (prev === channelId ? null : channelId));
  };

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Belicona | Dónde comprar";
    upsertMeta("name", "description", SHOP_DESCRIPTION);
    upsertMeta("property", "og:title", "Belicona | Dónde comprar");
    upsertMeta("property", "og:description", SHOP_DESCRIPTION);
    upsertMeta("property", "og:url", CANONICAL);
    upsertMeta("property", "og:image", "https://belicona.mx/becabe.png");
    upsertMeta("name", "twitter:title", "Belicona | Dónde comprar");
    upsertMeta("name", "twitter:description", SHOP_DESCRIPTION);
    upsertLink("canonical", CANONICAL);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="shop-page">
      {/* Capas de fondo (decorativas): gradientes → canvas → viñeta → grano */}
      <div className="shop-backdrop" aria-hidden="true">
        <div className="shop-bg-gradient" />
        <BeliconaParticleBackground />
        <div className="shop-bg-vignette" />
        <div className="shop-bg-grain" />
      </div>

      <div className="shop-content">
        <header className="shop-header shop-enter shop-enter-logo">
          <img
            src={LOGO_SRC}
            alt="Belicona"
            width={180}
            height={68}
            className="shop-logo"
            decoding="async"
          />
        </header>

        <div className="shop-layout">
          <div className="shop-title-block">
            <h1 className="shop-title">
              <span className="block">LA</span>
              <span className="block">REVOLUCIÓN</span>
              <span className="shop-title-accent block">BELICONA</span>
            </h1>
            <p className="shop-subtitle shop-enter shop-enter-subtitle">
              Tu Belicona favorita, más cerca de ti.
            </p>
          </div>

          <div className="shop-showcase-slot">
            <BeliconaProductShowcase {...SHOP_SHOWCASE} />
          </div>

          <div className="shop-links">
            <section aria-labelledby="shop-online-heading">
              <h2
                id="shop-online-heading"
                className="shop-section-label shop-enter shop-enter-link"
                style={{ animationDelay: "0.62s" }}
              >
                Compra en línea
              </h2>
              <div className="shop-link-list">
                {online.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    isOpen={openChannelId === channel.id}
                    onToggle={() => handleToggleChannel(channel.id)}
                    style={{ animationDelay: `${0.7 + index * 0.07}s` }}
                  />
                ))}
              </div>
            </section>

            <section aria-labelledby="shop-nearby-heading">
              <h2
                id="shop-nearby-heading"
                className="shop-section-label shop-enter shop-enter-link"
                style={{ animationDelay: "0.82s" }}
              >
                Encuéntranos cerca de ti
              </h2>
              <div className="shop-link-list">
                {nearby.map((channel, index) => (
                  <ShopChannelLink
                    key={channel.id}
                    channel={channel}
                    isOpen={openChannelId === channel.id}
                    onToggle={() => handleToggleChannel(channel.id)}
                    featured={Boolean(
                      channel.enabled &&
                        channel.url &&
                        channel.url === SHOP_WHATSAPP
                    )}
                    style={{ animationDelay: `${0.9 + index * 0.07}s` }}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer legal: sin animaciones, siempre visible */}
        <footer className="shop-footer">
          <nav className="shop-footer-nav" aria-label="Enlaces Shop">
            <Link to="/">Sitio Belicona</Link>
            <span className="shop-footer-sep" aria-hidden="true">
              ·
            </span>
            <a href={SHOP_INSTAGRAM} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span className="shop-footer-sep" aria-hidden="true">
              ·
            </span>
            <Link to="/terminos-y-condiciones">Términos</Link>
            <span className="shop-footer-sep" aria-hidden="true">
              ·
            </span>
            <Link to="/politica-de-privacidad">Privacidad</Link>
          </nav>
          <div className="shop-legal">
            <p className="shop-legal-main">
              Evita el exceso. Consumo responsable de alcohol. +18.
            </p>
            <p className="shop-legal-sub">
              5.0% Alc. Vol. · Producto exclusivo para mayores de edad.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Shop;
