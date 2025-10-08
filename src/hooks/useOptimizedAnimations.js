import { motion } from "framer-motion";

// Hook optimizado para animaciones - solo las que usamos
export const useOptimizedAnimations = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  return {
    fadeInUp,
    fadeInLeft,
    hoverScale,
    pageTransition
  };
};

export default useOptimizedAnimations;