import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const navigationLinks = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-nosotros", label: "Sobre Nosotros" },
    { path: "/noticias", label: "Noticias" },
    { path: "/eventos", label: "Eventos" },
    { path: "/productos", label: "Productos" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Información de la marca */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Link to="/">
                  <Logo size="medium" />
                </Link>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Bebidas artesanales que combinan la tradición del agave azul con
                sabores naturales únicos. Nuestros destilados premium ofrecen
                una experiencia de sabor incomparable.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">TW</span>
                </a>
              </div>
            </div>

            {/* Enlaces de navegación */}
            <div>
              <h3 className="text-xl font-compressed font-bold mb-5">
                NAVEGACIÓN
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-500 transition-colors font-medium"
                    >
                      {link.label.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Información de contacto */}
            <div>
              <h3 className="text-xl font-compressed font-bold mb-5">
                CONTACTO
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-500 mt-0.5"
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
                  <span className="text-gray-300">info@belicona.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-500 mt-0.5"
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
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Belicona. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
