import React from "react";
import { motion } from "framer-motion";

const NeumorphicCard = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  ...props
}) => {
  const variants = {
    default: "bg-gray-100 shadow-neumorphic",
    dark: "bg-gray-800 shadow-neumorphic-dark",
    colored:
      "bg-gradient-to-br from-primary-100 to-orange-100 shadow-neumorphic-colored",
  };

  return (
    <motion.div
      className={`
        ${variants[variant]} 
        ${hover ? "hover:shadow-neumorphic-hover" : ""} 
        rounded-2xl p-6 transition-all duration-300 
        ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -2 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default NeumorphicCard;
