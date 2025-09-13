import React, { useMemo } from "react";
import { motion } from "framer-motion";
import RevealCard from "../components/RevealCard";
import ProductCardMobile from "../components/ProductCardMobile";
import ProductCardDesktop from "../components/ProductCardDesktop";

const Productos = () => {
  // FORZAR DEPLOYMENT VERCEL - TIMESTAMP: ${new Date().toISOString()}
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
                <ProductCardDesktop product={product} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
