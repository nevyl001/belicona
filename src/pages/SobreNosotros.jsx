import React from "react";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black py-12">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              SOBRE NOSOTROS
            </h1>
          </div>
        </div>
      </div>

      {/* Sobre Nosotros Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagen de productos */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Productos Belicona"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>

            {/* Contenido de texto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bubbly text-white mb-6">
                  UNA HISTORIA DIFERENTE
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Con más de 12 años de experiencia en el procesamiento de
                  frutas y especialización en la fabricación de pulpa natural,
                  hemos desarrollado una mezcla única de destilado de agave RIII
                  con pulpa de fruta extraída, buscando un sabor equilibrado y
                  auténtico.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Lanzada a mediados de 2022 por RIII, nuestra bebida tiene como
                  objetivo ofrecer una alternativa natural y especial en el
                  mercado, combinando la tradición del agave azul con sabores
                  únicos y naturales.
                </p>
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-compressed font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                  ¡PRUÉBALAS TODAS!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los Amigos Belicosos Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              LOS AMIGOS BELICOSOS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un vistazo a nuestro mundo y lo que nos mueve
            </p>
          </div>

          {/* Grid de imágenes de productos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Producto 1 - TEPITO LIMA */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">💀</span>
                  </div>
                  <h3 className="text-2xl font-compressed text-white mb-2 font-bold">
                    TEPITO - LIMA
                  </h3>
                  <p className="text-green-100 text-sm">
                    Verde vibrante con notas cítricas
                  </p>
                </div>
              </div>
            </div>

            {/* Producto 2 - MARACUYA */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">💀</span>
                  </div>
                  <h3 className="text-2xl font-compressed text-white mb-2 font-bold">
                    MARACUYA
                  </h3>
                  <p className="text-orange-100 text-sm">
                    Dorado tropical con sabor exótico
                  </p>
                </div>
              </div>
            </div>

            {/* Producto 3 - CANTARITO */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-primary-500 to-red-500 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">💀</span>
                  </div>
                  <h3 className="text-2xl font-compressed text-white mb-2 font-bold">
                    CANTARITO
                  </h3>
                  <p className="text-pink-100 text-sm">
                    Rosa intenso con tradición mexicana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Valores Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-compressed text-white mb-6 font-bold">
              NUESTRA MISIÓN
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lo que nos impulsa cada día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-compressed text-white mb-4 font-bold">
                  MISIÓN
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ofrecer bebidas artesanales de la más alta calidad, combinando
                  la tradición del agave azul con sabores naturales únicos,
                  creando experiencias de sabor auténticas e inolvidables.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-compressed text-white mb-4 font-bold">
                  VISIÓN
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser reconocidos como la marca líder en bebidas artesanales de
                  agave con sabores naturales, expandiendo nuestra presencia
                  global mientras mantenemos nuestra esencia artesanal y
                  compromiso con la calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
