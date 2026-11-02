import React, { useState } from 'react';
import { Cake, Truck, Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';
import InteractiveCakeCustomizer from './InteractiveCakeCustomizer';
import CateringSection from './CateringSection';

export default function CakesAndPies({ initialFlavors, onSubmitCakeSuccess, onSubmitCateringSuccess }) {
  const [subSection, setSubSection] = useState('cakes'); // 'cakes' or 'catering'

  return (
    <div className="py-12 sm:py-20 bg-cream-50 relative min-h-screen">
      
      {/* Background Subtle Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page 2 Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Cake className="w-3.5 h-3.5 text-amber-700" />
            <span>Celebrations & Pre-Orders</span>
            <span className="text-celtic-700">☘️</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Take the Creamery Home: Custom Cakes & Pies
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Make your next celebration unforgettable with a custom-crafted Irish ice cream cake or signature pie. Choose your size, select your favorite churning flavors, and we will build it fresh to order. Please allow at least 48 hours notice for custom creations.
          </p>

          {/* Sub Navigation Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-cream-200/80 border border-cream-300 shadow-inner mt-4">
            <button
              onClick={() => setSubSection('cakes')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                subSection === 'cakes'
                  ? 'bg-celtic-800 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-cream-100'
              }`}
            >
              <Cake className="w-4 h-4 text-amber-300" />
              <span>Custom Cakes & Pies Pre-Order</span>
            </button>

            <button
              onClick={() => setSubSection('catering')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                subSection === 'catering'
                  ? 'bg-celtic-800 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-cream-100'
              }`}
            >
              <Truck className="w-4 h-4 text-amber-300" />
              <span>Event Catering Requests</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display based on active tab */}
        {subSection === 'cakes' ? (
          <div className="space-y-16 animate-fadeIn">
            <InteractiveCakeCustomizer
              initialFlavors={initialFlavors}
              onSubmitSuccess={onSubmitCakeSuccess}
            />

            {/* Cake Craftsmanship Guarantee */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-center">
              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-celtic-100 text-celtic-800 flex items-center justify-center font-bold">
                  ❄️
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">48-Hour Deep Freeze</h4>
                <p className="text-xs text-stone-500">
                  Every custom cake is blast-chilled to maintain rock-solid structural stability during transport to your party.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  ☘️
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">Double Layer Choice</h4>
                <p className="text-xs text-stone-500">
                  Mix and match any two churning flavors from our live dip cabinet, separated by a crunchy chocolate biscuit center.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-celtic-100 text-celtic-800 flex items-center justify-center font-bold">
                  🎂
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">Hand-Piped Lettering</h4>
                <p className="text-xs text-stone-500">
                  Complimentary artisan buttercream inscription and shamrock rosettes on top of every 9" round cake.
                </p>
              </div>
            </div>

            {/* Quick jump to catering */}
            <div className="text-center pt-8">
              <p className="text-sm text-stone-600 mb-2">Planning a larger event or school gathering?</p>
              <button
                onClick={() => {
                  setSubSection('catering');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-celtic-800 hover:text-celtic-900 font-bold text-sm underline inline-flex items-center gap-1"
              >
                <span>Check out our Full-Service Mobile Scoop Station Cart Catering &rarr;</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-16 animate-fadeIn">
            <CateringSection onSubmitCateringSuccess={onSubmitCateringSuccess} />

            {/* Catering Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-center">
              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  🚐
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">Whimsical Mobile Cart</h4>
                <p className="text-xs text-stone-500">
                  Our authentic Irish creamery cart sets up smoothly indoors or outdoors in Clayton and Johnston County.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-celtic-100 text-celtic-800 flex items-center justify-center font-bold">
                  🍨
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">Fresh Small-Batch Pours</h4>
                <p className="text-xs text-stone-500">
                  Guests choose from 4 signature churning flavors served in freshly pressed waffle cones or eco cups.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  ☘️
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">Zero Stress Hosting</h4>
                <p className="text-xs text-stone-500">
                  We supply staff, scoops, napkins, spoons, and full cleanup so you can enjoy your celebration.
                </p>
              </div>
            </div>

            {/* Quick jump back to cakes */}
            <div className="text-center pt-8">
              <p className="text-sm text-stone-600 mb-2">Need a cake or pie for home pick-up instead?</p>
              <button
                onClick={() => {
                  setSubSection('cakes');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-celtic-800 hover:text-celtic-900 font-bold text-sm underline inline-flex items-center gap-1"
              >
                <span>Switch to Custom Cakes & Pies Pre-Ordering &rarr;</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
