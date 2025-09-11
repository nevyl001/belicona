import React from "react";
import { motion } from "framer-motion";

/**
 * Componente Card reutilizable
 * @param {Object} props - Propiedades de la tarjeta
 * @param {string} props.variant - Variante de la tarjeta ('default', 'elevated', 'outlined')
 * @param {boolean} props.hover - Si la tarjeta debe tener efecto hover
 * @param {boolean} props.clickable - Si la tarjeta es clickeable
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido de la tarjeta
 * @param {Function} props.onClick - Función a ejecutar al hacer clic
 */
const Card = ({
  variant = "default",
  hover = false,
  clickable = false,
  className = "",
  children,
  onClick,
  ...props
}) => {
  // Clases base de la tarjeta
  const baseClasses =
    "bg-gray-900 rounded-lg border border-gray-800 overflow-hidden";

  // Variantes de estilo
  const variants = {
    default: "shadow-sm",
    elevated: "shadow-lg",
    outlined: "shadow-none border-2",
  };

  // Efectos interactivos
  const interactiveClasses =
    hover || clickable
      ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
      : "";

  // Cursor para elementos clickeables
  const cursorClasses = clickable ? "cursor-pointer" : "";

  // Combinar todas las clases
  const cardClasses = `${baseClasses} ${variants[variant]} ${interactiveClasses} ${cursorClasses} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={
        hover || clickable
          ? {
              scale: 1.02,
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }
          : {}
      }
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Componente CardHeader para el encabezado de la tarjeta
 */
export const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-800 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Componente CardBody para el cuerpo de la tarjeta
 */
export const CardBody = ({ className = "", children, ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Componente CardFooter para el pie de la tarjeta
 */
export const CardFooter = ({ className = "", children, ...props }) => (
  <div
    className={`px-6 py-4 border-t border-gray-800 bg-gray-800 ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * Componente CardImage para imágenes en la tarjeta
 */
export const CardImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
  ...props
}) => (
  <div className={`${aspectRatio} overflow-hidden`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  </div>
);

export default Card;
