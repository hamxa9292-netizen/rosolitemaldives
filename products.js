/* ============================================================
   PRODUCT CATALOG — managed by the admin panel.
   You can still edit by hand: one { ... } block per product.

   Fields (all optional except sku, name, category, price):
   desc     – short one-liner shown on the card
   benefits – list of benefit lines, shown as ✓ points in the
              product view. Write OUTCOMES, not features:
              "Keeps drinks cold for 12 hours" beats "double wall".
   specs    – list of "Label: value" lines (size, material, weight,
              contents, origin) shown as a specs table
   images   – list of photo filenames uploaded to the site;
              first one is the main photo. 3-6 photos sell best:
              front, back, label/detail, and one in real use.
   badge    – small tag like "Bestseller" or "New" (or "")
   wasPrice – optional: the old price. If higher than price, the
              store shows a strikethrough + discount % tag.
              Only use REAL previous prices — fake discounts
              destroy trust (and are illegal in many places).
   sold     – optional number: shows "40+ sold". Keep it honest.
   emoji    – shown when there are no photos
   inStock  – true or false
   ============================================================ */

const CATEGORIES = ["Hardware", "Household", "Beauty", "Grocery"];

const PRODUCTS = [
  {
    sku: "HW-001",
    name: "Claw Hammer 16oz",
    category: "Hardware",
    price: 145,
    desc: "Steel claw hammer with rubber grip handle.",
    benefits: [
      "Comfortable rubber grip won't slip in humid weather",
      "Balanced 16oz head drives nails with less effort",
      "Claw pulls bent nails cleanly without damaging wood",
    ],
    specs: ["Head weight: 16oz (450g)", "Handle: Rubber grip, steel core", "Length: 32cm"],
    images: [],
    badge: "",
    emoji: "🔨",
    inStock: true,
  },
  {
    sku: "HW-002",
    name: "Screwdriver Set (6 pcs)",
    category: "Hardware",
    price: 120,
    wasPrice: 150,
    sold: 40,
    desc: "Flathead and Phillips sizes, magnetic tips.",
    benefits: [
      "Magnetic tips hold screws steady — no more dropped screws",
      "Covers the 6 sizes that handle almost every household job",
    ],
    specs: ["Contents: 3 flathead + 3 Phillips", "Material: Chrome vanadium steel"],
    images: [],
    badge: "Bestseller",
    emoji: "🪛",
    inStock: true,
  },
  {
    sku: "HW-003",
    name: "Extension Cord 5m",
    category: "Hardware",
    price: 165,
    desc: "4 sockets with surge protection switch.",
    benefits: [
      "Reach any corner of the room from one wall socket",
      "Surge protection switch guards your electronics",
    ],
    specs: ["Length: 5 meters", "Sockets: 4 universal", "Rated: 250V 10A"],
    images: [],
    badge: "",
    emoji: "🔌",
    inStock: true,
  },
  {
    sku: "HH-004",
    name: "Laundry Detergent 3kg",
    category: "Household",
    price: 110,
    desc: "Concentrated powder for machine and hand wash.",
    benefits: [
      "Concentrated formula — one box lasts a family about a month",
      "Works in both machine and hand wash",
    ],
    specs: ["Net weight: 3kg", "Type: Powder, fresh scent"],
    images: [],
    badge: "",
    emoji: "🧺",
    inStock: true,
  },
  {
    sku: "HH-005",
    name: "Storage Box 30L with Lid",
    category: "Household",
    price: 95,
    desc: "Clear stackable box with clip-lock lid.",
    benefits: [
      "See what's inside without opening — clear walls",
      "Clip-lock lid keeps out damp and insects",
      "Stacks safely to save floor space",
    ],
    specs: ["Capacity: 30 liters", "Size: 45 × 33 × 26 cm", "Material: PP plastic"],
    images: [],
    badge: "",
    emoji: "📦",
    inStock: true,
  },
  {
    sku: "HH-006",
    name: "Soft Broom with Handle",
    category: "Household",
    price: 65,
    desc: "Soft-bristle broom, lightweight aluminium handle.",
    benefits: [
      "Soft bristles pick up fine dust on tile floors",
      "Light aluminium handle is easy on the wrists",
    ],
    specs: ["Handle: Aluminium, 120cm", "Head width: 30cm"],
    images: [],
    badge: "",
    emoji: "🧹",
    inStock: true,
  },
  {
    sku: "BT-007",
    name: "Moisturizing Shampoo 400ml",
    category: "Beauty",
    price: 85,
    wasPrice: 100,
    desc: "Argan oil shampoo for dry hair. Sulfate free.",
    benefits: [
      "Argan oil restores softness to sun- and salt-dried hair",
      "Sulfate free — gentle enough for daily use",
    ],
    specs: ["Volume: 400ml", "Type: Sulfate-free, with argan oil"],
    images: [],
    badge: "",
    emoji: "🧴",
    inStock: true,
  },
  {
    sku: "BT-008",
    name: "Gentle Face Wash 150ml",
    category: "Beauty",
    price: 75,
    desc: "Foaming wash for all skin types. Fragrance free.",
    benefits: [
      "Cleans without the tight, dry feeling afterwards",
      "Fragrance free and dermatologically tested",
    ],
    specs: ["Volume: 150ml", "Skin type: All, incl. sensitive"],
    images: [],
    badge: "",
    emoji: "🫧",
    inStock: true,
  },
  {
    sku: "BT-009",
    name: "Body Lotion 250ml",
    category: "Beauty",
    price: 90,
    desc: "Shea butter lotion, non-greasy and quick absorbing.",
    benefits: [
      "Absorbs in seconds — no sticky feeling in the heat",
      "Shea butter keeps skin soft through the day",
    ],
    specs: ["Volume: 250ml", "Key ingredient: Shea butter"],
    images: [],
    badge: "",
    emoji: "🧴",
    inStock: true,
  },
  {
    sku: "GR-010",
    name: "Basmati Rice 5kg",
    category: "Grocery",
    price: 185,
    wasPrice: 210,
    sold: 65,
    desc: "Premium long-grain basmati, vacuum sealed.",
    benefits: [
      "Long grains cook up fluffy and separate, never sticky",
      "Vacuum sealed to stay fresh in island humidity",
    ],
    specs: ["Net weight: 5kg", "Grain: Extra-long basmati"],
    images: [],
    badge: "Bestseller",
    emoji: "🍚",
    inStock: true,
  },
  {
    sku: "GR-011",
    name: "Canned Tuna Chunks 185g",
    category: "Grocery",
    price: 28,
    desc: "Tuna chunks in vegetable oil. Ready to eat.",
    benefits: [
      "Ready to eat — instant protein for any meal",
      "Long shelf life, perfect for the pantry",
    ],
    specs: ["Net weight: 185g", "Packing: Vegetable oil"],
    images: [],
    badge: "",
    emoji: "🥫",
    inStock: true,
  },
  {
    sku: "GR-012",
    name: "Cooking Oil 2L",
    category: "Grocery",
    price: 92,
    desc: "Refined sunflower oil, 2-liter bottle.",
    benefits: [
      "Neutral taste that works for frying and curries alike",
      "2L family size — better value per liter",
    ],
    specs: ["Volume: 2 liters", "Type: Refined sunflower"],
    images: [],
    badge: "",
    emoji: "🫒",
    inStock: true,
  },
];
