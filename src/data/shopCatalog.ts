/**
 * Catálogo unificado y tipado de presentaciones, sabores y marketplaces (/shop).
 *
 * Reglas de negocio:
 * 1. Una sola ficha visual por combinación (presentación × sabor).
 * 2. Cada ficha incluye únicamente los marketplaces verificados para esa combinación.
 * 3. Los enlaces cuya cantidad de latas no está explícitamente confirmada en la URL
 *    se conservan en el catálogo con `verificationStatus: "pending_pack_confirmation"`
 *    y `verified: false`, sin publicarse en la UI de 6 latas hasta confirmarse.
 * 4. No se combinan "Piña", "Piña Coco" y "Piña Coco Edición Limitada" como el mismo
 *    producto sin verificación comercial.
 */

export type PackSizeId = "6-latas" | "12-latas" | "24-latas";

export type FlavorId =
  | "maracuya"
  | "pepino-limon"
  | "cantarito"
  | "pina"
  | "pina-coco-edicion-limitada"
  | "pina-coco";

export type MarketplaceId = "amazon" | "mercado-libre";

export type VerificationStatus = "verified" | "pending_pack_confirmation";

export interface MarketplaceOffer {
  marketplace: MarketplaceId;
  label: string;
  ctaLabel: string;
  url: string;
  externalId: string;
  verified: boolean;
  verificationStatus: VerificationStatus;
  note?: string;
}

export interface UnifiedPackProduct {
  id: string;
  flavorId: FlavorId;
  name: string;
  packId: PackSizeId;
  packLabel: string;
  presentation: string;
  badge?: string;
  image: string;
  verificationStatus: VerificationStatus;
  amazon?: MarketplaceOffer;
  mercadoLibre?: MarketplaceOffer;
}

export interface PackPresentationGroup {
  id: PackSizeId;
  label: string;
  shortLabel: string;
  title: string;
  products: UnifiedPackProduct[];
}

export const FLAVOR_IMAGES: Record<FlavorId, string> = {
  maracuya: "/optimized/m1-small.webp",
  "pepino-limon": "/optimized/p2-small.webp",
  cantarito: "/optimized/c1-small.webp",
  pina: "/optimized/pina-coco-edicion-limitada.png",
  "pina-coco-edicion-limitada": "/optimized/pina-coco-edicion-limitada.png",
  "pina-coco": "/optimized/pina-coco-edicion-limitada.png",
};

function amazonOffer(
  asin: string,
  url: string,
  note?: string
): MarketplaceOffer {
  return {
    marketplace: "amazon",
    label: "Amazon",
    ctaLabel: "COMPRAR EN AMAZON",
    url,
    externalId: asin,
    verified: true,
    verificationStatus: "verified",
    ...(note ? { note } : {}),
  };
}

function mercadoLibreOffer(
  externalId: string,
  url: string,
  verified = true,
  note?: string
): MarketplaceOffer {
  return {
    marketplace: "mercado-libre",
    label: "Mercado Libre",
    ctaLabel: "COMPRAR EN MERCADO LIBRE",
    url,
    externalId,
    verified,
    verificationStatus: verified ? "verified" : "pending_pack_confirmation",
    ...(note ? { note } : {}),
  };
}

