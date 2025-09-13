import React from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  ...props
}) => {
  // Generar rutas para diferentes formatos y tamaños
  const getImagePath = (originalSrc, size = "") => {
    const pathParts = originalSrc.split("/");
    const filename = pathParts[pathParts.length - 1];
    const nameWithoutExt = filename.split(".")[0];
    const ext = filename.split(".").pop();

    // Si es una imagen optimizada, usar la ruta optimizada
    if (originalSrc.includes("/optimized/")) {
      return {
        webp: originalSrc,
        avif: originalSrc.replace(".webp", ".avif"),
        fallback: originalSrc.replace(".webp", `.${ext}`),
      };
    }

    // Generar rutas para imágenes optimizadas
    const basePath = originalSrc.replace(`/${filename}`, "");
    const optimizedPath = `${basePath}/optimized`;

    return {
      webp: `${optimizedPath}/${nameWithoutExt}${size}.webp`,
      avif: `${optimizedPath}/${nameWithoutExt}${size}.avif`,
      fallback: originalSrc,
    };
  };

  const imagePaths = getImagePath(src);
  const isOptimized = src.includes("/optimized/");

  if (isOptimized) {
    // Si ya es una imagen optimizada, renderizar normalmente
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        {...props}
      />
    );
  }

  return (
    <picture>
      {/* AVIF - mejor compresión */}
      <source srcSet={imagePaths.avif} type="image/avif" sizes={sizes} />

      {/* WebP - buena compresión y compatibilidad */}
      <source srcSet={imagePaths.webp} type="image/webp" sizes={sizes} />

      {/* Fallback para navegadores que no soportan formatos modernos */}
      <img
        src={imagePaths.fallback}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
