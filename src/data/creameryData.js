// Celtic Creamery Clayton - Official Data & Configuration

export const SHOP_INFO = {
  name: "Celtic Creamery Clayton",
  tagline: "Authentic Irish Ice Cream, Churned Fresh Daily in Clayton",
  subheadline: "Experience the rich, velvety texture of premium Irish-style ice cream made right here in North Carolina. From classic favorites to our weekly rotating creations, every scoop is a taste of perfection.",
  phone: "(919) 205-1020",
  email: "hello@celticcreameryclayton.com",
  address: "101 E Main St, Clayton, NC 27520",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.231718018329!2d-78.461944!3d35.650722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac627e748df3a1%3A0x67db2b6a80fa35bf!2s101%20E%20Main%20St%2C%20Clayton%2C%20NC%2027520!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
  hours: [
    { days: "Monday – Thursday", time: "12:00 PM – 9:00 PM", openHour: 12, closeHour: 21 },
    { days: "Friday – Saturday", time: "12:00 PM – 10:00 PM", openHour: 12, closeHour: 22 },
    { days: "Sunday", time: "1:00 PM – 9:00 PM", openHour: 13, closeHour: 21 },
  ],
  parkingInfo: "Convenient free street parking is available directly out front, with an additional public lot located just half a block away around the corner.",
  socials: {
    facebook: "https://facebook.com/celticcreameryclayton",
    instagram: "https://instagram.com/celticcreameryclayton",
  }
};

