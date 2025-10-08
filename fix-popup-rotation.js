import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para corregir la rotación de popup.jpeg
async function fixPopupRotation() {
  console.log("🔄 Corrigiendo rotación de popup.jpeg...\n");

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
    // Obtener metadatos para verificar la orientación
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;

    console.log(`📊 Metadatos de popup.jpeg:`);
    console.log(
      `   Dimensiones originales: ${metadata.width}x${metadata.height}`
    );
    console.log(`   Orientación: ${metadata.orientation || "No especificada"}`);
    console.log(
      `   Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`
    );

    // Crear versiones corregidas y optimizadas
    const sizes = [
      { width: 256, height: 256, suffix: "-small", quality: 90 },
      { width: 512, height: 512, suffix: "-medium", quality: 85 },
      { width: 1024, height: 1024, suffix: "-large", quality: 80 },
    ];

    let totalOptimizedSize = 0;

    for (const size of sizes) {
      const { width, height, suffix, quality } = size;

      // WebP - Corregir rotación y optimizar
      const webpPath = path.join(outputDir, `popup${suffix}.webp`);
      await sharp(inputPath)
        .rotate() // Auto-rotar basado en EXIF
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
        )}KB (${width}x${height}) - ROTACIÓN CORREGIDA`
      );

      // AVIF - Corregir rotación y optimizar
      const avifPath = path.join(outputDir, `popup${suffix}.avif`);
      await sharp(inputPath)
        .rotate() // Auto-rotar basado en EXIF
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
        )}KB (${width}x${height}) - ROTACIÓN CORREGIDA`
      );
    }

    // Crear versión original corregida (sin redimensionar)
    const originalWebpPath = path.join(outputDir, "popup.webp");
    await sharp(inputPath)
      .rotate() // Auto-rotar basado en EXIF
      .webp({ quality: 80 })
      .toFile(originalWebpPath);

    const originalWebpSize = fs.statSync(originalWebpPath).size;
    totalOptimizedSize += originalWebpSize;

    console.log(`\n📊 RESUMEN DE CORRECCIÓN:`);
    console.log(
      `Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`
    );
    console.log(
      `Tamaño optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(
        2
      )}MB`
    );
    console.log(
      `Ahorro total: ${Math.round(
        (1 - totalOptimizedSize / originalSize) * 100
      )}% (${((originalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB)`
    );

    // Verificar la versión pequeña específicamente
    const smallWebpPath = path.join(outputDir, "popup-small.webp");
    const smallSize = fs.statSync(smallWebpPath).size;
    const smallSavings = originalSize - smallSize;

    console.log(`\n🎯 VERSIÓN CORREGIDA PARA 256x256:`);
    console.log(`Tamaño original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`Tamaño corregido: ${(smallSize / 1024).toFixed(1)}KB`);
    console.log(
      `Ahorro: ${(smallSavings / 1024).toFixed(1)}KB (${Math.round(
        (1 - smallSize / originalSize) * 100
      )}%)`
    );
    console.log(`✅ ROTACIÓN CORREGIDA AUTOMÁTICAMENTE`);

    console.log(`\n✨ Corrección de rotación completada!`);
    console.log(`\n📋 Próximos pasos:`);
    console.log(`1. La imagen ahora se mostrará correctamente orientada`);
    console.log(
      `2. Todas las versiones optimizadas mantienen la orientación correcta`
    );
    console.log(`3. Probar el popup para verificar que se ve bien`);
  } catch (error) {
    console.error("❌ Error corrigiendo la rotación:", error.message);
  }
}

// Función principal
async function main() {
  console.log("🚀 Iniciando corrección de rotación de popup.jpeg...\n");

  try {
    await fixPopupRotation();
  } catch (error) {
    console.error("❌ Error durante la corrección:", error);
  }
}

main().catch(console.error);
