import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";

/**
 * Componente que automáticamente hace scroll hacia arriba
 * cuando cambia la ruta en la aplicación
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;
