import React from "react";
import { motion } from "framer-motion";
import RevealCard from "../components/RevealCard";
import { LazyProductCardMobile } from "../components/LazyComponent";

// Función para generar enlace de WhatsApp
const generateWhatsAppLink = (productName) => {
  const message = `¡Hola! Me interesa comprar productos Belicona. Específicamente me interesa: ${productName}`;
  const phoneNumber = "525611926751";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const Productos = () => {
  const products = [
    {
      id: 1,
      name: "Belicona Pepino-Limón",
      description:
        "Destilado de agave azul con pulpa natural de pepino y limón. Refrescante y único sabor que combina la frescura del pepino con la acidez del limón.",
      price: 35,
      image: "/optimized/p2.webp",
      category: "Destilados",
      features: ["Eco-friendly", "Alta calidad", "Sabor natural"],
      inStock: true,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      name: "Belicona Maracuyá",
      description:
        "Mezcla perfecta de agave azul con la dulzura tropical del maracuyá. Una experiencia exótica que transporta tus sentidos a los trópicos.",
      price: 35,
      image: "/optimized/m1.webp",
      category: "Destilados",
      features: ["Sabor tropical", "Premium", "Artesanal"],
      inStock: true,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      id: 3,
      name: "Belicona Cantarito",
      description:
        "Inspirado en la tradición mexicana, con notas cítricas y especiadas. Un homenaje a las raíces culturales de México en cada sorbo.",
      price: 35,
      image: "/optimized/c1.webp",
      category: "Destilados",
      features: ["Tradicional", "Especiado", "Único"],
      inStock: true,
      gradient: "from-red-500 to-pink-500",
    },
  ];

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
                PRODUCTOS
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              >
                Descubre nuestra gama completa de bebidas artesanales de alta
                calidad
              </motion.p>
            </div>
          </RevealCard>
        </div>
      </div>

      {/* Productos */}
      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="space-y-12">
          {products.map((product, index) => (
            <div key={product.id}>
              {/* Versión móvil - Solo se muestra en pantallas pequeñas */}
              <div className="block xl:hidden">
                <LazyProductCardMobile product={product} index={index} />
              </div>

              {/* Versión escritorio - Solo se muestra en pantallas grandes */}
              <div className="hidden xl:block">
                <motion.div
                  className={`bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  {/* Imagen del producto */}
                  <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>

                    {/* Badge de categoría */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg">
                        {product.category}
                      </span>
                    </div>

                    {/* Badge de stock */}
                    <div className="absolute top-6 right-6">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-lg ${
                          product.inStock
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {product.inStock ? "EN STOCK" : "AGOTADO"}
                      </span>
                    </div>
                  </div>

                  {/* Contenido del producto */}
                  <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                    {/* Título del producto */}
                    <motion.h3
                      className="text-4xl font-compressed text-white mb-4 font-bold glow-on-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        textShadow:
                          "0 0 20px rgba(237, 1, 127, 0.5), 0 0 40px rgba(255, 183, 27, 0.3)",
                      }}
                    >
                      {product.name}
                    </motion.h3>

                    {/* Descripción */}
                    <motion.p
                      className="text-gray-300 mb-6 leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {product.description}
                    </motion.p>

                    {/* Características */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-medium text-gray-400 mb-4">
                        Características:
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-300 bg-gray-800/50 rounded-lg p-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.6 + index * 0.1 + featureIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="w-5 h-5 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full mr-3 flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg
                                className="w-3 h-3 text-white"
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
                            </motion.div>
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Precio y Botón */}
                    <motion.div
                      className="flex items-center justify-between gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Precio */}
                      <div className="text-4xl font-bold text-white">
                        <span className="text-3xl text-gray-400">$</span>
                        <span className="bg-gradient-to-r from-primary-500 to-orange-500 bg-clip-text text-transparent">
                          {product.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Botón de compra */}
                      {product.inStock ? (
                        <motion.a
                          href={generateWhatsAppLink(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-4 px-8 rounded-xl font-compressed font-bold text-lg transition-all duration-300 bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl inline-block"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          COMPRAR AHORA
                        </motion.a>
                      ) : (
                        <motion.button
                          className="py-4 px-8 rounded-xl font-compressed font-bold text-lg transition-all duration-300 bg-gray-600 text-gray-400 cursor-not-allowed"
                          disabled
                        >
                          AGOTADO
                        </motion.button>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
