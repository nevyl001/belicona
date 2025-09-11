import React from "react";

const Eventos = () => {
  const events = [
    {
      id: 1,
      title: "Conferencia de Innovación 2024",
      date: "2024-02-15",
      time: "09:00 - 17:00",
      location: "Centro de Convenciones Madrid",
      description:
        "Únete a nosotros para conocer las últimas tendencias en innovación y tecnología.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Conferencia",
      price: "Gratuito",
    },
    {
      id: 2,
      title: "Workshop de Sostenibilidad",
      date: "2024-02-20",
      time: "14:00 - 18:00",
      location: "Online",
      description:
        "Aprende sobre prácticas sostenibles en la industria y cómo implementarlas en tu empresa.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Workshop",
      price: "€50",
    },
    {
      id: 3,
      title: "Lanzamiento de Producto",
      date: "2024-03-01",
      time: "19:00 - 22:00",
      location: "Showroom Belicona",
      description:
        "Presentación exclusiva de nuestros nuevos productos con demostraciones en vivo.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Lanzamiento",
      price: "Gratuito",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black py-8 sm:py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              EVENTOS Y NOVEDADES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Únete a nuestros eventos, conferencias y lanzamientos exclusivos
            </p>
          </div>
        </div>
      </div>

      {/* Eventos */}
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500 text-white">
                    {event.category}
                  </span>
                  <span className="text-lg font-compressed text-primary-500 font-bold">
                    {event.price}
                  </span>
                </div>

                <h3 className="text-xl font-compressed text-white mb-3 font-bold">
                  {event.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
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
                    {new Date(event.date).toLocaleDateString("es-ES")}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
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
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <button className="btn-primary w-full">Registrarse</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventos;
