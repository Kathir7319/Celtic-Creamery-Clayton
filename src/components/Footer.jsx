import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, Heart } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { SHOP_INFO } from '../data/creameryData';
import FuturisticLogo from './FuturisticLogo';

export default function Footer({ onNavClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-celtic-950 text-cream-100 pt-16 pb-12 border-t border-celtic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-celtic-800/80">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-900/60 p-3 rounded-2xl border border-emerald-500/20 inline-block">
              <FuturisticLogo size="md" className="[&_span]:!text-cream-100 [&_.text-emerald-600]:!text-emerald-400" />
            </div>

            <p className="text-cream-200/80 text-sm leading-relaxed max-w-sm">
              Authentic Irish ice cream, churned fresh daily right here in Clayton, North Carolina. Velvet texture, real dairy craftsmanship, and rotating weekly inspirations.
            </p>

            {/* Social Badges */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SHOP_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-celtic-900 hover:bg-celtic-800 text-cream-100 flex items-center justify-center border border-celtic-700 hover:border-amber-400 transition-all hover:scale-105"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="w-5 h-5 text-amber-400" />
              </a>

              <a
                href={SHOP_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-celtic-900 hover:bg-celtic-800 text-cream-100 flex items-center justify-center border border-celtic-700 hover:border-amber-400 transition-all hover:scale-105"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5 text-amber-400" />
              </a>

              <a
                href={`tel:${SHOP_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-10 h-10 rounded-xl bg-celtic-900 hover:bg-celtic-800 text-cream-100 flex items-center justify-center border border-celtic-700 hover:border-amber-400 transition-all hover:scale-105"
                aria-label="Call Parlor"
              >
                <Phone className="w-5 h-5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-celtic-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>☘️</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('home', 'flavors')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>🍦</span>
                  <span>Live Flavor Board</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('cakes-catering')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>🎂</span>
                  <span>Order Online & Catering</span>
                </button>
              </li>
              <li>
                <a
                  href={`tel:${SHOP_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>📞</span>
                  <span>Contact Support: {SHOP_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Parlor Hours & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-celtic-800 pb-2">
              Parlor Hours & Location
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-cream-200">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SHOP_INFO.address} (Free street & lot parking)</span>
              </p>
              <div className="pt-1 space-y-1 text-xs text-celtic-300">
                <p><strong className="text-cream-100">Mon – Thu:</strong> 12:00 PM – 9:00 PM</p>
                <p><strong className="text-cream-100">Fri – Sat:</strong> 12:00 PM – 10:00 PM</p>
                <p><strong className="text-cream-100">Sunday:</strong> 1:00 PM – 9:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-celtic-400">
          <p>© 2026 Celtic Creamery Clayton. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400 fill-current" /> for Clayton ice cream lovers
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-celtic-900 hover:bg-celtic-800 text-cream-200 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
