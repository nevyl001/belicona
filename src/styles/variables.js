// Variables globales de la marca Belicona
export const theme = {
  colors: {
    primary: {
      50: "#f0fff4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    secondary: {
      50: "#fefce8",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
    accent: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#365314",
      900: "#1a2e05",
    },
  },
  fonts: {
    primary: "Oswald, Montserrat, system-ui, sans-serif",
    secondary: "Bebas Neue, Oswald, sans-serif",
    display: "Bebas Neue, Oswald, sans-serif",
    body: "Inter, system-ui, sans-serif",
    script: "Pacifico, cursive",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
};

// Configuración de la marca
export const brandConfig = {
  name: "Belicona",
  tagline: "Sabor auténtico, experiencia única",
  description:
    "Belicona es una marca de bebidas artesanales que combina la tradición del agave azul con sabores naturales únicos. Nuestros destilados premium ofrecen una experiencia de sabor incomparable.",
  social: {
    instagram: "https://instagram.com/belicona",
    facebook: "https://facebook.com/belicona",
    twitter: "https://twitter.com/belicona",
    linkedin: "https://linkedin.com/company/belicona",
  },
  contact: {
    email: "info@belicona.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Street, Tech City, TC 12345",
  },
};

// Configuración de rutas
export const routes = {
  home: "/",
  noticias: "/noticias",
  eventos: "/eventos",
  productos: "/productos",
  contacto: "/contacto",
};

// Configuración de i18n (preparado para futuro)
export const i18nConfig = {
  defaultLocale: "es",
  locales: ["es", "en"],
  messages: {
    es: {
      nav: {
        home: "Inicio",
        noticias: "Noticias",
        eventos: "Eventos",
        productos: "Productos",
        contacto: "Contacto",
      },
      common: {
        readMore: "Leer más",
        learnMore: "Saber más",
        contact: "Contactar",
        back: "Volver",
        next: "Siguiente",
        previous: "Anterior",
      },
    },
    en: {
      nav: {
        home: "Home",
        noticias: "News",
        eventos: "Events",
        productos: "Products",
        contacto: "Contact",
      },
      common: {
        readMore: "Read more",
        learnMore: "Learn more",
        contact: "Contact",
        back: "Back",
        next: "Next",
        previous: "Previous",
      },
    },
  },
};
