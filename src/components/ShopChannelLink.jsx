import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-channel-arrow h-4 w-4 shrink-0 text-white/60"
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

const ShopChannelLink = ({ channel, style, featured = false }) => {
  const isLive = Boolean(channel.enabled && channel.url);

  if (!isLive) {
    return (
      <div
        className="shop-channel-link shop-channel-quiet flex min-h-[58px] w-full items-center rounded-xl border border-white/[0.08] bg-[#0c0c0c] px-4 py-3"
        style={style}
        aria-label={channel.name}
      >
        <span className="font-heading text-[15px] font-medium tracking-wide text-white/70">
          {channel.name}
        </span>
      </div>
    );
  }

  return (
    <a
      href={channel.url}
      className={[
        "shop-channel-link group flex w-full items-center gap-3 rounded-xl border px-4 py-3",
        "min-h-[60px] transition-[border-color,background-color,transform] duration-[180ms] ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500",
        featured ? "shop-channel-featured" : "shop-channel-live",
        "active:scale-[0.995]",
      ].join(" ")}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackShopChannelClick(channel)}
      aria-label={`Abrir ${channel.name}`}
    >
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-heading text-[15px] font-semibold tracking-wide text-white">
          {channel.name}
        </span>
        {channel.description ? (
          <span className="mt-0.5 block text-[12px] leading-snug text-white/65">
            {channel.description}
          </span>
        ) : null}
      </span>
      <ExternalArrow />
    </a>
  );
};

export default ShopChannelLink;
