import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para optimizar p1.webp específicamente para 380x492
async function optimizeP1Specific() {
  console.log(
    "🎯 Optimizando p1.webp para dimensiones específicas (380x492)...\n"
  );

  const inputPath = "public/optimized/p1.webp";
  const outputDir = "public/optimized";

  if (!fs.existsSync(inputPath)) {
    console.log("❌ Archivo p1.webp no encontrado");
    return;
  }

  try {
    const originalSize = fs.statSync(inputPath).size;
    console.log(`📊 Tamaño original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`🎯 Dimensiones objetivo: 380x492`);

    // Crear versión específica para 380x492
    const specificPath = path.join(outputDir, "p1-specific.webp");
    await sharp(inputPath)
      .resize(380, 492, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 85 })
      .toFile(specificPath);

    const specificSize = fs.statSync(specificPath).size;
    const savings = originalSize - specificSize;

    console.log(`\n✅ Versión específica creada:`);
    console.log(`   Tamaño: ${(specificSize / 1024).toFixed(1)}KB`);
    console.log(
      `   Ahorro: ${(savings / 1024).toFixed(1)}KB (${Math.round(
        (1 - specificSize / originalSize) * 100
      )}%)`
    );

    // Crear también versión AVIF
    const specificAvifPath = path.join(outputDir, "p1-specific.avif");
    await sharp(inputPath)
      .resize(380, 492, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .avif({ quality: 80 })
      .toFile(specificAvifPath);

    const specificAvifSize = fs.statSync(specificAvifPath).size;
    const avifSavings = originalSize - specificAvifSize;

    console.log(`   AVIF: ${(specificAvifSize / 1024).toFixed(1)}KB`);
    console.log(
      `   Ahorro AVIF: ${(avifSavings / 1024).toFixed(1)}KB (${Math.round(
        (1 - specificAvifSize / originalSize) * 100
      )}%)`
    );

    console.log(`\n✨ Optimización específica de p1.webp completada!`);
  } catch (error) {
    console.error("❌ Error optimizando p1.webp:", error.message);
  }
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización específica de p1.webp...\n");

  try {
    await optimizeP1Specific();
  } catch (error) {
    console.error("❌ Error durante la optimización:", error);
  }
}

main().catch(console.error);
