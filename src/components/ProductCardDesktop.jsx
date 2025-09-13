import React, { memo, useState } from "react";
import { motion } from "framer-motion";

// Función para generar enlace de WhatsApp
const generateWhatsAppLink = (productName) => {
  const message = `¡Hola! Me interesa comprar productos Belicona. Específicamente me interesa: ${productName}`;
  const phoneNumber = "525611926751";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const ProductCardDesktop = memo(({ product, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
      {/* Imagen del producto optimizada */}
      <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          decoding="async"
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
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {product.features.map((feature, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800/50 text-gray-300 border border-gray-700"
            >
              {feature}
            </span>
          ))}
        </motion.div>

        {/* Precio y botón */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl font-bold text-white">
            ${product.price} <span className="text-lg text-gray-400">MXN</span>
          </div>
          <motion.a
            href={generateWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            COMPRAR AHORA
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
});

ProductCardDesktop.displayName = "ProductCardDesktop";

export default ProductCardDesktop;
