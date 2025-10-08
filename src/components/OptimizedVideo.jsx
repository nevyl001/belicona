import React, { useState, useRef } from "react";

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
  const videoRef = useRef(null);

  const handleLoadStart = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const handleCanPlay = () => {
    // Video está listo para reproducir
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-800 rounded-lg flex items-center justify-center ${className}`}
      >
        <p className="text-gray-400">Error al cargar el video</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        onLoadStart={handleLoadStart}
        onError={handleError}
        onCanPlay={handleCanPlay}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

export default OptimizedVideo;
