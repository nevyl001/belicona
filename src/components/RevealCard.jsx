import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useScrollEffects";

const RevealCard = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
  };

  const revealVariants = {
    hidden: directionVariants[direction],
    visible: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      variants={revealVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default RevealCard;
