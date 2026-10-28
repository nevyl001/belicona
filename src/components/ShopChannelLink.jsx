import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-channel-arrow h-[17px] w-[17px] shrink-0 text-white/55 lg:h-[18px] lg:w-[18px]"
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
);

const PendingMark = () => (
  <span
    className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white/35"
    aria-hidden="true"
  >
    Pronto
  </span>
);

/**
 * Enlace comercial premium — fila completa clicable.
 * Sin URL habilitada: bloque informativo elegante (sin navegación falsa).
 */
const ShopChannelLink = ({ channel, style }) => {
  const isLive = Boolean(channel.enabled && channel.url);
  const secondary = isLive
    ? channel.description
    : channel.pendingNote || "Enlace pendiente de configuración";

  const content = (
    <>
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-heading text-[15.5px] font-semibold tracking-wide text-white sm:text-[16px] lg:text-[17px]">
          {channel.name}
        </span>
        {secondary ? (
          <span
            className={`mt-0.5 block text-[12px] leading-snug lg:text-[13px] ${
              isLive ? "text-white/50" : "text-white/38"
            }`}
          >
            {secondary}
          </span>
        ) : null}
      </span>
      {isLive ? <ExternalArrow /> : <PendingMark />}
    </>
  );

  const className = [
    "shop-channel-link",
    "group flex w-full items-center gap-3 rounded-[15px] border px-[18px] py-[14px]",
    "min-h-[60px] sm:min-h-[64px] lg:min-h-[68px] lg:rounded-[16px] lg:px-5",
    "transition-[border-color,background-color,transform,box-shadow] duration-[180ms] ease-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
    isLive
      ? "cursor-pointer border-white/[0.12] bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06] active:scale-[0.995] active:bg-white/[0.04]"
      : "cursor-default border-dashed border-white/[0.10] bg-white/[0.02]",
  ].join(" ");

  if (!isLive) {
    return (
      <div
        className={className}
        style={style}
        role="group"
        aria-label={`${channel.name}: pendiente de configuración`}
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={channel.url}
      className={className}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackShopChannelClick(channel)}
      aria-label={`Abrir ${channel.name}`}
    >
      {content}
    </a>
  );
};

export default ShopChannelLink;
