import React from "react";

// Componente de carga optimizado - sin dependencias externas
export const OptimizedLoading = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin`}></div>
    </div>
  );
};

export default OptimizedLoading;