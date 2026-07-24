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
//  tagline     → short fabric & style summary
//  category    → 'nida' | 'zoom' | 'tiktok'  (see categories.js)
//  type        → 'open' | 'closed'
//  priceUSD    → price in US Dollars (converted to PKR auto)
//               (Rs 4500 ÷ 278 ≈ 16.19)
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
import imgBlackLaceBell    from '../images/abayas/p_img1.jpg';
import imgChampagneKimono  from '../images/abayas/p_img2.jpg';
import imgEmeraldLeaf      from '../images/abayas/p_img2_1.jpg';
import imgMochaChiffon     from '../images/abayas/p_img3.jpg';
import imgForestGreen      from '../images/abayas/p_img4.jpg';
import imgWhitePrinted     from '../images/abayas/p_img5.jpg';
import imgDustyRosePlain   from '../images/abayas/545377085_18060052139588750_6167592824049056814_n.jpg';
import imgBlackFloral      from '../images/abayas/671234660_18085669100588750_1561427573152080322_n.jpg';

// ── Hero Image ────────────────────────────────────────────────
export { imgDustyRosePlain as imgHeroMannequin };

// ── Product Catalog ───────────────────────────────────────────
// Rs 4500 ÷ 278 (PKR rate) = 16.19 USD stored as priceUSD
const PRICE = 16.19;

