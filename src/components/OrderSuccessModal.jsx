import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Calendar, Clock, MapPin, Sparkles, X, Printer, Phone } from 'lucide-react';
import { SHOP_INFO } from '../data/creameryData';

export default function OrderSuccessModal({ orderData, onClose }) {
  useEffect(() => {
    if (!orderData) return;

    // Trigger celebratory confetti burst!
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#059669', '#10B981', '#F59E0B', '#FBBF24', '#FAF6EB']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, [orderData]);

  if (!orderData) return null;

  const isCatering = orderData.type.includes('Catering');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-cream-200 relative overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Top Shamrock Stripe */}
        <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-celtic-600 via-amber-400 to-celtic-700" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon & Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-celtic-100 text-celtic-800 flex items-center justify-center text-3xl shadow-inner animate-bounce">
            🍀
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-celtic-800 block">
            {isCatering ? 'Catering Inquiry Dispatched!' : 'Pre-Order Confirmed & Queued!'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
            {isCatering ? "We're Ready to Scoop at Your Event!" : "Your Irish Churn is Scheduled!"}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
            {isCatering
              ? "Our catering manager will review your date and reach out within 24 hours with custom menu options and confirmation."
              : "Thank you! Our churn master has received your cake specifications. Pick up details and receipt below."}
          </p>
        </div>

        {/* Order Receipt Box */}
        <div className="bg-cream-50 p-5 rounded-2xl border border-cream-300 space-y-4 text-xs sm:text-sm">
          <div className="flex items-center justify-between border-b border-cream-200 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase text-stone-400 block">Confirmation Code</span>
              <span className="font-mono font-bold text-base text-celtic-950">
                {isCatering ? orderData.inquiryId : orderData.orderId}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase text-stone-400 block">Status</span>
              <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Confirmed</span>
              </span>
            </div>
          </div>

          {/* Breakdown Items */}
          <div className="space-y-2 text-stone-700">
            {isCatering ? (
              <>
                <div className="flex justify-between">
                  <span className="text-stone-500">Host:</span>
                  <span className="font-semibold text-stone-900">{orderData.hostName} ({orderData.organization})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Event Date & Time:</span>
                  <span className="font-semibold text-stone-900">{orderData.eventDate} at {orderData.startTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Guest Count & Scoops:</span>
                  <span className="font-semibold text-stone-900">{orderData.guestCount} guests (~{orderData.estimatedScoops} scoops)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Service Format:</span>
                  <span className="font-semibold text-celtic-900">{orderData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Venue:</span>
                  <span className="font-semibold text-stone-900">{orderData.venueAddress}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-cream-200 font-bold text-stone-900">
                  <span>Estimated Budget:</span>
                  <span className="text-celtic-900 font-serif text-base">${orderData.estimatedCost}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-stone-500">Customer:</span>
                  <span className="font-semibold text-stone-900">{orderData.customer.fullName} ({orderData.customer.phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Style:</span>
                  <span className="font-semibold text-stone-900">{orderData.style}</span>
                </div>
                {orderData.crust && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Crust:</span>
                    <span className="font-semibold text-stone-900">{orderData.crust}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-stone-500">Layer 1 Base:</span>
                  <span className="font-semibold text-celtic-900">{orderData.layer1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Layer 2 Top:</span>
                  <span className="font-semibold text-celtic-900">{orderData.layer2}</span>
                </div>
                {orderData.inscription && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Custom Text:</span>
                    <span className="font-script font-bold text-amber-900 text-sm">"{orderData.inscription}"</span>
                  </div>
                )}
                {orderData.addons && orderData.addons.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Add-ons:</span>
                    <span className="font-semibold text-stone-900 text-right">{orderData.addons.join(', ')}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-cream-200">
                  <span className="text-stone-500">Pickup Date & Time:</span>
                  <span className="font-bold text-celtic-900">{orderData.pickupDate} at {orderData.pickupTime}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-cream-200 font-bold text-stone-900">
                  <span>Total Amount (Pay on Pickup):</span>
                  <span className="text-celtic-900 font-serif text-lg">${orderData.totalPrice}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Parlor Pickup Location Info */}
        <div className="mt-4 p-3.5 rounded-xl bg-celtic-50 border border-celtic-200 text-xs text-celtic-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-celtic-700 shrink-0" />
            <span>Parlor: {SHOP_INFO.address} (Free street parking out front)</span>
          </div>
          <a
            href={`tel:${SHOP_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="font-bold text-celtic-800 hover:underline flex items-center gap-1 shrink-0 ml-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SHOP_INFO.phone}</span>
          </a>
        </div>

        {/* Irish Blessing Note */}
        <p className="mt-4 text-center text-xs italic font-serif text-stone-500">
          "May you always have a full scoop and plenty of sweet friends to share it with." ☘️
        </p>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Receipt</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-celtic-900 hover:bg-stone-900 text-white font-bold text-sm shadow-md transition-all"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
