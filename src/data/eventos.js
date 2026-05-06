/** Lista de eventos (orden: más reciente primero en pantalla si se ordena por fecha). */
export const EVENTOS = [
  {
    id: 2,
    title: "LANZAMIENTO PIÑA-COCO EDICIÓN LIMITADA",
    excerpt:
      "Presentación oficial de la nueva Belicona Piña-Coco Edición Limitada: rueda de prensa, lanzamiento del producto y partido especial Influencers vs Artistas en Soccer City Evolution.",
    image: "/events/edicion-limitada-pina-coco/01-flyer-lanzamiento.png",
    dateISO: "2026-05-03",
    time: "13:00 - Por confirmar cierre",
    location: "Soccer City Evolution, Ciudad de México",
    category: "Lanzamiento",
    price: "Invitación personal",
    capacity: "Confirmar asistencia",
    artist: "",
    specialGuests: "",
    lineup: [],
    talent: "",
    talentMembers: [],
    organizer: "Belicona · RIII",
    contact: "WhatsApp Belicona",
    phone: "+52 56 1192 6751",
    sponsors: ["BELICONA"],
    gallery: [
      "/events/edicion-limitada-pina-coco/02-jersey-belicona.png",
      "/events/edicion-limitada-pina-coco/03-cancha-abelito.png",
      "/events/edicion-limitada-pina-coco/04-banner-porteria.png",
      "/events/edicion-limitada-pina-coco/05-duo-belicona.png",
      "/events/edicion-limitada-pina-coco/06-jugador-balón.png",
      "/events/edicion-limitada-pina-coco/07-lata-pina-coco.png",
    ],
    content: `
      <p><strong>Lanzamiento oficial</strong> de la bebida <strong>Belicona Piña-Coco Edición Limitada</strong>, con la energía del mundial y la identidad mexicana que nos caracteriza.</p>

      <h3>📅 Fecha y sede</h3>
      <p><strong>3 de mayo</strong> · <strong>1:00 PM</strong> · <strong>Soccer City Evolution</strong> (Ciudad de México).</p>

      <h3>📋 Programa</h3>
      <ul>
        <li><strong>Rueda de prensa</strong></li>
        <li><strong>Presentación del producto</strong></li>
        <li><strong>Partido especial — Influencers vs Artistas</strong></li>
      </ul>

      <h3>🎟️ Acceso</h3>
      <p><strong>Invitación personal.</strong> Para confirmar asistencia y más información, escríbenos por WhatsApp al número de contacto oficial.</p>

      <h3>🍍 Producto</h3>
      <p>Mezcla de <strong>destilado de agave azul</strong> con <strong>pulpa natural</strong>; nueva propuesta en formato Edición Limitada para vivir la experiencia Belicona al máximo.</p>
    `,
  },
  {
    id: 1,
    title: "EL DÍA DE LOS MUERTOS",
    excerpt:
      "Evento especial temático con LEXLAY como artista principal y un lineup increíble de DJs. Celebra la tradición mexicana del Día de Muertos con música electrónica, arte y cultura. Un espectáculo único que fusiona tradición y modernidad.",
    image: "/dia-de-los-muertos-poster.jpg",
    dateISO: "2025-11-01",
    time: "20:00 - 05:00",
    location: "Venue por confirmar, Ciudad de México",
    category: "Evento Especial",
    price: "Por confirmar",
    capacity: "Evento limitado",
    artist: "LEXLAY",
    specialGuests: "JAVI COLINA & INTERACTIVE NOISE",
    lineup: [
      "ANN GARCIA",
      "TACHO",
      "QUINEMA",
      "CALLES",
      "AG",
      "SEBASTIAN MORA",
      "EVAN ALDEY",
      "EMI OZZ",
      "SHEYLA REYNA",
      "REX",
      "MCHLL",
      "JOHAN RM",
      "ANGEL REND",
      "DIMELO VALDU",
      "MAXXXI VELAZQUEZ",
      "OWELL REYES",
      "ANGEL V",
      "ENGEL ANTONELLA",
      "HDZ",
      "ARAIZA",
      "OSWALDO PARRA",
      "CAMACHO",
      "HERMIN HERNANDEZ",
      "JARDELL",
      "NTELEKIA",
      "GIOBANNY VI",
    ],
    talent: "MIXAR TALENT",
    talentMembers: ["JMONROE", "RENTON", "ISAAC AUTT", "ROUX LEYVA"],
    organizer: "MIXAR TALENT",
    contact: "72 9682 4317",
    phone: "72 9682 4317",
    sponsors: ["MIXAR", "BELICONA", "TAKIRI", "HAPPY TECHNO"],
    gallery: [],
    content: `
      <p>¡No te pierdas EL DÍA DE LOS MUERTOS! Un evento único que celebra la tradición mexicana fusionándola con la música electrónica más moderna.</p>
      
      <h3>🎵 Artista Principal</h3>
      <p><strong>LEXLAY</strong> - El artista principal que nos acompañará en esta celebración única.</p>
      
      <h3>🎭 Special Guests</h3>
      <p><strong>JAVI COLINA & INTERACTIVE NOISE</strong> - Una colaboración especial que no te puedes perder.</p>
      
      <h3>🎪 Lineup Completo</h3>
      <p>Un lineup impresionante con más de 25 artistas que incluye: ANN GARCIA, TACHO, QUINEMA, CALLES, AG, SEBASTIAN MORA, EVAN ALDEY, EMI OZZ, SHEYLA REYNA, REX, MCHLL, JOHAN RM, ANGEL REND, DIMELO VALDU, MAXXXI VELAZQUEZ, OWELL REYES, ANGEL V, ENGEL ANTONELLA, HDZ, ARAIZA, OSWALDO PARRA, CAMACHO, HERMIN HERNANDEZ, JARDELL, NTELEKIA, GIOBANNY VI y muchos más.</p>
      
      <h3>🎨 Talento</h3>
      <p><strong>MIXAR TALENT</strong> presenta: JMONROE, RENTON, ISAAC AUTT, ROUX LEYVA</p>
      
      <h3>📱 Contacto</h3>
      <p>Para más información y reservaciones, contáctanos por WhatsApp: <strong>72 9682 4317</strong></p>
      
      <h3>🏢 Sponsors</h3>
      <p>Gracias a nuestros sponsors: MIXAR, BELICONA, TAKIRI, HAPPY TECHNO</p>
    `,
  },
];

export function getEventoById(rawId) {
  const id = Number(rawId);
  return EVENTOS.find((e) => e.id === id) ?? null;
}

/** Para la lista: más nuevo primero */
export function eventosOrdenados() {
  return [...EVENTOS].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );
}
