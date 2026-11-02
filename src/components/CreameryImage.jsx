import React, { useState } from 'react';

/**
 * Foolproof Image component with smooth fade-in,
 * error catching, and beautiful custom Irish Creamery fallback graphics.
 */
export default function CreameryImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackType = "ice-cream", // 'ice-cream', 'cake', 'parlor', 'catering'
  flavorColor = "#059669",
  flavorName = "Celtic Scoop"
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If source fails or is missing, render gorgeous vector creamery illustration
  if (hasError || !src) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden select-none bg-gradient-to-br from-cream-100 to-cream-200 ${className}`}>
        {/* Subtle decorative background clover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl pointer-events-none">
          ☘️
        </div>

        {fallbackType === 'cake' ? (
          <div className="relative z-10 flex flex-col items-center text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-3xl shadow-md">
              🎂
            </div>
            <span className="font-serif text-xs font-bold text-stone-800 line-clamp-1">{flavorName || "Custom Cake"}</span>
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-full">
              Hand-Churned in Clayton
            </span>
          </div>
        ) : fallbackType === 'catering' ? (
          <div className="relative z-10 flex flex-col items-center text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-celtic-100 border border-celtic-300 flex items-center justify-center text-3xl shadow-md">
              🚐
            </div>
            <span className="font-serif text-xs font-bold text-stone-800">Mobile Scoop Cart</span>
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-celtic-800 bg-celtic-200/60 px-2 py-0.5 rounded-full">
              Full-Service Event Catering
            </span>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center text-center space-y-2">
            <div
              className="w-16 h-16 rounded-2xl border border-black/10 flex items-center justify-center text-3xl shadow-md"
              style={{ backgroundColor: flavorColor || '#FDF8E4' }}
            >
              🍨
            </div>
            <span className="font-serif text-xs font-bold text-stone-800 line-clamp-1">{flavorName}</span>
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-celtic-800 bg-celtic-100 px-2 py-0.5 rounded-full">
              Authentic Irish Cream
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-cream-100">
      {/* Loading placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-200 to-cream-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || "Celtic Creamery Clayton"}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    </div>
  );
}
