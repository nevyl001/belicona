/**
 * Material oficial de campaña para /shop.
 *
 * - `hero` es la foto protagonista; `supporting` son tomas de apoyo (se
 *   muestran detrás del hero en pantallas ≥ 640 px).
 * - Para incorporar nuevas fotos basta con reemplazar/añadir entradas aquí
 *   (y colocar los .webp en /public/shop). No hay que tocar la composición.
 * - Solo fotos oficiales: no se recortan etiquetas ni se alteran colores.
 */

export interface ShopPhoto {
  id: string;
  /** Archivo a resolución completa (se usa en el hero). */
  src: string;
  /** Versión ligera (640 px de ancho). */
  srcSmall: string;
  width: number;
  height: number;
  alt: string;
}

export interface ShopShowcaseData {
  hero: ShopPhoto;
  supporting: ShopPhoto[];
}

export const SHOP_SHOWCASE: ShopShowcaseData = {
  hero: {
    id: "fiesta",
    src: "/shop/campana-fiesta.webp",
    srcSmall: "/shop/campana-fiesta-640.webp",
    width: 836,
    height: 1024,
    alt: "Campaña Belicona: latas de Maracuyá, Cantarito, Pepino-Limón y la edición limitada Piña-Coco flotando en una calle de fiesta con papel picado.",
  },
  supporting: [
    {
      id: "estudio",
      src: "/shop/campana-estudio.webp",
      srcSmall: "/shop/campana-estudio-640.webp",
      width: 850,
      height: 1024,
      alt: "Latas Belicona Cantarito, Pepino-Limón y Maracuyá sobre una mesa en un estudio de música.",
    },
    {
      id: "hielera",
      src: "/shop/campana-hielera.webp",
      srcSmall: "/shop/campana-hielera-640.webp",
      width: 829,
      height: 1024,
      alt: "Cuatro latas Belicona (Cantarito, Pepino-Limón, Maracuyá y Piña) sobre hielo, vistas desde el interior de una hielera.",
    },
  ],
};
