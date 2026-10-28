import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-channel-arrow h-[18px] w-[18px] shrink-0 text-white/60"
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
 * Canal comercial Belicona.
 * - Con URL: tarjeta premium clicable.
 * - Sin URL: mención discreta (sin mensajes técnicos tipo "pendiente" / "PRONTO").
 */
const ShopChannelLink = ({ channel, style, featured = false }) => {
  const isLive = Boolean(channel.enabled && channel.url);

  if (!isLive) {
    return (
      <div
        className="shop-channel-link shop-channel-quiet flex min-h-[56px] w-full items-center rounded-[14px] border border-white/[0.07] bg-transparent px-5 py-3.5 lg:min-h-[60px]"
        style={style}
        aria-label={channel.name}
      >
        <span className="font-heading text-[15px] font-medium tracking-wide text-white/55 lg:text-[16px]">
          {channel.name}
        </span>
      </div>
    );
  }

  return (
    <a
      href={channel.url}
      className={[
        "shop-channel-link group flex w-full items-center gap-3 rounded-[14px] border px-5 py-4",
        "min-h-[64px] lg:min-h-[72px] lg:rounded-[16px] lg:px-6",
        "transition-[border-color,background-color,transform,box-shadow] duration-[200ms] ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
        featured
          ? "border-primary-500/35 bg-gradient-to-r from-primary-500/15 to-orange-500/10 hover:border-primary-500/55 hover:from-primary-500/20 hover:to-orange-500/15"
          : "border-white/[0.14] bg-white/[0.045] hover:border-white/28 hover:bg-white/[0.07]",
        "active:scale-[0.995]",
      ].join(" ")}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackShopChannelClick(channel)}
      aria-label={`Abrir ${channel.name}`}
    >
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-heading text-[16px] font-semibold tracking-wide text-white lg:text-[17px]">
          {channel.name}
        </span>
        {channel.description ? (
          <span className="mt-0.5 block text-[12px] leading-snug text-white/55 lg:text-[13px]">
            {channel.description}
          </span>
        ) : null}
      </span>
      <ExternalArrow />
    </a>
  );
};

export default ShopChannelLink;
