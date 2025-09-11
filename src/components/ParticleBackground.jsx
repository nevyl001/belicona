import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleBackground = ({ particleCount = 20 }) => {
  const containerRef = useRef(null);

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4, // 4-12px (más visibles)
    delay: Math.random() * 4,
    duration: Math.random() * 6 + 8, // 8-14s (más lentas)
  }));

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary-500/60 to-orange-500/60 shadow-lg"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-15, -30, -15],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
