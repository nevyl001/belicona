import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import RevealCard from "../components/RevealCard";

const EventoDetalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Datos del evento (en una app real vendría de una API)
  const evento = {
    id: 1,
    title: "EL DÍA DE LOS MUERTOS",
    excerpt:
      "Evento especial temático con LEXLAY como artista principal y un lineup increíble de DJs. Celebra la tradición mexicana del Día de Muertos con música electrónica, arte y cultura.",
    image:
      "/dia-de-los-muertos-poster.jpg",
    date: "11/01/2025",
    time: "20:00 - 05:00",
    location: "Venue por confirmar, Ciudad de México",
    category: "Evento Especial",
    price: "Por confirmar",
    capacity: "Evento limitado",
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
    organizer: "MIXAR TALENT",
    contact: "72 9682 4317",
    phone: "72 9682 4317",
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>

      {/* Header */}
      <div className="bg-black py-8 sm:py-12 relative z-10">
        <div className="container-custom">
          <RevealCard direction="up" delay={0.2}>
            <div className="text-center">
              <motion.button
                onClick={() => navigate("/eventos")}
                className="inline-flex items-center text-primary-500 hover:text-orange-500 mb-6 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                VOLVER A EVENTOS
              </motion.button>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                {evento.title}
              </motion.h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(evento.date).toLocaleDateString("es-ES")}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {evento.time}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {evento.location}
                </span>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Imagen principal */}
          <motion.div
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={evento.image}
              alt={evento.title}
              className="w-full h-80 md:h-[500px] lg:h-[600px] object-contain rounded-xl bg-black/20"
            />
          </motion.div>

          {/* Información del evento */}
          <motion.div
            className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-compressed text-white mb-2 font-bold">
                Categoría
              </h3>
              <p className="text-primary-500 font-medium">{evento.category}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-compressed text-white mb-2 font-bold">
                Precio
              </h3>
              <p className="text-orange-500 font-bold text-xl">
                {evento.price}
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-compressed text-white mb-2 font-bold">
                Capacidad
              </h3>
              <p className="text-gray-300 font-medium text-base md:text-lg">
                {evento.capacity}
              </p>
            </div>
          </motion.div>

          {/* Categoría */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg">
              {evento.category}
            </span>
          </motion.div>

          {/* Contenido del evento */}
          <motion.article
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: evento.content }}
          />


          {/* Información de contacto */}
          <motion.div
            className="my-12 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
              Información de Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Organizador
                </h4>
                <p className="text-gray-300 text-base md:text-lg">
                  {evento.organizer}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                <p className="text-primary-500">{evento.contact}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Teléfono
                </h4>
                <p className="text-gray-300 text-base md:text-lg">
                  {evento.phone}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Ubicación
                </h4>
                <p className="text-gray-300 text-base md:text-lg">
                  {evento.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Botón de regreso */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => navigate("/eventos")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VOLVER A EVENTOS
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalle;
