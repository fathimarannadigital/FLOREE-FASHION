// src/js/data/products.js
// FLOREE - Master Product Catalog

export const PRODUCTS = [
  {
    id: "flr-001",
    name: "The Aurelia Silk Slip Dress",
    slug: "aurelia-silk-slip-dress",
    tagline: "Effortless fluid drape crafted from 100% pure mulberry silk.",
    price: 4890,
    originalPrice: 5890,
    category: "Dresses",
    style: "dresses",
    badge: "New Arrival",
    isNew: true,
    isTrending: true,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 42,
    colors: [
      { name: "Champagne Gold", hex: "#E8DFD2", primaryImage: "assets/images/products/product-1-1.jpg", alternateImage: "assets/images/products/product-1-2.jpg" },
      { name: "Charcoal Black", hex: "#1D1D1D", primaryImage: "assets/images/products/product-5-1.jpg", alternateImage: "assets/images/products/product-5-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 6 },
      { size: "M", stock: 8 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "assets/images/products/product-1-1.jpg",
      "assets/images/products/product-1-2.jpg",
      "assets/images/editorial/art-of-dressing.jpg",
      "assets/images/editorial/story-editorial.jpg"
    ],
    description: "The Aurelia is FLOREE’s signature bias-cut slip dress, designed to glide smoothly over every contour. Featuring delicate adjustable French spaghetti straps, a soft cowl neckline, and a gentle floor-sweeping silhouette.",
    details: [
      "Cut on the true bias for an effortless figure-skimming drape",
      "Adjustable micro-rouleau shoulder straps with champagne gold hardware",
      "Softly scooped cowl front neckline with deep back drop",
      "Invisible side zip closure with fabric-covered hook",
      "Lined with featherlight silk habotai for complete opacity"
    ],
    fabricCare: {
      fabric: "100% Grade-6A Pure Mulberry Silk (19 Momme)",
      care: "Dry clean recommended or gentle hand wash in cold water with silk detergent. Line dry in shade. Cool iron on reverse."
    },
    shippingReturns: {
      shipping: "Complimentary express delivery across India. Dispatched within 24 hours in signature FLOREE presentation packaging.",
      returns: "Enjoy hassle-free 7-day complimentary exchanges and returns. Garments must have brand tags attached."
    }
  },
  {
    id: "flr-002",
    name: "Elysian Pleated Midi Dress",
    slug: "elysian-pleated-midi-dress",
    tagline: "Architectural sunburst pleating in warm ivory georgette.",
    price: 5490,
    originalPrice: 6490,
    category: "Dresses",
    style: "dresses",
    badge: "Bestseller",
    isNew: false,
    isTrending: true,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 38,
    colors: [
      { name: "Warm Ivory", hex: "#F8F6F1", primaryImage: "assets/images/products/product-2-1.jpg", alternateImage: "assets/images/products/product-2-2.jpg" },
      { name: "Champagne Beige", hex: "#E8DFD2", primaryImage: "assets/images/products/product-1-1.jpg", alternateImage: "assets/images/products/product-1-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 5 },
      { size: "M", stock: 7 },
      { size: "L", stock: 3 },
      { size: "XL", stock: 1 }
    ],
    images: [
      "assets/images/products/product-2-1.jpg",
      "assets/images/products/product-2-2.jpg",
      "assets/images/editorial/story-editorial.jpg",
      "assets/images/products/product-8-1.jpg"
    ],
    description: "Capturing ethereal poise, the Elysian Midi features hand-pressed accordion pleats that dance with every stride. A cinched waistline defined by a sash tie creates a flattering silhouette that suits intimate dinner gatherings and daytime galleries alike.",
    details: [
      "Permanent sunburst pleats tailored from featherlight georgette",
      "Detachable self-fabric sash belt with soft taupe aglets",
      "Subtle jewel neckline with gentle keyhole nape fastening",
      "Fully lined in breathable organic cotton voile",
      "Concealed center-back seam zipper"
    ],
    fabricCare: {
      fabric: "Fine Crepe Georgette with 100% Breathable Cotton Voile Lining",
      care: "Professional dry clean only to preserve precision pleat memory. Store hanging; avoid folding across pleats."
    },
    shippingReturns: {
      shipping: "Complimentary express delivery on orders over ₹2,999. Standard shipping takes 2–4 business days.",
      returns: "Easy 7-day exchange window with free reverse courier pickup from your doorstep."
    }
  },
  {
    id: "flr-003",
    name: "Sienna Tailored Trench Coat Dress",
    slug: "sienna-tailored-trench-dress",
    tagline: "Sculpted sartorial elegance in premium structured camel blend.",
    price: 6890,
    originalPrice: 7990,
    category: "Statement Pieces",
    style: "statement-pieces",
    badge: "Bestseller",
    isNew: true,
    isTrending: true,
    isBestseller: true,
    rating: 5.0,
    reviewCount: 29,
    colors: [
      { name: "Soft Taupe", hex: "#B5A596", primaryImage: "assets/images/products/product-3-1.jpg", alternateImage: "assets/images/products/product-3-2.jpg" },
      { name: "Charcoal", hex: "#1D1D1D", primaryImage: "assets/images/products/product-5-1.jpg", alternateImage: "assets/images/products/product-5-2.jpg" }
    ],
    sizes: [
      { size: "S", stock: 4 },
      { size: "M", stock: 6 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "assets/images/products/product-3-1.jpg",
      "assets/images/products/product-3-2.jpg",
      "assets/images/editorial/about-philosophy.jpg",
      "assets/images/products/product-3-1.jpg"
    ],
    description: "Blurring the line between structured outerwear and refined dressing, the Sienna Trench Dress offers razor-sharp peak lapels, double-breasted horn-effect buttons, and a cinching buckle belt. A powerful, modern statement piece.",
    details: [
      "Double-breasted front with bespoke horn-effect buttons",
      "Structured shoulder definition with tailored sleeve cuff straps",
      "Wide fabric belt with brushed geometric prong buckle",
      "Twin welt hip pockets and storm flap back accent",
      "Tailored vent hem at back for effortless walking comfort"
    ],
    fabricCare: {
      fabric: "Structured Wool-Cotton Twill with Viscose Satin Lining",
      care: "Specialist dry clean only. Steam lightly to remove transit creases."
    },
    shippingReturns: {
      shipping: "Dispatched in FLOREE signature garment bag. Express delivery takes 2–3 business days.",
      returns: "Complimentary returns and exchanges within 7 calendar days."
    }
  },
  {
    id: "flr-004",
    name: "Celeste Tiered Organza Ensemble",
    slug: "celeste-tiered-organza-gown",
    tagline: "Romantic tiered layers in featherlight champagne organza.",
    price: 7490,
    originalPrice: 8990,
    category: "Statement Pieces",
    style: "statement-pieces",
    badge: "Exclusive",
    isNew: true,
    isTrending: false,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 22,
    colors: [
      { name: "Champagne Beige", hex: "#E8DFD2", primaryImage: "assets/images/products/product-4-1.jpg", alternateImage: "assets/images/products/product-4-2.jpg" },
      { name: "Pure White", hex: "#FFFFFF", primaryImage: "assets/images/products/product-2-1.jpg", alternateImage: "assets/images/products/product-2-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 4 },
      { size: "M", stock: 5 },
      { size: "L", stock: 2 }
    ],
    images: [
      "assets/images/products/product-4-1.jpg",
      "assets/images/products/product-4-2.jpg",
      "assets/images/editorial/story-editorial.jpg",
      "assets/images/products/product-1-1.jpg"
    ],
    description: "Designed for grand entrances, the Celeste features dramatic tiered ruffles cut from gossamer silk-blend organza. The boned bodice offers tailored support, giving way to a cascading skirt that floats with graceful poise.",
    details: [
      "Sculpted corset bodice with internal flexible boning",
      "Three-tier micro-pleated cascading volume skirt",
      "Square neckline with delicate illusion shoulder netting",
      "Concealed back zipper with satin hook-and-eye bar",
      "Floor-grazing hemline"
    ],
    fabricCare: {
      fabric: "Silk-Cotton Organza with Habotai Underlay",
      care: "Dry clean only by eveningwear specialist. Hang inside garment dust bag."
    },
    shippingReturns: {
      shipping: "Ships in reinforced FLOREE luxury box with protective garment cover. Delivery in 2–4 business days.",
      returns: "Eligible for exchange or store credit within 7 days."
    }
  },
  {
    id: "flr-005",
    name: "Nocturne Velvet Column Dress",
    slug: "nocturne-velvet-column-dress",
    tagline: "Sultry evening minimalism in plush midnight silk velvet.",
    price: 6290,
    originalPrice: 7290,
    category: "Dresses",
    style: "dresses",
    badge: "Bestseller",
    isNew: false,
    isTrending: true,
    isBestseller: true,
    rating: 5.0,
    reviewCount: 35,
    colors: [
      { name: "Charcoal Black", hex: "#1D1D1D", primaryImage: "assets/images/products/product-5-1.jpg", alternateImage: "assets/images/products/product-5-2.jpg" },
      { name: "Espresso Brown", hex: "#33251F", primaryImage: "assets/images/products/product-3-1.jpg", alternateImage: "assets/images/products/product-3-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 5 },
      { size: "M", stock: 6 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "assets/images/products/product-5-1.jpg",
      "assets/images/products/product-5-2.jpg",
      "assets/images/products/product-1-2.jpg",
      "assets/images/editorial/about-craft.jpg"
    ],
    description: "The Nocturne Column Dress exudes understated glamour. Tailored from lustrous silk-blend velvet that catches ambient light with liquid sheen, it features a square neckline, sculpted waist darts, and an alluring thigh-high back slit.",
    details: [
      "Plush stretch silk velvet offering tailored ease and drape",
      "Square neckline with architectural shoulder bands",
      "Fitted column silhouette with concealed shaping seams",
      "Subtle side-slit hem for effortless movement",
      "Fully lined with smooth stretch-silk satin"
    ],
    fabricCare: {
      fabric: "82% Rayon, 18% Silk Velvet",
      care: "Professional dry clean only. Steam vertically on reverse side; never place direct iron on velvet nap."
    },
    shippingReturns: {
      shipping: "Complimentary express courier across India. 2–3 business days.",
      returns: "7-day return policy with free doorstep pickup."
    }
  },
  {
    id: "flr-006",
    name: "Verona Washed Linen Wrap Dress",
    slug: "verona-linen-wrap-dress",
    tagline: "Airy European flax linen with a timeless kimono wrap tie.",
    price: 3990,
    originalPrice: 4790,
    category: "Everyday Wear",
    style: "everyday-wear",
    badge: "New Arrival",
    isNew: true,
    isTrending: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 46,
    colors: [
      { name: "Soft Taupe", hex: "#B5A596", primaryImage: "assets/images/products/product-6-1.jpg", alternateImage: "assets/images/products/product-6-2.jpg" },
      { name: "Pure White", hex: "#FFFFFF", primaryImage: "assets/images/products/product-2-1.jpg", alternateImage: "assets/images/products/product-2-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 4 },
      { size: "S", stock: 8 },
      { size: "M", stock: 9 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 3 }
    ],
    images: [
      "assets/images/products/product-6-1.jpg",
      "assets/images/products/product-6-2.jpg",
      "assets/images/categories/casual-wear.jpg",
      "assets/images/products/product-1-1.jpg"
    ],
    description: "The Verona wrap dress is the quintessential daytime staple. Woven from breathable washed European linen, it flatters with a surplice neckline, relaxed elbow-length sleeves, and a custom adjustable wrap tie that accentuates the waist.",
    details: [
      "Pre-washed French flax linen that softens with every wear",
      "True crossover wrap construction with inner button stabilization",
      "Inseam deep side pockets for everyday functionality",
      "A-line midi skirt with subtle curved hem",
      "Breathable, unlined natural luxury"
    ],
    fabricCare: {
      fabric: "100% Certified European Flax Linen",
      care: "Machine wash cold on gentle cycle or hand wash. Lay flat or hang dry in shade. Warm iron while slightly damp."
    },
    shippingReturns: {
      shipping: "Dispatched same-day on orders placed before 2 PM. Delivery within 2–4 days.",
      returns: "Standard 7-day exchange and return policy."
    }
  },
  {
    id: "flr-007",
    name: "Seraphina Draped Satin Blouse & Skirt Co-ord",
    slug: "seraphina-draped-satin-coord",
    tagline: "Dramatic asymmetric shoulder gathering in fluid champagne satin.",
    price: 5990,
    originalPrice: 6990,
    category: "Co-ord Sets",
    style: "co-ord-sets",
    badge: "New Arrival",
    isNew: true,
    isTrending: true,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 31,
    colors: [
      { name: "Champagne Beige", hex: "#E8DFD2", primaryImage: "assets/images/products/product-7-1.jpg", alternateImage: "assets/images/products/product-1-2.jpg" },
      { name: "Soft Taupe", hex: "#B5A596", primaryImage: "assets/images/products/product-3-1.jpg", alternateImage: "assets/images/products/product-3-2.jpg" }
    ],
    sizes: [
      { size: "S", stock: 5 },
      { size: "M", stock: 6 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "assets/images/products/product-7-1.jpg",
      "assets/images/products/product-1-2.jpg",
      "assets/images/editorial/art-of-dressing.jpg",
      "assets/images/products/product-1-1.jpg"
    ],
    description: "Epitomizing sculpture in motion, the Seraphina Co-ord gathers artfully at one shoulder before cascading into a liquid pool of heavyweight Italian satin. Perfect for daytime soirées and cocktail occasions.",
    details: [
      "One-shoulder asymmetrical blouse with hand-draped ruched shoulder",
      "High side split skirt designed for fluid walking movement",
      "Subtle cinched waistband with flattering diagonal draping",
      "Hidden side zip closure with secure hook",
      "Fully lined in matching soft stretch satin"
    ],
    fabricCare: {
      fabric: "Heavyweight Double-Faced Liquid Satin (Silk Blend)",
      care: "Dry clean only. Store on padded hanger in garment bag."
    },
    shippingReturns: {
      shipping: "Free express shipping. Delivery in 2–4 days across India.",
      returns: "Free doorstep pickup for 7-day returns."
    }
  },
  {
    id: "flr-008",
    name: "Mirabella Artisanal Poplin Top",
    slug: "mirabella-cutout-poplin-top",
    tagline: "Contemporary waist cutouts balanced by a structured crop silhouette.",
    price: 3690,
    originalPrice: 4290,
    category: "Tops",
    style: "tops",
    badge: "Trending",
    isNew: true,
    isTrending: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 19,
    colors: [
      { name: "Espresso Brown", hex: "#33251F", primaryImage: "assets/images/products/product-8-1.jpg", alternateImage: "assets/images/products/product-8-2.jpg" },
      { name: "Warm Ivory", hex: "#F8F6F1", primaryImage: "assets/images/products/product-2-1.jpg", alternateImage: "assets/images/products/product-2-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 5 },
      { size: "M", stock: 7 },
      { size: "L", stock: 3 }
    ],
    images: [
      "assets/images/products/product-8-1.jpg",
      "assets/images/products/product-8-2.jpg",
      "assets/images/editorial/story-editorial.jpg",
      "assets/images/products/product-4-1.jpg"
    ],
    description: "The Mirabella reimagines resort sophistication with subtle waist-framing cutouts and an O-ring tortoise shell focal accent. Cut from compact crisp cotton poplin.",
    details: [
      "Subtle dual side cutouts with tortoise resin O-ring centerpiece",
      "Elasticated back panel for a customized contour fit",
      "Sleeveless jewel bodice with neat bound armholes",
      "Pairs effortlessly with tailored trousers or high-waisted slip skirts"
    ],
    fabricCare: {
      fabric: "100% Crisp Cotton Poplin with Slight Stretch",
      care: "Machine wash cold gentle or dry clean. Hang dry. Iron while damp."
    },
    shippingReturns: {
      shipping: "Ships in 24 hours. Express transit in 2–3 business days.",
      returns: "7-day easy returns."
    }
  },
  {
    id: "flr-009",
    name: "Astrid Sculpted Corset Gown",
    slug: "astrid-sculpted-corset-gown",
    tagline: "Bespoke architectural boning with romantic draped off-shoulder straps.",
    price: 6490,
    originalPrice: 7690,
    category: "Statement Pieces",
    style: "statement-pieces",
    badge: "Bestseller",
    isNew: false,
    isTrending: true,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 39,
    colors: [
      { name: "Warm Ivory", hex: "#F8F6F1", primaryImage: "assets/images/editorial/about-philosophy.jpg", alternateImage: "assets/images/products/product-2-1.jpg" },
      { name: "Charcoal", hex: "#1D1D1D", primaryImage: "assets/images/products/product-5-1.jpg", alternateImage: "assets/images/products/product-5-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 1 },
      { size: "S", stock: 3 },
      { size: "M", stock: 4 },
      { size: "L", stock: 2 }
    ],
    images: [
      "assets/images/editorial/about-philosophy.jpg",
      "assets/images/products/product-2-1.jpg",
      "assets/images/editorial/about-craft.jpg",
      "assets/images/products/product-1-1.jpg"
    ],
    description: "The Astrid Dress is a masterwork of modern corsetry. Combining antique bodice drafting with contemporary fluid skirts, it features sculpted boning channels that lift and define without constricting.",
    details: [
      "Eight-panel internal boned bodice with soft edge binding",
      "Romantic portrait neckline with draped off-shoulder sleeves",
      "Tulip draped skirt with gentle front overlap",
      "Hand-finished blind hems and secure invisible zipper",
      "Fully lined in breathable cotton-silk"
    ],
    fabricCare: {
      fabric: "Matte Silk Crepe with Silk-Cotton Lining",
      care: "Dry clean only. Store on padded hanger in garment bag."
    },
    shippingReturns: {
      shipping: "Complimentary express delivery across India. 2–3 business days.",
      returns: "Hassle-free 7-day return policy."
    }
  },
  {
    id: "flr-010",
    name: "Paloma Broderie Anglaise Blouse",
    slug: "paloma-broderie-blouse",
    tagline: "Intricate eyelet embroidery on pure breathable organic cotton.",
    price: 3890,
    originalPrice: 4590,
    category: "Tops",
    style: "tops",
    badge: "New Arrival",
    isNew: true,
    isTrending: false,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 24,
    colors: [
      { name: "Pure White", hex: "#FFFFFF", primaryImage: "assets/images/products/product-4-2.jpg", alternateImage: "assets/images/products/product-4-1.jpg" },
      { name: "Champagne Beige", hex: "#E8DFD2", primaryImage: "assets/images/products/product-1-1.jpg", alternateImage: "assets/images/products/product-1-2.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 6 },
      { size: "M", stock: 8 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "assets/images/products/product-4-2.jpg",
      "assets/images/products/product-4-1.jpg",
      "assets/images/categories/casual-wear.jpg",
      "assets/images/products/product-2-1.jpg"
    ],
    description: "A testament to artisanal needlecraft, the Paloma Blouse features bespoke botanical broderie anglaise motifs with delicate scalloped hems and romantic puff sleeves.",
    details: [
      "Custom laser-cut and stitched broderie anglaise embroidery",
      "Romantic elbow puff sleeves with subtle elasticated cuffs",
      "Scalloped embroidered neckline finishes",
      "Hand-stitched mother-of-pearl buttons",
      "100% GOTS Certified Organic Cotton"
    ],
    fabricCare: {
      fabric: "100% Organic Cotton Broderie",
      care: "Hand wash cold or gentle machine cycle in a laundry mesh bag. Line dry in shade."
    },
    shippingReturns: {
      shipping: "Standard delivery 2–4 days; Express available at checkout.",
      returns: "Easy 7-day returns and exchanges."
    }
  },
  {
    id: "flr-011",
    name: "Genevieve Pleated Trouser & Blazer Co-ord",
    slug: "genevieve-tailored-coord",
    tagline: "Subtle woven gold micro-filaments catch the twilight illumination.",
    price: 7290,
    originalPrice: 8490,
    category: "Co-ord Sets",
    style: "co-ord-sets",
    badge: "Exclusive",
    isNew: false,
    isTrending: true,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 28,
    colors: [
      { name: "Soft Taupe", hex: "#B5A596", primaryImage: "assets/images/products/product-1-2.jpg", alternateImage: "assets/images/products/product-1-1.jpg" },
      { name: "Charcoal", hex: "#1D1D1D", primaryImage: "assets/images/products/product-5-1.jpg", alternateImage: "assets/images/products/product-5-2.jpg" }
    ],
    sizes: [
      { size: "S", stock: 4 },
      { size: "M", stock: 5 },
      { size: "L", stock: 3 },
      { size: "XL", stock: 1 }
    ],
    images: [
      "assets/images/products/product-1-2.jpg",
      "assets/images/products/product-1-1.jpg",
      "assets/images/editorial/art-of-dressing.jpg",
      "assets/images/products/product-5-1.jpg"
    ],
    description: "The Genevieve two-piece tailored co-ord combines a fluid unlined blazer with wide-leg pleated trousers. Representing modern power dressing with effortless feminine grace.",
    details: [
      "Relaxed single-breasted blazer with peaked lapels",
      "High-rise wide-leg trousers with front pleats and side pockets",
      "Woven with subtle metallic micro-yarns for liquid luster",
      "Unlined for lightweight seasonal versatility"
    ],
    fabricCare: {
      fabric: "Wool-Viscose Blend with Fine Metallic Filaments",
      care: "Dry clean only. Hang on tailored suit hanger."
    },
    shippingReturns: {
      shipping: "Complimentary express delivery across India.",
      returns: "7-day return policy."
    }
  },
  {
    id: "flr-012",
    name: "Ophelia Botanical Silk Sundress",
    slug: "ophelia-botanical-silk-sundress",
    tagline: "Hand-painted impressionistic floral blooms on airy silk chiffon.",
    price: 4790,
    originalPrice: 5690,
    category: "Everyday Wear",
    style: "everyday-wear",
    badge: "Trending",
    isNew: false,
    isTrending: true,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 33,
    colors: [
      { name: "Champagne Beige", hex: "#E8DFD2", primaryImage: "assets/images/editorial/about-craft.jpg", alternateImage: "assets/images/products/product-2-1.jpg" },
      { name: "Warm Ivory", hex: "#F8F6F1", primaryImage: "assets/images/products/product-2-1.jpg", alternateImage: "assets/images/products/product-4-1.jpg" }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 5 },
      { size: "M", stock: 6 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "assets/images/editorial/about-craft.jpg",
      "assets/images/products/product-2-1.jpg",
      "assets/images/categories/everyday-elegance.jpg",
      "assets/images/products/product-8-1.jpg"
    ],
    description: "Echoing a summer reverie in Provence, the Ophelia Sundress showcases an exclusive botanical print. With its softly gathered bustier, tiered flutter skirt, and breezy movement, it makes every moment feel poetically light.",
    details: [
      "Exclusive watercolor botanical print designed in-house",
      "Sweetheart neckline with center drawstring tie accent",
      "Smocked back bodice panel accommodating flexible sizing",
      "Tiered midi skirt with soft ruffled seams",
      "Fully lined in breathable cotton lawn"
    ],
    fabricCare: {
      fabric: "Silk-Cotton Chiffon Blend with Cotton Lawn Lining",
      care: "Gentle cold hand wash with silk detergent or dry clean. Hang dry in shade."
    },
    shippingReturns: {
      shipping: "Free standard shipping over ₹2,999. Express delivery in 2–3 days.",
      returns: "Easy 7-day doorstep exchange and return."
    }
  }
];

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id || p.slug === id);
}

export function getTrendingProducts() {
  return PRODUCTS.filter(p => p.isTrending);
}

export function getNewArrivals() {
  return PRODUCTS.filter(p => p.isNew);
}

export function getBestsellers() {
  return PRODUCTS.filter(p => p.isBestseller);
}
