import React, { useState } from 'react';
import { Sparkles, X, Check, ArrowRight, Wand2, RefreshCw } from 'lucide-react';
import { matchAiFlavor } from '../data/creameryData';

export default function AiFlavorSommelierModal({ isOpen, onClose, onSelectPairingForCake }) {
  const [craving, setCraving] = useState('chocolate');
  const [mood, setMood] = useState('celebratory');
  const [dietary, setDietary] = useState('all');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const match = matchAiFlavor({ craving, mood, dietary });
      setResult(match);
      setIsAnalyzing(false);
    }, 550);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-cream-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Top ambient decor */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-celtic-100/80 blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-celtic-600 via-amber-400 to-celtic-700" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-celtic-100 text-celtic-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-celtic-700" />
            <span>AI Irish Flavor Sommelier & Matchmaker</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Find Your Dream Churn Duo ☘️
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Tell our AI what you are in the mood for, and we will pair the ultimate artisanal flavor harmony with traditional Irish notes.
          </p>
        </div>

        {/* Interactive Questions */}
        <div className="space-y-5">
          {/* Question 1: Craving */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              1. What is your taste craving right now?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'chocolate', label: '🍫 Rich & Cocoa' },
                { id: 'caramel', label: '🧈 Salted Caramel' },
                { id: 'fruity', label: '🫐 Tart & Fruity' },
                { id: 'minty', label: '🌿 Refreshing Mint' },
                { id: 'vanilla', label: '🍦 Pure Velvet Cream' },
                { id: 'crunchy', label: '🍯 Toffee & Honeycomb' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setCraving(opt.id)}
                  className={`p-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-left flex items-center justify-between ${
                    craving === opt.id
                      ? 'bg-celtic-900 text-white border-celtic-900 shadow-sm'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-cream-100'
                  }`}
                >
                  <span>{opt.label}</span>
                  {craving === opt.id && <Check className="w-3.5 h-3.5 text-amber-300" />}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Occasion / Mood */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              2. What is the vibe or occasion?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'celebratory', label: '🎉 Birthday / Party' },
                { id: 'indulgent', label: '✨ Deep Indulgence' },
                { id: 'date-night', label: '🥂 Date Night' },
                { id: 'afternoon', label: '☀️ Sunny Afternoon' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setMood(opt.id)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                    mood === opt.id
                      ? 'bg-amber-400 text-stone-950 border-amber-500 shadow-sm font-bold'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-cream-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={handleGenerate}
              disabled={isAnalyzing}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-celtic-800 via-celtic-900 to-stone-900 hover:from-celtic-900 hover:to-stone-950 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
                  <span>Consulting the Creamery Sommelier...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 text-amber-300" />
                  <span>Generate AI Irish Pairing Recommendation</span>
                </>
              )}
            </button>
          </div>

          {/* Results Area */}
          {result && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-celtic-50 via-cream-100 to-amber-50/70 border border-celtic-300/80 shadow-md space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-celtic-200/70 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☘️</span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-celtic-800">
                      Perfect Match Found
                    </span>
                    <h4 className="font-serif text-xl font-bold text-celtic-950">
                      {result.headline}
                    </h4>
                  </div>
                </div>
                <span className="text-xs bg-amber-400 text-amber-950 font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                  98% Harmony Score
                </span>
              </div>

              {/* Flavor Duo Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white rounded-xl border border-cream-300 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Layer 1 Scoop:</span>
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    🍨 {result.primaryFlavor}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-cream-300 shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Layer 2 Scoop:</span>
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    🍦 {result.secondaryFlavor}
                  </span>
                </div>
              </div>

              {/* Tasting Profile & Quote */}
              <div className="text-xs sm:text-sm text-stone-700 space-y-2 bg-white/70 p-3.5 rounded-xl border border-cream-200">
                <p>
                  <strong className="text-celtic-900">Flavor Symphony: </strong>
                  {result.tastingNotes}
                </p>
                <p className="italic text-celtic-800 font-serif">
                  {result.celticQuote}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-stone-600">
                  <span>Recommended format: </span>
                  <strong className="text-celtic-900">{result.cakeStyleRecommendation}</strong>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onSelectPairingForCake({
                      layer1: result.primaryFlavor,
                      layer2: result.secondaryFlavor
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-celtic-900 hover:bg-stone-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Build Custom Cake with this Pair</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
