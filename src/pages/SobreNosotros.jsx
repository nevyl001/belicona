import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAnimations from "../hooks/useAnimations";

const SobreNosotros = () => {
  const navigate = useNavigate();
  const {
    ref,
    isInView,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    pageTransition,
  } = useAnimations();

  return (
    <motion.div
      className="min-h-screen bg-black"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <motion.section
        className="relative bg-black py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-compressed text-white mb-8 font-bold bg-gradient-to-r from-white via-primary-200 to-secondary-200 bg-clip-text text-transparent">
              SOBRE NOSOTROS
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Descubre la pasión, tradición e innovación detrás de cada gota de
              Belicona
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Historia Section */}
      <motion.section
        className="py-24 bg-black"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagen */}
            <motion.div className="relative" variants={fadeInLeft}>
              <div className="relative z-10">
                <img
                  src="/sabores.jpg"
                  alt="Sabores Belicona"
                  className="w-full max-h-[600px] object-contain rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>

            {/* Contenido */}
            <motion.div className="space-y-8" variants={fadeInRight}>
              <div>
                <motion.h2
                  className="text-6xl md:text-8xl font-bubbly text-white mb-8 bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent leading-tight"
                  variants={staggerItem}
                >
                  NUESTRA HISTORIA
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed"
                  variants={staggerItem}
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
                  className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                  variants={staggerItem}
                >
                  Lanzada a mediados de{" "}
                  <span className="text-secondary-400 font-bold">
                    2022 por RIII
                  </span>
                  , nuestra bebida tiene como objetivo ofrecer una alternativa
                  natural y especial en el mercado, combinando la tradición del
                  agave azul con sabores únicos y naturales.
                </motion.p>
                <motion.button
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-compressed font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                  variants={staggerItem}
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
      </motion.section>

      {/* Valores Section */}
      <motion.section
        className="py-24 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              NUESTROS VALORES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                role="article"
                tabIndex={0}
                className="bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-black"
                variants={staggerItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  transition: { type: "spring", stiffness: 220, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-tr ${valor.gradient} rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      backgroundPosition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
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
      </motion.section>

      {/* Misión y Visión Section */}
      <motion.section
        className="py-24 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              MISIÓN & VISIÓN
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lo que nos impulsa cada día hacia el futuro
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.article
              role="article"
              tabIndex={0}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-black"
              variants={fadeInLeft}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { type: "spring", stiffness: 220, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-tr from-red-500 via-pink-400 to-rose-400 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl shadow-lg filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  🎯
                </motion.div>
                <h3 className="text-3xl font-compressed text-white mb-6 font-bold text-center">
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
              role="article"
              tabIndex={0}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500/50 focus:ring-offset-2 focus:ring-offset-black"
              variants={fadeInRight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -6,
                transition: { type: "spring", stiffness: 220, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-tr from-orange-500 via-yellow-400 to-amber-400 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl shadow-lg filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  👁️
                </motion.div>
                <h3 className="text-3xl font-compressed text-white mb-6 font-bold text-center">
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
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-compressed text-white mb-8 font-bold"
            variants={fadeInUp}
          >
            ¿LISTO PARA LA EXPERIENCIA?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            Descubre el sabor auténtico de México en cada sorbo de Belicona
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-compressed font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/productos")}
          >
            ¡EXPLORA NUESTROS PRODUCTOS!
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SobreNosotros;
