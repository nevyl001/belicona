import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  offset = 0,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset * -1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  const transform =
    direction === "up"
      ? {
          y: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
        }
      : direction === "down"
      ? {
          y: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]),
        }
      : direction === "left"
      ? {
          x: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
        }
      : {
          x: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]),
        };

  return (
    <motion.div
      ref={ref}
      className={`parallax-slow ${className}`}
      style={{
        y: transform.y || transform.x,
        opacity,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
