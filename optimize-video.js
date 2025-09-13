import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Función para optimizar video con FFmpeg
function optimizeVideo() {
  console.log("🎬 Optimizando video...\n");

  const inputPath = "src/assets/13.mp4";
  const outputDir = "public/optimized";

  if (!fs.existsSync(inputPath)) {
    console.log("❌ Video no encontrado:", inputPath);
    return;
  }

  // Crear directorio de salida
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Verificar si FFmpeg está instalado
    execSync("ffmpeg -version", { stdio: "ignore" });

    console.log("📹 Creando versiones optimizadas del video...");

    // Versión web optimizada (MP4)
    const webOutput = path.join(outputDir, "13-web.mp4");
    execSync(
      `ffmpeg -i "${inputPath}" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart "${webOutput}"`,
      { stdio: "inherit" }
    );

    // Versión móvil (más comprimida)
    const mobileOutput = path.join(outputDir, "13-mobile.mp4");
    execSync(
      `ffmpeg -i "${inputPath}" -c:v libx264 -crf 32 -preset fast -vf "scale=720:-1" -c:a aac -b:a 96k -movflags +faststart "${mobileOutput}"`,
      { stdio: "inherit" }
    );

    // Versión WebM (mejor compresión)
    const webmOutput = path.join(outputDir, "13.webm");
    execSync(
      `ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus "${webmOutput}"`,
      { stdio: "inherit" }
    );

    console.log("\n✅ Videos optimizados creados:");
    console.log(`- ${webOutput}`);
    console.log(`- ${mobileOutput}`);
    console.log(`- ${webmOutput}`);

    // Mostrar tamaños
    const originalSize = fs.statSync(inputPath).size;
    const webSize = fs.statSync(webOutput).size;
    const mobileSize = fs.statSync(mobileOutput).size;
    const webmSize = fs.statSync(webmOutput).size;

    console.log("\n📊 Comparación de tamaños:");
    console.log(`Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(
      `Web: ${(webSize / 1024 / 1024).toFixed(2)}MB (${Math.round(
        (1 - webSize / originalSize) * 100
      )}% reducción)`
    );
    console.log(
      `Mobile: ${(mobileSize / 1024 / 1024).toFixed(2)}MB (${Math.round(
        (1 - mobileSize / originalSize) * 100
      )}% reducción)`
    );
    console.log(
      `WebM: ${(webmSize / 1024 / 1024).toFixed(2)}MB (${Math.round(
        (1 - webmSize / originalSize) * 100
      )}% reducción)`
    );
  } catch (error) {
    console.log("❌ Error:", error.message);
    console.log("\n💡 Instala FFmpeg para optimizar videos:");
    console.log("macOS: brew install ffmpeg");
    console.log("Windows: choco install ffmpeg");
    console.log("Linux: sudo apt install ffmpeg");
  }
}

// Función para crear componente de video optimizado
function createOptimizedVideoComponent() {
  const component = `import React, { useState, useRef, useEffect } from "react";

const OptimizedVideo = ({ 
  src, 
  poster, 
  className = "", 
  autoPlay = false,
  loop = true,
  muted = true,
  playsInline = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useWebM, setUseWebM] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Detectar soporte para WebM
    const video = document.createElement('video');
    if (video.canPlayType('video/webm')) {
      setUseWebM(true);
    }
  }, []);

  const handleLoadStart = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const handleCanPlay = () => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  if (hasError) {
    return (
      <div className={\`bg-gray-800 rounded-lg flex items-center justify-center \${className}\`}>
        <p className="text-gray-400">Error al cargar el video</p>
      </div>
    );
  }

  const videoSrc = useWebM ? src.replace('.mp4', '.webm') : src;

  return (
    <div className={\`relative \${className}\`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        onLoadStart={handleLoadStart}
        onError={handleError}
        onCanPlay={handleCanPlay}
        className={\`w-full h-full object-cover rounded-lg transition-opacity duration-300 \${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }\`}
        {...props}
      />
    </div>
  );
};

export default OptimizedVideo;`;

  fs.writeFileSync("src/components/OptimizedVideo.jsx", component);
  console.log("✅ Componente OptimizedVideo actualizado");
}

// Función principal
async function main() {
  console.log("🚀 Iniciando optimización de video...\n");

  try {
    optimizeVideo();
    createOptimizedVideoComponent();

    console.log("\n✨ Optimización de video completada!");
    console.log("\n📋 Próximos pasos:");
    console.log("1. Actualizar Home.jsx para usar OptimizedVideo");
    console.log("2. Probar en diferentes navegadores");
    console.log("3. Verificar que el video se reproduce correctamente");
  } catch (error) {
    console.error("❌ Error durante la optimización:", error);
  }
}

main().catch(console.error);
