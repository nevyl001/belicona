import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import RevealCard from "../components/RevealCard";

const NoticiaDetalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Datos de la noticia (en una app real vendría de una API)
  const noticia = {
    id: 1,
    title: "¡Nuevo video de promoción con Abelito!",
    excerpt:
      "Estamos emocionados de presentar nuestro nuevo video promocional protagonizado por Abelito. Una producción llena de diversión, sabor y la energía única que caracteriza a Belicona.",
    image: "/videobeli.JPG",
    author: "Equipo Belicona",
    date: "2024-01-20",
    category: "Promoción",
    readTime: "3 min",
    content: `
      <p>¡La espera ha terminado! En Belicona estamos súper emocionados de presentar nuestro nuevo video promocional protagonizado por nuestro querido Abelito. Esta producción está llena de diversión, sabor y toda la energía única que caracteriza a nuestra marca.</p>
      
      <p>Abelito ha sido una figura icónica en la promoción de Belicona, y este nuevo video promete ser una experiencia visual increíble que captura la esencia de nuestra bebida favorita. Con su carisma y personalidad única, Abelito nos llevará en un viaje lleno de momentos memorables.</p>
      
      <h3>¿Qué esperar del nuevo video?</h3>
      <ul>
        <li>Producción de alta calidad con efectos visuales impresionantes</li>
        <li>Abelito mostrando su personalidad única y divertida</li>
        <li>Momentos llenos de diversión y entretenimiento</li>
        <li>Música pegajosa que se quedará en tu cabeza</li>
        <li>La energía característica de Belicona en cada escena</li>
      </ul>
      
      <p>Nuestro equipo creativo ha trabajado incansablemente para crear un video que no solo promocione nuestros productos, sino que también genere una conexión emocional con nuestros consumidores. Abelito ha sido el protagonista perfecto para transmitir los valores de diversión, calidad y autenticidad que representan a Belicona.</p>
      
      <p>El video estará disponible muy pronto en todas nuestras plataformas digitales y canales oficiales. ¡Mantente atento a nuestras redes sociales para no perderte el lanzamiento de este contenido increíble!</p>
      
      <p>¡Esperen pronto este contenido que promete ser una verdadera obra maestra del entretenimiento y la promoción!</p>
    `,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video de ejemplo
    gallery: ["/videobeli.JPG", "/im1.JPG", "/im2.JPG"],
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
              <motion.button
                onClick={() => navigate("/noticias")}
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
                VOLVER A NOTICIAS
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
                {noticia.title}
              </motion.h1>

              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {noticia.author}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
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
                  {new Date(noticia.date).toLocaleDateString("es-ES")}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
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
                  {noticia.readTime}
                </span>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Imagen principal */}
          <motion.div
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={noticia.image}
              alt={noticia.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Categoría */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg">
              {noticia.category}
            </span>
          </motion.div>

          {/* Contenido del artículo */}
          <motion.article
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: noticia.content }}
          />

          {/* Video */}
          <motion.div
            className="my-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
              Video Relacionado
            </h3>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="400"
                src={noticia.video}
                title="Video de Belicona"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Galería de imágenes */}
          <motion.div
            className="my-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-compressed text-white mb-6 font-bold">
              Galería de Imágenes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {noticia.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Botón de regreso */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => navigate("/noticias")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 text-white font-compressed font-bold text-lg rounded-full hover:from-primary-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VOLVER A NOTICIAS
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

      {/* Modal para imagen en grande */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Botón de cerrar */}
            <motion.button
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NoticiaDetalle;
