import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-channel-arrow h-[15px] w-[15px] shrink-0 text-white/55"
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

const ShopChannelLink = ({ channel, style, featured = false }) => {
  const isLive = Boolean(channel.enabled && channel.url);

  if (!isLive) {
    return (
      <div
        className="shop-channel shop-channel-quiet flex min-h-[62px] w-full items-center rounded-[13px] px-5 py-3.5"
        style={style}
        aria-label={channel.name}
      >
        <span className="font-heading text-[15px] font-medium tracking-[0.02em] text-white/58 sm:text-[16px]">
          {channel.name}
        </span>
      </div>
    );
  }

  return (
    <a
      href={channel.url}
      className={[
        "shop-channel group flex w-full items-center gap-3 rounded-[13px] px-5 py-3.5",
        "min-h-[64px] transition-[border-color,background-color,transform,box-shadow] duration-[200ms] ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-red)]",
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
        <span className="block font-heading text-[15px] font-semibold tracking-[0.02em] text-white sm:text-[16px]">
          {channel.name}
        </span>
        {channel.description ? (
          <span className="mt-0.5 block text-[12px] leading-snug text-white/62 sm:text-[13px]">
            {channel.description}
          </span>
        ) : null}
      </span>
      <ExternalArrow />
    </a>
  );
};

export default ShopChannelLink;
