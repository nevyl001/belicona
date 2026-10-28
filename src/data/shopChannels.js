/**
 * Canales comerciales Belicona (/shop)
 *
 * Regla: solo URLs verificadas / aprobadas.
 * Si `url` es null, el canal se muestra como pendiente (no clicable).
 * Reservado `officialStore` para una futura tienda propia (enabled: false).
 */

export const SHOP_INSTAGRAM = "https://www.instagram.com/beliconamx/";
export const SHOP_WHATSAPP =
  "https://wa.me/525611926751?text=" +
  encodeURIComponent(
    "Hola Belicona, quiero saber dónde encontrar el producto cerca de mí."
  );

/** @typedef {'online' | 'nearby' | 'official'} ShopChannelType */

/**
 * @type {Array<{
 *   id: string
 *   name: string
 *   type: ShopChannelType
 *   url: string | null
 *   enabled: boolean
 *   order: number
 *   description?: string
 *   logoSrc?: string | null
 *   pendingNote?: string
 * }>}
 */
export const SHOP_CHANNELS = [
  {
    id: "walmart",
    name: "Walmart",
    type: "online",
    url: null,
    enabled: false,
    order: 1,
    description: "Compra en línea",
    logoSrc: null,
    pendingNote: "Enlace oficial pendiente de configuración",
  },
  {
    id: "mercado-libre",
    name: "Mercado Libre",
    type: "online",
    url: null,
    enabled: false,
    order: 2,
    description: "Compra en línea",
    logoSrc: null,
    pendingNote: "Enlace oficial pendiente de configuración",
  },
  {
    id: "amazon",
    name: "Amazon",
    type: "online",
    url: null,
    enabled: false,
    order: 3,
    description: "Compra en línea",
    logoSrc: null,
    pendingNote: "Enlace oficial pendiente de configuración",
  },
  {
    id: "gomart",
    name: "GoMart",
    type: "nearby",
    url: null,
    enabled: false,
    order: 4,
    description: "Puntos de venta",
    logoSrc: null,
    pendingNote: "Localizador oficial pendiente de configuración",
  },
  {
    id: "tienditas",
    name: "Tienditas de la esquina",
    type: "nearby",
    url: SHOP_WHATSAPP,
    enabled: true,
    order: 5,
    description: "Pregunta por puntos cercanos",
    logoSrc: null,
  },
  // Futuro: tienda oficial Belicona (no mostrar mientras enabled sea false)
  {
    id: "official-store",
    name: "Tienda oficial",
    type: "official",
    url: null,
    enabled: false,
    order: 99,
    description: "Reservado — no publicar aún",
    logoSrc: null,
  },
];

export function getShopChannelsByType(type) {
  return SHOP_CHANNELS.filter(
    (c) => c.type === type && c.id !== "official-store"
  ).sort((a, b) => a.order - b.order);
}

export function trackShopChannelClick(channel) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "shop_channel_click", {
        channel_id: channel.id,
        channel_name: channel.name,
        channel_type: channel.type,
      });
    }
    window.dispatchEvent(
      new CustomEvent("belicona_shop_channel_click", { detail: channel })
    );
  } catch {
    /* analytics opcional */
  }
}