export const FLAVORS = [
  {
    id: "classic-vanilla",
    name: "Classic Celtic Vanilla",
    tagline: "Rich, velvety, made with real vanilla bean",
    description: "Our foundation masterpiece. Churned daily with double Irish-style cream and slow-steeped Madagascar bourbon vanilla beans for an unmatched buttery velvet finish.",
    category: "Signature Classic",
    tags: ["Best Seller", "Gluten-Free", "Churned Today"],
    color: "#FDF8E4",
    scoopColor: "#FBF3D5",
    accentColor: "#D97706",
    sweetness: 4,
    richness: 5,
    texture: "Ultra Velvet Churn",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
    calories: "240 cal / scoop",
    allergens: ["Dairy"],
    notes: ["Madagascar Vanilla Bean", "Irish Sweet Cream", "Custard Finish"],
    pairing: "Warm Apple Crisp, Salted Caramel Shamrocks, or as a double scoop with Irish Cream Dream."
  },
  {
    id: "irish-cream-dream",
    name: "Irish Cream Dream",
    tagline: "Our signature cream base infused with non-alcoholic Irish cream flavor",
    description: "A velvety tribute to traditional Dublin cream liqueurs. Deep notes of roasted cocoa, gentle hints of hazelnut, and toasted vanilla folded into our signature chilled cream.",
    category: "Signature Classic",
    tags: ["Fan Favorite", "House Specialty", "Churned Today"],
    color: "#E8D8C3",
    scoopColor: "#DEC7B2",
    accentColor: "#059669",
    sweetness: 4,
    richness: 5,
    texture: "Silk Liqueur Infusion",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    calories: "260 cal / scoop",
    allergens: ["Dairy"],
    notes: ["Toasted Hazelnut", "Cocoa Essence", "Velvety Irish Cream"],
    pairing: "Pairs heavenly with dark chocolate drizzle and crumbled brownies."
  },
  {
    id: "salted-caramel-shamrock",
    name: "Salted Caramel Shamrock",
    tagline: "Buttery caramel with a hint of sea salt and chocolate flakes",
    description: "Slow-kettle Irish sea-salt butter caramel ribbons swirled generously throughout sweet cream and loaded with delicate bittersweet dark chocolate flakes.",
    category: "Signature Classic",
    tags: ["Award Winner", "Gluten-Free", "Churned Today"],
    color: "#F4E3C7",
    scoopColor: "#E4B882",
    accentColor: "#92400E",
    sweetness: 5,
    richness: 5,
    texture: "Kettle Caramel Swirl",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    calories: "275 cal / scoop",
    allergens: ["Dairy", "Soy"],
    notes: ["Galway Sea Salt", "Burnt Sugar Caramel", "Bittersweet Flakes"],
    pairing: "Perfect for our Signature 9-inch Ice Cream Cake base layer!"
  },
  {
    id: "weekly-rotation",
    name: "Wild Blackberry Guinness Swirl",
    tagline: "Weekly Feature Rotation — Non-Alcoholic Roasted Malt & Berry Churn",
    description: "Our current weekly spotlight! We reduce rich Irish stout malt (100% alcohol cooked off) to a deep molasses fudge, folded with sun-ripened North Carolina wild blackberry coulis.",
    category: "Weekly Feature",
    isWeeklyFeature: true,
    tags: ["Weekly Spotlight", "Limited Churn", "Local Berries"],
    color: "#5B2C6F",
    scoopColor: "#7D3C98",
    accentColor: "#BB8FCE",
    sweetness: 4,
    richness: 4,
    texture: "Tart Coulis Ripple",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    calories: "250 cal / scoop",
    allergens: ["Dairy", "Gluten (Barley)"],
    notes: ["Roasted Barley Malt", "NC Wild Blackberry", "Dark Berry Swirl"],
    pairing: "Try it in an artisan waffle cone before this week's batch sells out!"
  },
  {
    id: "emerald-mint-chip",
    name: "Emerald Isle Mint Crunch",
    tagline: "Fresh garden mint steeped in rich cream with dark chocolate shavings",
    description: "No artificial dyes—pure aromatic garden mint leaf infusion paired with micro-shaved 70% dark Belgian chocolate for a crisp, natural snap.",
    category: "Artisan Favorite",
    tags: ["Customer Craving", "Gluten-Free", "Fresh Herbs"],
    color: "#E2F0D9",
    scoopColor: "#A2D9CE",
    accentColor: "#059669",
    sweetness: 3,
    richness: 4,
    texture: "Crisp Herb Infusion",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80",
    calories: "250 cal / scoop",
    allergens: ["Dairy", "Soy"],
    notes: ["Steeped Peppermint", "Belgian Dark Chocolate", "Crisp Clean Finish"],
    pairing: "Phenomenal paired with Classic Celtic Vanilla."
  },
  {
    id: "honeycomb-toffee",
    name: "Golden Connemara Honeycomb",
    tagline: "Crunchy golden Irish honeycomb toffee folded into honey cream",
    description: "Crispy, airy handmade sponge toffee nuggets that melt like sweet sunshine into a delicate wildflower clover honey churn.",
    category: "Artisan Favorite",
    tags: ["Crunchy Delight", "Gluten-Free"],
    color: "#FEF9E7",
    scoopColor: "#F8C471",
    accentColor: "#D97706",
    sweetness: 5,
    richness: 4,
    texture: "Aerated Toffee Crunch",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=800&q=80",
    calories: "270 cal / scoop",
    allergens: ["Dairy"],
    notes: ["Wildflower Honey", "Hand-cracked Toffee", "Malty Crunch"],
    pairing: "Top with extra hot fudge for pure bliss."
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
    caption: "Double scoop of Irish Cream Dream + Salted Caramel Shamrock in our handmade waffle cones! 🍀🍦 #CelticCreameryClayton #ClaytonNC #IrishIceCream",
    likes: 412,
    comments: 38,
    date: "2 days ago",
    tag: "Parlor Vibe",
    fallbackType: "ice-cream"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80",
    caption: "Custom 9-inch birthday cake headed out for an epic backyard celebration in Clayton! Layer 1: Salted Caramel, Layer 2: Vanilla bean. 🎂✨ #IceCreamCake",
    likes: 589,
    comments: 44,
    date: "4 days ago",
    tag: "Cake Spotlight",
    fallbackType: "cake"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
    caption: "Fresh out of the churn! That signature velvety ribbon texture only authentic Irish dairy can achieve. Stop by before 9 PM tonight! 🍀",
    likes: 673,
    comments: 52,
    date: "6 days ago",
    tag: "Fresh Churn",
    fallbackType: "ice-cream"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1516559828483-4fb0775531ad?auto=format&fit=crop&w=700&q=80",
    caption: "Bring the scoop station to you! Catering our mobile cart at the Clayton High School sports banquet. Scoop joy everywhere! 🚐🍨 #CateringClayton",
    likes: 388,
    comments: 29,
    date: "1 week ago",
    tag: "Catering",
    fallbackType: "catering"
  },
  {
    id: "ig-5",
    imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80",
    caption: "Did you know our street parking is 100% free right out front on Main St? Grab your family and come taste the difference! ☘️",
    likes: 310,
    comments: 17,
    date: "1 week ago",
    tag: "Visit Us",
    fallbackType: "parlor"
  },
  {
    id: "ig-6",
    imageUrl: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=700&q=80",
    caption: "Artisan Ice Cream Pies with oreo butter crust and hot fudge drizzle! Order yours online with 48h advance notice! 🥧🍫 #ClaytonEats",
    likes: 521,
    comments: 41,
    date: "2 weeks ago",
    tag: "Artisan Pies",
    fallbackType: "cake"
  }
];