export const UNIFIED_PACK_CATALOG: PackPresentationGroup[] = [
  {
    id: "6-latas",
    label: "6 LATAS",
    shortLabel: "6 latas",
    title: "Six Pack · 6 latas de 355 ml",
    products: [
      {
        id: "6-latas-pepino-limon",
        flavorId: "pepino-limon",
        name: "Pepino Limón",
        packId: "6-latas",
        packLabel: "6 LATAS",
        presentation: "Six Pack · 355 ml",
        image: FLAVOR_IMAGES["pepino-limon"],
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1QF9VR",
          "https://www.amazon.com.mx/dp/B0GR1QF9VR"
        ),
        // Conservado en datos: URL sin indicación explícita de 6 latas; no se publica como six pack hasta confirmar.
        mercadoLibre: mercadoLibreOffer(
          "MLM66405436",
          "https://www.mercadolibre.com.mx/bebida-belicona-pepino-limon-lata-355-ml/p/MLM66405436",
          false,
          "URL sin indicación explícita de 6 latas; pendiente confirmar presentación en Mercado Libre."
        ),
      },
      {
        id: "6-latas-maracuya",
        flavorId: "maracuya",
        name: "Maracuyá",
        packId: "6-latas",
        packLabel: "6 LATAS",
        presentation: "Six Pack · 355 ml",
        image: FLAVOR_IMAGES.maracuya,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1VGB9T",
          "https://www.amazon.com.mx/dp/B0GR1VGB9T"
        ),
      },
      {
        id: "6-latas-cantarito",
        flavorId: "cantarito",
        name: "Cantarito",
        packId: "6-latas",
        packLabel: "6 LATAS",
        presentation: "Six Pack · 355 ml",
        image: FLAVOR_IMAGES.cantarito,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR17V4D4",
          "https://www.amazon.com.mx/dp/B0GR17V4D4"
        ),
      },
      {
        id: "6-latas-pina",
        flavorId: "pina",
        name: "Piña",
        packId: "6-latas",
        packLabel: "6 LATAS",
        presentation: "Six Pack · 355 ml",
        image: FLAVOR_IMAGES.pina,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0H8JZ5SCM",
          "https://www.amazon.com.mx/dp/B0H8JZ5SCM"
        ),
      },
      {
        id: "6-latas-pina-coco-edicion-limitada",
        flavorId: "pina-coco-edicion-limitada",
        name: "Piña Coco",
        badge: "Edición Limitada",
        packId: "6-latas",
        packLabel: "6 LATAS",
        presentation: "Six Pack · 355 ml",
        image: FLAVOR_IMAGES["pina-coco-edicion-limitada"],
        verificationStatus: "verified",
        mercadoLibre: mercadoLibreOffer(
          "MLM75419662",
          "https://www.mercadolibre.com.mx/six-bebida-belicona-pina-coco-edicion-limitada-lata-355-ml/p/MLM75419662",
          true
        ),
      },
      {
        id: "6-latas-pina-coco-pending",
        flavorId: "pina-coco",
        name: "Piña Coco",
        packId: "6-latas",
        packLabel: "6 LATAS",
        presentation: "Presentación pendiente de confirmar · 355 ml",
        image: FLAVOR_IMAGES["pina-coco"],
        verificationStatus: "pending_pack_confirmation",
        mercadoLibre: mercadoLibreOffer(
          "MLM70030309",
          "https://www.mercadolibre.com.mx/bebida-belicona-pina-coco-lata-355-ml/p/MLM70030309",
          false,
          "URL sin indicación explícita de 6 latas; pendiente confirmar presentación en Mercado Libre."
        ),
      },
    ],
  },
  {
    id: "12-latas",
    label: "12 LATAS",
    shortLabel: "12 latas",
    title: "Pack de 12 latas · 355 ml",
    products: [
      {
        id: "12-latas-maracuya",
        flavorId: "maracuya",
        name: "Maracuyá",
        packId: "12-latas",
        packLabel: "12 LATAS",
        presentation: "12 latas · 355 ml",
        image: FLAVOR_IMAGES.maracuya,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1LTV31",
          "https://www.amazon.com.mx/dp/B0GR1LTV31"
        ),
        mercadoLibre: mercadoLibreOffer(
          "MLM67396363",
          "https://www.mercadolibre.com.mx/12-pack-bebida-belicona-maracuya-lata-355-ml/p/MLM67396363"
        ),
      },
      {
        id: "12-latas-pepino-limon",
        flavorId: "pepino-limon",
        name: "Pepino Limón",
        packId: "12-latas",
        packLabel: "12 LATAS",
        presentation: "12 latas · 355 ml",
        image: FLAVOR_IMAGES["pepino-limon"],
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1PXYYD",
          "https://www.amazon.com.mx/dp/B0GR1PXYYD"
        ),
        mercadoLibre: mercadoLibreOffer(
          "MLMU3818779894",
          "https://www.mercadolibre.com.mx/12-pack-bebida-belicona-pepino-limon-lata-355-ml/up/MLMU3818779894"
        ),
      },
      {
        id: "12-latas-cantarito",
        flavorId: "cantarito",
        name: "Cantarito",
        packId: "12-latas",
        packLabel: "12 LATAS",
        presentation: "12 latas · 355 ml",
        image: FLAVOR_IMAGES.cantarito,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1W6WY8",
          "https://www.amazon.com.mx/dp/B0GR1W6WY8"
        ),
        mercadoLibre: mercadoLibreOffer(
          "MLM66914852",
          "https://www.mercadolibre.com.mx/12-pack-bebida-belicona-cantarito-lata-355-ml/p/MLM66914852"
        ),
      },
    ],
  },
  {
    id: "24-latas",
    label: "24 LATAS",
    shortLabel: "24 latas",
    title: "Pack de 24 latas · 355 ml",
    products: [
      {
        id: "24-latas-maracuya",
        flavorId: "maracuya",
        name: "Maracuyá",
        packId: "24-latas",
        packLabel: "24 LATAS",
        presentation: "24 latas · 355 ml",
        image: FLAVOR_IMAGES.maracuya,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR17BSJF",
          "https://www.amazon.com.mx/dp/B0GR17BSJF"
        ),
        mercadoLibre: mercadoLibreOffer(
          "MLM67922563",
          "https://www.mercadolibre.com.mx/24-pack-bebida-belicona-maracuya-lata-355-ml/p/MLM67922563"
        ),
      },
      {
        id: "24-latas-pepino-limon",
        flavorId: "pepino-limon",
        name: "Pepino Limón",
        packId: "24-latas",
        packLabel: "24 LATAS",
        presentation: "24 latas · 355 ml",
        image: FLAVOR_IMAGES["pepino-limon"],
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1JX2NL",
          "https://www.amazon.com.mx/dp/B0GR1JX2NL"
        ),
        mercadoLibre: mercadoLibreOffer(
          "MLM70377970",
          "https://www.mercadolibre.com.mx/24-pack-bebida-belicona-pepino-limon-lata-355-ml/p/MLM70377970"
        ),
      },
      {
        id: "24-latas-cantarito",
        flavorId: "cantarito",
        name: "Cantarito",
        packId: "24-latas",
        packLabel: "24 LATAS",
        presentation: "24 latas · 355 ml",
        image: FLAVOR_IMAGES.cantarito,
        verificationStatus: "verified",
        amazon: amazonOffer(
          "B0GR1B8B4V",
          "https://www.amazon.com.mx/dp/B0GR1B8B4V"
        ),
        mercadoLibre: mercadoLibreOffer(
          "MLM70372833",
          "https://www.mercadolibre.com.mx/24-pack-bebida-belicona-cantarito-lata-355-ml/p/MLM70372833"
        ),
      },
    ],
  },
];

