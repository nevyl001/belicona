/**
 * Canales comerciales Belicona (/shop)
 *
 * En COMPRA EN LÍNEA se presentan tres tarjetas independientes en orden:
 * 1. Amazon (Packs de 6, 12 y 24 latas · Elige tu sabor)
 * 2. Mercado Libre (Packs de 6, 12 y 24 latas · Elige tu sabor)
 * 3. Walmart (Lata individual de 355 ml)
 */

import {
  FLAVOR_IMAGES,
  UNIFIED_PACK_CATALOG,
  getPublishedProductsByPackAndMarketplace,
  getVerifiedOffers,
} from "./shopCatalog";

export {
  FLAVOR_IMAGES,
  UNIFIED_PACK_CATALOG,
  getPublishedProductsByPackAndMarketplace,
  getVerifiedOffers,
};

export const SHOP_INSTAGRAM = "https://www.instagram.com/beliconamx/";
export const SHOP_WHATSAPP =
  "https://wa.me/525611926751?text=" +
  encodeURIComponent(
    "Hola Belicona, quiero saber dónde encontrar el producto cerca de mí."
  );

export const SHOP_CHANNELS = [
  {
    id: "amazon",
    name: "Amazon",
    description: "Packs de 6, 12 y 24 latas · Elige tu sabor",
    type: "online",
    url: null,
    enabled: true,
    order: 1,
    logoSrc: null,
    marketplaceId: "amazon",
    packCatalog: UNIFIED_PACK_CATALOG,
  },
  {
    id: "mercado-libre",
    name: "Mercado Libre",
    description: "Packs de 6, 12 y 24 latas · Elige tu sabor",
    type: "online",
    url: null,
    enabled: true,
    order: 2,
    logoSrc: null,
    marketplaceId: "mercado-libre",
    packCatalog: UNIFIED_PACK_CATALOG,
  },
  {
    id: "walmart",
    name: "Walmart",
    description: "Lata individual de 355 ml",
    type: "online",
    url: null,
    enabled: true,
    order: 3,
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
    const marketplaceId = option?.marketplace || channel.id;
    const eventData = {
      channel_id: marketplaceId,
      channel_name: option?.marketplaceLabel || channel.name,
      channel_type: channel.type,
      marketplace: marketplaceId,
      ...(option
        ? {
            product: option.id,
            flavor_id: option.id,
            flavor_name: option.name,
            ...(option.presentation
              ? { flavor_presentation: option.presentation }
              : {}),
            ...(option.packId ? { pack_id: option.packId } : {}),
            ...(option.packLabel ? { pack_label: option.packLabel } : {}),
            ...(option.externalId ? { external_id: option.externalId } : {}),
            ...(option.asin ? { asin: option.asin } : {}),
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
