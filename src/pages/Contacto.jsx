import React, { useState } from "react";
import { motion } from "framer-motion";
import RevealCard from "../components/RevealCard";

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset(); // Limpiar el formulario
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>

      {/* Header */}
      <div className="bg-black py-8 sm:py-12 relative z-10">
        <div className="container-custom">
          <RevealCard direction="up" delay={0.2}>
            <div className="text-center">
              <motion.h1
                className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                CONTACTO
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              >
                Estamos aquí para ayudarte. Ponte en contacto con nosotros y te
                responderemos lo antes posible.
              </motion.p>
            </div>
          </RevealCard>
        </div>
      </div>

      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500">
              <motion.h2
                className="text-2xl font-compressed text-white mb-6 font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                ENVÍANOS UN MENSAJE
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* API Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="75de9697-2834-4d72-9c1d-13dcf6684f2e"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-compressed font-bold text-white mb-2">
                      NOMBRE *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-primary-500/50"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-compressed font-bold text-white mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-primary-500/50"
                      placeholder="tu@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-compressed font-bold text-white mb-2">
                    ASUNTO *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-primary-500/50"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-compressed font-bold text-white mb-2">
                    MENSAJE *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none text-white placeholder-gray-400 transition-all duration-300 hover:border-primary-500/50"
                    placeholder="Cuéntanos más detalles..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white font-compressed font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        ENVIANDO...
                      </div>
                    ) : (
                      "ENVIAR MENSAJE"
                    )}
                  </motion.button>
                </motion.div>

                {/* Mensajes de estado */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <svg
                        className="w-6 h-6 text-green-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-green-400 font-medium">
                      ¡Mensaje enviado correctamente! Te responderemos pronto.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <svg
                        className="w-6 h-6 text-red-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <p className="text-red-400 font-medium">
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-compressed text-white mb-6 font-bold">
                INFORMACIÓN DE CONTACTO
              </h2>
              <p className="text-gray-300 mb-8">
                Puedes contactarnos a través de cualquiera de estos medios.
                Nuestro equipo estará encantado de ayudarte.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6"
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
                  <div className="flex-1">
                    <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                      EMAIL
                    </h3>
                    <a
                      href="mailto:info@belicona.com"
                      className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                    >
                      info@belicona.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6"
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
                  <div className="flex-1">
                    <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                      TELÉFONO
                    </h3>
                    <a
                      href="tel:+525512345678"
                      className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                    >
                      +52 55 1234 5678
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Dirección */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                      DIRECCIÓN
                    </h3>
                    <p className="text-gray-300">
                      Av. Insurgentes Sur 1234, Col. Del Valle
                      <br />
                      Ciudad de México, CDMX 03100
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Horarios */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                      HORARIOS
                    </h3>
                    <p className="text-gray-300">
                      Lunes - Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 10:00 - 16:00
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
