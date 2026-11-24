# FLOREE FASHION — Luxury E-Commerce Website

> **Tagline:** *Elegance in Every Step.*  
> **Brand Aesthetic:** Modern Minimalist Luxury Women's Fashion House (Inspired by Florée Fashion, Sundra, Vastra, Zara Editorial, and Dior Haute Couture).

---

## 1. Project Overview

FLOREE FASHION is a complete, production-grade luxury e-commerce web application designed with editorial art direction, fluid typography, full responsive layouts, and an authentic international fashion boutique experience.

### Brand Palette & Typography
- **Warm Ivory:** `#F8F5F0` (Primary editorial background)
- **Soft Champagne:** `#E9DDCC` (Hero accents & subtle banners)
- **Beige:** `#D8C7B2` (Borders & muted backgrounds)
- **Elegant Black:** `#171614` (Editorial typography & primary buttons)
- **Warm Brown:** `#8B735E` (Subheadings & micro-labels)
- **Muted Gold:** `#B49A72` (Accents, star ratings, and highlights)
- **Pure White:** `#FFFFFF` (Cards & containers)
- **Typography:** *Cormorant Garamond* & *Playfair Display* for large fashion headlines; *DM Sans* for crisp, modern body text and navigation.

---

## 2. Key Features

### A. Cinematic Full-Screen Hero Video
- Professional high-definition video of a fashion model walking in a contemporary outfit.
- Local high-speed video streaming via HTTP 206 Partial Content (`assets/videos/hero-model-walk.webm` & `.mp4`).
- Dual source fallbacks with seamless CDN redundancy.
- Dark editorial gradient overlay for high contrast and readability.
- Accessible user controls: Mute/Unmute audio toggle, Pause/Play playback toggle, and animated scroll-down indicator.
- Graceful poster image fallback if video playback is restricted by browser policy.

### B. All 11 Homepage Sections
1. **Announcement Bar:** Top notification with rotating luxury offers & free shipping updates.
2. **Transparent to Solid Sticky Header:** Transparent over the hero video, transitioning gracefully to warm ivory (`#F8F5F0`) with subtle backdrop blur on scroll.
3. **Cinematic Hero:** Luxury fashion campaign with "Explore Collection" & "Shop Now" CTAs.
4. **Section 1 – New Arrivals:** Dual-image hover flip, color swatches, wishlist heart toggle, quick view, and prices in Indian Rupees (₹).
5. **Section 2 – Shop by Style:** Asymmetrical editorial grid with 6 curated categories.
6. **Section 3 – Featured Collection ("The Art of Modern Dressing"):** Magazine editorial collage, artisan quotes, and key atelier statistics.
7. **Section 4 – The Floree Experience:** Brand manifesto storytelling celebrating female poise and self-expression.
8. **Section 5 – Trending Now:** Horizontal product carousel with arrow controls and size selectors.
9. **Section 6 – Fashion Campaign:** Second cinematic wide-format campaign section ("Make Every Look Unforgettable").
10. **Section 7 – The Floree Difference:** 5 benefits featuring custom minimalist line icons.
11. **Section 8 – Customer Experiences ("Styled, Loved & Shared"):** Verified customer reviews with 5-star ratings and purchased garment tags.
12. **Section 9 – Instagram Lookbook:** 6-column editorial grid linking to `@floreefashion`.
13. **Section 10 – Newsletter:** Interactive subscription with real-time email validation and 10% discount voucher (`FLOREE10`) reveal.
14. **Section 11 – Premium Footer:** Comprehensive columns for Navigation, Customer Care, Collections, Studio & Concierge, copyright, and payment method badges.

### C. Complete Shop & Collection Catalog
- Dynamic collection banner with category descriptions.
- Multi-criteria interactive filters:
  - **Category:** All, New Arrivals, Modern Dresses, Everyday Elegance, Party Wear, Casual Wear, Occasion Wear.
  - **Size:** XS, S, M, L, XL.
  - **Color:** Champagne/Gold, Ivory/White, Black, Camel/Sand, Rose/Blush.
  - **Price Range:** Under ₹5,000, ₹5,000–₹7,000, Above ₹7,000.
- Sorting options: Recommended, Newest, Price: Low to High, Price: High to Low.
- Instant item count counter and "Reset Filters" action.

### D. Luxury Product Details Page (PDP)
- Multi-angle gallery with clickable vertical thumbnails, zoom preview, and alternate angles.
- Color swatches with live label updating.
- Size selector with dynamic stock badges ("⚡ Only 2 left in S!").
- Clickable **Size Guide Modal** with measurement charts in both Inches and Centimeters.
- Quantity selector (+ / -).
- **Add to Bag** and **Express Checkout (Buy Now)** buttons.
- Collapsible accordions for:
  - Sartorial Details & Cut
  - Fabric & Care Instructions (Mulberry silk, washing advice)
  - Complimentary Shipping & Packaging
  - 7-Day Doorstep Returns Policy
