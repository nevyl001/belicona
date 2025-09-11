import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RevealCard from "../components/RevealCard";

const Noticias = () => {
  // Noticia destacada
  const noticiaDestacada = {
    id: 1,
    title: "¡Nuevo video de promoción con Abelito!",
    excerpt:
      "Estamos emocionados de presentar nuestro nuevo video promocional protagonizado por Abelito. Una producción llena de diversión, sabor y la energía única que caracteriza a Belicona. ¡Esperen pronto este contenido increíble!",
    image: "/videobeli.JPG",
    author: "Equipo Belicona",
    date: "2024-01-20",
    category: "Promoción",
    readTime: "3 min",
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
                NOTICIAS
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              >
                Mantente al día con las últimas novedades, innovaciones y
                eventos de Belicona
              </motion.p>
            </div>
          </RevealCard>
        </div>
      </div>

      {/* Noticia Destacada */}
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
                src={noticiaDestacada.image}
                alt={noticiaDestacada.title}
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
                  {noticiaDestacada.category}
                </motion.span>
              </div>

              {/* Tiempo de lectura */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black/50 text-white backdrop-blur-sm">
                  {noticiaDestacada.readTime}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 relative z-10">
              {/* Título */}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-compressed text-white mb-6 font-bold hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {noticiaDestacada.title}
              </motion.h2>

              {/* Resumen */}
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                {noticiaDestacada.excerpt}
              </p>

              {/* Información del autor */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-lg font-medium text-white">
                      {noticiaDestacada.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {new Date(noticiaDestacada.date).toLocaleDateString(
                        "es-ES"
                      )}
                    </p>
                  </div>
                </div>

                {/* Botón de leer más */}
                <Link to={`/noticias/${noticiaDestacada.id}`}>
                  <motion.button
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    LEER NOTICIA COMPLETA
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

        {/* Mensaje de más noticias próximamente */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-compressed text-white mb-4 font-bold">
              MÁS NOTICIAS PRÓXIMAMENTE
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Estamos preparando más contenido exclusivo sobre innovación,
              sostenibilidad y los últimos avances de Belicona.
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
              Próximamente más contenido
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Noticias;
