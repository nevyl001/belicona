import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para optimizar imágenes restantes
async function optimizeRemainingImages() {
  console.log(
    "🎯 Optimizando imágenes restantes identificadas por Lighthouse...\n"
  );

  const outputDir = "public/optimized";

  // Crear directorio de salida
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Imágenes identificadas por Lighthouse
  const imagesToOptimize = [
    {
      input: "src/assets/becabe.png",
      displaySize: { width: 99, height: 112 },
      sizes: [
        { width: 99, height: 112, suffix: "-small", quality: 90 },
        { width: 200, height: 225, suffix: "-medium", quality: 85 },
        { width: 400, height: 450, suffix: "-large", quality: 80 },
      ],
    },
    {
      input: "src/assets/LOGO BELICONA.png",
      displaySize: { width: 168, height: 64 },
      sizes: [
        { width: 168, height: 64, suffix: "-small", quality: 90 },
        { width: 336, height: 128, suffix: "-medium", quality: 85 },
        { width: 672, height: 256, suffix: "-large", quality: 80 },
      ],
    },
  ];

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const image of imagesToOptimize) {
    if (!fs.existsSync(image.input)) {
      console.log(`⚠️  Archivo no encontrado: ${image.input}`);
      continue;
    }

    const filename = path.basename(image.input, path.extname(image.input));
    const originalSize = fs.statSync(image.input).size;
    totalOriginalSize += originalSize;

    console.log(`\n🖼️  Optimizando ${filename}:`);
    console.log(`   Tamaño original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(
      `   Dimensiones de visualización: ${image.displaySize.width}x${image.displaySize.height}`
    );

    // Crear versiones optimizadas
    for (const size of image.sizes) {
      const { width, height, suffix, quality } = size;

      // WebP
      const webpPath = path.join(outputDir, `${filename}${suffix}.webp`);
      await sharp(image.input)
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
        )}KB (${width}x${height})`
      );

      // AVIF
      const avifPath = path.join(outputDir, `${filename}${suffix}.avif`);
      await sharp(image.input)
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
        )}KB (${width}x${height})`
      );
    }

    // Crear versión original optimizada
    const originalWebpPath = path.join(outputDir, `${filename}.webp`);
    await sharp(image.input).webp({ quality: 85 }).toFile(originalWebpPath);

    const originalWebpSize = fs.statSync(originalWebpPath).size;
    totalOptimizedSize += originalWebpSize;

    console.log(
      `   ✅ Original WebP: ${(originalWebpSize / 1024).toFixed(1)}KB`
    );
  }

  console.log(`\n📊 RESUMEN DE OPTIMIZACIÓN:`);
  console.log(
    `Tamaño original total: ${(totalOriginalSize / 1024).toFixed(1)}KB`
  );
  console.log(
    `Tamaño optimizado total: ${(totalOptimizedSize / 1024).toFixed(1)}KB`
  );
  console.log(
    `Ahorro total: ${Math.round(
      (1 - totalOptimizedSize / totalOriginalSize) * 100
    )}% (${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(1)}KB)`
  );

  console.log(`\n✨ Optimización de imágenes restantes completada!`);
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización de imágenes restantes...\n");

  try {
    await optimizeRemainingImages();
  } catch (error) {
    console.error("❌ Error durante la optimización:", error);
  }
}

main().catch(console.error);
