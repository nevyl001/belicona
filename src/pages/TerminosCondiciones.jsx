import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RevealCard from "../components/RevealCard";

const TerminosCondiciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "aceptacion",
      num: "1",
      title: "Aceptación",
      content: (
        <p>
          Al acceder y navegar en{" "}
          <span className="text-white font-medium">belicona.mx</span> (el
          &ldquo;Sitio&rdquo;) aceptas estos Términos y Condiciones. Si no estás
          de acuerdo, te pedimos no usar el Sitio. El Sitio es operado por{" "}
          <span className="text-gray-300">[razón social]</span>, con domicilio en{" "}
          <span className="text-gray-300">[domicilio fiscal]</span>, en adelante
          &ldquo;<strong className="text-white">Belicona</strong>&rdquo;.
        </p>
      ),
    },
    {
      id: "mayoria-de-edad",
      num: "2",
      title: "Mayoría de edad",
      content: (
        <p>
          Belicona es una bebida con contenido alcohólico (
          <strong className="text-primary-400">5.0% Alc. Vol.</strong>),
          destinada exclusivamente a personas mayores de{" "}
          <strong className="text-primary-400">18 años</strong>. Al ingresar al
          Sitio declaras ser mayor de edad conforme a la legislación mexicana.
          Si eres menor de 18 años, debes abandonar el Sitio.
        </p>
      ),
      badge: "+18 Exclusivo",
    },
    {
      id: "consumo-responsable",
      num: "3",
      title: "Consumo responsable",
      content: (
        <p>
          <strong className="text-yellow-400">Evita el exceso. +18.</strong> Si
          consumes alcohol, hazlo con moderación. No conduzcas si has consumido
          bebidas alcohólicas. La venta de alcohol a menores de edad está
          prohibida.
        </p>
      ),
    },
    {
      id: "contenido-informativo",
      num: "4",
      title: "Contenido informativo",
      content: (
        <p>
          La información de productos, sabores, presentaciones y puntos de venta
          tiene carácter informativo. Las imágenes son ilustrativas y pueden
          diferir de la presentación comercial. Belicona puede modificar el
          contenido, los productos o la disponibilidad sin previo aviso.
        </p>
      ),
    },
    {
      id: "puntos-de-venta",
      num: "5",
      title: "Puntos de venta y compras",
      content: (
        <p>
          Los productos Belicona se comercializan a través de distribuidores,
          tiendas y plataformas de terceros. Las compras realizadas en esos
          canales se rigen por los términos, precios, políticas de entrega y
          devolución de cada establecimiento o plataforma, y Belicona no es
          responsable de ellos. La disponibilidad varía por región y
          establecimiento.
        </p>
      ),
    },
    {
      id: "propiedad-intelectual",
      num: "6",
      title: "Propiedad intelectual",
      content: (
        <p>
          Las marcas, logotipos, diseños, imágenes, textos, videos y demás
          contenidos del Sitio son propiedad de Belicona o se usan con
          autorización de sus titulares, y están protegidos por la legislación
          aplicable en materia de propiedad intelectual e industrial. No puedes
          copiar, reproducir, modificar, distribuir ni usar estos contenidos con
          fines comerciales sin autorización previa y por escrito.
        </p>
      ),
    },
    {
      id: "uso-permitido",
      num: "7",
      title: "Uso permitido",
      content: (
        <div>
          <p className="mb-4">
            Te comprometes a usar el Sitio de forma lícita. Queda prohibido:
          </p>
          <ul className="space-y-2.5 pl-2">
            {[
              "Usarlo para fines ilegales o contrarios a estos Términos.",
              "Intentar acceder sin autorización a sistemas o información del Sitio.",
              "Introducir virus, código malicioso o realizar acciones que afecten su funcionamiento.",
              "Hacerte pasar por otra persona o proporcionar información falsa.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-bold flex items-center justify-center mt-0.5">
                  {String.fromCharCode(97 + idx)}
                </span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "contenido-ia",
      num: "8",
      title: "Contenido generado por IA",
      content: (
        <p>
          Parte del contenido visual del Sitio y de las redes de Belicona puede
          haberse generado o editado con inteligencia artificial y estará
          identificado cuando aplique.
        </p>
      ),
    },
    {
      id: "enlaces-terceros",
      num: "9",
      title: "Enlaces a terceros",
      content: (
        <p>
          El Sitio puede incluir enlaces a sitios o plataformas de terceros.
          Belicona no controla ni respalda su contenido y no se responsabiliza
          por su uso.
        </p>
      ),
    },
    {
      id: "datos-personales",
      num: "10",
      title: "Datos personales",
      content: (
        <p>
          El tratamiento de tus datos personales se rige por nuestro Aviso de
          Privacidad, disponible en{" "}
          <Link
            to="/politica-de-privacidad"
            className="text-primary-400 hover:text-primary-300 underline underline-offset-4 font-medium transition-colors"
          >
            Aviso de Privacidad
          </Link>
          .
        </p>
      ),
    },
    {
      id: "comunicaciones-promociones",
      num: "11",
      title: "Comunicaciones y promociones",
      content: (
        <p>
          Si participas en una promoción, concurso o dinámica, aplicarán las
          bases específicas publicadas para cada una, además de estos Términos.
          Las promociones son exclusivas para mayores de 18 años y se sujetan a
          la legislación mexicana aplicable.
        </p>
      ),
    },
    {
      id: "limitacion-responsabilidad",
      num: "12",
      title: "Limitación de responsabilidad",
      content: (
        <p>
          Belicona procura que el Sitio esté disponible y actualizado, pero no
          garantiza que funcione sin interrupciones o errores. En la medida
          permitida por la ley, Belicona no será responsable por daños derivados
          del uso o la imposibilidad de uso del Sitio.
        </p>
      ),
    },
    {
      id: "modificaciones",
      num: "13",
      title: "Modificaciones",
      content: (
        <p>
          Belicona puede actualizar estos Términos en cualquier momento. La
          versión vigente será la publicada en el Sitio, con su fecha de
          actualización. El uso continuado del Sitio implica la aceptación de los
          cambios.
        </p>
      ),
    },
    {
      id: "legislacion-jurisdiccion",
      num: "14",
      title: "Legislación y jurisdicción",
      content: (
        <p>
          Estos Términos se rigen por las leyes de los Estados Unidos
          Mexicanos. Para cualquier controversia, las partes se someten a los
          tribunales competentes de{" "}
          <span className="text-gray-300">
            [Ciudad de México / jurisdicción que corresponda]
          </span>
          , renunciando a cualquier otro fuero que pudiera corresponderles.
        </p>
      ),
    },
    {
      id: "contacto",
      num: "15",
      title: "Contacto",
      content: (
        <p>
          Para dudas sobre estos Términos, escríbenos a{" "}
          <a
            href="mailto:contenido@belicona.mx"
            className="text-primary-400 hover:text-primary-300 underline underline-offset-4 font-semibold transition-colors"
          >
            contenido@belicona.mx
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>

      {/* Decorative ambient spots */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <RevealCard direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              Marco Legal
            </span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-compressed font-bold tracking-wide text-white mb-4 glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.4), 0 0 40px rgba(255, 183, 27, 0.2)",
              }}
            >
              TÉRMINOS Y CONDICIONES DE USO
            </motion.h1>
            <p className="text-gray-400 text-sm sm:text-base">
              belicona.mx &bull; Última actualización: 7 de octubre de 2026
            </p>
          </div>
        </RevealCard>

        {/* Highlights banner */}
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-primary-400 font-bold text-lg mb-1">+18 Años</div>
            <p className="text-xs text-gray-400">
              Contenido y producto exclusivo para mayores de edad.
            </p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-yellow-400 font-bold text-lg mb-1">5.0% Alc. Vol.</div>
            <p className="text-xs text-gray-400">
              Evita el exceso. Consumo responsable de alcohol.
            </p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-orange-400 font-bold text-lg mb-1">Leyes Mexicanas</div>
            <p className="text-xs text-gray-400">
              Sujeto a la legislación aplicable en los EUM.
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="group relative bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 border border-white/10 hover:border-primary-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-orange-500/20 border border-primary-500/30 flex items-center justify-center font-bold text-primary-400 text-sm">
                    {section.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-xl sm:text-2xl font-compressed font-bold text-white tracking-wide">
                        {section.title.toUpperCase()}
                      </h2>
                      {section.badge && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-medium">
                          {section.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Legal Footer Note */}
          <div className="mt-12 text-center border-t border-white/10 pt-8 text-gray-500 text-xs sm:text-sm">
            <p>
              Belicona | belicona.mx | Evita el exceso. +18
            </p>
            <p className="mt-2">
              Para aclaraciones o solicitudes de información, contáctanos a{" "}
              <a
                href="mailto:contenido@belicona.mx"
                className="text-primary-400 hover:underline"
              >
                contenido@belicona.mx
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;

