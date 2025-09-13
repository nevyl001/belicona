import React, { useMemo } from "react";
import { motion } from "framer-motion";
import RevealCard from "../components/RevealCard";
import ProductCardMobile from "../components/ProductCardMobile";
import ProductCardDesktop from "../components/ProductCardDesktop";

const Productos = () => {
  // Memoizar el array de productos para evitar re-renders innecesarios
  const products = useMemo(
    () => [
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
    ],
    []
  ); // Dependencias vacías ya que los productos no cambian

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
              {/* Versión móvil */}
              <div className="block xl:hidden">
                <ProductCardMobile product={product} index={index} />
              </div>

              {/* Versión desktop */}
              <div className="hidden xl:block">
                <motion.div
                  className={`bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-500 group relative ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex`}
                  style={{
                    boxShadow:
                      "0 0 30px rgba(236, 72, 153, 0.2), 0 0 60px rgba(249, 115, 22, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  {/* Imagen del producto */}
                  <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                      loading="eager"
                      fetchPriority="high"
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
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {product.name}
                    </motion.h3>

                    {/* Descripción */}
                    <motion.p
                      className="text-gray-300 mb-6 leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {product.description}
                    </motion.p>

                    {/* Características */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-gray-300 text-sm mb-3 font-medium">
                        Características:
                      </h4>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-white text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Precio y botón */}
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl font-bold text-orange-500">
                        ${product.price}.00
                      </div>
                      <motion.a
                        href={`https://wa.me/525611926751?text=¡Hola! Me interesa comprar productos Belicona. Específicamente me interesa: ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        COMPRAR AHORA
                      </motion.a>
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
