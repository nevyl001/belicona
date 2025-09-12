import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import becabeLogo from "../assets/becabe.png";

const Footer = () => {
  const navigationLinks = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-nosotros", label: "Sobre Nosotros" },
    { path: "/noticias", label: "Noticias" },
    { path: "/eventos", label: "Eventos" },
    { path: "/productos", label: "Productos" },
    { path: "/contacto", label: "Contacto" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Línea divisoria sutil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Información de la marca */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/" className="group">
                  <motion.img
                    src={becabeLogo}
                    alt="Belicona Logo"
                    className="h-28 w-auto transition-transform duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </motion.div>

              <motion.p
                className="text-gray-300 mb-8 max-w-lg leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Bebidas artesanales que combinan la tradición del agave azul con
                sabores naturales únicos. Nuestros destilados premium ofrecen
                una experiencia de sabor incomparable.
              </motion.p>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => {
                  // Colores característicos de cada red social
                  const getSocialColors = (name) => {
                    switch (name) {
                      case "Instagram":
                        return {
                          bg: "from-pink-500/20 to-purple-600/20",
                          hoverBg: "from-pink-500/40 to-purple-600/40",
                          border: "border-pink-500/30",
                          hoverBorder: "border-pink-500/60",
                          shadow: "shadow-pink-500/30",
                          text: "text-pink-400",
                          hoverText: "text-pink-300",
                        };
                      case "TikTok":
                        return {
                          bg: "from-gray-800/60 to-gray-900/60",
                          hoverBg: "from-gray-700/80 to-gray-800/80",
                          border: "border-gray-600/30",
                          hoverBorder: "border-gray-500/60",
                          shadow: "shadow-gray-500/30",
                          text: "text-gray-300",
                          hoverText: "text-white",
                        };
                      case "Facebook":
                        return {
                          bg: "from-blue-600/20 to-blue-700/20",
                          hoverBg: "from-blue-600/40 to-blue-700/40",
                          border: "border-blue-500/30",
                          hoverBorder: "border-blue-500/60",
                          shadow: "shadow-blue-500/30",
                          text: "text-blue-400",
                          hoverText: "text-blue-300",
                        };
                      default:
                        return {
                          bg: "from-gray-800/60 to-gray-900/60",
                          hoverBg: "from-primary-500/30 to-orange-500/30",
                          border: "border-white/20",
                          hoverBorder: "border-primary-500/50",
                          shadow: "shadow-primary-500/30",
                          text: "text-gray-300",
                          hoverText: "text-white",
                        };
                    }
                  };

                  const colors = getSocialColors(social.name);

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`group relative w-14 h-14 bg-gradient-to-br ${colors.bg} backdrop-blur-sm hover:${colors.hoverBg} rounded-2xl flex items-center justify-center transition-all duration-500 border ${colors.border} hover:${colors.hoverBorder} hover:shadow-2xl hover:${colors.shadow}`}
                      whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span
                        className={`${colors.text} group-hover:${colors.hoverText} transition-all duration-300 group-hover:scale-110`}
                      >
                        {social.icon}
                      </span>
                      {/* Efecto de brillo en hover */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.bg.replace(
                          "/20",
                          "/0"
                        )} via-white/0 ${colors.bg.replace(
                          "/20",
                          "/0"
                        )} group-hover:${colors.bg.replace(
                          "/20",
                          "/20"
                        )} group-hover:via-white/10 group-hover:${colors.bg.replace(
                          "/20",
                          "/20"
                        )} transition-all duration-500 opacity-0 group-hover:opacity-100`}
                      ></div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            {/* Enlaces de navegación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-compressed font-bold mb-6 glow-on-hover"
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                NAVEGACIÓN
              </motion.h3>
              <ul className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      className="group text-gray-300 hover:text-primary-500 transition-all duration-300 font-medium text-lg relative"
                    >
                      <span className="relative z-10">
                        {link.label.toUpperCase()}
                      </span>
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-orange-500 group-hover:w-6 transition-all duration-300"></div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-compressed font-bold mb-6 glow-on-hover"
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                CONTACTO
              </motion.h3>
              <div className="space-y-5">
                <motion.div
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-gray-300 text-lg group-hover:text-primary-500 transition-colors duration-300">
                    info@belicona.com
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-gray-300 text-lg group-hover:text-primary-500 transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Línea divisoria y copyright */}
        <motion.div
          className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Belicona. Todos los derechos
              reservados.
            </motion.p>

            <motion.div
              className="flex space-x-6 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Términos de Uso
              </a>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Cookies
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
