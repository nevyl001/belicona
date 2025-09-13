import React, { Suspense, lazy } from "react";

// Componente de loading
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
  </div>
);

// Función para crear componentes lazy
export const createLazyComponent = (
  importFunc,
  fallback = <LoadingSpinner />
) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Componentes lazy específicos
export const LazyNoticiaDetalle = createLazyComponent(() =>
  import("../pages/NoticiaDetalle")
);
export const LazyEventoDetalle = createLazyComponent(() =>
  import("../pages/EventoDetalle")
);
export const LazyProductCardMobile = createLazyComponent(() =>
  import("./ProductCardMobile")
);

export default createLazyComponent;
