import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook personalizado que automáticamente hace scroll hacia arriba
 * cuando cambia la ruta/página en la aplicación
 */
const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll hacia arriba cuando cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Scroll suave
    });
  }, [location.pathname]); // Se ejecuta cuando cambia la ruta

  // También podemos exponer una función manual si se necesita
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return { scrollToTop };
};

export default useScrollToTop;
