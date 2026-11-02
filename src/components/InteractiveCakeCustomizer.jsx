import React, { useState, useMemo } from 'react';
import { Sparkles, Calendar, Clock, Cake, Check, AlertCircle, ShoppingBag, Wand2, Info } from 'lucide-react';
import { FLAVORS, CAKE_STYLES, CRUST_OPTIONS, ADDONS, AI_INSCRIPTION_PRESETS } from '../data/creameryData';

export default function InteractiveCakeCustomizer({ initialFlavors, onSubmitSuccess }) {
  const [styleId, setStyleId] = useState(CAKE_STYLES[0].id);
  const [crustId, setCrustId] = useState(CRUST_OPTIONS[0].id);
  const [layer1Flavor, setLayer1Flavor] = useState(
    initialFlavors?.layer1 || FLAVORS[0].name
  );
  const [layer2Flavor, setLayer2Flavor] = useState(
    initialFlavors?.layer2 || FLAVORS[1].name
  );
  const [inscription, setInscription] = useState('Happy Birthday Clayton! ☘️');
  const [selectedAddons, setSelectedAddons] = useState(['hot-fudge']);
  
  // Contact details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // 48-hour pickup date calculation
  const minPickupDate = useMemo(() => {
    const d = new Date();
    d.setHours(d.getHours() + 48);
    return d.toISOString().split('T')[0];
  }, []);

  const [pickupDate, setPickupDate] = useState(minPickupDate);
  const [pickupTime, setPickupTime] = useState('14:00');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // AI Inscription Generator state
  const [aiInscriptionOpen, setAiInscriptionOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(AI_INSCRIPTION_PRESETS[0].occasion);
  const [formError, setFormError] = useState('');

  const currentStyle = CAKE_STYLES.find((s) => s.id === styleId) || CAKE_STYLES[0];
  const isPie = styleId === 'artisan-pie';

  // Calculate pricing
  const totalPrice = useMemo(() => {
    let price = currentStyle.basePrice;
    if (isPie) {
      const crust = CRUST_OPTIONS.find((c) => c.id === crustId);
      if (crust) price += crust.price;
    }
    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) price += addon.price;
    });
    return price;
  }, [currentStyle, isPie, crustId, selectedAddons]);

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const l1Data = FLAVORS.find((f) => f.name === layer1Flavor) || FLAVORS[0];
  const l2Data = FLAVORS.find((f) => f.name === layer2Flavor) || FLAVORS[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError('Please fill out all contact fields (Name, Phone, Email).');
      return;
    }

    // Check 48h rule
    const chosenDateTime = new Date(`${pickupDate}T${pickupTime}`);
    const now = new Date();
    const diffHours = (chosenDateTime - now) / (1000 * 60 * 60);

    if (diffHours < 47.5) {
      setFormError('Pickup date & time must be at least 48 hours from right now to ensure custom churn and freeze time.');
      return;
    }

    setFormError('');
    const orderData = {
      type: 'Cake & Pie Pre-Order',
      orderId: `CC-${Math.floor(100000 + Math.random() * 900000)}`,
      customer: { fullName, phone, email },
      style: currentStyle.name,
      crust: isPie ? CRUST_OPTIONS.find((c) => c.id === crustId)?.name : null,
      layer1: layer1Flavor,
      layer2: layer2Flavor,
      inscription: inscription.trim(),
      addons: selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).filter(Boolean),
      pickupDate,
      pickupTime,
      totalPrice: totalPrice.toFixed(2),
      specialInstructions
    };

    onSubmitSuccess(orderData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden">
      
      {/* Top Banner Notice: 48hr rule */}
      <div className="bg-gradient-to-r from-celtic-900 via-celtic-950 to-stone-900 text-cream-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-celtic-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
            ⏰
          </div>
          <div className="text-left">
            <span className="font-extrabold text-amber-300 text-xs uppercase tracking-wider block">
              48-Hour Craftsmanship Lockout Rule
            </span>
            <span className="text-xs text-cream-200">
              Each cake & pie is churned fresh to order and requires a minimum 48-hour deep freeze cycle.
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-celtic-800 rounded-full text-xs font-bold text-emerald-300 border border-celtic-700">
          <Check className="w-3.5 h-3.5" />
          <span>Strict Cold-Chain Quality</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Step 1: Style Selection */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <span className="text-xs font-bold text-celtic-800 uppercase tracking-widest block">Step 1</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Select Your Style</h3>
              </div>
              <span className="text-xs text-stone-500 font-medium">Both styles feature 2 rich churning layers</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAKE_STYLES.map((style) => (
                <div
                  key={style.id}
                  onClick={() => setStyleId(style.id)}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    styleId === style.id
                      ? 'border-celtic-700 bg-celtic-50/80 shadow-md ring-2 ring-celtic-500/20'
                      : 'border-stone-200 hover:border-cream-300 bg-stone-50/40'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
                        {style.badge}
                      </span>
                      <span className="font-serif text-2xl font-extrabold text-celtic-900">
                        ${style.basePrice.toFixed(2)}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-stone-900">
                      {style.name}
                    </h4>
                    <p className="text-xs font-bold text-celtic-800">{style.serves}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-500">Dual Flavor Customization</span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        styleId === style.id ? 'bg-celtic-700 text-white' : 'border border-stone-300'
                      }`}
                    >
                      {styleId === style.id && <Check className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Crust selection for Artisan Pie */}
            {isPie && (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 animate-fadeIn">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-950">
                  Select Pie Crust Option:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {CRUST_OPTIONS.map((crust) => (
                    <button
                      type="button"
                      key={crust.id}
                      onClick={() => setCrustId(crust.id)}
                      className={`p-3 rounded-xl text-xs font-semibold border text-left flex items-center justify-between transition-all ${
                        crustId === crust.id
                          ? 'bg-amber-400 text-stone-950 border-amber-500 font-bold shadow-xs'
                          : 'bg-white text-stone-700 border-amber-200 hover:bg-amber-100'
                      }`}
                    >
                      <span>{crust.name}</span>
                      {crust.price > 0 && <span className="text-[10px] text-stone-600 font-bold">+${crust.price}</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Flavor Churn Selection & Rock-Solid Visual Studio */}
          <div className="space-y-6 pt-4 border-t border-cream-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <span className="text-xs font-bold text-celtic-800 uppercase tracking-widest block">Step 2</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Choose Your 2 Ice Cream Layers
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-medium">Freshly churned from our dip cabinet</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Dropdowns */}
              <div className="lg:col-span-7 space-y-4">
                {/* Layer 1 Dropdown */}
                <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-celtic-900">
                    Layer 1: Base Ice Cream Flavor
                  </label>
                  <select
                    value={layer1Flavor}
                    onChange={(e) => setLayer1Flavor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                  >
                    {FLAVORS.map((f) => (
                      <option key={f.id} value={f.name}>
                        {f.name} {f.isWeeklyFeature ? '🍀 (Weekly Spotlight)' : ''}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-stone-500">
                    Provides the sturdy foundation layer touching the bottom crust/board.
                  </p>
                </div>

                {/* Layer 2 Dropdown */}
                <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-celtic-900">
                    Layer 2: Top Ice Cream Flavor
                  </label>
                  <select
                    value={layer2Flavor}
                    onChange={(e) => setLayer2Flavor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                  >
                    {FLAVORS.map((f) => (
                      <option key={f.id} value={f.name}>
                        {f.name} {f.isWeeklyFeature ? '🍀 (Weekly Spotlight)' : ''}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-stone-500">
                    Crowns the top layer beneath the whipped frosting and drizzle.
                  </p>
                </div>

                {/* Free Center Crunch Note */}
                <div className="text-xs bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-amber-950 flex items-center gap-2.5">
                  <span className="text-xl">🍪</span>
                  <span>
                    <strong>Free Signature Center Crunch: </strong> All custom cakes include our signature dark chocolate crunch cookie center between layers!
                  </span>
                </div>
              </div>

              {/* Rock-Solid Visual Cake & Pie Studio Preview */}
              <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 via-stone-950 to-black p-6 rounded-3xl text-white shadow-2xl border border-stone-800 text-center relative overflow-hidden flex flex-col items-center justify-between min-h-[340px]">
                
                <div className="w-full flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Live Visual Studio Preview
                  </span>
                  <span className="text-[10px] font-bold text-stone-400">
                    {currentStyle.name.split(' ')[0]}
                  </span>
                </div>

                {/* Cake Visual Hierarchy with Zero Misalignment */}
                <div className="w-full max-w-[280px] my-auto flex flex-col items-center space-y-1.5">
                  
                  {/* Top Whipped Cream Disk with Live Inscription */}
                  <div className="w-full py-3 px-4 rounded-2xl bg-cream-100 border-2 border-white shadow-lg flex flex-col items-center justify-center text-stone-900 relative">
                    <div className="flex gap-2 text-xs select-none mb-0.5">
                      <span>☘️</span><span>🧁</span><span>☘️</span>
                    </div>
                    <p className="font-script font-bold text-sm text-stone-900 line-clamp-1 text-center tracking-wide">
                      {inscription || 'Celtic Creamery Clayton'}
                    </p>
                  </div>

                  {/* Layer 2: Top Ice Cream Slab */}
                  <div
                    className="w-[94%] py-2.5 px-3 rounded-xl border border-white/20 shadow-md flex items-center justify-center transition-colors duration-500"
                    style={{ backgroundColor: l2Data.scoopColor }}
                  >
                    <span className="text-[11px] font-extrabold text-stone-900 bg-white/85 px-2 py-0.5 rounded-full shadow-xs">
                      Layer 2: {l2Data.name}
                    </span>
                  </div>

                  {/* Center Crunch Core Wafer */}
                  <div className="w-[96%] py-1 rounded-lg bg-stone-800 border border-stone-700 shadow-md flex items-center justify-center">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-300">
                      🍫 Signature Center Crunch Core
                    </span>
                  </div>

                  {/* Layer 1: Base Ice Cream Slab */}
                  <div
                    className="w-[98%] py-3 px-3 rounded-xl border border-white/20 shadow-md flex items-center justify-center transition-colors duration-500"
                    style={{ backgroundColor: l1Data.scoopColor }}
                  >
                    <span className="text-[11px] font-extrabold text-stone-900 bg-white/85 px-2 py-0.5 rounded-full shadow-xs">
                      Layer 1: {l1Data.name}
                    </span>
                  </div>

                  {/* Cake Board Base */}
                  <div className="w-full h-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 shadow-xl"></div>
                </div>

                <div className="w-full pt-3 border-t border-white/10 text-xs text-stone-400 flex items-center justify-between">
                  <span>Custom Hand-Churned</span>
                  <span className="text-amber-300 font-bold">{currentStyle.serves}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Step 3: Custom Inscription with AI Assistant */}
          <div className="space-y-4 pt-4 border-t border-cream-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-celtic-800 uppercase tracking-widest block">Step 3</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Custom Cake Inscription (Optional)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setAiInscriptionOpen(!aiInscriptionOpen)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold hover:bg-amber-200 transition-colors self-start sm:self-auto shadow-xs"
              >
                <Wand2 className="w-3.5 h-3.5 text-amber-700" />
                <span>AI Inscription Assistant Suggestions ☘️</span>
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                maxLength={45}
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                placeholder="e.g. Happy 10th Birthday Liam! ☘️"
                className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-stone-300 font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
              />
              <span className="absolute right-3 top-4 text-xs text-stone-400 font-semibold">
                {inscription.length}/45 chars
              </span>
            </div>

            {/* AI Inscription Presets Drawer */}
            {aiInscriptionOpen && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-cream-100 to-amber-50 border border-amber-200 space-y-3 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-celtic-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Pick a Celebration Vibe:
                  </span>
                  <div className="flex gap-1 overflow-x-auto">
                    {AI_INSCRIPTION_PRESETS.map((p) => (
                      <button
                        type="button"
                        key={p.occasion}
                        onClick={() => setSelectedOccasion(p.occasion)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                          selectedOccasion === p.occasion
                            ? 'bg-celtic-800 text-white shadow-xs'
                            : 'bg-white text-stone-700 border border-cream-200'
                        }`}
                      >
                        {p.occasion}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AI_INSCRIPTION_PRESETS.find((p) => p.occasion === selectedOccasion)?.suggestions.map((sug, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => {
                        setInscription(sug);
                        setAiInscriptionOpen(false);
                      }}
                      className="p-3 text-xs font-semibold bg-white hover:bg-celtic-50 rounded-xl border border-stone-200 hover:border-celtic-300 text-left transition-all flex items-center justify-between"
                    >
                      <span>{sug}</span>
                      <span className="text-celtic-700 text-[10px] uppercase font-bold">Use</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Step 4: Add-ons & Toppings Checkboxes */}
          <div className="space-y-4 pt-4 border-t border-cream-200">
            <div>
              <span className="text-xs font-bold text-celtic-800 uppercase tracking-widest block">Step 4</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Gourmet Add-ons & Toppings
              </h3>
              <p className="text-xs text-stone-500">Elevate your celebration presentation with artisan touches</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'border-celtic-700 bg-celtic-50 shadow-xs'
                        : 'border-stone-200 hover:border-cream-300 bg-stone-50/50'
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-celtic-700 text-white' : 'border border-stone-400 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs text-stone-900">{addon.name}</span>
                        <span className="text-xs font-bold text-celtic-800">+${addon.price.toFixed(2)}</span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug">{addon.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 5: Pickup Date & Time + Contact Info */}
          <div className="space-y-6 pt-4 border-t border-cream-200">
            <div>
              <span className="text-xs font-bold text-celtic-800 uppercase tracking-widest block">Step 5</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Pickup Schedule & Customer Details
              </h3>
              <p className="text-xs text-stone-500">
                Minimum 48-hour advance notice strictly enforced for custom blast-freezing.
              </p>
            </div>

            {/* Pickup Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Pickup Date (48-Hour Lockout Enforced) *
                </label>
                <input
                  type="date"
                  min={minPickupDate}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
                <p className="text-[11px] text-emerald-800 font-medium">
                  ✓ Dates prior to 48 hours are automatically disabled.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Pickup Time Slot *
                </label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                >
                  <option value="12:30">12:30 PM (Parlor Opening Wave)</option>
                  <option value="14:00">2:00 PM (Afternoon Wave)</option>
                  <option value="16:00">4:00 PM (Afternoon Wave)</option>
                  <option value="18:00">6:00 PM (Evening Wave)</option>
                  <option value="20:00">8:00 PM (Night Wave)</option>
                </select>
                <p className="text-[11px] text-stone-500">Pick up inside our Clayton parlor on Main St.</p>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fiona O'Connor"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(919) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="fiona@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-300 font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Special Instructions or Allergy Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any special allergy considerations, box packaging notes, or celebration instructions..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-stone-300 font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-celtic-600 text-sm"
              />
            </div>
          </div>

          {/* Form Error Alert if any */}
          {formError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{formError}</span>
            </div>
          )}

          {/* Total Price Bar & Submit Button */}
          <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                Estimated Order Total
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-celtic-950">
                  ${totalPrice.toFixed(2)}
                </span>
                <span className="text-xs text-stone-500 font-medium">Pay upon parlor pickup</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-celtic-800 via-celtic-900 to-celtic-950 hover:from-celtic-900 hover:to-black text-white font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <span>Submit Cake Pre-Order</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
