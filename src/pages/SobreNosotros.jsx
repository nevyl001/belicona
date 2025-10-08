import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RevealCard from "../components/RevealCard";

const SobreNosotros = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>

      {/* Hero Section */}
      <div className="bg-black py-12 sm:py-16 md:py-24 relative z-10">
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
                SOBRE NOSOTROS
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              >
                Descubre la pasión, tradición e innovación detrás de cada gota
                de Belicona
              </motion.p>
            </div>
          </RevealCard>
        </div>
      </div>

      {/* Historia Section */}
      <div className="py-12 sm:py-16 md:py-24 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagen */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <img
                  src="/optimized/sabores.webp"
                  alt="Sabores Belicona"
                  className="w-full max-h-[600px] object-contain rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-orange-500 to-primary-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    textShadow:
                      "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                  }}
                >
                  NUESTRA HISTORIA
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Con más de{" "}
                  <span className="text-primary-400 font-bold">
                    12 años de experiencia
                  </span>{" "}
                  en el procesamiento de frutas y especialización en la
                  fabricación de pulpa natural, hemos desarrollado una mezcla
                  única de destilado de agave RIII con pulpa de fruta extraída,
                  buscando un sabor equilibrado y auténtico.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Lanzada a mediados de{" "}
                  <span className="text-orange-400 font-bold">
                    2022 por RIII
                  </span>
                  , nuestra bebida tiene como objetivo ofrecer una alternativa
                  natural y especial en el mercado, combinando la tradición del
                  agave azul con sabores únicos y naturales.
                </motion.p>
                <motion.button
                  className="bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white font-compressed font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/productos")}
                >
                  ¡CONOCE NUESTROS PRODUCTOS!
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Valores Section */}
      <div className="py-12 sm:py-16 md:py-24 relative z-10">
        <div className="container-custom">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
              }}
            >
              NUESTROS VALORES
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Los principios que guían cada paso de nuestro proceso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "NATURALIDAD",
                description:
                  "Utilizamos únicamente ingredientes naturales y frescos, sin conservadores artificiales ni aditivos químicos.",
                gradient: "from-emerald-500 via-green-400 to-teal-400",
              },
              {
                icon: "🏆",
                title: "CALIDAD",
                description:
                  "Cada producto pasa por rigurosos controles de calidad para garantizar la excelencia en cada sorbo.",
                gradient: "from-amber-500 via-yellow-400 to-orange-400",
              },
              {
                icon: "💎",
                title: "TRADICIÓN",
                description:
                  "Respetamos y honramos las técnicas tradicionales del agave, fusionándolas con innovación moderna.",
                gradient: "from-purple-500 via-pink-400 to-rose-400",
              },
            ].map((valor, index) => (
              <motion.article
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-tr ${valor.gradient} rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                  >
                    {valor.icon}
                  </motion.div>
                  <h3 className="text-2xl font-compressed text-white mb-4 font-bold">
                    {valor.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Misión y Visión Section */}
      <div className="py-12 sm:py-16 md:py-24 relative z-10">
        <div className="container-custom">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
              }}
            >
              MISIÓN & VISIÓN
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Lo que nos impulsa cada día hacia el futuro
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.article
              className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-tr from-red-500 via-pink-400 to-rose-400 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                >
                  🎯
                </motion.div>
                <h3 className="text-2xl font-compressed text-white mb-6 font-bold text-center">
                  NUESTRA MISIÓN
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Ofrecer bebidas artesanales de la más alta calidad, combinando
                  la tradición del agave azul con sabores naturales únicos,
                  creando experiencias de sabor auténticas e inolvidables que
                  conecten con la esencia de México.
                </p>
              </div>
            </motion.article>

            {/* Visión */}
            <motion.article
              className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-tr from-orange-500 via-yellow-400 to-amber-400 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                >
                  👁️
                </motion.div>
                <h3 className="text-2xl font-compressed text-white mb-6 font-bold text-center">
                  NUESTRA VISIÓN
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Ser reconocidos como la marca líder en bebidas artesanales de
                  agave con sabores naturales, expandiendo nuestra presencia
                  global mientras mantenemos nuestra esencia artesanal y
                  compromiso inquebrantable con la calidad y autenticidad.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 md:py-24 relative z-10">
        <div className="container-custom">
          <motion.div
            className="text-center bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
              }}
            >
              ¿LISTO PARA LA EXPERIENCIA?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Descubre el sabor auténtico de México en cada sorbo de Belicona
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white font-compressed font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/productos")}
            >
              ¡EXPLORA NUESTROS PRODUCTOS!
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
