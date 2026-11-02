import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart, Clock, Check, UtensilsCrossed } from 'lucide-react';
import { SHOP_INFO, FLAVORS } from '../data/creameryData';
import CreameryImage from './CreameryImage';

export default function Hero({ onScrollToFlavors, onGoToCakes, onOpenAiModal }) {
  // Interactive mini cone scoop stacker
  const [coneScoops, setConeScoops] = useState(['#FBF3D5', '#DEC7B2', '#E4B882']);
  const [selectedScoopName, setSelectedScoopName] = useState('3-Scoop Celtic Flight');

  const addScoop = (flavor) => {
    setConeScoops((prev) => {
      const next = [flavor.scoopColor, ...prev.slice(0, 2)];
      return next;
    });
    setSelectedScoopName(flavor.name);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100/60 border-b border-cream-200">
      {/* Decorative ambient Celtic glows */}
      <div className="absolute top-0 right-0 -mr-28 -mt-28 w-96 h-96 rounded-full bg-celtic-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />

      {/* Floating subtle clover particles */}
      <div className="absolute top-12 left-10 text-celtic-700/20 text-3xl select-none animate-float hidden lg:block">☘️</div>
      <div className="absolute top-36 right-16 text-amber-500/25 text-4xl select-none animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>🍀</div>
      <div className="absolute bottom-8 left-1/3 text-celtic-700/15 text-2xl select-none hidden lg:block">☘️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Live Churning Ticker Bar */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-celtic-300 text-celtic-950 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-celtic-800 font-extrabold uppercase tracking-wider text-[11px]">Currently Churning:</span>
            <span className="font-serif font-bold text-stone-900">Batch #142 • Salted Caramel Shamrock</span>
            <span className="text-amber-500 hidden sm:inline">☘️</span>
          </div>
        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Required Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-celtic-100/90 border border-celtic-300 text-celtic-900 text-xs sm:text-sm font-bold shadow-xs">
              <span>Clayton, NC • 101 E Main Street</span>
              <span className="text-amber-600 font-bold">☘️</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
              Authentic Irish Ice Cream,{' '}
              <span className="relative inline-block text-celtic-900 underline decoration-amber-400 decoration-wavy decoration-2">
                Churned Fresh Daily
              </span>{' '}
              in Clayton.
            </h1>

            {/* Exact Required Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {SHOP_INFO.subheadline}
            </p>

            {/* Exact Required CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onScrollToFlavors}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-celtic-800 to-celtic-950 hover:from-celtic-900 hover:to-black shadow-lg shadow-celtic-950/20 hover:shadow-xl transition-all duration-200 transform active:scale-95 group"
              >
                <span>View Today's Flavors</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onGoToCakes}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-celtic-950 bg-amber-400 hover:bg-amber-300 border border-amber-500/50 shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95"
              >
                <span>Pre-Order a Cake</span>
                <span className="text-[11px] bg-amber-950 text-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                  48h Notice
                </span>
              </button>
            </div>

            {/* AI Assistant Quick Pill Banner */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={onOpenAiModal}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 hover:bg-white border border-celtic-300 shadow-soft text-stone-700 hover:text-celtic-900 transition-all text-xs sm:text-sm text-left group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-amber-950 shrink-0 group-hover:rotate-12 transition-transform shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-celtic-950 block sm:inline">Can't decide on a flavor?</span>{' '}
                  <span className="text-celtic-800 underline font-semibold">Ask our AI Irish Flavor Sommelier &rarr;</span>
                </div>
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-cream-200 text-stone-600">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif font-extrabold text-xl text-celtic-900">Double Cream</span>
                <span className="text-xs text-stone-500">Irish Churn Tradition</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-cream-200 px-2">
                <span className="font-serif font-extrabold text-xl text-celtic-900">Weekly Drop</span>
                <span className="text-xs text-stone-500">Fresh Rotational Tubs</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif font-extrabold text-xl text-celtic-900">Free Parking</span>
                <span className="text-xs text-stone-500">Main St & Public Lot</span>
              </div>
            </div>

          </div>

          {/* Right Column: Unique Interactive Waffle Cone Stacker & Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-celtic-400/25 to-amber-400/25 rounded-3xl blur-2xl transform rotate-2"></div>

              {/* Main Visual Parlor Card */}
              <div className="relative bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-cream-300 overflow-hidden space-y-4">
                
                {/* Header of Interactive Cone Studio */}
                <div className="flex items-center justify-between border-b border-cream-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🍦</span>
                    <div>
                      <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-tight">
                        Interactive Scoop Stacker
                      </h3>
                      <p className="text-[11px] text-stone-500">Tap any flavor below to stack your cone!</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider bg-celtic-100 text-celtic-800 px-2 py-0.5 rounded-full border border-celtic-200">
                    Live Demo
                  </span>
                </div>

                {/* Cone & Scoops Interactive Visualizer */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-cream-100 to-cream-200/80 flex flex-col items-center justify-center p-4 overflow-hidden border border-cream-300">
                  
                  {/* Subtle Background Parlor Photography with Fallback */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <CreameryImage
                      src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"
                      alt="Celtic Creamery parlor texture"
                      fallbackType="ice-cream"
                    />
                  </div>

                  {/* 3 Stacking Scoops */}
                  <div className="relative z-10 flex flex-col items-center -space-y-4 transition-all duration-300">
                    {/* Top Scoop 3 */}
                    <div
                      className="w-20 h-20 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-xs font-bold transition-all duration-300 transform hover:scale-105"
                      style={{ backgroundColor: coneScoops[0] }}
                    >
                      <span className="filter drop-shadow text-lg select-none">✨</span>
                    </div>

                    {/* Middle Scoop 2 */}
                    <div
                      className="w-24 h-24 rounded-full shadow-md border-2 border-white flex items-center justify-center text-xs font-bold transition-all duration-300"
                      style={{ backgroundColor: coneScoops[1] }}
                    >
                      <span className="filter drop-shadow text-lg select-none">☘️</span>
                    </div>

                    {/* Bottom Scoop 1 */}
                    <div
                      className="w-28 h-28 rounded-full shadow-sm border-2 border-white flex items-center justify-center text-xs font-bold transition-all duration-300"
                      style={{ backgroundColor: coneScoops[2] }}
                    >
                      <span className="filter drop-shadow text-lg select-none">🍦</span>
                    </div>

                    {/* Waffle Cone SVG */}
                    <svg className="w-28 h-28 text-amber-600 -mt-2 drop-shadow-md select-none" viewBox="0 0 100 120" fill="currentColor">
                      <polygon points="10,10 90,10 50,115" fill="#D97706" />
                      <line x1="20" y1="10" x2="50" y2="115" stroke="#B45309" strokeWidth="2" />
                      <line x1="40" y1="10" x2="50" y2="115" stroke="#B45309" strokeWidth="2" />
                      <line x1="60" y1="10" x2="50" y2="115" stroke="#B45309" strokeWidth="2" />
                      <line x1="80" y1="10" x2="50" y2="115" stroke="#B45309" strokeWidth="2" />
                      <line x1="20" y1="30" x2="80" y2="30" stroke="#B45309" strokeWidth="1.5" />
                      <line x1="30" y1="60" x2="70" y2="60" stroke="#B45309" strokeWidth="1.5" />
                      <line x1="40" y1="90" x2="60" y2="90" stroke="#B45309" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Top Floating Badge */}
                  <div className="absolute bottom-2 left-2 right-2 bg-stone-950/85 backdrop-blur-md text-white p-2 rounded-xl text-center border border-white/10 z-20">
                    <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">
                      Currently Stacked
                    </span>
                    <span className="text-xs font-bold text-white line-clamp-1">
                      {selectedScoopName}
                    </span>
                  </div>
                </div>

                {/* Flavor Clicker Selector */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Tap to Add Fresh Scoop:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {FLAVORS.slice(0, 3).map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => addScoop(f)}
                        className="p-2 rounded-xl border border-cream-300 hover:border-celtic-500 bg-cream-50 hover:bg-cream-100 text-stone-800 text-[11px] font-bold text-left transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/20"
                          style={{ backgroundColor: f.scoopColor }}
                        />
                        <span className="line-clamp-1">{f.name.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Handcrafted Quality Badge */}
              <div className="absolute -bottom-5 -left-4 bg-cream-50 p-3.5 rounded-2xl shadow-xl border border-cream-300 flex items-center gap-3 animate-float max-w-xs z-30">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Heart className="w-5 h-5 fill-amber-500 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Handcrafted Irish Recipe</p>
                  <p className="text-[11px] text-stone-500">Zero artificial shortcuts</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
