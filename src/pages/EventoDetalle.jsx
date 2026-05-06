import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import RevealCard from "../components/RevealCard";
import { getEventoById } from "../data/eventos";

function whatsappHref(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

function formatEventDate(dateISO) {
  return new Date(`${dateISO}T12:00:00`).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const EventoDetalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const evento = useMemo(() => getEventoById(id), [id]);
  const waLink = evento ? whatsappHref(evento.phone) : null;

  if (!evento) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5" />
        <motion.div
          className="relative z-10 text-center max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-compressed text-white font-bold mb-4">
            Evento no encontrado
          </h1>
          <p className="text-gray-400 mb-8">
            Es posible que el enlace esté desactualizado o que el evento ya no
            esté disponible.
          </p>
          <motion.button
            type="button"
            onClick={() => navigate("/eventos")}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VOLVER A EVENTOS
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const gallery = evento.gallery?.length ? evento.gallery : [];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5"></div>

      <div className="bg-black py-8 sm:py-12 relative z-10">
        <div className="container-custom">
          <RevealCard direction="up" delay={0.2}>
            <div className="text-center">
              <motion.button
                type="button"
                onClick={() => navigate("/eventos")}
                className="inline-flex items-center text-primary-500 hover:text-orange-500 mb-6 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                VOLVER A EVENTOS
              </motion.button>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-compressed text-white mb-6 font-bold glow-on-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  textShadow:
                    "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                }}
              >
                {evento.title}
              </motion.h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-left capitalize">
                    {formatEventDate(evento.dateISO)}
                  </span>
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 flex-shrink-0"
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
                  {evento.time}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 flex-shrink-0"
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
                  {evento.location}
                </span>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>

      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={evento.image}
              alt={evento.title}
              className="w-full h-80 md:h-[500px] lg:h-[600px] object-contain rounded-xl bg-black/20"
            />
          </motion.div>

          <motion.div
            className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-compressed text-white mb-2 font-bold">
                Categoría
              </h3>
              <p className="text-primary-500 font-medium">{evento.category}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-compressed text-white mb-2 font-bold">
                Precio
              </h3>
              <p className="text-orange-500 font-bold text-xl">
                {evento.price}
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-compressed text-white mb-2 font-bold">
                Capacidad
              </h3>
              <p className="text-gray-300 font-medium text-base md:text-lg">
                {evento.capacity}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg">
              {evento.category}
            </span>
          </motion.div>

          <motion.article
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: evento.content }}
          />

          {gallery.length > 0 && (
            <motion.section
              className="mt-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              aria-label="Galería del evento"
            >
              <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
                Galería
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {gallery.map((src, index) => (
                  <motion.div
                    key={src}
                    className="rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[3/4]"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={src}
                      alt={`${evento.title} — imagen ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          <motion.div
            className="my-12 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
              Información de Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Organizador
                </h4>
                <p className="text-gray-300 text-base md:text-lg">
                  {evento.organizer}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Contacto
                </h4>
                <p className="text-gray-300">{evento.contact}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Teléfono / WhatsApp
                </h4>
                <p className="text-gray-300 text-base md:text-lg space-y-2">
                  <a
                    href={`tel:${String(evento.phone).replace(/\s/g, "")}`}
                    className="block text-primary-500 hover:text-orange-400 transition-colors"
                  >
                    {evento.phone}
                  </a>
                  {waLink && (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      Abrir WhatsApp
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Ubicación
                </h4>
                <p className="text-gray-300 text-base md:text-lg">
                  {evento.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="button"
              onClick={() => navigate("/eventos")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VOLVER A EVENTOS
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalle;
