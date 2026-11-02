import React from 'react';
import { MapPin, Phone, Clock, Car, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';
import { SHOP_INFO } from '../data/creameryData';

export default function ShopInfo() {
  const currentDay = new Date().getDay();

  return (
    <section id="parlor-info" className="py-16 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-celtic-100 border border-celtic-300 text-celtic-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-celtic-700" />
            <span>Clayton Parlor & Dip Cabinet</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Visit the Parlor
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Stop by for freshly churned Irish-style scoops, flight samplers, waffle cones, and friendly smiles on Main Street.
          </p>
        </div>

        {/* 2-Column Logistics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Parlor Details & Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Contact & Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft border border-cream-300 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-celtic-100 text-celtic-800 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6 text-celtic-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-stone-900">Parlor Location</h3>
                  <p className="text-sm font-bold text-stone-800 leading-snug">
                    {SHOP_INFO.address}
                  </p>
                  <p className="text-xs text-stone-500">Downtown Historic Clayton District</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-cream-200">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-stone-900">Phone Order & Inquiries</h3>
                  <a
                    href={`tel:${SHOP_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="text-base font-extrabold text-celtic-800 hover:text-celtic-950 hover:underline block"
                  >
                    {SHOP_INFO.phone}
                  </a>
                  <p className="text-xs text-stone-500">Call during parlor open hours</p>
                </div>
              </div>
            </div>

            {/* Hours of Operation Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft border border-cream-300 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-celtic-700" />
                  <h3 className="font-serif text-lg font-bold text-stone-900">Hours of Operation</h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Open Today
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {SHOP_INFO.hours.map((item, idx) => {
                  const isSun = idx === 2 && currentDay === 0;
                  const isWeekend = idx === 1 && (currentDay === 5 || currentDay === 6);
                  const isWeekday = idx === 0 && currentDay >= 1 && currentDay <= 4;
                  const isCurrentSchedule = isSun || isWeekend || isWeekday;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-2xl text-xs sm:text-sm transition-colors ${
                        isCurrentSchedule
                          ? 'bg-celtic-50 border border-celtic-300 font-bold text-celtic-950'
                          : 'bg-stone-50 text-stone-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isCurrentSchedule && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                        <span>{item.days}</span>
                      </div>
                      <span className={isCurrentSchedule ? 'text-celtic-900 font-extrabold' : 'text-stone-800 font-semibold'}>
                        {item.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Parking Information Card */}
            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 shadow-soft space-y-2.5">
              <div className="flex items-center gap-2.5 text-amber-950 font-bold">
                <Car className="w-5 h-5 text-amber-700" />
                <h4 className="font-serif text-base">Hassle-Free Parking</h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {SHOP_INFO.parkingInfo}
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Always 100% Free • No meters or permits required</span>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Widget (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-soft border border-cream-300 h-full flex flex-col justify-between">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-1">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Parlor Location Map</h3>
                  <p className="text-xs text-stone-500">Centrally located on Main Street in Clayton, NC</p>
                </div>
                
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SHOP_INFO.name + " " + SHOP_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-celtic-800 hover:bg-celtic-950 text-white text-xs font-bold transition-all shadow-xs self-start sm:self-auto"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-300" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 text-stone-300" />
                </a>
              </div>

              {/* Map Iframe Container */}
              <div className="w-full flex-grow min-h-[360px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-cream-300 relative shadow-inner bg-cream-100">
                <iframe
                  title="Celtic Creamery Clayton Location Map"
                  src={SHOP_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px] sm:min-h-[420px]"
                />
              </div>

              {/* Helpful parlor visit badges */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-stone-600 text-xs">
                <div className="bg-cream-100/80 p-2.5 rounded-xl border border-cream-200 text-center">
                  <span className="font-bold text-celtic-900 block">Dine-in Parlor</span>
                  <span>Cozy Celtic Seating</span>
                </div>
                <div className="bg-cream-100/80 p-2.5 rounded-xl border border-cream-200 text-center">
                  <span className="font-bold text-celtic-900 block">Flight Samplers</span>
                  <span>Taste 4 Flavors</span>
                </div>
                <div className="bg-cream-100/80 p-2.5 rounded-xl border border-cream-200 text-center col-span-2 sm:col-span-1">
                  <span className="font-bold text-celtic-900 block">Fresh Waffle Cones</span>
                  <span>Pressed Every Hour</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
