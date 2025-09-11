import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí se enviaría el formulario
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              CONTACTO
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y te
              responderemos lo antes posible.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div>
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
              <h2 className="text-2xl font-compressed text-white mb-6 font-bold">
                ENVÍANOS UN MENSAJE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-compressed font-bold text-white mb-2">
                      NOMBRE *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-compressed font-bold text-white mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-compressed font-bold text-white mb-2">
                    ASUNTO *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-compressed font-bold text-white mb-2">
                    MENSAJE *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none text-white placeholder-gray-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-compressed font-bold py-3 px-6 rounded-xl w-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-compressed text-white mb-6 font-bold">
                  INFORMACIÓN DE CONTACTO
                </h2>
                <p className="text-gray-300 mb-8">
                  Puedes contactarnos a través de cualquiera de estos medios.
                  Nuestro equipo estará encantado de ayudarte.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                        EMAIL
                      </h3>
                      <a
                        href="mailto:info@belicona.com"
                        className="text-gray-300 hover:text-primary-500 transition-colors"
                      >
                        info@belicona.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                        TELÉFONO
                      </h3>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-300 hover:text-primary-500 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-compressed text-white mb-1 font-bold">
                        DIRECCIÓN
                      </h3>
                      <p className="text-gray-300">
                        123 Innovation Street, Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
