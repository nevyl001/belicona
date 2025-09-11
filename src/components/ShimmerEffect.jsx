import React from "react";

const ShimmerEffect = ({
  className = "",
  children,
  isLoading = false,
  shimmerColor = "from-gray-200 to-gray-300",
}) => {
  if (isLoading) {
    return (
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <div
          className={`h-full w-full bg-gradient-to-r ${shimmerColor} animate-pulse`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};

export default ShimmerEffect;
