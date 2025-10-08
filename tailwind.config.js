/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores corporativos de Belicona - Paleta oficial
        primary: {
          50: "#1a0a0a",
          100: "#2d1414",
          200: "#4a1f1f",
          300: "#6b2a2a",
          400: "#8c3535",
          500: "#ED017F", // Magenta principal - PANTONE 73-8 C
          600: "#EE212E", // Rojo corporativo - PANTONE 48-8 C
          700: "#c41e3a",
          800: "#9a1b2e",
          900: "#701821",
        },
        secondary: {
          50: "#1a1408",
          100: "#2d2414",
          200: "#4a3d1f",
          300: "#6b562a",
          400: "#8c6f35",
          500: "#FFB71B", // Dorado principal - PANTONE 1235 C
          600: "#C17D12", // Marrón dorado - PANTONE 2925 C
          700: "#9a5f0e",
          800: "#73410a",
          900: "#4c2b07",
        },
        accent: {
          50: "#0a1a0a",
          100: "#142d14",
          200: "#1f4a1f",
          300: "#2a6b2a",
          400: "#358c35",
          500: "#6CBE45", // Verde corporativo - PANTONE 154-8 C
          600: "#4a9a2e",
          700: "#3d7a25",
          800: "#305a1c",
          900: "#233a13",
        },
        yellow: {
          50: "#fefce8",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#FFF200", // Amarillo corporativo - PANTONE PROCESS YELLOW C
          600: "#DCB00A", // Amarillo dorado
          700: "#ca8a04",
          800: "#a16207",
          900: "#713f12",
        },
        brown: {
          50: "#1a0f08",
          100: "#2d1f14",
          200: "#4a331f",
          300: "#6b4a2a",
          400: "#8c6135",
          500: "#5F310D", // Marrón corporativo - PANTONE 2925 C
          600: "#A77029", // Marrón dorado
          700: "#8a5a1f",
          800: "#6d4417",
          900: "#502e0f",
        },
        orange: {
          50: "#1a0f08",
          100: "#2d1f14",
          200: "#4a331f",
          300: "#6b4a2a",
          400: "#8c6135",
          500: "#F47E20", // Naranja corporativo
          600: "#FFB71B", // Dorado
          700: "#d49a0e",
          800: "#a77a0b",
          900: "#7a5a08",
        },
        // Colores adicionales de la paleta
        red: {
          500: "#EE212E", // Rojo corporativo
          600: "#c41e3a",
          700: "#9a1b2e",
        },
        magenta: {
          500: "#ED017F", // Magenta corporativo
          600: "#c41e3a",
          700: "#9a1b2e",
        },
        gold: {
          500: "#FFB71B", // Dorado corporativo
          600: "#C17D12", // Marrón dorado
          700: "#ECC55F", // Dorado claro
        },
        green: {
          500: "#6CBE45", // Verde corporativo
          600: "#4a9a2e",
          700: "#00682A", // Verde oscuro
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Oswald", "sans-serif"],
        brand: ["Creepster", "cursive"], // Para títulos especiales como "OH NOW!"
        heading: ["Rajdhani", "sans-serif"], // Similar a "HEADING COMPRESSED PRO"
        logo: ["Creepster", "cursive"], // Para el logo BELICONA
        compressed: ["Orbitron", "sans-serif"], // Para títulos comprimidos
        bubbly: ["Bubblegum Sans", "cursive"], // Para títulos con estilo bubbly
        fredoka: ["Fredoka", "cursive"], // Para títulos más redondeados
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
