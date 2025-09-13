import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para optimizar una imagen
async function optimizeImage(inputPath, outputDir, sizes = []) {
  const filename = path.basename(inputPath, path.extname(inputPath));

  try {
    // Crear directorio de salida si no existe
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Obtener metadatos de la imagen original
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;
    console.log(`\n🖼️  Optimizando ${filename}:`);
    console.log(`   Dimensiones: ${metadata.width}x${metadata.height}`);
    console.log(
      `   Tamaño original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`
    );

    // Crear versiones WebP
    const webpPath = path.join(outputDir, `${filename}.webp`);
    await sharp(inputPath).webp({ quality: 85 }).toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    console.log(
      `   ✅ WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB (${Math.round(
        (1 - webpSize / originalSize) * 100
      )}% reducción)`
    );

    // Crear versiones AVIF
    const avifPath = path.join(outputDir, `${filename}.avif`);
    await sharp(inputPath).avif({ quality: 80 }).toFile(avifPath);

    const avifSize = fs.statSync(avifPath).size;
    console.log(
      `   ✅ AVIF: ${(avifSize / 1024 / 1024).toFixed(2)}MB (${Math.round(
        (1 - avifSize / originalSize) * 100
      )}% reducción)`
    );

    // Crear versiones redimensionadas si se especifican tamaños
    for (const size of sizes) {
      const { width, height, suffix } = size;
      const resizedPath = path.join(outputDir, `${filename}${suffix}.webp`);

      await sharp(inputPath)
        .resize(width, height, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 85 })
        .toFile(resizedPath);

      const resizedSize = fs.statSync(resizedPath).size;
      console.log(
        `   ✅ ${suffix}: ${(resizedSize / 1024 / 1024).toFixed(
          2
        )}MB (${width}x${height})`
      );
    }

    console.log(`   🎉 ${filename} optimizada completamente`);
    return { originalSize, webpSize, avifSize };
  } catch (error) {
    console.error(`   ❌ Error optimizando ${filename}:`, error.message);
    return null;
  }
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización de imágenes grandes...\n");

  // Imágenes más grandes que necesitan optimización urgente
  const imagesToOptimize = [
    {
      input: "src/assets/sabores.jpg",
      sizes: [
        { width: 800, height: 600, suffix: "-medium" },
        { width: 400, height: 300, suffix: "-small" },
      ],
    },
    {
      input: "src/assets/videobeli.JPG",
      sizes: [
        { width: 1200, height: 800, suffix: "-large" },
        { width: 600, height: 400, suffix: "-medium" },
      ],
    },
    {
      input: "src/assets/im2.JPG",
      sizes: [
        { width: 800, height: 600, suffix: "-medium" },
        { width: 400, height: 300, suffix: "-small" },
      ],
    },
    {
      input: "src/assets/im1.JPG",
      sizes: [
        { width: 800, height: 600, suffix: "-medium" },
        { width: 400, height: 300, suffix: "-small" },
      ],
    },
    {
      input: "src/assets/c1.jpg",
      sizes: [
        { width: 600, height: 600, suffix: "-medium" },
        { width: 300, height: 300, suffix: "-small" },
      ],
    },
    {
      input: "src/assets/m1.jpg",
      sizes: [
        { width: 600, height: 600, suffix: "-medium" },
        { width: 300, height: 300, suffix: "-small" },
      ],
    },
    {
      input: "src/assets/p2.jpg",
      sizes: [
        { width: 600, height: 600, suffix: "-medium" },
        { width: 300, height: 300, suffix: "-small" },
      ],
    },
  ];

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const image of imagesToOptimize) {
    if (fs.existsSync(image.input)) {
      const result = await optimizeImage(
        image.input,
        "public/optimized",
        image.sizes
      );
      if (result) {
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.webpSize; // Usar WebP como referencia
      }
    } else {
      console.log(`⚠️  Archivo no encontrado: ${image.input}`);
    }
  }

  console.log("\n📊 RESUMEN DE OPTIMIZACIÓN:");
  console.log(
    `Tamaño original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`
  );
  console.log(
    `Tamaño optimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(
      2
    )}MB`
  );
  console.log(
    `Ahorro total: ${Math.round(
      (1 - totalOptimizedSize / totalOriginalSize) * 100
    )}% (${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(
      2
    )}MB)`
  );

  console.log("\n✨ Optimización completada!");
  console.log("\n📋 Próximos pasos:");
  console.log("1. Actualizar las referencias de imágenes en el código");
  console.log(
    "2. Probar el sitio para verificar que las imágenes se cargan correctamente"
  );
  console.log("3. Ejecutar npm run build para ver la reducción del bundle");
}

main().catch(console.error);
