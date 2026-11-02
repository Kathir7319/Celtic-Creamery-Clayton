import React, { useState } from 'react';
import { Sparkles, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import CreameryImage from './CreameryImage';

export default function FlavorCard({ flavor, onSelectForCake, onOpenDetail }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full ${
        flavor.isWeeklyFeature
          ? 'bg-gradient-to-br from-celtic-900 via-celtic-950 to-stone-900 text-white shadow-xl ring-2 ring-amber-400'
          : 'bg-white border border-cream-300 text-stone-900 shadow-soft hover:shadow-xl hover:border-celtic-400'
      }`}
    >
      <div>
        {/* Top Banner for Weekly Feature */}
        {flavor.isWeeklyFeature && (
          <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-amber-950 font-extrabold text-xs px-4 py-2 flex items-center justify-between uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              [Dynamic Slot] Weekly Feature Rotation
            </span>
            <span>Limited Churn 🍀</span>
          </div>
        )}

        {/* Card Header Media & Scoop Badge */}
        <div className="relative h-48 w-full bg-cream-100 overflow-hidden border-b border-cream-200">
          <CreameryImage
            src={flavor.image}
            alt={flavor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            fallbackType="ice-cream"
            flavorColor={flavor.scoopColor}
            flavorName={flavor.name}
          />

          {/* Floating Scoop Color Badge */}
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full shadow-md backdrop-blur-md flex items-center gap-2 border border-white/40"
            style={{ backgroundColor: `${flavor.scoopColor}F0` }}
          >
            <span className="text-xs">🍨</span>
            <span className="text-xs font-bold text-stone-900">
              {flavor.category}
            </span>
          </div>

          {/* Calories / Fresh Batch badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
            {flavor.tags[0] || "Churned Fresh"}
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          
          {/* Headline & Tagline */}
          <div className="space-y-1">
            <h3
              className={`font-serif text-2xl font-bold tracking-tight leading-snug ${
                flavor.isWeeklyFeature ? 'text-white' : 'text-stone-900 group-hover:text-celtic-900'
              }`}
            >
              {flavor.name}
            </h3>
            <p
              className={`text-xs sm:text-sm font-semibold ${
                flavor.isWeeklyFeature ? 'text-amber-300' : 'text-celtic-800'
              }`}
            >
              {flavor.tagline}
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              flavor.isWeeklyFeature ? 'text-cream-200' : 'text-stone-600'
            }`}
          >
            {flavor.description}
          </p>

          {/* Taste Characteristics / Meter */}
          <div
            className={`p-3 rounded-2xl border text-xs space-y-2 ${
              flavor.isWeeklyFeature
                ? 'bg-celtic-950/70 border-celtic-800 text-cream-100'
                : 'bg-cream-50 border-cream-200 text-stone-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Texture Style:</span>
              <span className="font-bold text-celtic-800 dark:text-amber-300">{flavor.texture}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-stone-200/50">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-stone-500 font-bold">Sweetness:</span>
                <span className="font-bold text-amber-500">{'★'.repeat(flavor.sweetness || 4)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-stone-500 font-bold">Cream Richness:</span>
                <span className="font-bold text-celtic-700 dark:text-emerald-400">{'●'.repeat(flavor.richness || 5)}</span>
              </div>
            </div>
          </div>

          {/* Tasting Notes */}
          <div className="space-y-1.5">
            <span
              className={`text-[10px] uppercase font-bold tracking-wider ${
                flavor.isWeeklyFeature ? 'text-amber-300' : 'text-stone-400'
              }`}
            >
              Key Tasting Notes
            </span>
            <div className="flex flex-wrap gap-1.5">
              {flavor.notes.map((note, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                    flavor.isWeeklyFeature
                      ? 'bg-celtic-800 text-cream-100 border border-celtic-700'
                      : 'bg-cream-100 text-stone-700 border border-cream-200'
                  }`}
                >
                  ☘️ {note}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer Actions */}
      <div
        className={`px-6 py-4 border-t flex items-center justify-between gap-3 mt-auto ${
          flavor.isWeeklyFeature
            ? 'bg-black/30 border-white/10'
            : 'bg-cream-50 border-cream-200'
        }`}
      >
        <button
          type="button"
          onClick={() => onOpenDetail(flavor)}
          className={`inline-flex items-center gap-1.5 text-xs font-bold hover:underline ${
            flavor.isWeeklyFeature ? 'text-amber-300' : 'text-stone-600 hover:text-celtic-900'
          }`}
        >
          <Info className="w-3.5 h-3.5" />
          <span>Pairing Notes</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectForCake(flavor)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
            flavor.isWeeklyFeature
              ? 'bg-amber-400 text-stone-950 hover:bg-amber-300'
              : 'bg-celtic-800 text-white hover:bg-celtic-950'
          }`}
        >
          <span>Pick for Cake</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
