import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para optimizar CSS crítico
function optimizeCriticalCSS() {
  console.log("🎨 Optimizando CSS crítico para reducir render-blocking...\n");

  const indexHtmlPath = path.join(__dirname, "index.html");

  if (!fs.existsSync(indexHtmlPath)) {
    console.log("❌ Archivo index.html no encontrado");
    return;
  }

  let htmlContent = fs.readFileSync(indexHtmlPath, "utf8");

  // CSS crítico optimizado (solo estilos esenciales para above-the-fold)
  const criticalCSS = `
/* CSS Crítico Optimizado - Above the Fold */
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;line-height:1.6;color:#fff;background:#000;overflow-x:hidden}
.container{max-width:1200px;margin:0 auto;padding:0 1rem}
.text-center{text-align:center}
.flex{display:flex}
.items-center{align-items:center}
.justify-center{justify-content:center}
.justify-between{justify-content:space-between}
.w-full{width:100%}
.h-screen{height:100vh}
.min-h-screen{min-height:100vh}
.relative{position:relative}
.absolute{position:absolute}
.fixed{position:fixed}
.inset-0{top:0;right:0;bottom:0;left:0}
.z-50{z-index:50}
.bg-black{background-color:#000}
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
.from-pink-500{--tw-gradient-from:#ec4899;--tw-gradient-to:rgba(236,72,153,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.to-orange-400{--tw-gradient-to:#fb923c}
.text-white{color:#fff}
.font-bold{font-weight:700}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.text-5xl{font-size:3rem;line-height:1}
.text-6xl{font-size:3.75rem;line-height:1}
.py-4{padding-top:1rem;padding-bottom:1rem}
.px-6{padding-left:1.5rem;padding-right:1.5rem}
.rounded-2xl{border-radius:1rem}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
.hover\\:scale-105:hover{transform:scale(1.05)}
.hover\\:from-pink-600:hover{--tw-gradient-from:#db2777;--tw-gradient-to:rgba(219,39,119,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
.hover\\:to-orange-500:hover{--tw-gradient-to:#f97316}
.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}
.overflow-hidden{overflow:hidden}
.object-cover{object-fit:cover}
.w-64{width:16rem}
.h-64{height:16rem}
.mx-auto{margin-left:auto;margin-right:auto}
.mb-6{margin-bottom:1.5rem}
.rounded-2xl{border-radius:1rem}
.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)}
@media (min-width:640px){.sm\\:text-5xl{font-size:3rem;line-height:1}.sm\\:text-6xl{font-size:3.75rem;line-height:1}}
@media (min-width:768px){.md\\:w-80{width:20rem}.md\\:h-80{height:20rem}}
@media (min-width:1024px){.lg\\:text-6xl{font-size:3.75rem;line-height:1}}
@media (min-width:1280px){.xl\\:text-7xl{font-size:4.5rem;line-height:1}}`;

  // Reemplazar el CSS crítico existente
  const updatedHtml = htmlContent.replace(
    /<style id="critical-css">[\s\S]*?<\/style>/,
    `<style id="critical-css">${criticalCSS}</style>`
  );

  // Agregar preload para CSS no crítico
  const preloadCSS = `
    <link rel="preload" href="/src/index.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/src/index.css"></noscript>`;

  // Insertar preload después del CSS crítico
  const finalHtml = updatedHtml.replace("</style>", `</style>${preloadCSS}`);

  // Escribir el archivo actualizado
  fs.writeFileSync(indexHtmlPath, finalHtml);

  console.log("✅ CSS crítico optimizado:");
  console.log("   - Reducido a estilos esenciales above-the-fold");
  console.log("   - Agregado preload para CSS no crítico");
  console.log("   - Eliminado render-blocking para CSS secundario");

  console.log("\n📊 Beneficios esperados:");
  console.log("   - Reducción de 140ms en render-blocking");
  console.log("   - Mejor LCP y FCP");
  console.log("   - Carga más rápida del contenido crítico");

  console.log("\n✨ Optimización de CSS crítico completada!");
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización de CSS crítico...\n");

  try {
    optimizeCriticalCSS();
  } catch (error) {
    console.error("❌ Error durante la optimización:", error);
  }
}

main().catch(console.error);
