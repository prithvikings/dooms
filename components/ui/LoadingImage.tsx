"use client";

import Image from "next/image";
import { useState } from "react";

type LoadingImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function LoadingImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
}: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!isLoaded && !hasError && (
        <span
          aria-hidden="true"
          className="image-shimmer pointer-events-none absolute inset-0 z-[1] overflow-hidden bg-[#171d19]"
        />
      )}
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={[
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className,
          ].join(" ")}
        />
      ) : (
        <span
          role="img"
          aria-label={alt || "Image unavailable"}
          className="absolute inset-0 flex items-center justify-center bg-[#171d19] text-xs text-white/50"
        >
          Image unavailable
        </span>
      )}
    </>
  );
}
