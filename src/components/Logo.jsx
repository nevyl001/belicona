import React from "react";
import { motion } from "framer-motion";
import useAnimations from "../hooks/useAnimations";

const Logo = ({ size = "large", className = "" }) => {
  const { hoverScale } = useAnimations();

  const sizeClasses = {
    small: "px-4 py-2 text-lg",
    medium: "px-6 py-3 text-xl",
    large: "px-8 py-4 text-2xl md:text-3xl",
  };

  const lineHeightClasses = {
    small: "h-1.5",
    medium: "h-2",
    large: "h-2",
  };

  const lineSpacingClasses = {
    small: "space-x-1",
    medium: "space-x-1.5",
    large: "space-x-2",
  };

  return (
    <motion.div
      whileHover={hoverScale}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative ${className}`}
    >
      {/* Banner curvo con fondo negro y bordes dorados */}
      <div
        className={`relative bg-black ${sizeClasses[size]} rounded-2xl border-2 border-yellow-500 shadow-2xl overflow-hidden`}
      >
        {/* Efecto de banner curvo superior */}
        <div className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent rounded-t-2xl"></div>

        {/* Efecto de banner curvo inferior */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent rounded-b-2xl"></div>

        {/* Texto BELICONA con estilo gótico */}
        <div className="relative z-10">
          <span
            className={`text-white font-bold ${sizeClasses[size]} tracking-widest font-logo drop-shadow-lg`}
          >
            BELICONA
          </span>

          {/* Líneas decorativas internas estilo gótico */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`flex ${lineSpacingClasses[size]}`}>
              {/* Líneas verticales punteadas para cada letra */}
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div
                  className={`w-0.5 ${lineHeightClasses[size]} bg-white/40`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Efecto de brillo dorado */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/15 via-transparent to-yellow-500/15 rounded-2xl"></div>

        {/* Efecto de resplandor interno */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent rounded-2xl"></div>
      </div>

      {/* Sombra dorada exterior */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-yellow-500/30 rounded-2xl blur-md -z-10 scale-110"></div>
    </motion.div>
  );
};

export default Logo;
