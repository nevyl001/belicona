import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Award, Users } from "lucide-react";
import useAnimations from "../hooks/useAnimations";
import video13 from "../assets/13.mp4";

const Home = () => {
  const {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    hoverScale,
    hoverShadow,
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
        <div className="absolute inset-0 z-0">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bubbly text-white mb-6 tracking-wider"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              >
                LA REVOLUCIÓN{" "}
                <span className="bg-gradient-to-r from-primary-500 to-red-500 bg-clip-text text-transparent font-bubbly">
                  BELICONA
                </span>
              </motion.h1>
              <motion.p
                className="text-3xl md:text-4xl text-yellow-500 mb-8 font-fredoka font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              >
                MÁS QUE UNA BEBIDA, ES UN ESTILO DE VIDA
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
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
                <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                  <Link to="/productos">
                    <button className="bg-primary-500 hover:bg-red-500 text-white font-compressed font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                      DESCUBRE BELICONA
                    </button>
                  </Link>
                </motion.div>
                <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                  <Link to="/contacto">
                    <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-compressed font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                      ÚNETE AHORA
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative overflow-hidden">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-compressed text-white mb-8 font-bold"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
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
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
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
                      className="text-2xl md:text-3xl font-compressed text-white mb-6 text-center font-bold group-hover:text-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
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

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-primary-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              ¿LISTO PARA SER PARTE DE LA REVOLUCIÓN?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
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
                <Link to="/noticias">
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
    </motion.div>
  );
};

export default Home;
