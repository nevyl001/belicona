import React from "react";

// Componente para preload de fuentes críticas
export const FontPreloader = () => {
  return (
    <>
      {/* Preload de fuentes críticas */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Bubbly:wght@400;700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bubbly:wght@400;700&display=swap"
        />
      </noscript>
      
      {/* Preload hint para LCP element */}
      <div className="preload-hint" data-lcp-hint="true">
        LA REVOLUCIÓN BELICONA
      </div>
    </>
  );
};

export default FontPreloader;