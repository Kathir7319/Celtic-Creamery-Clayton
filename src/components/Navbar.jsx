import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MapPin, Clock, Menu, X, ShoppingBag, Calendar } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { SHOP_INFO } from '../data/creameryData';

export default function Navbar({ activeTab, setActiveTab, onOpenAiModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check parlor open status based on actual time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const currentHour = now.getHours() + now.getMinutes() / 60;

      let schedule;
      if (day === 0) {
        schedule = { open: 13, close: 21 };
      } else if (day === 5 || day === 6) {
        schedule = { open: 12, close: 22 };
      } else {
        schedule = { open: 12, close: 21 };
      }

      setIsOpenNow(currentHour >= schedule.open && currentHour < schedule.close);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-celtic-950 text-cream-100 text-xs py-2 px-4 border-b border-celtic-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-celtic-900 text-celtic-200 border border-celtic-700">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {isOpenNow ? "Parlor Open • Churning Today" : "Opens at 12:00 PM"}
            </span>
            <span className="hidden sm:inline text-celtic-400">|</span>
            <span className="hidden md:inline text-cream-200 font-medium">
              ☘️ Authentic Irish Ice Cream Churned Fresh in Downtown Clayton, NC
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-cream-200 hover:text-amber-300 transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SHOP_INFO.phone}</span>
            </a>
            <span className="text-celtic-700 hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-1.5 text-celtic-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Street Parking on Main St</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-md py-3 border-b border-cream-200'
            : 'bg-cream-50 py-4 border-b border-cream-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-celtic-800 to-celtic-950 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform border border-amber-400/30 shrink-0">
                <span className="text-2xl" role="img" aria-label="Clover Ice Cream">🍦</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight text-celtic-950 group-hover:text-celtic-800 transition-colors">
                    Celtic Creamery
                  </span>
                  <span className="text-amber-950 font-bold text-[10px] uppercase tracking-widest px-1.5 py-0.5 bg-amber-200 rounded border border-amber-300">
                    Clayton
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-medium tracking-wide">
                  Irish Ice Cream • Churned Fresh Daily
                </p>
              </div>
            </button>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-cream-100 p-1.5 rounded-full border border-cream-300 shadow-inner">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeTab === 'home'
                    ? 'bg-celtic-900 text-cream-50 shadow-sm'
                    : 'text-stone-700 hover:text-celtic-900 hover:bg-cream-200/60'
                }`}
              >
                Home & Flavor Board
              </button>

              <button
                onClick={() => handleNavClick('cakes-catering')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === 'cakes-catering'
                    ? 'bg-celtic-900 text-cream-50 shadow-sm'
                    : 'text-stone-700 hover:text-celtic-900 hover:bg-cream-200/60'
                }`}
              >
                <span>Cakes, Pies & Catering</span>
                <span className="bg-amber-400 text-amber-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                  Custom
                </span>
              </button>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenAiModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-celtic-950 bg-celtic-100 hover:bg-celtic-200 border border-celtic-300 transition-all hover:scale-105 shadow-xs"
                title="AI Irish Flavor Matchmaker"
              >
                <Sparkles className="w-3.5 h-3.5 text-celtic-700 animate-spin-slow" />
                <span>AI Flavor Sommelier</span>
              </button>

              <button
                onClick={() => handleNavClick('cakes-catering')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-celtic-800 to-celtic-950 hover:from-celtic-900 hover:to-black shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>Pre-Order Cake</span>
              </button>
            </div>

            {/* Mobile Hamburger & Quick AI Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenAiModal}
                className="p-2 rounded-xl bg-celtic-100 text-celtic-900 border border-celtic-300 shadow-xs"
                aria-label="AI Sommelier"
              >
                <Sparkles className="w-5 h-5 text-celtic-700" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-cream-200 text-stone-900 hover:bg-cream-300 transition-colors border border-cream-300"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-50 border-b border-cream-300 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-1 gap-2 pt-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-base transition-colors ${
                  activeTab === 'home'
                    ? 'bg-celtic-900 text-white shadow-sm'
                    : 'bg-cream-100 text-stone-800 hover:bg-cream-200'
                }`}
              >
                🍦 Home & Live Flavor Board
              </button>

              <button
                onClick={() => handleNavClick('cakes-catering')}
                className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-base transition-colors flex items-center justify-between ${
                  activeTab === 'cakes-catering'
                    ? 'bg-celtic-900 text-white shadow-sm'
                    : 'bg-cream-100 text-stone-800 hover:bg-cream-200'
                }`}
              >
                <span>🎂 Ice Cream Cakes, Pies & Catering</span>
                <span className="text-xs bg-amber-400 text-amber-950 font-extrabold px-2 py-0.5 rounded-full">
                  Order
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiModal();
                }}
                className="w-full text-left px-4 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-celtic-100 to-amber-100 text-celtic-950 border border-celtic-300 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-celtic-700" />
                <span>Ask AI Flavor Sommelier (Personalized Craving Match)</span>
              </button>
            </div>

            <div className="pt-3 border-t border-cream-200 flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-celtic-700" />
                <span>Today: 12:00 PM – 9:00 PM</span>
              </div>
              <a
                href={SHOP_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-celtic-800 hover:text-celtic-900 font-bold"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>#CelticCreameryClayton</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
