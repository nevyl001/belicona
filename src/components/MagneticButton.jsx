import React from "react";
import { motion } from "framer-motion";
import { useMagneticEffect, useRippleEffect } from "../hooks/useScrollEffects";

const MagneticButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const [magneticRef, magneticPosition] = useMagneticEffect(0.8);
  const rippleRef = useRippleEffect();

  const baseClasses = `
    relative overflow-hidden rounded-2xl font-compressed font-bold 
    transition-all duration-300 transform-gpu
    focus:outline-none focus:ring-4 focus:ring-primary-500/50
    magnetic-hover ripple-effect
  `;

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white shadow-2xl hover:shadow-3xl",
    secondary:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
    xl: "py-5 px-10 text-xl",
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <motion.button
      ref={(el) => {
        magneticRef.current = el;
        rippleRef.current = el;
      }}
      className={combinedClasses}
      onClick={onClick}
      style={{
        "--magnetic-x": `${magneticPosition.x}px`,
        "--magnetic-y": `${magneticPosition.y}px`,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      {...props}
    >
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>

      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export default MagneticButton;
