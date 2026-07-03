import React, { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

interface ShimmerImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imgClassName?: string;
  wrapperClassName?: string;
}

export const ShimmerImage: React.FC<ShimmerImageProps> = ({
  src,
  alt,
  className,
  imgClassName,
  wrapperClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // If the src changes, reset loaded state
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-brand-forest/40", wrapperClassName)}>
      {/* Premium Shimmer Skeleton Overlay */}
      {(!isLoaded && !error) && (
        <div 
          className="absolute inset-0 shimmer-gradient z-10 transition-opacity duration-500" 
          id="shimmer-skeleton"
        />
      )}

      {/* Image element */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.01]",
          imgClassName
        )}
        referrerPolicy="no-referrer"
        {...props}
      />

      {/* Fallback state if error */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-charcoal text-brand-gray text-[10px] font-mono border border-white/5 p-2 text-center">
          <span className="block text-brand-rose mb-1">Image unavailable</span>
          <span className="text-[8px] opacity-60">Archive Connection Offline</span>
        </div>
      )}
    </div>
  );
};
