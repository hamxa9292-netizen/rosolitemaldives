/* ============================================================
   PRODUCT CATALOG — one block { ... } per product.
   To add a product: copy a block, paste it, edit the values,
   and make sure there's a comma between blocks.
   To remove a product: delete its whole block.

   Fields:
   sku       – your product code (must be unique)
   name      – product name shown to customers
   category  – must exactly match one of your categories below
   price     – number only, in MVR (no quotes)
   desc      – one-line description
   image     – filename of a photo you upload next to index.html,
               or "" to show the emoji instead
   emoji     – shown when there is no photo
   inStock   – true or false. false shows "Out of stock".
   ============================================================ */

const CATEGORIES = ["Hardware", "Household", "Beauty", "Grocery"];

const PRODUCTS = [
  {
    sku: "HW-001",
    name: "Claw Hammer 16oz",
    category: "Hardware",
    price: 145,
    desc: "Steel claw hammer with rubber grip handle.",
    image: "",
    emoji: "🔨",
    inStock: true,
  },
  {
    sku: "HW-002",
    name: "Screwdriver Set (6 pcs)",
    category: "Hardware",
    price: 120,
    desc: "Flathead and Phillips sizes, magnetic tips.",
    image: "",
    emoji: "🪛",
    inStock: true,
  },
  {
    sku: "HW-003",
    name: "Extension Cord 5m",
    category: "Hardware",
    price: 165,
    desc: "4 sockets with surge protection switch.",
    image: "",
    emoji: "🔌",
    inStock: true,
  },
  {
    sku: "HH-004",
    name: "Laundry Detergent 3kg",
    category: "Household",
    price: 110,
    desc: "Concentrated powder for machine and hand wash.",
    image: "",
    emoji: "🧺",
    inStock: true,
  },
  {
    sku: "HH-005",
    name: "Storage Box 30L with Lid",
    category: "Household",
    price: 95,
    desc: "Clear stackable box with clip-lock lid.",
    image: "",
    emoji: "📦",
    inStock: true,
  },
  {
    sku: "HH-006",
    name: "Soft Broom with Handle",
    category: "Household",
    price: 65,
    desc: "Soft-bristle broom, lightweight aluminium handle.",
    image: "",
    emoji: "🧹",
    inStock: true,
  },
  {
    sku: "BT-007",
    name: "Moisturizing Shampoo 400ml",
    category: "Beauty",
    price: 85,
    desc: "Argan oil shampoo for dry hair. Sulfate free.",
    image: "",
    emoji: "🧴",
    inStock: true,
  },
  {
    sku: "BT-008",
    name: "Gentle Face Wash 150ml",
    category: "Beauty",
    price: 75,
    desc: "Foaming wash for all skin types. Fragrance free.",
    image: "",
    emoji: "🫧",
    inStock: true,
  },
  {
    sku: "BT-009",
    name: "Body Lotion 250ml",
    category: "Beauty",
    price: 90,
    desc: "Shea butter lotion, non-greasy and quick absorbing.",
    image: "",
    emoji: "🧴",
    inStock: true,
  },
  {
    sku: "GR-010",
    name: "Basmati Rice 5kg",
    category: "Grocery",
    price: 185,
    desc: "Premium long-grain basmati, vacuum sealed.",
    image: "",
    emoji: "🍚",
    inStock: true,
  },
  {
    sku: "GR-011",
    name: "Canned Tuna Chunks 185g",
    category: "Grocery",
    price: 28,
    desc: "Tuna chunks in vegetable oil. Ready to eat.",
    image: "",
    emoji: "🥫",
    inStock: true,
  },
  {
    sku: "GR-012",
    name: "Cooking Oil 2L",
    category: "Grocery",
    price: 92,
    desc: "Refined sunflower oil, 2-liter bottle.",
    image: "",
    emoji: "🫒",
    inStock: true,
  },
];
