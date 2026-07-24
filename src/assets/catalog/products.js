// ─────────────────────────────────────────────────────────────
//  src/assets/catalog/products.js
//
//  ✅ HOW TO ADD A NEW ABAYA:
//  ─────────────────────────
//  1. Drop your photo in:  src/assets/images/abayas/
//  2. Import it at the top of this file (see examples below)
//  3. Copy one product object from PRODUCTS, paste it at the
//     bottom, and fill in your details.
//
//  REQUIRED FIELDS PER PRODUCT:
//  ─────────────────────────────
//  id          → unique string, e.g. 'ab-07'
//  name        → display name shown on cards
//  tagline     → short subtitle (fabric/style summary)
//  category    → must match an id from categories.js
//  priceUSD    → price in US Dollars (converted to PKR auto)
//  image       → imported image variable (see imports below)
//  fabric      → fabric material description
//  color       → color name shown in quick view
//  description → full paragraph shown in quick view modal
//  careInstructions → washing / care label text
//  sizes       → array of size strings
//  isNew       → true / false
//  isBestSeller→ true / false
//  rating      → number 1–5 (e.g. 4.95)
//  reviewsCount→ number of reviews
// ─────────────────────────────────────────────────────────────

// ── Image Imports ─────────────────────────────────────────────
// Each import brings the image into Vite's build pipeline
// (hashed filename, CDN-ready, auto-optimised).
//
// ADD YOUR OWN:
//   import myNewAbaya from '../images/abayas/my_new_abaya.jpg';

import imgSaharaDrape       from '../images/abayas/sahara_drape_black.png';
import imgOasisEmerald       from '../images/abayas/empress_emerald_velvet.png';
import imgPearlBridal        from '../images/abayas/ivory_pearl_bridal.png';
import imgChampagneSatin     from '../images/abayas/champagne_satin_silk.png';
import imgRoyalGoldZari      from '../images/abayas/royal_gold_zari.png';
import imgHeroMannequin      from '../images/abayas/hero_mannequin_beige.png';

// ── Hero Image ────────────────────────────────────────────────
export { imgHeroMannequin };

// ── Product Catalog ───────────────────────────────────────────
export const PRODUCTS = [

  // ── NEW ARRIVALS (shown in "New Arrivals" section) ──────────

  {
    id:           'ab-01',
    name:         'The Sahara Drape',
    tagline:      'Dark navy black crepe with hand-worked gold cuff embroidery',
    category:     'new',
    priceUSD:     280,
    image:        imgSaharaDrape,
    fabric:       'Premium Jet Black Crepe',
    color:        'Noir & Gold Zari',
    description:  'An iconic open-front abaya cut from breathable premium crepe. The signature gold bullion hand-embroidered bell cuff sleeve gives it an unmistakably regal finish suitable for formal and semi-formal events.',
    careInstructions: 'Dry clean only. Do not tumble dry.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: false,
    rating:       4.95,
    reviewsCount: 42,
  },

  {
    id:           'ab-02',
    name:         'Oasis Silk Abaya',
    tagline:      'Flowing sage emerald liquid silk with graceful draped sleeves',
    category:     'new',
    priceUSD:     320,
    image:        imgOasisEmerald,
    fabric:       'Pure Mulberry Silk',
    color:        'Oasis Sage Emerald',
    description:  'Inspired by Persian garden elegance, this pure mulberry silk abaya drapes beautifully with its open-arm cascading design. The deep emerald hue is rich, refined, and unmistakably luxurious.',
    careInstructions: 'Hand wash cold or professional dry clean.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: false,
    rating:       5.0,
    reviewsCount: 28,
  },

  {
    id:           'ab-03',
    name:         'Pearl Crepe Kaftan',
    tagline:      'Architectural ivory kaftan with gold trimmed bell sleeves',
    category:     'bridal',
    priceUSD:     350,
    image:        imgPearlBridal,
    fabric:       'Double Pearl Crepe & Organza',
    color:        'Pure Ivory Pearl',
    description:  'An exquisite kaftan abaya designed for nikah ceremonies, Eid, and formal evening events. The structured bell sleeve is framed with a delicate gold lace trim and hand-attached pearl cluster.',
    careInstructions: 'Haute couture dry clean required.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: true,
    rating:       4.98,
    reviewsCount: 36,
  },

  // ── ROYAL COLLECTION ────────────────────────────────────────

  {
    id:           'ab-04',
    name:         'The Royal Zari Abaya',
    tagline:      'Hand-embroidered gold Zari thread on pure Dubai Silk Nida',
    category:     'royal',
    priceUSD:     285,
    image:        imgRoyalGoldZari,
    fabric:       'Pure Premium Dubai Silk Nida',
    color:        'Midnight Black & Royal Gold',
    description:  'Masterfully crafted by skilled Dubai artisans. Heavy Zari hand embroidery lines the bell sleeves and front lapel. Includes a matching chiffon sheila hijab with gold border.',
    careInstructions: 'Dry clean only. Steam iron on silk setting, inside out.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        false,
    isBestSeller: true,
    rating:       4.96,
    reviewsCount: 48,
  },

  // ── SILK & SATIN ─────────────────────────────────────────────

  {
    id:           'ab-05',
    name:         'Champagne Satin Abaya',
    tagline:      'High-gloss champagne satin with open-front flowing silhouette',
    category:     'silk',
    priceUSD:     260,
    image:        imgChampagneSatin,
    fabric:       'Liquid Gloss Japanese Satin Silk',
    color:        'Champagne Gold',
    description:  'Catch every ray of light with this fluid liquid-silk abaya. Cut in an oversized A-line open silhouette that pairs effortlessly with tailored trousers or slip dresses underneath.',
    careInstructions: 'Hand wash cold or gentle dry clean. Do not wring.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        false,
    isBestSeller: false,
    rating:       4.89,
    reviewsCount: 56,
  },

  // ─────────────────────────────────────────────────────────────
  //  ✏️  ADD YOUR NEXT ABAYA HERE — copy the block below:
  // ─────────────────────────────────────────────────────────────
  //
  // {
  //   id:           'ab-06',
  //   name:         'Your Abaya Name',
  //   tagline:      'Short fabric & style description',
  //   category:     'royal',           // see categories.js for valid ids
  //   priceUSD:     300,               // price in USD
  //   image:        myNewAbaya,        // import at the top of this file
  //   fabric:       'Fabric Type',
  //   color:        'Color Name',
  //   description:  'Detailed description shown in quick view popup.',
  //   careInstructions: 'Dry clean only.',
  //   sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
  //   isNew:        false,
  //   isBestSeller: false,
  //   rating:       4.9,
  //   reviewsCount: 0,
  // },
  //
  // ─────────────────────────────────────────────────────────────

];

// ── New Arrivals (first 3 "new" products) ─────────────────────
export const NEW_ARRIVALS = PRODUCTS.filter(p => p.isNew).slice(0, 3);

// ── Best Sellers ──────────────────────────────────────────────
export const BEST_SELLERS = PRODUCTS.filter(p => p.isBestSeller);

// ── Filter by category ────────────────────────────────────────
export const getByCategory = (categoryId) =>
  categoryId === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === categoryId);
