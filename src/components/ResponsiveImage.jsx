import React, { useState } from "react";

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generar rutas para diferentes formatos y tamaños
  const getImagePaths = (originalSrc) => {
    const pathParts = originalSrc.split("/");
    const filename = pathParts[pathParts.length - 1];
    const nameWithoutExt = filename.split(".")[0];
    const ext = filename.split(".").pop();

    // Si es una imagen optimizada, usar la ruta optimizada
    if (originalSrc.includes("/optimized/")) {
      const baseName = originalSrc.replace(".webp", "").replace(".avif", "");
      return {
        webp: {
          small: `${baseName}-small.webp`,
          medium: `${baseName}-medium.webp`,
          large: `${baseName}-large.webp`,
          original: originalSrc,
        },
        avif: {
          small: `${baseName}-small.avif`,
          medium: `${baseName}-medium.avif`,
          large: `${baseName}-large.avif`,
          original: originalSrc.replace(".webp", ".avif"),
        },
        fallback: originalSrc.replace(".webp", `.${ext}`),
      };
    }

    // Generar rutas para imágenes no optimizadas
    const basePath = originalSrc.replace(`/${filename}`, "");
    const optimizedPath = `${basePath}/optimized`;

    return {
      webp: {
        small: `${optimizedPath}/${nameWithoutExt}-small.webp`,
        medium: `${optimizedPath}/${nameWithoutExt}-medium.webp`,
        large: `${optimizedPath}/${nameWithoutExt}-large.webp`,
        original: `${optimizedPath}/${nameWithoutExt}.webp`,
      },
      avif: {
        small: `${optimizedPath}/${nameWithoutExt}-small.avif`,
        medium: `${optimizedPath}/${nameWithoutExt}-medium.avif`,
        large: `${optimizedPath}/${nameWithoutExt}-large.avif`,
        original: `${optimizedPath}/${nameWithoutExt}.avif`,
      },
      fallback: originalSrc,
    };
  };

  const imagePaths = getImagePaths(src);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-800 rounded-lg flex items-center justify-center ${className}`}
      >
        <p className="text-gray-400">Error al cargar la imagen</p>
      </div>
    );
  }

  return (
    <picture className={className}>
      {/* AVIF sources - mejor compresión */}
      <source
        media="(max-width: 640px)"
        srcSet={imagePaths.avif.small}
        type="image/avif"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={imagePaths.avif.medium}
        type="image/avif"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={imagePaths.avif.large}
        type="image/avif"
      />
      <source srcSet={imagePaths.avif.original} type="image/avif" />

      {/* WebP sources - amplio soporte */}
      <source
        media="(max-width: 640px)"
        srcSet={imagePaths.webp.small}
        type="image/webp"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={imagePaths.webp.medium}
        type="image/webp"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={imagePaths.webp.large}
        type="image/webp"
      />
      <source srcSet={imagePaths.webp.original} type="image/webp" />

      {/* Fallback image */}
      <img
        src={imagePaths.fallback}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        {...props}
      />

      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </picture>
  );
};

export default ResponsiveImage;
