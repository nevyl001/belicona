import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para analizar el bundle después del build
function analyzeBundle() {
  console.log("📊 Analizando bundle optimizado...\n");

  const distDir = path.join(__dirname, "dist");
  if (!fs.existsSync(distDir)) {
    console.log(
      "❌ Directorio dist no encontrado. Ejecuta 'npm run build' primero."
    );
    return;
  }

  const files = fs.readdirSync(distDir);
  const jsFiles = files.filter((f) => f.endsWith(".js"));

  let totalSize = 0;
  const fileSizes = [];

  jsFiles.forEach((file) => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    totalSize += stats.size;

    fileSizes.push({
      name: file,
      size: stats.size,
      sizeKB: sizeKB,
    });
  });

  // Ordenar por tamaño
  fileSizes.sort((a, b) => b.size - a.size);

  console.log("📁 Archivos JavaScript (ordenados por tamaño):");
  fileSizes.forEach((file) => {
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    const bar = "█".repeat(Math.min(20, Math.round(file.sizeKB / 50)));
    console.log(`${file.name.padEnd(40)} ${sizeMB}MB ${bar}`);
  });

  console.log(
    `\n📊 Total JavaScript: ${(totalSize / 1024 / 1024).toFixed(2)}MB`
  );

  // Verificar si se logró la reducción
  const targetReduction = 55; // KiB
  const currentSize = totalSize / 1024; // KiB
  console.log(`🎯 Reducción objetivo: ${targetReduction} KiB`);
  console.log(`📈 Tamaño actual: ${currentSize.toFixed(1)} KiB`);

  if (currentSize < 300) {
    // Asumiendo que antes era ~355 KiB
    console.log("✅ Reducción de JavaScript lograda!");
  } else {
    console.log("⚠️  Aún se puede optimizar más");
  }
}

analyzeBundle();
