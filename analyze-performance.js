import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para analizar el tamaño del bundle
function analyzeBundleSize() {
  console.log("📊 Analizando tamaño del bundle...\n");

  const distDir = path.join(__dirname, "dist");
  if (!fs.existsSync(distDir)) {
    console.log(
      '❌ Directorio dist no encontrado. Ejecuta "npm run build" primero.'
    );
    return;
  }

  const files = fs.readdirSync(distDir);
  let totalSize = 0;
  const fileSizes = [];

  files.forEach((file) => {
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

  console.log("📁 Archivos en dist/ (ordenados por tamaño):");
  fileSizes.forEach((file) => {
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    const bar = "█".repeat(Math.min(20, Math.round(file.sizeKB / 50)));
    console.log(`${file.name.padEnd(40)} ${sizeMB}MB ${bar}`);
  });

  console.log(`\n📊 Total: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);

  // Recomendaciones
  console.log("\n💡 Recomendaciones:");

  const largeFiles = fileSizes.filter((f) => f.size > 1024 * 1024); // > 1MB
  if (largeFiles.length > 0) {
    console.log("⚠️  Archivos grandes (>1MB):");
    largeFiles.forEach((file) => {
      console.log(
        `   - ${file.name}: ${(file.size / 1024 / 1024).toFixed(2)}MB`
      );
    });
  }

  const jsFiles = fileSizes.filter((f) => f.name.endsWith(".js"));
  const totalJS = jsFiles.reduce((sum, f) => sum + f.size, 0);
  if (totalJS > 500 * 1024) {
    // > 500KB
    console.log(
      `⚠️  JavaScript total: ${(totalJS / 1024).toFixed(
        0
      )}KB (considera code splitting)`
    );
  }

  const cssFiles = fileSizes.filter((f) => f.name.endsWith(".css"));
  const totalCSS = cssFiles.reduce((sum, f) => sum + f.size, 0);
  if (totalCSS > 100 * 1024) {
    // > 100KB
    console.log(
      `⚠️  CSS total: ${(totalCSS / 1024).toFixed(0)}KB (considera purging)`
    );
  }

  return { totalSize, fileSizes };
}

// Función para analizar dependencias
function analyzeDependencies() {
  console.log("\n🔍 Analizando dependencias...\n");

  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "package.json"), "utf8")
  );
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  console.log("📦 Dependencias principales:");
  Object.entries(dependencies).forEach(([name, version]) => {
    console.log(`   ${name}: ${version}`);
  });

  // Verificar dependencias pesadas
  const heavyDeps = ["framer-motion", "react-router-dom", "lucide-react"];
  console.log("\n⚠️  Dependencias que pueden afectar el rendimiento:");
  heavyDeps.forEach((dep) => {
    if (dependencies[dep]) {
      console.log(`   - ${dep}: ${dependencies[dep]}`);
    }
  });
}

// Función para generar reporte de optimización
function generateOptimizationReport(analysis) {
  const report = `# 📊 Reporte de Análisis de Rendimiento - Belicona

## 📁 Análisis del Bundle

### Tamaño Total: ${(analysis.totalSize / 1024 / 1024).toFixed(2)}MB

### Archivos por Tamaño:
${analysis.fileSizes
  .map((f) => `- **${f.name}**: ${(f.size / 1024 / 1024).toFixed(2)}MB`)
  .join("\n")}

## 🎯 Recomendaciones de Optimización

### 1. Imágenes
- ✅ Implementar WebP/AVIF
- ✅ Lazy loading
- ⚠️ Considerar CDN para imágenes grandes

### 2. JavaScript
- ✅ Code splitting implementado
- ⚠️ Revisar dependencias no utilizadas
- ⚠️ Considerar tree shaking más agresivo

### 3. CSS
- ✅ CSS crítico inline
- ⚠️ Revisar purging de Tailwind
- ⚠️ Considerar CSS modules

### 4. Videos
- ⚠️ Optimizar video 13.mp4 (26MB)
- ⚠️ Considerar streaming o compresión

## 🚀 Próximos Pasos

1. **Optimizar video**: Comprimir 13.mp4
2. **Implementar Service Worker**: Para cache offline
3. **CDN**: Para recursos estáticos
4. **Monitoreo**: Lighthouse CI

---
*Generado el: ${new Date().toLocaleDateString("es-ES")}*
`;

  fs.writeFileSync(path.join(__dirname, "PERFORMANCE_REPORT.md"), report);
  console.log("\n📄 Reporte generado: PERFORMANCE_REPORT.md");
}

// Función principal
async function main() {
  console.log("🚀 Iniciando análisis de rendimiento...\n");

  try {
    const analysis = analyzeBundleSize();
    analyzeDependencies();
    generateOptimizationReport(analysis);

    console.log("\n✨ Análisis completado!");
    console.log("\n📋 Próximos pasos:");
    console.log("1. Revisar el reporte generado");
    console.log("2. Optimizar archivos grandes");
    console.log("3. Ejecutar Lighthouse para métricas reales");
  } catch (error) {
    console.error("❌ Error durante el análisis:", error);
  }
}

main().catch(console.error);
