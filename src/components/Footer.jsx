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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.66-4.44V2h-3v9.67a5.33 5.33 0 0 1-5.34 5.34c-2.94 0-5.33-2.4-5.33-5.34s2.4-5.33 5.33-5.33c.37 0 .72.04 1.06.11v3.24a2.09 2.09 0 0 0-1.06-.29 2.09 2.09 0 0 0-2.09 2.09c0 1.15.94 2.09 2.09 2.09s2.09-.94 2.09-2.09V2h3v9.67a8.33 8.33 0 0 0 8.33 8.33c4.6 0 8.33-3.73 8.33-8.33s-3.73-8.33-8.33-8.33z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="group relative w-12 h-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:from-primary-500/20 hover:to-orange-500/20 rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/20"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-400 group-hover:text-primary-500 transition-colors duration-300">
                      {social.icon}
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
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