export const CAKE_STYLES = [
  {
    id: "cake-9-inch",
    name: "Signature 9\" Round Ice Cream Cake",
    serves: "Serves 12 – 16 guests",
    basePrice: 46.00,
    description: "Two thick, velvety layers of freshly churned Irish ice cream separated by our signature crunchy chocolate biscuit & fudge center, topped with hand-piped whipped frosting and clover rosettes.",
    badge: "Most Popular For Celebrations",
    layers: 2
  },
  {
    id: "artisan-pie",
    name: "Artisan Ice Cream Pie",
    serves: "Serves 8 – 10 guests",
    basePrice: 38.00,
    description: "A decadent deep-dish dessert built inside a golden butter graham or dark chocolate cookie crust, filled with two custom layers of churned ice cream and drizzled with gourmet chocolate & caramel.",
    badge: "Dinner Party Perfection",
    layers: 2
  }
];

export const CRUST_OPTIONS = [
  { id: "oreo", name: "Crushed Oreo Cookie Crust (Rich & Dark)", price: 0 },
  { id: "graham", name: "Golden Honey Graham Cracker Crust", price: 0 },
  { id: "biscuit", name: "Irish Shortbread & Oat Crust", price: 2.00 },
];

export const ADDONS = [
  { id: "hot-fudge", name: "Extra Hot Belgian Fudge Drizzle", price: 3.50, description: "Warm, rich, cascading dark fudge" },
  { id: "cookie-crumbles", name: "Gourmet Cookie Crumbles (Oreo & Shortbread)", price: 2.50, description: "Crunchy topping between layers & rim" },
  { id: "rainbow-sprinkles", name: "Celebration Rainbow Sprinkles", price: 1.50, description: "Festive colorful pop for birthdays" },
  { id: "shamrock-sprinkles", name: "Celtic Emerald & Gold Sugar Shamrocks", price: 2.00, description: "Signature green and gold whimsical sparkle" },
  { id: "irish-caramel", name: "Warm Irish Sea-Salted Caramel Dip Cup (Side)", price: 4.00, description: "8oz tub of artisan house-cooked caramel" }
];