export const PRODUCTS = [

  {
    id:           'ab-01',
    name:         'Black Lace Bell Abaya',
    tagline:      'Jet black crepe with floral lace flared bell sleeves',
    category:     'nida',
    type:         'closed',
    priceUSD:     PRICE,
    image:        imgBlackLaceBell,
    fabric:       'Premium Nida Crepe',
    color:        'Jet Black',
    description:  'A striking closed abaya in premium Nida crepe with dramatic flared bell sleeves finished in an intricate floral lace overlay. The matching printed hijab creates a perfectly coordinated look for formal and semi-formal occasions.',
    careInstructions: 'Dry clean only. Do not tumble dry.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: true,
    rating:       4.95,
    reviewsCount: 38,
  },

  {
    id:           'ab-02',
    name:         'Champagne Shimmer Kimono',
    tagline:      'Lustrous gold-champagne shimmer open kimono with sash belt',
    category:     'zoom',
    type:         'open',
    priceUSD:     PRICE,
    image:        imgChampagneKimono,
    fabric:       'Shimmer Zoom Fabric',
    color:        'Champagne Gold',
    description:  'An elegant open-front kimono abaya crafted from luxurious shimmer Zoom fabric in a warm champagne-gold tone. Styled with a coordinated sash belt for a refined silhouette — ideal for evening events and celebrations.',
    careInstructions: 'Hand wash cold or gentle dry clean.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: true,
    rating:       5.0,
    reviewsCount: 52,
  },

  {
    id:           'ab-03',
    name:         'Emerald Leaf Embroidery Abaya',
    tagline:      'Deep emerald ribbed open abaya with cascading leaf embroidery',
    category:     'zoom',
    type:         'open',
    priceUSD:     PRICE,
    image:        imgEmeraldLeaf,
    fabric:       'Ribbed Zoom Crepe',
    color:        'Emerald Green',
    description:  'A beautifully tailored open-front abaya in rich emerald green ribbed Zoom fabric, adorned with flowing cascading leaf embroidery along the lapels and sleeves. Comes with a matching ivory inner dress for a complete ensemble.',
    careInstructions: 'Dry clean recommended. Steam iron on low heat.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: false,
    rating:       4.92,
    reviewsCount: 29,
  },

  {
    id:           'ab-04',
    name:         'Mocha Rose Brooch Abaya',
    tagline:      'Soft mocha chiffon with pleated front & signature rose brooch',
    category:     'nida',
    type:         'closed',
    priceUSD:     PRICE,
    image:        imgMochaChiffon,
    fabric:       'Premium Nida Chiffon',
    color:        'Warm Mocha',
    description:  'A graceful closed Nida chiffon abaya in a warm mocha tone, featuring elegant pleated front panels and elasticated cuffs. Adorned with a handcrafted rose fabric brooch and tassel pin at the chest — a signature Naeem Abaya detail.',
    careInstructions: 'Hand wash cold. Do not wring or tumble dry.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: true,
    rating:       4.97,
    reviewsCount: 64,
  },

  {
    id:           'ab-05',
    name:         'Forest Green Rose Abaya',
    tagline:      'Bottle green Nida chiffon with pleated front & rose brooch',
    category:     'nida',
    type:         'closed',
    priceUSD:     PRICE,
    image:        imgForestGreen,
    fabric:       'Premium Nida Chiffon',
    color:        'Bottle Green',
    description:  'Elegant and understated, this bottle green closed Nida chiffon abaya features refined pleated front panels with puffed elasticated cuffs. The signature handcrafted rose & tassel brooch adds a touch of artisanal luxury to everyday wear.',
    careInstructions: 'Hand wash cold. Do not wring or tumble dry.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: false,
    rating:       4.88,
    reviewsCount: 41,
  },

  {
    id:           'ab-06',
    name:         'White Printed Kimono Abaya',
    tagline:      'White Tik Tok printed open kimono with black contrast trim & belt',
    category:     'tiktok',
    type:         'open',
    priceUSD:     PRICE,
    image:        imgWhitePrinted,
    fabric:       'Printed Tik Tok Fabric',
    color:        'White & Black',
    description:  'A fresh and modern open-front kimono abaya in a crisp white Tik Tok printed fabric with scattered micro print. Black contrast trim along the lapels and a coordinated black tie belt create a bold monochrome statement look.',
    careInstructions: 'Machine wash cold, gentle cycle. Hang to dry.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: false,
    rating:       4.85,
    reviewsCount: 23,
  },

  {
    id:           'ab-07',
    name:         'Dusty Rose Plain Abaya',
    tagline:      'Minimalist dusty rose Nida abaya with zip front & cuffed sleeves',
    category:     'nida',
    type:         'open',
    priceUSD:     PRICE,
    image:        imgDustyRosePlain,
    fabric:       'Premium Nida Fabric',
    color:        'Dusty Rose',
    description:  'Clean, minimal and effortlessly chic — this dusty rose open-front Nida abaya features a slim zip placket and softly cuffed sleeves. A wardrobe staple that transitions seamlessly from casual daywear to relaxed evening styling.',
    careInstructions: 'Machine wash cold, gentle cycle. Do not bleach.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: false,
    rating:       4.90,
    reviewsCount: 17,
  },

  {
    id:           'ab-08',
    name:         'Black Floral Appliqué Abaya',
    tagline:      'Black chiffon open abaya with hand-applied floral petal embellishments',
    category:     'tiktok',
    type:         'open',
    priceUSD:     PRICE,
    image:        imgBlackFloral,
    fabric:       'Chiffon Tik Tok Fabric',
    color:        'Midnight Black',
    description:  'A statement-making open abaya in fluid black chiffon, decorated with scattered hand-applied floral petal appliqués across the chest and shoulders. Each petal is individually crafted in complementary tones — black, ivory and rose gold — for a truly artistic finish.',
    careInstructions: 'Dry clean only to preserve appliqué work.',
    sizes:        ['52 (XS/S)', '54 (S/M)', '56 (M/L)', '58 (L/XL)', '60 (XL/XXL)', 'Custom Bespoke'],
    isNew:        true,
    isBestSeller: true,
    rating:       4.98,
    reviewsCount: 77,
  },

  // ─────────────────────────────────────────────────────────────
  //  ✏️  ADD YOUR NEXT ABAYA HERE — copy the block below:
  // ─────────────────────────────────────────────────────────────
  //
  // {
  //   id:           'ab-09',
  //   name:         'Your Abaya Name',
  //   tagline:      'Short fabric & style description',
  //   category:     'nida',            // 'nida' | 'zoom' | 'tiktok'
  //   type:         'open',            // 'open' | 'closed'
  //   priceUSD:     16.19,             // Rs 4500 ÷ 278
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

// ── New Arrivals (all "new" products) ─────────────────────────
export const NEW_ARRIVALS = PRODUCTS.filter(p => p.isNew);

// ── Best Sellers ──────────────────────────────────────────────
export const BEST_SELLERS = PRODUCTS.filter(p => p.isBestSeller);

// ── Filter by category ────────────────────────────────────────
export const getByCategory = (categoryId) =>
  categoryId === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === categoryId);

// ── Filter by type ────────────────────────────────────────────
export const getByType = (typeId) =>
  typeId === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.type === typeId);
