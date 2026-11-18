/**
 * Canales comerciales Belicona (/shop)
 *
 * Regla: solo URLs verificadas / aprobadas.
 * Si `url` es null y no tiene `options`, el canal se muestra como pendiente (no clicable).
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
 * @typedef {Object} ShopChannelOption
 * @property {string} id
 * @property {string} name
 * @property {string} [presentation]
 * @property {string} [badge]
 * @property {string} url
 */

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
 *   options?: ShopChannelOption[]
 * }>}
 */
export const SHOP_CHANNELS = [
  {
    id: "walmart",
    name: "Walmart",
    type: "online",
    url: null,
    enabled: true,
    order: 1,
    description: "Compra en línea",
    logoSrc: null,
    options: [
      {
        id: "cantarito",
        name: "Cantarito",
        presentation: "355 ml",
        url: "https://www.walmart.com.mx/ip/Bebida-Alcoholica-Preparada-Belicona-sabor-Cantarito-355-ml/00750303576750",
      },
      {
        id: "pepino-limon",
        name: "Pepino-Limón",
        presentation: "355 ml",
        url: "https://www.walmart.com.mx/ip/Bebida-Alcoholica-Preparada-Belicona-sabor-Pepino-Limon-355-ml/00750303576748",
      },
      {
        id: "maracuya",
        name: "Maracuyá",
        presentation: "355 ml",
        url: "https://www.walmart.com.mx/ip/Bebida-Alcoholica-Preparada-Belicona-sabor-Maracuya-355-ml/00750303576747",
      },
    ],
  },
  {
    id: "mercado-libre",
    name: "Mercado Libre",
    type: "online",
    url: null,
    enabled: true,
    order: 2,
    description: "Compra en línea",
    logoSrc: null,
    options: [
      {
        id: "maracuya",
        name: "Maracuyá",
        presentation: "Pack de 24 latas de 355 ml",
        url: "https://www.mercadolibre.com.mx/24-pack-bebida-belicona-maracuya-lata-355-ml/p/MLM67922563",
      },
      {
        id: "cantarito",
        name: "Cantarito",
        presentation: "Pack de 24 latas de 355 ml",
        url: "https://www.mercadolibre.com.mx/24-pack-bebida-belicona-cantarito-lata-355-ml/p/MLM70372833",
      },
      {
        id: "pepino-limon",
        name: "Pepino-Limón",
        presentation: "Pack de 24 latas de 355 ml",
        url: "https://www.mercadolibre.com.mx/24-pack-bebida-belicona-pepino-limon-lata-355-ml/p/MLM70377970",
      },
      {
        id: "pina-coco",
        name: "Piña-Coco",
        badge: "Edición Limitada",
        presentation: "Six Pack de 355 ml",
        url: "https://www.mercadolibre.com.mx/six-bebida-belicona-pina-coco-edicion-limitada-lata-355-ml/p/MLM75419662",
      },
    ],
  },
  {
    id: "amazon",
    name: "Amazon",
    type: "online",
    url: null,
    enabled: true,
    order: 3,
    description: "Compra en línea",
    logoSrc: null,
    options: [
      {
        id: "maracuya",
        name: "Maracuyá",
        url: "https://www.amazon.com.mx/dp/B0GR17BSJF",
      },
      {
        id: "pepino-limon",
        name: "Pepino-Limón",
        url: "https://www.amazon.com.mx/dp/B0GR1JX2NL",
      },
      {
        id: "cantarito",
        name: "Cantarito",
        url: "https://www.amazon.com.mx/dp/B0GR1B8B4V",
      },
    ],
  },
  {
    id: "gomart",
    name: "GoMart",
    type: "nearby",
    url: "https://www.gomart.com.mx/cobertura",
    enabled: true,
    order: 4,
    logoSrc: null,
  },
  {
    id: "tienditas",
    name: "Tienditas de la esquina",
    type: "nearby",
    url: SHOP_WHATSAPP,
    enabled: true,
    order: 5,
    description: "Escríbenos por WhatsApp y te orientamos",
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

export function trackShopChannelClick(channel, option = null) {
  if (typeof window === "undefined") return;
  try {
    const eventData = {
      channel_id: channel.id,
      channel_name: channel.name,
      channel_type: channel.type,
      marketplace: channel.id,
      ...(option
        ? {
            product: option.id,
            flavor_id: option.id,
            flavor_name: option.name,
            ...(option.presentation
              ? { flavor_presentation: option.presentation }
              : {}),
            destination: option.url,
            destination_url: option.url,
          }
        : channel.url
          ? { destination: channel.url, destination_url: channel.url }
          : {}),
    };
    if (typeof window.gtag === "function") {
      window.gtag("event", "shop_channel_click", eventData);
    }
    window.dispatchEvent(
      new CustomEvent("belicona_shop_channel_click", {
        detail: option
          ? { ...channel, selectedOption: option, ...eventData }
          : { ...channel, ...eventData },
      })
    );
  } catch {
    /* analytics opcional */
  }
}
