import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Award, Users } from "lucide-react";
import useAnimations from "../hooks/useAnimations";
import ParticleBackground from "../components/ParticleBackground";
import MagneticButton from "../components/MagneticButton";
import RevealCard from "../components/RevealCard";
import video13 from "../assets/13.mp4";
// Usar imagen optimizada
const p1 = "/optimized/p1-specific.webp";

const Home = () => {
  const {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    hoverScale,
  } = useAnimations();

  const features = [
    {
      icon: <Zap className="w-12 h-12 stroke-current" />,
      title: "Innovación",
      description:
        "Pioneros en crear experiencias únicas que conectan tradición y modernidad en cada sorbo.",
      gradient: "from-primary-500 to-red-500",
    },
    {
      icon: <Award className="w-12 h-12 stroke-current" />,
      title: "Calidad",
      description:
        "Cada producto es una obra de arte artesanal que refleja nuestra pasión por la excelencia.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <Users className="w-12 h-12 stroke-current" />,
      title: "Comunidad",
      description:
        "Una familia global que celebra la vida auténtica y las conexiones genuinas entre personas.",
      gradient: "from-green-500 to-accent-500",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Hero Section con Video de Fondo */}
      <section className="relative h-screen overflow-hidden">
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0 -mt-12">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video13} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Overlay gradiente para mejor legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Contenido sobre el video */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:mx-auto">
            <motion.div
              className="max-w-5xl mx-auto text-center py-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bubbly text-white mb-8 tracking-wider glow-on-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                style={{
                  textShadow:
                    "0 0 30px rgba(237, 1, 127, 0.8), 0 0 60px rgba(255, 183, 27, 0.6), 0 0 90px rgba(255, 242, 0, 0.4)",
                }}
              >
                LA REVOLUCIÓN{" "}
                <span className="bg-gradient-to-r from-primary-500 to-red-500 bg-clip-text text-transparent font-bubbly">
                  BELICONA
                </span>
              </motion.h1>
              <motion.p
                className="text-3xl md:text-4xl text-yellow-500 mb-8 font-fredoka font-bold glow-on-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                style={{
                  textShadow:
                    "0 0 20px rgba(255, 183, 27, 0.8), 0 0 40px rgba(255, 242, 0, 0.6)",
                }}
              >
                MÁS QUE UNA BEBIDA, ES UN ESTILO DE VIDA
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
              >
                Una{" "}
                <span className="text-primary-500 font-bold">
                  comunidad global
                </span>{" "}
                que celebra la vida auténtica. Un{" "}
                <span className="text-yellow-500 font-bold">
                  estilo de vida
                </span>{" "}
                que conecta tradición y modernidad, creando experiencias únicas
                que unen personas y culturas.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
              >
                <Link to="/productos">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="animate-morphing pulse-glow glow-on-hover"
                  >
                    DESCUBRE BELICONA
                  </MagneticButton>
                </Link>
                <Link to="/contacto">
                  <MagneticButton
                    variant="secondary"
                    size="lg"
                    className="animate-morphing pulse-glow glow-on-hover"
                  >
                    ÚNETE AHORA
                  </MagneticButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bebida Destacada Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
        {/* Partículas sutiles solo en esta sección */}
        <ParticleBackground particleCount={25} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Título principal centrado */}
          <RevealCard direction="up" delay={0.2}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                NUESTRAS BEBIDAS
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-fredoka leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                Descubre la auténtica tradición mexicana en cada sorbo.
                <span className="text-primary-400 font-bold">
                  {" "}
                  100% mexicano
                </span>
                ,<span className="text-yellow-400 font-bold"> artesanal</span> y
                <span className="text-orange-400 font-bold"> premium</span>.
              </motion.p>
            </div>
          </RevealCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[700px] sm:min-h-[800px] md:min-h-[900px]">
            {/* Contenido de texto */}
            <motion.div
              className="space-y-8 flex flex-col justify-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              {/* Logo y título */}
              <div className="space-y-4">
                <motion.div
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-black border-2 border-white px-6 py-3 inline-block">
                    <span className="text-white font-compressed font-bold text-lg tracking-wider">
                      PERFIL DEL SABOR
                    </span>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  SABOR
                  <br />
                  <span className="text-green-400">PEPINO - LIMÓN</span>
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-gray-300 font-fredoka font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  DESTILADO DE PULPA NATURAL
                </motion.p>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/productos"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  ¿DÓNDE COMPRAR?
                  <motion.span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    ↓
                  </motion.span>
                </Link>
              </motion.div>

              {/* Descripción */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 font-fredoka leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Es una mezcla de pulpa artesanal de pepino con jugo de limón y
                destilado de agave azul, dando como resultado una bebida
                sumamente refrescante.
              </motion.p>
            </motion.div>

            {/* Imagen del producto */}
            <motion.div
              className="relative flex items-center justify-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.img
                  src={p1}
                  alt="Belicona Pepino-Limón"
                  className="w-full h-auto max-h-[900px] object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Badges informativos */}
                <motion.div
                  className="absolute top-4 left-4 space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-black border border-white px-3 py-1">
                    <span className="text-white font-compressed font-bold text-sm">
                      5.0 ALC. VOL.
                    </span>
                  </div>
                  <div className="bg-black border border-white px-3 py-1">
                    <span className="text-white font-compressed font-bold text-xs">
                      AGAVE AZUL
                    </span>
                  </div>
                  <div className="bg-black border border-white px-3 py-1">
                    <span className="text-white font-compressed font-bold text-xs">
                      PULPA NATURAL
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/productos"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                DESCUBRE TODAS NUESTRAS BEBIDAS
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.8), 0 0 40px rgba(255, 183, 27, 0.6), 0 0 60px rgba(255, 242, 0, 0.4)",
              }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              Únete a una comunidad que valora la autenticidad, la innovación y
              la conexión humana
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={staggerItem}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              >
                {/* Glassmorphism card */}
                <div className="relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      index === 0
                        ? "from-primary-500/10 to-red-500/5"
                        : index === 1
                        ? "from-orange-500/10 to-yellow-500/5"
                        : "from-green-500/10 to-accent-500/5"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Modern minimalist icon with gradient stroke */}
                    <motion.div
                      className="flex justify-center mb-8"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                    >
                      <motion.div
                        className={`relative group/icon`}
                        whileHover={{
                          scale: 1.15,
                          transition: { duration: 0.2, ease: "easeInOut" },
                        }}
                      >
                        {/* Gradient background for glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover/icon:opacity-20 blur-xl transition-opacity duration-300 rounded-full`}
                        ></div>

                        {/* Simple icon with solid gradient color */}
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                            feature.title === "Innovación"
                              ? "bg-gradient-to-br from-primary-500 to-red-500"
                              : feature.title === "Calidad"
                              ? "bg-gradient-to-br from-orange-500 to-yellow-500"
                              : "bg-gradient-to-br from-green-500 to-accent-500"
                          } shadow-lg group-hover/icon:shadow-2xl transition-all duration-300`}
                        >
                          <div className="text-white">{feature.icon}</div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl md:text-3xl font-compressed text-white mb-6 text-center font-bold group-hover:text-primary-500 transition-colors duration-300 glow-on-hover"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        textShadow:
                          "0 0 10px rgba(237, 1, 127, 0.6), 0 0 20px rgba(255, 183, 27, 0.4), 0 0 30px rgba(255, 242, 0, 0.3)",
                      }}
                    >
                      {feature.title.toUpperCase()}
                    </motion.h3>

                    {/* Description with lighter typography */}
                    <p className="text-gray-300 text-center leading-relaxed font-light text-lg group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl ${
                      index === 0
                        ? "bg-gradient-to-br from-primary-500/20 to-red-500/10"
                        : index === 1
                        ? "bg-gradient-to-br from-orange-500/20 to-yellow-500/10"
                        : "bg-gradient-to-br from-green-500/20 to-accent-500/10"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Puntos de Venta Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black border-t border-primary-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.8), 0 0 40px rgba(255, 183, 27, 0.6), 0 0 60px rgba(255, 242, 0, 0.4)",
              }}
            >
              PUNTOS DE VENTA
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Encuentra{" "}
              <span className="text-primary-500 font-bold">Belicona</span>{" "}
              cerca de ti. Descubre dónde puedes disfrutar de nuestra bebida
              auténtica y formar parte de la revolución.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-500/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-primary-500/20 shadow-xl">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1g0MCQVg2rc5w-owguBiuHDjlUxQ6cos&hl=es&ehbc=2E312F&z=11"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Puntos de Venta Belicona"
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.google.com/maps/d/u/0/viewer?mid=1g0MCQVg2rc5w-owguBiuHDjlUxQ6cos&ll=19.4866516002936%2C-99.09437386429877&z=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 hover:bg-red-500 text-white font-compressed font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  VER EN GOOGLE MAPS
                </a>
              </motion.div>
              
              <div className="text-gray-400 text-sm text-center sm:text-left">
                <p className="font-medium">📍 Azcapotzalco, CDMX</p>
                <p className="text-xs">Actualizado constantemente</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black border-t border-primary-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.8), 0 0 40px rgba(255, 183, 27, 0.6), 0 0 60px rgba(255, 242, 0, 0.4)",
              }}
            >
              ¿LISTO PARA SER PARTE DE LA REVOLUCIÓN?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Únete a la revolución del sabor auténtico y forma parte de una
              comunidad que celebra la vida
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Link to="/contacto">
                  <button className="bg-primary-500 hover:bg-red-500 text-white font-compressed font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                    ÚNETE A LA COMUNIDAD
                  </button>
                </Link>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Link to="/eventos">
                  <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-compressed font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                    VIVE LA EXPERIENCIA
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram - Sigue a El Abelito */}
      <section className="py-20 relative z-10">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.8), 0 0 40px rgba(255, 183, 27, 0.6), 0 0 60px rgba(255, 242, 0, 0.4)",
              }}
            >
              SIGUE A EL ABELITO
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mantente al día con los últimos pasos de nuestro querido host{" "}
              <span className="text-primary-500 font-bold">El Abelito</span>{" "}
              en Instagram. ¡No te pierdas sus reels más divertidos!
            </p>
          </motion.div>

          {/* Instagram Reels Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Reel 1 */}
            <motion.a
              href="https://www.instagram.com/p/DQCbnWADbiW/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 block"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-gradient-to-br from-primary-500/20 to-orange-500/20">
                <iframe
                  src="https://www.instagram.com/p/DQCbnWADbiW/embed/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="w-full h-full"
                  title="Reel de El Abelito 1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Fallback content si el embed no funciona */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Reel de El Abelito</h3>
                  <p className="text-gray-300 text-sm mb-4">Haz clic para ver en Instagram</p>
                  <div className="flex items-center text-primary-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Ver en Instagram
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium text-sm">@el_abelito_oficial</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Reel</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Reel 2 */}
            <motion.a
              href="https://www.instagram.com/reel/DPpXGOPDbWw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 block"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DPpXGOPDbWw/embed/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="w-full h-full"
                  title="Reel de El Abelito 2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium text-sm">@el_abelito_oficial</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Reel</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Reel 3 */}
            <motion.a
              href="https://www.instagram.com/reel/DPwtXCYjj19/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 block"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <iframe
                  src="https://www.instagram.com/reel/DPwtXCYjj19/embed/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="w-full h-full"
                  title="Reel de El Abelito 3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium text-sm">@el_abelito_oficial</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Reel</span>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Botón para seguir en Instagram */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.instagram.com/el_abelito_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              SEGUIR EN INSTAGRAM
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
