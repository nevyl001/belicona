import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para corregir la rotación de las imágenes de la galería
async function fixGalleryRotation() {
  console.log("🔄 Corrigiendo rotación de imágenes de la galería...\n");

  const outputDir = "public/optimized";

  // Imágenes de la galería que pueden estar rotadas
  const galleryImages = [
    {
      input: "src/assets/im1.JPG",
      name: "im1",
    },
    {
      input: "src/assets/im2.JPG",
      name: "im2",
    },
    {
      input: "src/assets/videobeli.JPG",
      name: "videobeli",
    },
  ];

  // Crear directorio de salida
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const image of galleryImages) {
    if (!fs.existsSync(image.input)) {
      console.log(`⚠️  Archivo no encontrado: ${image.input}`);
      continue;
    }

    try {
      // Obtener metadatos para verificar la orientación
      const metadata = await sharp(image.input).metadata();
      const originalSize = fs.statSync(image.input).size;

      console.log(`\n📊 Corrigiendo ${image.name}:`);
      console.log(
        `   Dimensiones originales: ${metadata.width}x${metadata.height}`
      );
      console.log(
        `   Orientación: ${metadata.orientation || "No especificada"}`
      );
      console.log(`   Tamaño original: ${(originalSize / 1024).toFixed(1)}KB`);

      // Crear versiones corregidas y optimizadas
      const sizes = [
        { width: 400, height: 300, suffix: "-small", quality: 90 },
        { width: 800, height: 600, suffix: "-medium", quality: 85 },
        { width: 1200, height: 800, suffix: "-large", quality: 80 },
      ];

      let totalOptimizedSize = 0;

      for (const size of sizes) {
        const { width, height, suffix, quality } = size;

        // WebP - Corregir rotación y optimizar
        const webpPath = path.join(outputDir, `${image.name}${suffix}.webp`);
        await sharp(image.input)
          .rotate() // Auto-rotar basado en EXIF
          .resize(width, height, {
            fit: "inside",
            withoutEnlargement: true,
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
        const avifPath = path.join(outputDir, `${image.name}${suffix}.avif`);
        await sharp(image.input)
          .rotate() // Auto-rotar basado en EXIF
          .resize(width, height, {
            fit: "inside",
            withoutEnlargement: true,
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
      const originalWebpPath = path.join(outputDir, `${image.name}.webp`);
      await sharp(image.input)
        .rotate() // Auto-rotar basado en EXIF
        .webp({ quality: 85 })
        .toFile(originalWebpPath);

      const originalWebpSize = fs.statSync(originalWebpPath).size;
      totalOptimizedSize += originalWebpSize;

      console.log(
        `   ✅ Original WebP: ${(originalWebpSize / 1024).toFixed(
          1
        )}KB - ROTACIÓN CORREGIDA`
      );

      console.log(`\n📊 RESUMEN DE ${image.name.toUpperCase()}:`);
      console.log(`Tamaño original: ${(originalSize / 1024).toFixed(1)}KB`);
      console.log(
        `Tamaño optimizado: ${(totalOptimizedSize / 1024).toFixed(1)}KB`
      );
      console.log(
        `Ahorro: ${Math.round(
          (1 - totalOptimizedSize / originalSize) * 100
        )}% (${((originalSize - totalOptimizedSize) / 1024).toFixed(1)}KB)`
      );
      console.log(`✅ ROTACIÓN CORREGIDA AUTOMÁTICAMENTE`);
    } catch (error) {
      console.error(`❌ Error corrigiendo ${image.name}:`, error.message);
    }
  }

  console.log(`\n✨ Corrección de rotación de galería completada!`);
  console.log(`\n📋 Próximos pasos:`);
  console.log(
    `1. Las imágenes de la galería ahora se mostrarán correctamente orientadas`
  );
  console.log(
    `2. Todas las versiones optimizadas mantienen la orientación correcta`
  );
  console.log(
    `3. Probar la galería en la página de noticias para verificar que se ve bien`
  );
}

// Función principal
async function main() {
  console.log(
    "🚀 Iniciando corrección de rotación de imágenes de galería...\n"
  );

  try {
    await fixGalleryRotation();
  } catch (error) {
    console.error("❌ Error durante la corrección:", error);
  }
}

main().catch(console.error);
