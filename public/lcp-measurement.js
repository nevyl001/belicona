// Script para medir LCP
(function() {
  'use strict';
  
  // Función para medir LCP
  function measureLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        console.log('🎯 LCP Element:', lastEntry.element);
        console.log('⏱️ LCP Time:', lastEntry.startTime + 'ms');
        console.log('📏 LCP Size:', lastEntry.size);
        
        // Enviar métricas a analytics si es necesario
        if (window.gtag) {
          gtag('event', 'lcp_measurement', {
            'lcp_time': Math.round(lastEntry.startTime),
            'lcp_size': lastEntry.size
          });
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }
  
  // Medir LCP cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', measureLCP);
  } else {
    measureLCP();
  }
})();