- "You May Also Like" recommendation grid.

### E. Shopping Bag & Slide-out Cart Drawer
- Real-time slide-out drawer accessible from any page.
- Free shipping progress bar (e.g. *"Add ₹450 more to unlock Complimentary Express Shipping"*).
- Quantity stepper, item remover, and live subtotal calculations.
- Working promo code engine:
  - `FLOREE10` (10% Off)
  - `WELCOME500` (₹500 Off)
  - `ELEGANCE` (15% VIP Discount)
- Full state persistence in `localStorage` (`floree_cart_v1`).

### F. Seamless Multi-Step Checkout & Confirmation
- Step 1: Customer Contact (Email & Mobile Phone for delivery OTP/updates).
- Step 2: Shipping Address with Indian States dropdown and PIN Code validation.
- Step 3: Payment Options:
  - **UPI** (Google Pay, PhonePe, Paytm with simulated instant authorization).
  - **Credit & Debit Cards** (256-bit encrypted card fields).
  - **Net Banking** (Major Indian Banks).
  - **Cash on Delivery (COD)**.
- **Order Confirmation Receipt:** Displays generated Order Reference (e.g. `#FLR-849201`), estimated delivery date, summary breakdown, and a "Print Order Receipt" action.

### G. Client Concierge & About Us Pages
- **About Us:** Brand philosophy, vision, mission, and craftsmanship story.
- **Contact Us:** Validated inquiry form, Concierge email & phone, atelier address, WhatsApp direct chat link, and interactive FAQ accordion.

---

## 3. How to Run Locally

### Option A: Double-Click Launcher
Double-click `start.bat` in the project root directory.

### Option B: Command Line
Run the high-performance local server:
```powershell
.\node.bat server.js
```
Then open your browser and navigate to:
```
http://localhost:3000/
```

---

## 4. Project Directory Structure

```
FLOREE FASHION/
├── index.html                   # Master entry point with SEO & schema.org data
├── server.js                    # High performance Node.js HTTP & video streaming server
├── start.bat                    # One-click launcher for Windows
├── node.bat                     # Sandboxed Node runtime wrapper
├── README.md                    # Documentation & setup guide
├── assets/
│   ├── videos/                  # Local HD video assets (webm & mp4)
│   │   ├── hero-model-walk.webm
│   │   ├── hero-model-walk.mp4
│   │   ├── campaign-video.webm
│   │   └── campaign-video.mp4
│   └── images/                  # High-resolution curated editorial imagery
│       ├── products/
│       ├── categories/
│       ├── campaign/
│       ├── editorial/
│       └── instagram/
├── src/
│   ├── css/                     # Modular luxury CSS system
│   │   ├── variables.css        # Palette tokens, typography, spacing
│   │   ├── base.css             # Resets, typography scale, scrollbars
│   │   ├── components.css       # Buttons, cards, modals, toast, swatches
│   │   ├── header.css           # Announcement bar & transparent/solid navbar
│   │   ├── hero.css             # Cinematic hero video & controls
│   │   ├── sections.css         # All 11 homepage editorial sections
│   │   ├── shop.css             # Catalog filters, sorting, grid
│   │   ├── pdp.css              # Product details, zoom gallery, accordions
│   │   ├── cart.css             # Slide-out drawer & checkout layouts
│   │   ├── pages.css            # About Us, Contact, Wishlist, Search Modal
│   │   └── responsive.css       # Mobile & tablet fluid optimizations
│   └── js/
│       ├── app.js               # Application bootstrapper
│       ├── router.js            # Client-side hash router
│       ├── data/
│       │   ├── products.js      # 12+ luxury products with prices in ₹
│       │   ├── categories.js    # 6 style categories
│       │   └── reviews.js       # Verified customer testimonials
│       ├── store/
│       │   ├── cartStore.js     # Cart state, promo codes, localStorage
│       │   └── wishlistStore.js # Wishlist state & localStorage
│       ├── components/
│       │   ├── header.js        # Dynamic header & mobile drawer
│       │   ├── heroVideo.js     # Video player controls & fallbacks
│       │   ├── productCard.js   # Dual-image flip & swatch changer
│       │   ├── quickViewModal.js# Instant product preview dialog
│       │   ├── sizeGuideModal.js# Measurement guide (inches & cm)
│       │   ├── cartDrawer.js    # Slide-out drawer & progress bar
│       │   ├── searchModal.js   # Instant autocomplete search
│       │   └── toast.js         # Luxury notification alerts
│       └── views/
│           ├── homeView.js      # Homepage view with all 11 sections
│           ├── shopView.js      # Catalog view with live filtering
│           ├── pdpView.js       # Product details view
│           ├── checkoutView.js  # Checkout & order confirmation
│           ├── aboutView.js     # About Us brand narrative
│           ├── contactView.js   # Contact form & FAQ accordion
│           └── wishlistView.js  # Saved items collection
```

