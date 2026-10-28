import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para verificar la configuración de despliegue
function checkDeploymentConfig() {
  console.log("🔍 Verificando configuración de despliegue...\n");

  const configs = [
    {
      file: "vercel.json",
      description: "Configuración de Vercel para SPA",
      required: true,
    },
    {
      file: "public/_redirects",
      description: "Redirecciones de respaldo",
      required: true,
    },
    {
      file: "package.json",
      description: "Configuración del proyecto",
      required: true,
    },
    {
      file: "vite.config.js",
      description: "Configuración de Vite",
      required: true,
    },
  ];

  let allGood = true;

  configs.forEach((config) => {
    const filePath = path.join(__dirname, config.file);
    const exists = fs.existsSync(filePath);

    console.log(`${exists ? "✅" : "❌"} ${config.file}`);
    console.log(`   ${config.description}`);

    if (exists) {
      const content = fs.readFileSync(filePath, "utf8");
      console.log(
        `   Tamaño: ${(fs.statSync(filePath).size / 1024).toFixed(1)}KB`
      );

      // Verificaciones específicas
      if (config.file === "vercel.json") {
        if (content.includes('"rewrites"')) {
          console.log("   ✅ Rewrites configurados");
        } else {
          console.log("   ⚠️  Rewrites no encontrados");
          allGood = false;
        }
      }

      if (config.file === "public/_redirects") {
        if (content.includes("/*    /index.html   200")) {
          console.log("   ✅ Redirección SPA configurada");
        } else {
          console.log("   ⚠️  Redirección SPA no encontrada");
          allGood = false;
        }
      }
    } else {
      if (config.required) {
        console.log("   ❌ ARCHIVO REQUERIDO FALTANTE");
        allGood = false;
      }
    }
    console.log("");
  });

  // Verificar rutas en App.jsx
  console.log("🔍 Verificando rutas en App.jsx...");
  const appPath = path.join(__dirname, "src/App.jsx");
  if (fs.existsSync(appPath)) {
    const appContent = fs.readFileSync(appPath, "utf8");

    const routes = [
      { path: "/", name: "Home" },
      { path: "/sobre-nosotros", name: "Sobre Nosotros" },
      { path: "/noticias", name: "Noticias" },
      { path: "/eventos", name: "Eventos" },
      { path: "/productos", name: "Productos" },
      { path: "/shop", name: "Shop / Dónde comprar" },
      { path: "/contacto", name: "Contacto" },
      { path: "/menor-edad", name: "Menor Edad" },
    ];

    routes.forEach((route) => {
      if (appContent.includes(`path="${route.path}"`)) {
        console.log(`   ✅ ${route.name}: ${route.path}`);
      } else {
        console.log(`   ❌ ${route.name}: ${route.path} - NO ENCONTRADO`);
        allGood = false;
      }
    });
  }

  console.log("\n📋 RESUMEN:");
  if (allGood) {
    console.log("✅ Configuración correcta para despliegue SPA");
    console.log("✅ Todas las rutas están configuradas");
    console.log("✅ Los errores 404 deberían resolverse");
  } else {
    console.log("❌ Hay problemas en la configuración");
    console.log("❌ Los errores 404 pueden persistir");
  }

  console.log("\n🚀 PRÓXIMOS PASOS:");
  console.log("1. Hacer commit de los archivos de configuración");
  console.log("2. Hacer push a GitHub");
  console.log("3. Vercel detectará automáticamente los cambios");
  console.log("4. Probar las rutas después del despliegue");

  console.log("\n💡 COMANDOS PARA DESPLEGAR:");
  console.log("git add .");
  console.log("git commit -m 'Fix: Configurar SPA routing para Vercel'");
  console.log("git push origin main");
}

// Función principal
async function main() {
  console.log("🚀 Verificando configuración de despliegue...\n");

  try {
    checkDeploymentConfig();
  } catch (error) {
    console.error("❌ Error durante la verificación:", error);
  }
}

main().catch(console.error);
