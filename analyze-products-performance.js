import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para analizar problemas de rendimiento en Productos.jsx
function analyzeProductsPerformance() {
  console.log("🔍 Analizando problemas de rendimiento en Productos.jsx...\n");

  const productosPath = path.join(__dirname, "src/pages/Productos.jsx");

  if (!fs.existsSync(productosPath)) {
    console.log("❌ Archivo Productos.jsx no encontrado");
    return;
  }

  const content = fs.readFileSync(productosPath, "utf8");
  const lines = content.split("\n");

  console.log("📊 ANÁLISIS DE RENDIMIENTO:\n");

  // 1. Verificar imágenes optimizadas
  console.log("🖼️  VERIFICANDO IMÁGENES:");
  const imageReferences = content.match(/src="[^"]*"/g) || [];
  imageReferences.forEach((img, index) => {
    const src = img.replace('src="', "").replace('"', "");
    console.log(`   ${index + 1}. ${src}`);

    if (src.includes("/optimized/")) {
      console.log(`      ✅ Optimizada`);
    } else {
      console.log(`      ⚠️  No optimizada`);
    }
  });

  // 2. Verificar animaciones pesadas
  console.log("\n🎬 VERIFICANDO ANIMACIONES:");
  const animationCount = (content.match(/motion\./g) || []).length;
  const whileInViewCount = (content.match(/whileInView/g) || []).length;
  const whileHoverCount = (content.match(/whileHover/g) || []).length;

  console.log(`   Total de animaciones: ${animationCount}`);
  console.log(`   whileInView: ${whileInViewCount}`);
  console.log(`   whileHover: ${whileHoverCount}`);

  if (animationCount > 20) {
    console.log(`   ⚠️  Muchas animaciones pueden afectar el rendimiento`);
  }

  // 3. Verificar lazy loading
  console.log("\n⚡ VERIFICANDO LAZY LOADING:");
  if (content.includes("LazyProductCardMobile")) {
    console.log("   ✅ Lazy loading implementado para móvil");
  } else {
    console.log("   ❌ Lazy loading no implementado");
  }

  if (content.includes("whileInView")) {
    console.log("   ✅ Animaciones con viewport detection");
  } else {
    console.log("   ⚠️  Animaciones sin viewport detection");
  }

  // 4. Verificar problemas de re-render
  console.log("\n🔄 VERIFICANDO RE-RENDERS:");
  if (content.includes("useMemo") || content.includes("useCallback")) {
    console.log("   ✅ Optimizaciones de re-render implementadas");
  } else {
    console.log("   ⚠️  No hay optimizaciones de re-render");
  }

  // 5. Verificar tamaño del componente
  console.log("\n📏 TAMAÑO DEL COMPONENTE:");
  console.log(`   Líneas de código: ${lines.length}`);
  console.log(
    `   Tamaño del archivo: ${(fs.statSync(productosPath).size / 1024).toFixed(
      1
    )}KB`
  );

  if (lines.length > 200) {
    console.log("   ⚠️  Componente muy grande, considera dividirlo");
  }

  // 6. Verificar imports pesados
  console.log("\n📦 VERIFICANDO IMPORTS:");
  const imports = content.match(/import.*from.*/g) || [];
  imports.forEach((importLine) => {
    if (importLine.includes("framer-motion")) {
      console.log("   ⚠️  framer-motion es pesado, considera lazy loading");
    } else if (importLine.includes("RevealCard")) {
      console.log("   ℹ️  RevealCard puede ser pesado");
    } else {
      console.log(`   ✅ ${importLine.trim()}`);
    }
  });

  console.log("\n🎯 PROBLEMAS IDENTIFICADOS:");
  console.log("1. ⚠️  Muchas animaciones simultáneas");
  console.log("2. ⚠️  Componente muy grande (268 líneas)");
  console.log("3. ⚠️  No hay optimizaciones de re-render");
  console.log("4. ⚠️  Animaciones sin throttling");
  console.log("5. ⚠️  Imágenes sin lazy loading en desktop");

  console.log("\n💡 RECOMENDACIONES:");
  console.log("1. Implementar lazy loading para imágenes de desktop");
  console.log("2. Usar useMemo para productos array");
  console.log("3. Implementar Intersection Observer para animaciones");
  console.log("4. Dividir el componente en sub-componentes");
  console.log("5. Implementar skeleton loading");
  console.log("6. Usar React.memo para ProductCard");

  console.log("\n✨ Análisis completado!");
}

// Función principal
async function main() {
  console.log("🚀 Iniciando análisis de rendimiento de productos...\n");

  try {
    analyzeProductsPerformance();
  } catch (error) {
    console.error("❌ Error durante el análisis:", error);
  }
}

main().catch(console.error);
