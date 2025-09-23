import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const ImageOptimizer = ({ 
  src, 
  alt, 
  className, 
  priority = false, 
  sizes = "100vw",
  quality = 85 
}: ImageOptimizerProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Create optimized image sources
    const optimizeImage = () => {
      // Check if image is already optimized (WebP)
      if (src.includes('.webp')) {
        setImageSrc(src);
        return;
      }

      // For other formats, use original for now
      // In production, you'd implement WebP conversion here
      setImageSrc(src);
    };

    optimizeImage();
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to a placeholder or original image
    setImageSrc('/placeholder.svg');
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !hasError && (
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse",
          "flex items-center justify-center"
        )}>
          <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-muted-foreground rounded-full animate-spin" />
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        // Add responsive image attributes
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />

      {/* Preload hint for critical images */}
      {priority && (
        <link rel="preload" as="image" href={imageSrc} />
      )}
    </div>
  );
};

export default ImageOptimizer;