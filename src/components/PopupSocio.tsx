import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const PopupSocio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Mayoría de edad en inicio y landing comercial /shop (tráfico Instagram)
    const needsAgeGate =
      location.pathname === "/" || location.pathname === "/shop";

    if (needsAgeGate) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        window.dispatchEvent(new CustomEvent("belicona_popup_show"));
      }, 500);
      return () => clearTimeout(timer);
    }

    setIsVisible(false);
    window.dispatchEvent(new CustomEvent("belicona_popup_hide"));
  }, [location.pathname]);

  const handleMinorAge = () => {
    setIsVisible(false);
    // Disparar evento cuando el popup se oculta
    window.dispatchEvent(new CustomEvent('belicona_popup_hide'));
    // NO guardar en localStorage, solo disparar evento para esta sesión
    // Disparar evento personalizado para notificar a otros componentes
    window.dispatchEvent(new CustomEvent('belicona_age_verified'));
    navigate("/menor-edad");
  };

  const handleMajorAge = () => {
    setIsVisible(false);
    // Disparar evento cuando el popup se oculta
    window.dispatchEvent(new CustomEvent('belicona_popup_hide'));
    // NO guardar en localStorage, solo disparar evento para esta sesión
    // Disparar evento personalizado para notificar a otros componentes
    window.dispatchEvent(new CustomEvent('belicona_age_verified'));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto overscroll-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Popup Content — responsive sin cambiar lógica de validación */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            className="relative my-auto w-full max-w-[22rem] sm:max-w-md mx-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] p-5 sm:p-8 shadow-2xl max-h-[min(92svh,40rem)] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-center">
              <picture className="mx-auto mb-4 sm:mb-6 block h-36 w-36 sm:h-56 sm:w-56 md:h-64 md:w-64 overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
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
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                />
              </picture>

              <motion.h2
                id="popup-title"
                className="mb-2 sm:mb-3 text-xl sm:text-2xl font-compressed font-bold text-white"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
              >
                ¡BIENVENIDO A BELICONA!
              </motion.h2>

              <motion.p
                className="mb-5 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
              >
                Descubre la experiencia única de nuestros sabores artesanales,
                creados con la más alta calidad y autenticidad de Belicona.
              </motion.p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <motion.button
                  type="button"
                  className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-3.5 font-compressed text-sm sm:text-base font-bold text-white shadow-lg transition-colors duration-200 hover:from-pink-600 hover:to-orange-500"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36, duration: 0.35 }}
                  onClick={handleMajorAge}
                >
                  SÍ, SOY MAYOR DE EDAD
                </motion.button>

                <motion.button
                  type="button"
                  className="flex-1 rounded-2xl border-2 border-gray-500 px-5 py-3.5 font-compressed text-sm sm:text-base font-bold text-gray-300 transition-colors duration-200 hover:bg-gray-500 hover:text-white"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.35 }}
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
