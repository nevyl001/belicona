import React, { useState } from "react";
import {
  getPublishedProductsByPackAndMarketplace,
  trackShopChannelClick,
} from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-link-arrow h-[16px] w-[16px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = () => (
  <svg
    className="h-[18px] w-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.2 3.6A.6.6 0 0 1 5.8 19v-3H6.5A2.5 2.5 0 0 1 4 13.5v-8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ShopChannelLink = ({
  channel,
  style,
  featured = false,
  isOpen,
  onToggle,
}) => {
  const hasPackCatalog = Boolean(
    channel.enabled &&
      channel.marketplaceId &&
      Array.isArray(channel.packCatalog) &&
      channel.packCatalog.length > 0
  );
  const hasOptions = Boolean(
    channel.enabled && Array.isArray(channel.options) && channel.options.length > 0
  );
  const isLive = Boolean(channel.enabled && channel.url);
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedPackId, setSelectedPackId] = useState(
    hasPackCatalog ? "6-latas" : null
  );
  const [selectedFlavorFilter, setSelectedFlavorFilter] = useState("all");

  const expanded = typeof isOpen === "boolean" ? isOpen : internalOpen;
  const handleToggle = onToggle || (() => setInternalOpen((prev) => !prev));

  const handleSelectPack = (packId) => {
    setSelectedPackId(packId);
    setSelectedFlavorFilter("all");
  };

  if (hasPackCatalog || hasOptions) {
    const panelId = `shop-channel-panel-${channel.id}`;
    const activePackGroup = hasPackCatalog
      ? channel.packCatalog.find((p) => p.id === selectedPackId) ||
        channel.packCatalog[0]
      : null;
    const marketplaceEntries =
      hasPackCatalog && activePackGroup
        ? getPublishedProductsByPackAndMarketplace(
            activePackGroup,
            channel.marketplaceId
          )
        : [];
    const visibleEntries =
      selectedFlavorFilter === "all"
        ? marketplaceEntries
        : marketplaceEntries.filter(
            (entry) => entry.product.id === selectedFlavorFilter
          );

    return (
      <div className="shop-channel-expandable">
        <button
          type="button"
          className={`shop-link shop-link--live shop-link--trigger shop-enter shop-enter-link ${
            expanded ? "shop-link--expanded" : ""
          }`}
          style={style}
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={handleToggle}
        >
          <span className="min-w-0 flex-1 text-left">
            <span className="shop-link-name">{channel.name}</span>
            {channel.description ? (
              <span className="shop-link-desc">{channel.description}</span>
            ) : null}
          </span>
          <ExternalArrow />
        </button>

        <div
          id={panelId}
          className="shop-subpanel"
          data-open={expanded ? "true" : "false"}
          aria-hidden={!expanded}
        >
          <div className="shop-subpanel-inner">
            {hasPackCatalog && activePackGroup ? (
              <div className="shop-subpanel-list shop-pack-selector">
                {/* Paso 1: Elegir presentación (6, 12 o 24 latas) */}
                <div
                  className="shop-pack-tabs"
                  role="tablist"
                  aria-label={`Presentaciones disponibles en ${channel.name}`}
                >
                  {channel.packCatalog.map((pack) => {
                    const isSelected = pack.id === activePackGroup.id;
                    return (
                      <button
                        key={pack.id}
                        type="button"
                        role="tab"
                        id={`shop-pack-tab-${channel.id}-${pack.id}`}
                        aria-selected={isSelected}
                        aria-controls={`shop-pack-panel-${channel.id}-${pack.id}`}
                        tabIndex={expanded ? 0 : -1}
                        className={`shop-pack-tab ${
                          isSelected ? "shop-pack-tab--active" : ""
                        }`}
                        onClick={() => handleSelectPack(pack.id)}
                      >
                        {pack.label}
                      </button>
                    );
                  })}
                </div>

                {/* Paso 2: Seleccionar sabor disponible en la presentación activa */}
                {marketplaceEntries.length > 1 ? (
                  <div
                    className="shop-flavor-pills"
                    role="group"
                    aria-label={`Sabores de ${activePackGroup.label} en ${channel.name}`}
                  >
                    <button
                      type="button"
                      tabIndex={expanded ? 0 : -1}
                      aria-pressed={selectedFlavorFilter === "all"}
                      className={`shop-flavor-pill ${
                        selectedFlavorFilter === "all"
                          ? "shop-flavor-pill--active"
                          : ""
                      }`}
                      onClick={() => setSelectedFlavorFilter("all")}
                    >
                      Todos ({marketplaceEntries.length})
                    </button>
                    {marketplaceEntries.map(({ product }) => {
                      const isActive = selectedFlavorFilter === product.id;
                      const pillLabel = product.badge
                        ? `${product.name} · ${product.badge}`
                        : product.name;
                      return (
                        <button
                          key={product.id}
                          type="button"
                          tabIndex={expanded ? 0 : -1}
                          aria-pressed={isActive}
                          className={`shop-flavor-pill ${
                            isActive ? "shop-flavor-pill--active" : ""
                          }`}
                          onClick={() =>
                            setSelectedFlavorFilter((prev) =>
                              prev === product.id ? "all" : product.id
                            )
                          }
                        >
                          {pillLabel}
                        </button>
                      );
                    })}
                  </div>
                ) : null}

                {/* Paso 3: Tarjetas exclusivas del marketplace seleccionado */}
                <div
                  id={`shop-pack-panel-${channel.id}-${activePackGroup.id}`}
                  role="tabpanel"
                  aria-labelledby={`shop-pack-tab-${channel.id}-${activePackGroup.id}`}
                  className="shop-pack-products"
                >
                  {visibleEntries.map(({ product, offer }) => (
                    <a
                      key={`${channel.id}-${product.id}`}
                      href={offer.url}
                      className="shop-pack-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={expanded ? 0 : -1}
                      data-marketplace={offer.marketplace}
                      data-external-id={offer.externalId}
                      data-pack-id={product.packId}
                      data-flavor-id={product.flavorId}
                      onClick={() =>
                        trackShopChannelClick(channel, {
                          id: product.flavorId,
                          name: product.name,
                          presentation: product.presentation,
                          packId: product.packId,
                          packLabel: product.packLabel,
                          marketplace: offer.marketplace,
                          marketplaceLabel: offer.label,
                          externalId: offer.externalId,
                          asin:
                            offer.marketplace === "amazon"
                              ? offer.externalId
                              : undefined,
                          url: offer.url,
                        })
                      }
                      aria-label={`${offer.ctaLabel}: Belicona ${product.name} (${product.presentation})`}
                    >
                      <span className="shop-pack-thumb" aria-hidden="true">
                        <img
                          src={product.image}
                          alt=""
                          width={44}
                          height={44}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <span className="min-w-0 flex-1 text-left">
                        <span className="shop-suboption-header">
                          <span className="shop-suboption-name">
                            {product.name}
                          </span>
                          {product.badge ? (
                            <span className="shop-suboption-badge">
                              {product.badge}
                            </span>
                          ) : null}
                        </span>
                        <span className="shop-suboption-meta">
                          {product.presentation}
                        </span>
                      </span>
                      <span className="shop-pack-cta">
                        <span>{offer.ctaLabel}</span>
                        <ExternalArrow />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="shop-subpanel-list"
                role="group"
                aria-label={`Sabores disponibles en ${channel.name}`}
              >
                {channel.options.map((option) => (
                  <a
                    key={option.id}
                    href={option.url}
                    className="shop-suboption"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={expanded ? 0 : -1}
                    onClick={() => trackShopChannelClick(channel, option)}
                    aria-label={
                      option.presentation
                        ? `${option.name} — ${option.presentation} en ${channel.name}`
                        : `${option.name} en ${channel.name}`
                    }
                  >
                    <span className="shop-suboption-dot" aria-hidden="true" />
                    <span className="min-w-0 flex-1 text-left">
                      <span className="shop-suboption-header">
                        <span className="shop-suboption-name">
                          {option.name}
                        </span>
                        {option.badge ? (
                          <span className="shop-suboption-badge">
                            {option.badge}
                          </span>
                        ) : null}
                      </span>
                      {option.presentation ? (
                        <span className="shop-suboption-meta">
                          {option.presentation}
                        </span>
                      ) : null}
                    </span>
                    <ExternalArrow />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Canal aún sin URL aprobada: conserva la anatomía visual premium sin navegar a rutas ficticias.
  if (!isLive) {
    return (
      <div
        className="shop-link shop-link--quiet shop-enter shop-enter-link"
        style={style}
        tabIndex={0}
        role="group"
        aria-label={channel.name}
      >
        <span className="min-w-0 flex-1 text-left">
          <span className="shop-link-name">{channel.name}</span>
        </span>
        <ExternalArrow />
      </div>
    );
  }

  return (
    <a
      href={channel.url}
      className={`shop-link shop-enter shop-enter-link ${
        featured ? "shop-link--featured" : "shop-link--live"
      }`}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackShopChannelClick(channel)}
      aria-label={`Abrir ${channel.name}`}
    >
      {featured ? (
        <span className="shop-link-icon" aria-hidden="true">
          <ChatIcon />
        </span>
      ) : null}
      <span className="min-w-0 flex-1 text-left">
        <span className="shop-link-name">{channel.name}</span>
        {channel.description ? (
          <span className="shop-link-desc">{channel.description}</span>
        ) : null}
      </span>
      <ExternalArrow />
    </a>
  );
};

export default ShopChannelLink;
