import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RevealCard from "../components/RevealCard";
import { eventosOrdenados } from "../data/eventos";

const Eventos = () => {
  const lista = eventosOrdenados();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>

      <div className="bg-black py-6 sm:py-8 md:py-12 relative z-10">
        <div className="container-custom">
          <RevealCard direction="up" delay={0.2}>
            <div className="text-center">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-4 sm:mb-6 font-bold glow-on-hover"
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
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
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

      <div className="container-custom py-4 sm:py-8 md:py-12 relative z-10 space-y-10 sm:space-y-14 md:space-y-16">
        {lista.map((eventoDestacado, index) => (
          <motion.div
            key={eventoDestacado.id}
            className="group relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.01,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <div className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group-hover:shadow-3xl">
              <div className="relative overflow-hidden">
                <img
                  src={eventoDestacado.image}
                  alt={eventoDestacado.title}
                  className="w-full h-48 sm:h-64 md:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
                  <motion.span
                    className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {eventoDestacado.category}
                  </motion.span>
                </div>

                <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-black/50 text-orange-500 backdrop-blur-sm font-bold">
                    {eventoDestacado.price}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-12 relative z-10">
                <motion.h2
                  className="text-lg sm:text-xl md:text-2xl font-compressed text-white mb-3 sm:mb-4 md:mb-6 font-bold hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {eventoDestacado.title}
                </motion.h2>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  {eventoDestacado.excerpt}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500 mr-2 sm:mr-3 flex-shrink-0"
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
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Fecha</p>
                      <p className="text-white font-medium text-sm sm:text-base">
                        {new Date(
                          `${eventoDestacado.dateISO}T12:00:00`
                        ).toLocaleDateString("es-MX", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500 mr-2 sm:mr-3 flex-shrink-0"
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
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Hora</p>
                      <p className="text-white font-medium text-sm sm:text-base">
                        {eventoDestacado.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500 mr-2 sm:mr-3 flex-shrink-0"
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
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Ubicación</p>
                      <p className="text-white font-medium text-sm sm:text-base">
                        {eventoDestacado.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="text-gray-300">
                    <p className="text-xs sm:text-sm">
                      Capacidad:{" "}
                      <span className="text-primary-500 font-medium">
                        {eventoDestacado.capacity}
                      </span>
                    </p>
                  </div>

                  <Link
                    to={`/eventos/${eventoDestacado.id}`}
                    className="w-full sm:w-auto"
                  >
                    <motion.button
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-sm sm:text-base md:text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="hidden sm:inline">
                        VER DETALLES DEL EVENTO
                      </span>
                      <span className="sm:hidden">VER DETALLES</span>
                      <motion.span
                        className="ml-1 sm:ml-2"
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
        ))}

        <motion.div
          className="text-center mt-8 sm:mt-12 md:mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-compressed text-white mb-3 sm:mb-4 font-bold">
              MÁS EVENTOS PRÓXIMAMENTE
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              Sigue nuestras redes para enterarte de lanzamientos, activaciones
              y experiencias Belicona.
            </p>
            <motion.div
              className="inline-flex items-center text-primary-500 text-sm sm:text-base"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
