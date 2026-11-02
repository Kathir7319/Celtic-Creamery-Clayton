# Celtic Creamery Clayton - Modern Responsive Web Application

A modern, responsive, and whimsical website for **Celtic Creamery Clayton**, built with React 18, Vite, and Tailwind CSS. Strategically designed to shift high-margin ice cream cake pre-orders and catering inquiries from manual Facebook messages into a structured, automated online pipeline.

---

## ✨ Features & Architecture

### Page 1: Home & Live Flavor Board
1. **Hero Section**:
   - Headline: *"Authentic Irish Ice Cream, Churned Fresh Daily in Clayton."*
   - Subheadline with rich Irish creamery story.
   - **View Today's Flavors** CTA (smoothly scrolls to the live dip cabinet).
   - **Pre-Order a Cake** CTA (direct navigation to custom cake builder).
   - Live Churning status indicator with parlor open/closed time checker.
   - AI Irish Flavor Sommelier launcher banner.
2. **Interactive Live Flavor Board**:
   - Section Title: *"Currently Churning: Today's Flavor Lineup"*.
   - Filterable categories: All Flavors, Signature Classics, Weekly Feature Drop 🍀, and Gluten-Free.
   - Core flavor cards with tasting notes, allergen indicators, and pair recommendations:
     - **Classic Celtic Vanilla** (Madagascar vanilla bean + rich Irish dairy)
     - **Irish Cream Dream** (non-alcoholic Irish cream infusion, cocoa & roasted hazelnut)
     - **Salted Caramel Shamrock** (Galway sea salt caramel ribbons + dark chocolate flakes)
     - **[Dynamic Slot] Weekly Feature Rotation**: *Wild Blackberry Guinness Swirl* (non-alcoholic roasted barley malt & NC wild blackberries)
     - *Emerald Isle Mint Crunch* & *Golden Connemara Honeycomb*
   - Interactive modal with sommelier tasting notes and **"Pick for Cake"** one-click transfer.
3. **Instagram Integration Block**:
   - Section Title: *"#CelticCreameryClayton on Instagram"*.
   - 6-post responsive photo grid showing parlor scoops, custom cakes, and events.
   - Hover metrics (likes, comments, captions) and photo lightbox modal.
4. **Shop Logistics & Info**:
   - Section Title: *"Visit the Parlor"*.
   - Address: 101 E Main St, Clayton, NC 27520.
   - Phone: (919) 205-1020 (clickable `tel:`).
   - Real-time hours tracker (Mon–Thu: 12pm–9pm, Fri–Sat: 12pm–10pm, Sun: 1pm–9pm).
   - Dedicated Free Street & Lot Parking guidance note.
   - Interactive Google Maps location embed + driving directions link.

---

### Page 2: Custom Ice Cream Cakes, Pies & Event Catering
1. **Custom Ice Cream Cakes & Pies Pre-Ordering**:
   - Section Title: *"Take the Creamery Home: Custom Cakes & Pies"*.
   - **Interactive 2.5D Visual Cake & Pie Customizer**:
     - Real-time layer stack preview updates colors dynamically as flavors change.
     - Dynamic icing lettering appears in real time on top of the cake.
     - Live pricing calculator based on style, crust, and selected add-ons.
   - **48-Hour Lockout Rule**:
     - Calendar picker dynamically enforces a strict 48-hour advance notice window required for small-batch churning and structural blast-freezing.
   - **Order Form Fields**:
     - Contact details (Full Name, Phone Number, Email Address)
     - Pickup date & time slot
     - Select style: *Signature 9" Round Ice Cream Cake* (serves 12-16) or *Artisan Ice Cream Pie* (serves 8-10) with crust options (Oreo, Graham, Irish Shortbread)
     - Ice cream flavor selection: *Layer 1 Base Flavor* & *Layer 2 Top Flavor*
     - Custom Inscriptions with **AI Inscription Assistant** (suggestions for birthdays, anniversaries, graduations, and whimsical Irish blessings)
     - Add-ons: Extra Hot Belgian Fudge, Gourmet Cookie Crumbles, Rainbow Sprinkles, Emerald & Gold Sugar Shamrocks, Salted Caramel Dip Cup
2. **Event Catering Requests**:
   - Section Title: *"Bring the Scoop Shop to Your Event"*.
   - Live interactive scoop & guest count calculator slider.
   - Form fields: Host Info (Name, School/Organization, Email, Phone), Event Details (Date, Start Time, Guest Count), Venue Location, and Service Type Preference (*Full-Service Mobile Scoop Station Cart* or *Pre-packaged Scoops*).
   - Automated estimate quote breakdown.

---

### 🧠 AI Intelligence Features
- **AI Irish Flavor Sommelier & Matchmaker**:
  - Interactive questionnaire analyzing cravings (Cocoa, Salted Caramel, Tart Berry, Refreshing Mint, etc.), occasion, and dietary preferences.
  - Matches flavor duos with harmony scores, tasting harmony profiles, and Irish folklore quotes.
  - 1-click **"Build Custom Cake with this Pair"** to immediately pre-fill Page 2.
- **AI Cake Inscription Assistant**:
  - Whimsical, memorable message suggestions categorized by celebration type.
- **Order Confirmation & Confetti Engine**:
  - Celebratory confetti burst upon submission with full itemized receipt, order reference code, and print-ready summary.

---

### 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
