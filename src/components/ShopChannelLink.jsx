import React from "react";
import { trackShopChannelClick } from "../data/shopChannels";

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

const ShopChannelLink = ({ channel, style, featured = false }) => {
  const isLive = Boolean(channel.enabled && channel.url);

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
