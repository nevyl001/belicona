import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import RevealCard from "../components/RevealCard";

const NoticiaDetalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Datos de la noticia (en una app real vendría de una API)
  const noticia = {
    id: 1,
    title: "Belicona lanza nueva línea de productos sostenibles",
    excerpt:
      "Nuestra nueva colección está diseñada con materiales 100% reciclables y procesos de producción eco-friendly.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "María González",
    date: "2024-01-15",
    category: "Sostenibilidad",
    readTime: "5 min",
    content: `
      <p>En Belicona, estamos comprometidos con el futuro del planeta. Por eso, nos complace anunciar el lanzamiento de nuestra nueva línea de productos sostenibles, diseñada con materiales 100% reciclables y procesos de producción eco-friendly.</p>
      
      <p>Esta iniciativa representa un paso fundamental en nuestro compromiso con la sostenibilidad ambiental. Cada producto de nuestra nueva línea ha sido cuidadosamente diseñado para minimizar el impacto ambiental mientras mantenemos la calidad excepcional que caracteriza a Belicona.</p>
      
      <h3>Características de la nueva línea:</h3>
      <ul>
        <li>Materiales 100% reciclables</li>
        <li>Procesos de producción con cero emisiones</li>
        <li>Packaging biodegradable</li>
        <li>Certificación de sostenibilidad internacional</li>
      </ul>
      
      <p>Nuestro equipo de investigación y desarrollo ha trabajado incansablemente durante más de dos años para crear productos que no solo cumplan con los más altos estándares de calidad, sino que también respeten y protejan nuestro medio ambiente.</p>
      
      <p>Esta nueva línea estará disponible en todos nuestros puntos de venta a partir del próximo mes, y esperamos que nuestros clientes se unan a nosotros en este importante paso hacia un futuro más sostenible.</p>
    `,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video de ejemplo
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
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
    </div>
  );
};

export default NoticiaDetalle;
