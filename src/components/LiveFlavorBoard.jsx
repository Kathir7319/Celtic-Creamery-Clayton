import React, { useState } from 'react';
import { Sparkles, RefreshCw, Filter, Award, ShieldCheck, Heart, X, Check, ArrowRight } from 'lucide-react';
import { FLAVORS } from '../data/creameryData';
import FlavorCard from './FlavorCard';

export default function LiveFlavorBoard({ onSelectForCake }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedFlavorModal, setSelectedFlavorModal] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Flavors (6)' },
    { id: 'signature', label: 'Signature Classics' },
    { id: 'weekly', label: 'Weekly Feature Drop 🍀' },
    { id: 'gf', label: 'Gluten-Free Friendly' },
  ];

  const filteredFlavors = FLAVORS.filter((f) => {
    if (activeFilter === 'signature') return f.category === 'Signature Classic';
    if (activeFilter === 'weekly') return f.isWeeklyFeature;
    if (activeFilter === 'gf') return f.tags.includes('Gluten-Free');
    return true;
  });

  return (
    <section id="flavors-section" className="py-16 sm:py-24 bg-cream-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-widest shadow-xs">
            <RefreshCw className="w-3.5 h-3.5 text-amber-700 animate-spin-slow" />
            <span>Live Dip Cabinet • Small-Batch Irish Churn</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Currently Churning: Today's Flavor Lineup
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            We rotate our flavors weekly to bring you fresh, artisanal creations. Here is what is fresh in the dip cabinet right now!
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === opt.id
                  ? 'bg-celtic-900 text-cream-50 shadow-md scale-105'
                  : 'bg-white text-stone-700 border border-cream-300 hover:border-celtic-400 hover:bg-cream-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Dynamic Flavor Grid - Perfectly Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredFlavors.map((flavor) => (
            <div key={flavor.id} className="h-full">
              <FlavorCard
                flavor={flavor}
                onSelectForCake={onSelectForCake}
                onOpenDetail={(f) => setSelectedFlavorModal(f)}
              />
            </div>
          ))}
        </div>

        {/* Weekly Rotation Notice Card */}
        <div className="mt-14 bg-gradient-to-r from-celtic-900 via-celtic-950 to-stone-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-celtic-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>Weekly Drop Schedule</span>
              <span>•</span>
              <span>Updated Every Monday at 10 AM</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Looking for our next limited-batch creation?
            </h3>
            <p className="text-cream-200/90 text-sm max-w-xl">
              We announce new weekly rotational flavors every Monday on Instagram and right here on this live flavor board!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://instagram.com/celticcreameryclayton"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              Follow @CelticCreameryClayton
            </a>
          </div>
        </div>

      </div>

      {/* Flavor Detail Modal */}
      {selectedFlavorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-cream-200 space-y-6 relative">
            <button
              onClick={() => setSelectedFlavorModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-black/10 shrink-0"
                style={{ backgroundColor: selectedFlavorModal.scoopColor }}
              >
                🍨
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-celtic-800 tracking-wider">
                  {selectedFlavorModal.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                  {selectedFlavorModal.name}
                </h3>
                <p className="text-xs font-bold text-amber-600">
                  {selectedFlavorModal.tagline}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-stone-700 text-sm">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-400 mb-1">
                  Churn Profile & Description
                </h4>
                <p className="leading-relaxed bg-cream-50 p-3.5 rounded-xl border border-cream-200">
                  {selectedFlavorModal.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-400 mb-1">
                  Sommelier Pairing Suggestion
                </h4>
                <p className="leading-relaxed bg-celtic-50 p-3.5 rounded-xl border border-celtic-200 text-celtic-950 font-medium">
                  ☘️ {selectedFlavorModal.pairing}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="font-bold block text-stone-500">Allergen Notice:</span>
                  <span className="font-bold text-stone-800">
                    {selectedFlavorModal.allergens.join(', ')}
                  </span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="font-bold block text-stone-500">Serving Standard:</span>
                  <span className="font-bold text-stone-800">Double Irish Velvet Churn</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedFlavorModal(null)}
                className="px-4 py-2 text-sm font-semibold text-stone-600 hover:text-stone-900"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const flavor = selectedFlavorModal;
                  setSelectedFlavorModal(null);
                  onSelectForCake(flavor);
                }}
                className="px-5 py-2.5 rounded-full bg-celtic-800 hover:bg-celtic-900 text-white font-bold text-sm shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Use in My Custom Cake &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