/**
 * Devuelve únicamente las ofertas de marketplace con presentación verificada
 * para un producto dado. Si una combinación solo tiene enlace verificado en una
 * plataforma, retorna únicamente esa plataforma.
 */
export function getVerifiedOffers(
  product: UnifiedPackProduct
): MarketplaceOffer[] {
  const offers: MarketplaceOffer[] = [];
  if (product.amazon && product.amazon.verified) {
    offers.push(product.amazon);
  }
  if (product.mercadoLibre && product.mercadoLibre.verified) {
    offers.push(product.mercadoLibre);
  }
  return offers;
}

/**
 * Devuelve los productos de una presentación que tienen enlace verificado
 * para un marketplace específico ("amazon" o "mercado-libre").
 */
export function getPublishedProductsByPackAndMarketplace(
  packGroup: PackPresentationGroup,
  marketplace: MarketplaceId
): Array<{ product: UnifiedPackProduct; offer: MarketplaceOffer }> {
  const result: Array<{ product: UnifiedPackProduct; offer: MarketplaceOffer }> =
    [];
  for (const product of packGroup.products) {
    if (product.verificationStatus !== "verified") continue;
    const offer =
      marketplace === "amazon" ? product.amazon : product.mercadoLibre;
    if (offer && offer.verified) {
      result.push({ product, offer });
    }
  }
  return result;
}
