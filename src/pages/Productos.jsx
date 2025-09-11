import React from "react";

const Productos = () => {
  const products = [
    {
      id: 1,
      name: "Belicona Pepino-Limón",
      description:
        "Destilado de agave azul con pulpa natural de pepino y limón. Refrescante y único.",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Destilados",
      features: ["Eco-friendly", "Alta calidad", "Sabor natural"],
      inStock: true,
    },
    {
      id: 2,
      name: "Belicona Maracuyá",
      description:
        "Mezcla perfecta de agave azul con la dulzura tropical del maracuyá.",
      price: 319.99,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Destilados",
      features: ["Sabor tropical", "Premium", "Artesanal"],
      inStock: true,
    },
    {
      id: 3,
      name: "Belicona Cantarito",
      description:
        "Inspirado en la tradición mexicana, con notas cítricas y especiadas.",
      price: 279.99,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Destilados",
      features: ["Tradicional", "Especiado", "Único"],
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              PRODUCTOS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre nuestra gama completa de bebidas artesanales de alta
              calidad
            </p>
          </div>
        </div>
      </div>

      {/* Productos */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500 text-white">
                    {product.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      product.inStock
                        ? "bg-accent-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {product.inStock ? "EN STOCK" : "AGOTADO"}
                  </span>
                </div>

                <h3 className="text-xl font-compressed text-white mb-2 font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Características:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-2xl font-bold text-primary-600 mb-4">
                  €{product.price.toFixed(2)}
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    product.inStock
                      ? "bg-primary-500 hover:bg-red-500 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Comprar" : "Agotado"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
