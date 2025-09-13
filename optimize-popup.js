import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para optimizar popup.jpeg específicamente
async function optimizePopup() {
  console.log("🎯 Optimizando popup.jpeg (CRÍTICO)...\n");

  const inputPath = "src/assets/popup.jpeg";
  const outputDir = "public/optimized";

  if (!fs.existsSync(inputPath)) {
    console.log("❌ Archivo popup.jpeg no encontrado");
    return;
  }

  // Crear directorio de salida
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Obtener metadatos
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;

    console.log(`📊 Metadatos de popup.jpeg:`);
    console.log(`   Dimensiones: ${metadata.width}x${metadata.height}`);
    console.log(
      `   Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`
    );
    console.log(`   Dimensiones de visualización: 256x256`);

    // Crear versiones optimizadas para diferentes tamaños de visualización
    const sizes = [
      { width: 256, height: 256, suffix: "-small", quality: 90 },
      { width: 512, height: 512, suffix: "-medium", quality: 85 },
      { width: 1024, height: 1024, suffix: "-large", quality: 80 },
      { width: 2560, height: 2560, suffix: "-original", quality: 75 },
    ];

    let totalOptimizedSize = 0;

    for (const size of sizes) {
      const { width, height, suffix, quality } = size;

      // WebP
      const webpPath = path.join(outputDir, `popup${suffix}.webp`);
      await sharp(inputPath)
        .resize(width, height, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      totalOptimizedSize += webpSize;

      console.log(
        `   ✅ ${suffix} WebP: ${(webpSize / 1024).toFixed(
          1
        )}KB (${width}x${height})`
      );

      // AVIF
      const avifPath = path.join(outputDir, `popup${suffix}.avif`);
      await sharp(inputPath)
        .resize(width, height, {
          fit: "cover",
          position: "center",
        })
        .avif({ quality: quality - 5 })
        .toFile(avifPath);

      const avifSize = fs.statSync(avifPath).size;
      totalOptimizedSize += avifSize;

      console.log(
        `   ✅ ${suffix} AVIF: ${(avifSize / 1024).toFixed(
          1
        )}KB (${width}x${height})`
      );
    }

    // Crear versión original optimizada (sin redimensionar)
    const originalWebpPath = path.join(outputDir, "popup.webp");
    await sharp(inputPath).webp({ quality: 80 }).toFile(originalWebpPath);

    const originalWebpSize = fs.statSync(originalWebpPath).size;
    totalOptimizedSize += originalWebpSize;

    console.log(`\n📊 RESUMEN DE OPTIMIZACIÓN:`);
    console.log(
      `Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`
    );
    console.log(
      `Tamaño optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(
        2
      )}MB`
    );
    console.log(
      `Ahorro estimado: ${Math.round(
        (1 - totalOptimizedSize / originalSize) * 100
      )}% (${((originalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB)`
    );

    // Recomendación específica para 256x256
    const smallWebpPath = path.join(outputDir, "popup-small.webp");
    const smallSize = fs.statSync(smallWebpPath).size;
    const smallSavings = originalSize - smallSize;

    console.log(`\n🎯 OPTIMIZACIÓN ESPECÍFICA PARA 256x256:`);
    console.log(`Tamaño original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`Tamaño optimizado: ${(smallSize / 1024).toFixed(1)}KB`);
    console.log(
      `Ahorro: ${(smallSavings / 1024).toFixed(1)}KB (${Math.round(
        (1 - smallSize / originalSize) * 100
      )}%)`
    );

    console.log(`\n✨ Optimización de popup.jpeg completada!`);
    console.log(`\n📋 Próximos pasos:`);
    console.log(
      `1. Actualizar referencias en el código para usar popup-small.webp`
    );
    console.log(`2. Implementar imágenes responsivas`);
    console.log(`3. Probar en diferentes dispositivos`);
  } catch (error) {
    console.error("❌ Error optimizando popup.jpeg:", error.message);
  }
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización crítica de popup.jpeg...\n");

  try {
    await optimizePopup();
  } catch (error) {
    console.error("❌ Error durante la optimización:", error);
  }
}

main().catch(console.error);
