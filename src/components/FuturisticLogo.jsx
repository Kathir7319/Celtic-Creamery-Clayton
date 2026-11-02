import React from 'react';

/**
 * Futuristic Celtic Creamery Brandmark
 * Merges ancient Irish Celtic knot geometry with cryogenic vortex churn lines,
 * neon emerald ion glow, and solar gold butter-fat singularity.
 */
export default function FuturisticLogo({
  variant = "full", // 'full', 'icon-only', 'badge'
  size = "md",      // 'sm', 'md', 'lg', 'xl'
  animated = true,
  className = ""
}) {
  const sizeMap = {
    sm: { icon: "w-8 h-8", text: "text-lg", sub: "text-[9px]" },
    md: { icon: "w-11 h-11", text: "text-xl sm:text-2xl", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-2xl sm:text-3xl", sub: "text-xs" },
    xl: { icon: "w-20 h-20", text: "text-4xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      
      {/* Futuristic Quantum Celtic Vortex Icon */}
      <div className={`relative ${currentSize.icon} shrink-0 flex items-center justify-center`}>
        
        {/* Ambient Neon Holographic Halo */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/30 via-celtic-600/40 to-amber-400/30 blur-md ${animated ? 'animate-pulse' : ''}`} />
        
        {/* Cyber Platter Enclosure */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-stone-900 via-stone-950 to-black p-1.5 border border-emerald-500/40 shadow-lg shadow-emerald-950/40 flex items-center justify-center overflow-hidden group">
          
          {/* Subtle Grid Lattice Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />

          {/* SVG Quantum Shamrock & Vortex Churn */}
          <svg
            className={`w-full h-full transform transition-transform duration-700 ${animated ? 'group-hover:rotate-180' : ''}`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Neon Celtic Gradients */}
              <linearGradient id="neonEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#022C22" />
              </linearGradient>

              <linearGradient id="solarGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              <radialGradient id="singularityCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#047857" />
              </radialGradient>

              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Cryogenic Outer Orbit Ring */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="url(#neonEmerald)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className={animated ? 'animate-spin-slow origin-center opacity-60' : 'opacity-60'}
            />

            {/* Futuristic Triquetra Shamrock Petals (Quantum Clover Nodes) */}
            {/* Top Leaf Node */}
            <path
              d="M50 18 C38 18 34 32 50 46 C66 32 62 18 50 18 Z"
              fill="url(#neonEmerald)"
              stroke="#6EE7B7"
              strokeWidth="1.2"
              filter="url(#neonGlow)"
              opacity="0.9"
            />
            {/* Bottom Left Leaf Node */}
            <path
              d="M26 62 C16 52 28 40 44 48 C48 66 36 72 26 62 Z"
              fill="url(#neonEmerald)"
              stroke="#6EE7B7"
              strokeWidth="1.2"
              filter="url(#neonGlow)"
              opacity="0.9"
            />
            {/* Bottom Right Leaf Node */}
            <path
              d="M74 62 C84 52 72 40 56 48 C52 66 64 72 74 62 Z"
              fill="url(#neonEmerald)"
              stroke="#6EE7B7"
              strokeWidth="1.2"
              filter="url(#neonGlow)"
              opacity="0.9"
            />

            {/* Churn Vortex Spiral Ribbons (Cream Churn Wave) */}
            <path
              d="M50 50 Q65 35 60 22 Q45 28 50 50 Z"
              fill="url(#solarGold)"
              opacity="0.85"
            />
            <path
              d="M50 50 Q35 65 24 58 Q32 44 50 50 Z"
              fill="url(#solarGold)"
              opacity="0.85"
            />
            <path
              d="M50 50 Q65 65 72 52 Q60 42 50 50 Z"
              fill="url(#solarGold)"
              opacity="0.85"
            />

            {/* Celtic Stem / Cryo-Pillar */}
            <path
              d="M50 58 L50 82 Q50 86 54 88"
              stroke="#FBBF24"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Center Golden Butterfat Singularity */}
            <circle
              cx="50"
              cy="50"
              r="6.5"
              fill="url(#singularityCore)"
              className={animated ? 'animate-pulse' : ''}
            />
            <circle
              cx="50"
              cy="50"
              r="2.5"
              fill="#FFFFFF"
            />
          </svg>

          {/* Holographic Angle Accents */}
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-emerald-400" />
          <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-emerald-400" />
          <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-emerald-400" />
          <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-emerald-400" />
        </div>
      </div>

      {/* Typography Brand Name (Rendered if not icon-only) */}
      {variant !== "icon-only" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif ${currentSize.text} font-black tracking-tight text-stone-900 group-hover:text-celtic-900 transition-colors uppercase`}>
              Celtic
              <span className="text-emerald-600 ml-1 bg-gradient-to-r from-emerald-600 via-celtic-700 to-amber-500 bg-clip-text text-transparent">
                Creamery
              </span>
            </span>
            
            {/* Cyber Clayton Location Node */}
            <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded bg-stone-900 text-amber-300 border border-amber-400/50 shadow-xs hidden sm:inline-block">
              Clayton // NC
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`font-mono ${currentSize.sub} tracking-widest text-emerald-800 uppercase font-bold flex items-center gap-1`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              Quantum Churned Dairy
            </span>
            <span className="text-stone-300 text-[10px] hidden sm:inline">•</span>
            <span className="text-[10px] text-stone-500 font-medium hidden sm:inline">
              Daily Small-Batch
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
