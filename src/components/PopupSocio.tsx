import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PopupSocio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

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

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
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
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
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
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-black rounded-full"
              onClick={handleClose}
              whileHover={{
                scale: 1.1,
                rotate: 90,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cerrar popup"
            >
              <span className="text-xl font-bold">✕</span>
            </motion.button>

            {/* Content */}
            <div className="text-center">
              {/* Socio Image - ENORME */}
              <motion.img
                src="/popup.jpeg"
                alt="Nuestro socio famoso"
                className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 rounded-2xl shadow-2xl object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              />

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
                respaldados por nuestro socio de renombre que confía en la
                calidad y autenticidad de Belicona.
              </motion.p>

              {/* Action Button */}
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-compressed font-bold py-3 px-8 rounded-2xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleClose}
              >
                SÍ, SOY MAYOR DE EDAD
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupSocio;
