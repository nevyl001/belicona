import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-channel-arrow h-[18px] w-[18px] shrink-0 text-white/55"
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

/**
 * Enlace comercial premium — fila completa clicable.
 * Si no hay URL habilitada, se renderiza como bloque informativo (no dead link).
 */
const ShopChannelLink = ({ channel, style }) => {
  const isLive = Boolean(channel.enabled && channel.url);
  const secondary = isLive
    ? channel.description
    : channel.pendingNote || "Enlace pendiente de configuración";

  const content = (
    <>
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-heading text-[16px] font-semibold tracking-wide text-white sm:text-[17px]">
          {channel.name}
        </span>
        {secondary ? (
          <span
            className={`mt-0.5 block text-[12px] leading-snug sm:text-[13px] ${
              isLive ? "text-white/50" : "text-white/35"
            }`}
          >
            {secondary}
          </span>
        ) : null}
      </span>
      {isLive ? <ExternalArrow /> : null}
    </>
  );

  const className = [
    "shop-channel-link",
    "group flex w-full items-center gap-3 rounded-[16px] border px-[18px] py-[15px]",
    "min-h-[62px] transition-[border-color,background-color,transform,box-shadow] duration-200 ease-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
    isLive
      ? "cursor-pointer border-white/[0.12] bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.055] active:scale-[0.995] active:bg-white/[0.04]"
      : "cursor-default border-white/[0.06] bg-white/[0.015] opacity-80",
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
