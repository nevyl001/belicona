import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

const ExternalArrow = () => (
  <svg
    className="shop-channel-arrow h-[18px] w-[18px] shrink-0 text-white/65"
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
 * - Con URL: tarjeta premium clicable (featured = CTA WhatsApp).
 * - Sin URL: superficie elegante informativa, sin flecha ni textos técnicos.
 */
const ShopChannelLink = ({ channel, style, featured = false }) => {
  const isLive = Boolean(channel.enabled && channel.url);

  if (!isLive) {
    return (
      <div
        className="shop-channel-link shop-channel-quiet flex min-h-[62px] w-full items-center rounded-[14px] border border-white/[0.10] bg-[#101010] px-5 py-3.5 min-[1100px]:min-h-[66px] min-[1100px]:rounded-[15px]"
        style={style}
        aria-label={channel.name}
      >
        <span className="font-heading text-[15.5px] font-semibold tracking-wide text-white/78 min-[1100px]:text-[16px]">
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
        "min-h-[66px] min-[1100px]:min-h-[72px] min-[1100px]:rounded-[16px] min-[1100px]:px-6",
        "transition-[border-color,background-color,transform,box-shadow] duration-[200ms] ease-out",
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
        <span className="block font-heading text-[16px] font-semibold tracking-wide text-white min-[1100px]:text-[17px]">
          {channel.name}
        </span>
        {channel.description ? (
          <span className="mt-0.5 block text-[12px] leading-snug text-white/72 min-[1100px]:text-[13px]">
            {channel.description}
          </span>
        ) : null}
      </span>
      <ExternalArrow />
    </a>
  );
};

export default ShopChannelLink;
