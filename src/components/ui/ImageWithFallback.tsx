'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2E1065" /><stop offset="50%" stop-color="#4C1D95" /><stop offset="100%" stop-color="#6D28D9" /></linearGradient></defs><rect width="800" height="500" fill="url(#g)" /><text x="400" y="235" dominant-baseline="middle" text-anchor="middle" font-family="-apple-system, system-ui, sans-serif" font-weight="bold" font-size="28" fill="#EDE9FE">thecodecraX</text><text x="400" y="275" dominant-baseline="middle" text-anchor="middle" font-family="-apple-system, system-ui, sans-serif" font-size="14" fill="#C4B5FD">AI &amp; Web3 Community • India</text></svg>`;
  
  const fallbackSrc = `data:image/svg+xml;utf8,${encodeURIComponent(fallbackSvg)}`;

  if (fill) {
    return (
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
        onError={() => setError(true)}
        unoptimized={error || src.startsWith('data:')}
      />
    );
  }

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width || 800}
      height={height || 450}
      className={className}
      priority={priority}
      onError={() => setError(true)}
      unoptimized={error || src.startsWith('data:')}
    />
  );
}
