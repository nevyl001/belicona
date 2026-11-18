import type { ShopShowcaseData } from "../data/shopShowcase";

/**
 * BeliconaProductShowcase
 * Composición editorial con las fotos oficiales de campaña: el hero domina y
 * las tomas de apoyo quedan detrás para dar profundidad. Iluminación roja
 * trasera y sombra de contacto son capas decorativas (aria-hidden).
 */
export default function BeliconaProductShowcase({
  hero,
  supporting,
}: ShopShowcaseData) {
  return (
    <div className="shop-showcase">
      <div className="shop-showcase-light" aria-hidden="true" />

      {supporting.map((photo, i) => (
        <figure
          key={photo.id}
          className={`shop-photo shop-photo--support shop-photo--support-${i + 1}`}
        >
          <img
            src={photo.srcSmall}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}

      <figure className="shop-photo shop-photo--hero">
        <img
          src={hero.src}
          srcSet={`${hero.srcSmall} 640w, ${hero.src} ${hero.width}w`}
          sizes="(max-width: 639px) 94vw, (max-width: 1023px) 440px, 480px"
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          decoding="async"
          fetchPriority="high"
        />
      </figure>

      <div className="shop-showcase-floor" aria-hidden="true" />
    </div>
  );
}
