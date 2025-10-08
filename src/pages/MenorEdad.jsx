import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAnimations from "../hooks/useAnimations";

const MenorEdad = () => {
  const navigate = useNavigate();
  const {
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
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Imagen grande del popup */}
          <motion.div
            className="mb-8 mt-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl">🍺</span>
              </div>
              {/* X de prohibición integrada */}
              <div className="absolute inset-0 flex items-start justify-center pt-8">
                <div className="w-28 h-28 border-4 border-red-500 rounded-full flex items-center justify-center bg-red-500/20 backdrop-blur-sm">
                  <span className="text-3xl text-red-500 font-bold">✕</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold bg-gradient-to-r from-white via-primary-200 to-orange-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ¡OPS! 😅
          </motion.h1>

          {/* Subtítulo cómico */}
          <motion.h2
            className="text-2xl font-compressed text-primary-400 mb-6 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Eres menor de edad
          </motion.h2>

          {/* Mensaje principal */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700 shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed">
              <span className="text-primary-400 font-bold">
                ¡Pero no te preocupes!
              </span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Tus papás{" "}
              <span className="text-yellow-400 font-bold">SÍ pueden</span>{" "}
              disfrutar de la auténtica experiencia Belicona
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Mientras tanto, puedes explorar nuestra historia, valores y la
              pasión que ponemos en cada producto
            </p>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={() => navigate("/sobre-nosotros")}
              className="bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white font-compressed font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Conoce Nuestra Historia
            </button>
            <button
              onClick={() => navigate("/")}
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black font-compressed font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              Volver al Inicio
            </button>
          </motion.div>

          {/* Mensaje adicional divertido */}
          <motion.div
            className="mt-12 p-6 bg-gradient-to-r from-primary-500/10 to-orange-500/10 rounded-2xl border border-primary-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-sm sm:text-base text-gray-400 italic">
              💡 <span className="text-primary-400 font-bold">Tip:</span> Cuando
              cumplas 18, ¡serás bienvenido a la familia Belicona! 🎉
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 animate-bounce delay-1000">
        🍺
      </div>
      <div className="absolute top-20 right-20 text-3xl opacity-20 animate-bounce delay-2000">
        🥤
      </div>
      <div className="absolute bottom-20 left-20 text-3xl opacity-20 animate-bounce delay-3000">
        🍻
      </div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-bounce delay-4000">
        🥃
      </div>
    </motion.div>
  );
};

export default MenorEdad;
