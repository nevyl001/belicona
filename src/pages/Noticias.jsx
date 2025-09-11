import React from "react";

const Noticias = () => {
  const news = [
    {
      id: 1,
      title: "Belicona lanza nueva línea de productos sostenibles",
      excerpt:
        "Nuestra nueva colección está diseñada con materiales 100% reciclables y procesos de producción eco-friendly.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "María González",
      date: "2024-01-15",
      category: "Sostenibilidad",
      readTime: "3 min",
    },
    {
      id: 2,
      title: "Innovación tecnológica en nuestros procesos de fabricación",
      excerpt:
        "Hemos implementado inteligencia artificial y automatización avanzada para mejorar la eficiencia.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Carlos Ruiz",
      date: "2024-01-12",
      category: "Tecnología",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Nuevo centro de investigación y desarrollo inaugurado",
      excerpt:
        "Nuestro nuevo centro de I+D cuenta con laboratorios de última generación y un equipo especializado.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Ana Martínez",
      date: "2024-01-10",
      category: "Investigación",
      readTime: "4 min",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black py-8 sm:py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              NOTICIAS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mantente al día con las últimas novedades, innovaciones y eventos
              de Belicona
            </p>
          </div>
        </div>
      </div>

      {/* Noticias */}
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500 text-white">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-compressed text-white mb-2 line-clamp-2 font-bold">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {article.author}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(article.date).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                  </div>

                  <button className="text-primary-500 hover:text-red-500 text-sm font-compressed font-bold">
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
