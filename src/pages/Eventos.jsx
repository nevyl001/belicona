import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RevealCard from "../components/RevealCard";

const Eventos = () => {
  // Evento destacado
  const eventoDestacado = {
    id: 1,
    title: "Festival de Cerveza Artesanal Belicona 2024",
    excerpt:
      "Únete a nosotros en el evento más esperado del año. Degustaciones exclusivas, música en vivo, food trucks y mucho más. Un festival único que celebra la pasión por la cerveza artesanal.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-15",
    time: "18:00 - 23:00",
    location: "Parque Central, Ciudad de México",
    category: "Festival",
    price: "Gratis",
    capacity: "500 personas",
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
              <motion.h1
                className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                EVENTOS
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              >
                Únete a nuestros eventos exclusivos, festivales y experiencias
                únicas de Belicona
              </motion.p>
            </div>
          </RevealCard>
        </div>
      </div>

      {/* Evento Destacado */}
      <div className="container-custom py-8 sm:py-12 relative z-10">
        <motion.div
          className="group relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.01,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          {/* Glassmorphism card */}
          <div className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group-hover:shadow-3xl">
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={eventoDestacado.image}
                alt={eventoDestacado.title}
                className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Categoría flotante */}
              <div className="absolute top-6 left-6">
                <motion.span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {eventoDestacado.category}
                </motion.span>
              </div>

              {/* Precio flotante */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-black/50 text-orange-500 backdrop-blur-sm font-bold">
                  {eventoDestacado.price}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 relative z-10">
              {/* Título */}
              <motion.h2
                className="text-2xl font-compressed text-white mb-6 font-bold hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {eventoDestacado.title}
              </motion.h2>

              {/* Resumen */}
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                {eventoDestacado.excerpt}
              </p>

              {/* Información del evento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3"
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
                  <div>
                    <p className="text-sm text-gray-400">Fecha</p>
                    <p className="text-white font-medium">
                      {new Date(eventoDestacado.date).toLocaleDateString(
                        "es-ES"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3"
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
                  <div>
                    <p className="text-sm text-gray-400">Hora</p>
                    <p className="text-white font-medium">
                      {eventoDestacado.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3"
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
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-white font-medium">
                      {eventoDestacado.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón de ver más */}
              <div className="flex items-center justify-between">
                <div className="text-gray-300">
                  <p className="text-sm">
                    Capacidad:{" "}
                    <span className="text-primary-500 font-medium">
                      {eventoDestacado.capacity}
                    </span>
                  </p>
                </div>

                {/* Botón de ver más */}
                <Link to={`/eventos/${eventoDestacado.id}`}>
                  <motion.button
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VER DETALLES DEL EVENTO
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mensaje de más eventos próximamente */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-compressed text-white mb-4 font-bold">
              MÁS EVENTOS PRÓXIMAMENTE
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Estamos preparando más eventos exclusivos, degustaciones
              especiales y experiencias únicas para nuestros clientes.
            </p>
            <motion.div
              className="inline-flex items-center text-primary-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Próximamente más eventos
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Eventos;
