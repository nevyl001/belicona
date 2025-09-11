import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAnimations from "../hooks/useAnimations";
import logoBelicona from "../assets/LOGO BELICONA.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { fadeInUp, hoverScale } = useAnimations();

  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-nosotros", label: "Sobre Nosotros" },
    { path: "/noticias", label: "Noticias" },
    { path: "/eventos", label: "Eventos" },
    { path: "/productos", label: "Productos" },
    { path: "/contacto", label: "Contacto" },
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      className="bg-black/80 backdrop-blur-xl shadow-2xl border-b border-gradient-to-r from-primary-500/20 via-yellow-500/30 to-orange-500/20 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid transparent",
        backgroundImage:
          "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%), linear-gradient(90deg, rgba(237,1,127,0.2) 0%, rgba(255,183,27,0.3) 50%, rgba(255,115,0,0.2) 100%)",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            className="px-4"
            whileHover={hoverScale}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/"
              className="transition-all duration-300 hover:scale-105"
            >
              <img
                src={logoBelicona}
                alt="BELICONA Logo"
                className="h-16 w-auto drop-shadow-lg"
              />
            </Link>
          </motion.div>

          {/* Menú de escritorio */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-3 rounded-xl text-sm font-compressed font-bold tracking-wider transition-all duration-300 overflow-hidden ${
                    isActiveRoute(item.path)
                      ? "text-white bg-gradient-to-r from-primary-500/20 to-yellow-500/20 border border-primary-500/30 shadow-lg shadow-primary-500/20"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {/* Efecto de fondo hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                  {/* Underline animado */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-yellow-500 group-hover:w-full transition-all duration-300"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  <span className="relative z-10">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón de menú móvil */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <motion.svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gradient-to-r from-primary-500/20 via-yellow-500/30 to-orange-500/20"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              <motion.div
                className="px-4 pt-4 pb-6 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative group"
                  >
                    <Link
                      to={item.path}
                      className={`relative flex items-center px-4 py-3 rounded-xl text-base font-compressed font-bold tracking-wider transition-all duration-300 overflow-hidden ${
                        isActiveRoute(item.path)
                          ? "text-white bg-gradient-to-r from-primary-500/20 to-yellow-500/20 border border-primary-500/30 shadow-lg shadow-primary-500/20"
                          : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {/* Efecto de fondo hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                      {/* Underline animado */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-yellow-500 group-hover:w-full transition-all duration-300"></div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