// AI Intelligence: Flavor Sommelier Matching Engine
export function matchAiFlavor({ mood, craving, dietary, occasion }) {
  const recommendations = [
    {
      condition: () => craving === "chocolate" || mood === "indulgent",
      headline: "The Dublin Double Indulgence",
      primaryFlavor: "Irish Cream Dream",
      secondaryFlavor: "Salted Caramel Shamrock",
      celticQuote: "\"Laughter is brightest where food is best.\" – Irish Proverb",
      tastingNotes: "Rich cocoa and non-alcoholic Irish cream notes cushioned by warm sea-salted caramel ribbons and dark chocolate flakes.",
      suggestedAddon: "Extra Hot Belgian Fudge Drizzle",
      cakeStyleRecommendation: "Signature 9\" Round Ice Cream Cake"
    },
    {
      condition: () => craving === "fruity" || mood === "refreshing",
      headline: "The Killarney Harvest Churn",
      primaryFlavor: "Wild Blackberry Guinness Swirl",
      secondaryFlavor: "Classic Celtic Vanilla",
      celticQuote: "\"May you always find a four-leaf clover and sweet summer berries in your cup.\"",
      tastingNotes: "Tart North Carolina sun-drenched blackberries harmonizing gracefully against sweet Madagascar vanilla bean dairy velvet.",
      suggestedAddon: "Celebration Rainbow Sprinkles",
      cakeStyleRecommendation: "Artisan Ice Cream Pie with Graham Crust"
    },
    {
      condition: () => craving === "crunchy" || mood === "celebratory",
      headline: "The Celtic Golden Shamrock Celebration",
      primaryFlavor: "Golden Connemara Honeycomb",
      secondaryFlavor: "Salted Caramel Shamrock",
      celticQuote: "\"May your joys be as deep as the ocean and your fortune as rich as Irish cream.\"",
      tastingNotes: "Airy honey sponge toffee crunches bursting between decadent salted butter caramel ribbons.",
      suggestedAddon: "Celtic Emerald & Gold Sugar Shamrocks",
      cakeStyleRecommendation: "Signature 9\" Round Ice Cream Cake"
    },
    {
      condition: () => craving === "minty" || craving === "fresh",
      headline: "The Emerald Isle Crisp Retreat",
      primaryFlavor: "Emerald Isle Mint Crunch",
      secondaryFlavor: "Classic Celtic Vanilla",
      celticQuote: "\"Like a fresh breeze off the Cliffs of Moher.\"",
      tastingNotes: "Refreshing whole mint leaf infusion balanced with hand-shaved 70% dark Belgian chocolate.",
      suggestedAddon: "Gourmet Cookie Crumbles",
      cakeStyleRecommendation: "Artisan Ice Cream Pie with Oreo Crust"
    },
    {
      condition: () => true,
      headline: "The Clayton Signature Heritage Pairing",
      primaryFlavor: "Classic Celtic Vanilla",
      secondaryFlavor: "Irish Cream Dream",
      celticQuote: "\"There are good ships and wood ships, ships that sail the sea, but the best ships are friendships, may they always be!\"",
      tastingNotes: "Velvety bourbon vanilla bean base paired with roasted hazelnut and cocoa Irish cream.",
      suggestedAddon: "Extra Hot Belgian Fudge Drizzle",
      cakeStyleRecommendation: "Signature 9\" Round Ice Cream Cake"
    }
  ];

  return recommendations.find(r => r.condition());
}

// AI Intelligence: Whimsical Cake Inscription Assistant
export const AI_INSCRIPTION_PRESETS = [
  { occasion: "Birthday", suggestions: [
    "Another Year Sweeter in Clayton! ☘️",
    "May your year be as rich as our cream! 🎂",
    "Churning up 30 Years of Pure Magic! ✨",
    "Happy Birthday, Sweetest Soul! 🍦"
  ]},
  { occasion: "Anniversary / Romance", suggestions: [
    "Scooped Up Your Heart Forever ❤️🍀",
    "Still the Sweetest Catch in NC! 💕",
    "Churned for Each Other Since Day One 🍨"
  ]},
  { occasion: "Graduation / Milestone", suggestions: [
    "You Did It! Sweet Success! 🎓🍀",
    "Clayton Proud! Big Dreams Ahead! 🌟",
    "May the Road Rise Up to Meet You! ☘️"
  ]},
  { occasion: "Whimsical & Fun", suggestions: [
    "Anything is Popsicle with Good Friends! 🍦",
    "Keep Calm and Eat Irish Ice Cream ☘️",
    "Certified 100% Velvety & Irresistible ✨"
  ]}
];
