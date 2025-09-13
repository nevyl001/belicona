import React, { memo } from "react";
import { motion } from "framer-motion";

// Función para generar enlace de WhatsApp - Vercel Fix
const generateWhatsAppLink = (productName) => {
  const message = `¡Hola! Me interesa comprar productos Belicona. Específicamente me interesa: ${productName}`;
  const phoneNumber = "525611926751";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const ProductCardDesktop = memo(({ product, index }) => {
  // FORZAR DEPLOYMENT VERCEL - TIMESTAMP: ${new Date().toISOString()}
  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 group ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col lg:flex`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      {/* Imagen del producto */}
      <div className="relative lg:w-1/2 h-96 lg:h-[600px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain scale-110 transition-transform duration-500 group-hover:scale-115"
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
              <motion.div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + idx * 0.1,
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-orange-500 flex items-center justify-center flex-shrink-0"
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
                <span className="text-white text-sm font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Precio y Botón */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Precio */}
          <div className="text-3xl font-bold text-white">
            <span className="text-2xl text-gray-400">$</span>
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
              className="py-3 px-6 rounded-xl font-compressed font-bold text-base transition-all duration-300 bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              COMPRAR AHORA
            </motion.a>
          ) : (
            <motion.button
              className="py-3 px-6 rounded-xl font-compressed font-bold text-base transition-all duration-300 bg-gray-600 text-gray-400 cursor-not-allowed"
              disabled
            >
              AGOTADO
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ProductCardDesktop;
