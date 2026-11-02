import React, { useState } from 'react';
import { Truck, Users, Calendar, Clock, MapPin, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import CreameryImage from './CreameryImage';

export default function CateringSection({ onSubmitCateringSuccess }) {
  // Host Info
  const [hostName, setHostName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Event Details
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('14:00');
  const [guestCount, setGuestCount] = useState(50);

  // Venue Location
  const [venueAddress, setVenueAddress] = useState('');

  // Service Type Preference
  const [serviceType, setServiceType] = useState('Full-Service Mobile Scoop Station Cart');
  const [eventNotes, setEventNotes] = useState('');
  const [cateringError, setCateringError] = useState('');

  // Calculate dynamic catering estimate
  const estimatedScoops = Math.round(guestCount * 1.25);
  const estimatedCost = serviceType === 'Full-Service Mobile Scoop Station Cart'
    ? Math.round(guestCount * 5.75 + 120)
    : Math.round(guestCount * 4.50);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hostName.trim() || !email.trim() || !phone.trim() || !eventDate || !venueAddress.trim()) {
      setCateringError('Please fill out all required fields marked with *');
      return;
    }

    setCateringError('');
    const cateringData = {
      type: 'Event Catering Inquiry',
      inquiryId: `CAT-${Math.floor(10000 + Math.random() * 90000)}`,
      hostName,
      organization: organization.trim() || 'Private Host',
      email,
      phone,
      eventDate,
      startTime,
      guestCount,
      estimatedScoops,
      venueAddress,
      serviceType,
      estimatedCost,
      eventNotes
    };

    onSubmitCateringSuccess(cateringData);
  };

  return (
    <div id="catering-form" className="bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-celtic-900 via-celtic-950 to-stone-900 text-cream-100 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-celtic-800">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-stone-950 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5" />
            <span>Mobile Irish Scoop Parlor</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Bring the Scoop Shop to Your Event
          </h3>
          <p className="text-cream-200 text-xs sm:text-sm leading-relaxed">
            From birthday parties and backyard block gatherings to Clayton school events and corporate milestones, we love to celebrate! Let us know what you are planning, and we will curate the perfect ice cream station for your guests.
          </p>
        </div>

        {/* Live Scoop Calculator Card */}
        <div className="bg-celtic-800/90 p-5 rounded-2xl border border-celtic-700 text-center shrink-0 w-full md:w-auto shadow-md">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
            Live Scoop Calculator
          </span>
          <span className="font-serif text-3xl font-extrabold text-white block">
            ~{estimatedScoops} Scoops
          </span>
          <span className="text-xs text-cream-200 block">
            For {guestCount} Expected Guests
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Host Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-celtic-100 text-celtic-800 text-xs flex items-center justify-center font-bold">1</span>
              <span>Host Contact Information</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Host Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siobhan Kelly"
                  value={hostName}
                  onChange={(e) => setHostName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Organization / School (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Clayton High PTA / Acem Co"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="siobhan@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(919) 555-0144"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Event Details & Guest Count Slider */}
          <div className="space-y-4 pt-4 border-t border-cream-200">
            <h4 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-celtic-100 text-celtic-800 text-xs flex items-center justify-center font-bold">2</span>
              <span>Event Details & Attendance</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Start Time *
                </label>
                <input
                  type="time"
                  required
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>
            </div>

            {/* Guest Count Interactive Range */}
            <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Expected Guest Count:
                </label>
                <span className="font-serif text-2xl font-extrabold text-celtic-900">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="350"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-celtic-700 cursor-pointer h-2"
              />
              <div className="flex justify-between text-[11px] text-stone-500 font-medium">
                <span>15 (Intimate Gathering)</span>
                <span>150 (School / Corporate)</span>
                <span>350+ (Large Festival)</span>
              </div>
            </div>
          </div>

          {/* Section 3: Venue Location */}
          <div className="space-y-4 pt-4 border-t border-cream-200">
            <h4 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-celtic-100 text-celtic-800 text-xs flex items-center justify-center font-bold">3</span>
              <span>Venue Location & Address</span>
            </h4>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Venue Address & City *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 450 City Hall Dr, Clayton, NC 27520 (or private backyard / park pavilion)"
                value={venueAddress}
                onChange={(e) => setVenueAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
              />
              <p className="text-[11px] text-stone-500">
                We cater throughout Clayton, Johnston County, and surrounding Triangle communities.
              </p>
            </div>
          </div>

          {/* Section 4: Service Type Preference */}
          <div className="space-y-4 pt-4 border-t border-cream-200">
            <h4 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-celtic-100 text-celtic-800 text-xs flex items-center justify-center font-bold">4</span>
              <span>Service Type Preference</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 'Full-Service Mobile Scoop Station Cart',
                  title: 'Full-Service Mobile Scoop Station Cart',
                  badge: 'Most Popular',
                  description: 'Our charming mobile Irish parlor cart arrives on-site with 4 rotating flavors, friendly creamery scoopers, waffle cones, cups, and toppings bar.',
                  icon: '🚐'
                },
                {
                  id: 'Pre-packaged Scoops',
                  title: 'Pre-packaged Artisan Scoops',
                  badge: 'Budget Friendly',
                  description: 'Individual sealed 6oz parlor cups packed in dry-ice insulated coolers, ready for immediate self-service distribution at your event.',
                  icon: '🍨'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setServiceType(opt.id)}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    serviceType === opt.id
                      ? 'border-celtic-700 bg-celtic-50/80 shadow-md ring-2 ring-celtic-500/20'
                      : 'border-stone-200 hover:border-cream-300 bg-stone-50/40'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{opt.icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
                        {opt.badge}
                      </span>
                    </div>
                    <h5 className="font-serif text-lg font-bold text-stone-900">{opt.title}</h5>
                    <p className="text-xs text-stone-600 leading-relaxed">{opt.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-celtic-800">
                      {opt.id === 'Full-Service Mobile Scoop Station Cart' ? 'Includes Staff & Setup' : 'Self-serve pickup or delivery'}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        serviceType === opt.id ? 'bg-celtic-700 text-white' : 'border border-stone-300'
                      }`}
                    >
                      {serviceType === opt.id && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Notes */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Additional Event Vision & Requests (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us about special flavor desires, indoor/outdoor electrical outlets, dietary restrictions, or schedule..."
                value={eventNotes}
                onChange={(e) => setEventNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
              />
            </div>
          </div>

          {/* Error Alert if any */}
          {cateringError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{cateringError}</span>
            </div>
          )}

          {/* Submit Action Bar */}
          <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                Estimated Catering Quote
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-celtic-950">
                  ${estimatedCost}
                </span>
                <span className="text-xs text-stone-500 font-medium">Includes cups, spoons & napkins</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-celtic-800 via-celtic-900 to-celtic-950 hover:from-celtic-900 hover:to-black text-white font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <Send className="w-4 h-4 text-amber-300" />
              <span>Submit Catering Inquiry</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
