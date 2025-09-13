import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const PopupSocio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Mostrar popup cada vez que se vaya al inicio
    if (location.pathname === "/") {
      // Mostrar popup después de 0.5s
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Ocultar popup si no está en la página de inicio
      setIsVisible(false);
    }
  }, [location.pathname]);

  const handleMinorAge = () => {
    setIsVisible(false);
    navigate("/menor-edad");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Popup Content */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            className="relative bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/10"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Content */}
            <div className="text-center">
              {/* Socio Image - ENORME */}
              <picture className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 rounded-2xl shadow-2xl overflow-hidden">
                <source
                  media="(max-width: 640px)"
                  srcSet="/optimized/popup-small.avif"
                  type="image/avif"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/optimized/popup-medium.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/optimized/popup-large.avif"
                  type="image/avif"
                />
                <source
                  media="(max-width: 640px)"
                  srcSet="/optimized/popup-small.webp"
                  type="image/webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/optimized/popup-medium.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/optimized/popup-large.webp"
                  type="image/webp"
                />
                <motion.img
                  src="/optimized/popup-small.webp"
                  alt="Nuestro socio famoso"
                  className="w-full h-full object-cover"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                />
              </picture>

              {/* Title */}
              <motion.h2
                id="popup-title"
                className="text-2xl font-compressed text-white mb-3 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ¡BIENVENIDO A BELICONA!
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Descubre la experiencia única de nuestros sabores artesanales,
                creados con la más alta calidad y autenticidad de Belicona.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-compressed font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsVisible(false)}
                >
                  SÍ, SOY MAYOR DE EDAD
                </motion.button>

                <motion.button
                  className="border-2 border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white font-compressed font-bold py-3 px-6 rounded-2xl transition-all duration-300 flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={handleMinorAge}
                >
                  NO, SOY MENOR DE EDAD
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupSocio;
