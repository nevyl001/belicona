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
    title: "Festival de Cerveza Artesanal Belicona 2024",
    excerpt:
      "Únete a nosotros en el evento más esperado del año. Degustaciones exclusivas, música en vivo, food trucks y mucho más.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-15",
    time: "18:00 - 23:00",
    location: "Parque Central, Ciudad de México",
    category: "Festival",
    price: "Gratis",
    capacity: "500 personas",
    content: `
      <p>¡No te pierdas el Festival de Cerveza Artesanal Belicona 2024! Un evento único que celebra la pasión por la cerveza artesanal y la cultura local.</p>
      
      <p>Este año, hemos preparado una experiencia inolvidable con más de 20 cervecerías artesanales, food trucks gourmet, música en vivo y actividades para toda la familia.</p>
      
      <h3>¿Qué incluye el evento?</h3>
      <ul>
        <li>Degustación de más de 50 variedades de cerveza artesanal</li>
        <li>Food trucks con comida gourmet</li>
        <li>Música en vivo con artistas locales</li>
        <li>Talleres de maridaje cerveza-comida</li>
        <li>Zona de juegos para niños</li>
        <li>Concurso de homebrewers</li>
        <li>Mercado artesanal</li>
      </ul>
      
      <h3>Artistas confirmados:</h3>
      <ul>
        <li>Los Cerveceros - Rock alternativo (19:00)</li>
        <li>Brass Band del Centro - Jazz (20:30)</li>
        <li>DJ Cerveza - Música electrónica (22:00)</li>
      </ul>
      
      <p>El evento es completamente gratuito y abierto al público. Habrá estacionamiento disponible y transporte público hasta el lugar.</p>
      
      <p>¡No olvides traer tu identificación oficial y venir con ganas de disfrutar de la mejor cerveza artesanal de la ciudad!</p>
    `,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video de ejemplo
    gallery: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    organizer: "Belicona Cervecería",
    contact: "eventos@belicona.com",
    phone: "+52 55 1234 5678",
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
              className="w-full h-64 md:h-96 object-cover"
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

          {/* Video */}
          <motion.div
            className="my-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
              Video del Evento
            </h3>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="400"
                src={evento.video}
                title="Video del Evento"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Galería de imágenes */}
          <motion.div
            className="my-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
              Galería de Imágenes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {evento.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
