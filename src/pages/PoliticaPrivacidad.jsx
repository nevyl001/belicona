import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RevealCard from "../components/RevealCard";

const PoliticaPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      num: "1",
      title: "Responsable del Tratamiento de Datos",
      content: (
        <p>
          Belicona, operada por <span className="text-gray-300">[razón social]</span>, con
          domicilio en <span className="text-gray-300">[domicilio fiscal]</span>, es responsable del uso
          y protección de sus datos personales conforme a la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        </p>
      ),
    },
    {
      num: "2",
      title: "Datos Personales Recabados",
      content: (
        <div>
          <p className="mb-3">
            Para las finalidades señaladas en el presente aviso, podemos recabar
            sus datos personales de distintas formas, tales como:
          </p>
          <ul className="space-y-2 pl-2">
            {[
              "Datos de identificación y contacto (nombre, correo electrónico, teléfono) proporcionados voluntariamente en formularios de contacto.",
              "Confirmación de mayoría de edad (+18 años) requerida para la navegación en el sitio.",
              "Datos de navegación y cookies de sesión para mejorar la experiencia de usuario.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      num: "3",
      title: "Finalidades del Tratamiento",
      content: (
        <p>
          Los datos personales recabados serán utilizados para responder a sus
          dudas o solicitudes a través de nuestros canales de contacto, verificar
          el cumplimiento de la mayoría de edad, informarle sobre dinámicas o
          promociones en las que decida participar y optimizar la navegación en
          nuestro sitio web.
        </p>
      ),
    },
    {
      num: "4",
      title: "Derechos ARCO",
      content: (
        <p>
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al
          tratamiento de sus datos personales (Derechos ARCO). Para ejercer
          cualquiera de estos derechos, puede enviar su solicitud por escrito al
          correo electrónico{" "}
          <a
            href="mailto:contenido@belicona.mx"
            className="text-primary-400 hover:text-primary-300 underline underline-offset-4 font-semibold"
          >
            contenido@belicona.mx
          </a>
          .
        </p>
      ),
    },
    {
      num: "5",
      title: "Modificaciones al Aviso de Privacidad",
      content: (
        <p>
          El presente Aviso de Privacidad puede sufrir modificaciones, cambios o
          actualizaciones derivadas de requerimientos legales o de nuestras
          propias prácticas. Cualquier cambio será publicado oportunamente en
          este sitio web.
        </p>
      ),
    },
    {
      num: "6",
      title: "Contacto",
      content: (
        <p>
          Para cualquier duda, comentario o ejercicio de sus derechos con
          respecto a la protección de sus datos personales, por favor contáctenos
          en{" "}
          <a
            href="mailto:contenido@belicona.mx"
            className="text-primary-400 hover:text-primary-300 underline underline-offset-4 font-semibold"
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
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
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

          <Link
            to="/terminos-y-condiciones"
            className="text-xs sm:text-sm text-primary-400 hover:text-primary-300 underline underline-offset-4"
          >
            Ver Términos y Condiciones
          </Link>
        </div>

        {/* Header */}
        <RevealCard direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              Privacidad y Seguridad
            </span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-compressed font-bold tracking-wide text-white mb-4 glow-on-hover"
              style={{
                textShadow:
                  "0 0 20px rgba(237, 1, 127, 0.4), 0 0 40px rgba(255, 183, 27, 0.2)",
              }}
            >
              AVISO DE PRIVACIDAD
            </motion.h1>
            <p className="text-gray-400 text-sm sm:text-base">
              belicona.mx &bull; Última actualización: Octubre 2026
            </p>
          </div>
        </RevealCard>

        {/* Main Content Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.section
                key={section.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 border border-white/10 hover:border-primary-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-orange-500/20 border border-primary-500/30 flex items-center justify-center font-bold text-primary-400 text-sm">
                    {section.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-compressed font-bold text-white tracking-wide mb-3">
                      {section.title.toUpperCase()}
                    </h2>
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
              Para dudas o ejercicio de Derechos ARCO:{" "}
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

export default PoliticaPrivacidad;

