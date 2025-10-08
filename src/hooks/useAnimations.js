/**
 * Hook personalizado para animaciones con Framer Motion
 * Proporciona variantes comunes y utilidades para animaciones
 */
export const useAnimations = () => {
  // Variantes comunes para animaciones
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -60,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 60,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Efectos de hover
  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  // Transiciones de página
  const pageTransition = {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    hoverScale,
    pageTransition,
  };
};

export default useAnimations;
