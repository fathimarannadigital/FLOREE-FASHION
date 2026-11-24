// src/js/views/homeView.js
// FLOREE - Master Homepage View (Editorial Luxury Contemporary Fashion)

import { PRODUCTS, getTrendingProducts, getNewArrivals } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { REVIEWS } from '../data/reviews.js';
import { renderHeroSection, initHeroVideo } from '../components/heroVideo.js';
import { renderProductCard, attachProductCardListeners } from '../components/productCard.js';
import { toast } from '../components/toast.js';

export function renderHomeView() {
  const newArrivals = getNewArrivals().slice(0, 8);
  const bestsellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 8);

  return `
    <!-- ==========================================================================
         Section 3: Cinematic Hero (Full Viewport Haute Couture Campaign)
         ========================================================================== -->
    ${renderHeroSection()}

    <!-- Luxury Ticker / Subtle Marquee -->
    <div class="luxury-marquee-strip" aria-hidden="true">
      <div class="luxury-marquee-track">
        <span class="marquee-item">100% Grade-6A Mulberry Silk <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Hand-Finished Atelier Tailoring <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Elegance in Every Expression <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Complimentary Pan-India Express Delivery <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Limited Edition Capsules <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Sculptural Drapes & Architectural Fit <span class="marquee-separator">✦</span></span>
        
        <!-- Duplicate for Smooth Infinite Scroll -->
        <span class="marquee-item">100% Grade-6A Mulberry Silk <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Hand-Finished Atelier Tailoring <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Elegance in Every Expression <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Complimentary Pan-India Express Delivery <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Limited Edition Capsules <span class="marquee-separator">✦</span></span>
        <span class="marquee-item">Sculptural Drapes & Architectural Fit <span class="marquee-separator">✦</span></span>
      </div>
    </div>

    <!-- Floating Stylist Concierge Pill -->
    <a href="https://wa.me/919820012345?text=Hello%20FLOREE,%20I%20would%20like%20a%20personal%20styling%20consultation." target="_blank" rel="noopener" class="floating-concierge-pill" aria-label="Personal Stylist Consultation">
      <span class="concierge-live-dot"></span>
      <span>Personal Stylist Available • Chat Now</span>
    </a>

    <!-- ==========================================================================
         Section 4: New Season Collection (Asymmetric Editorial Layout)
         ========================================================================== -->
    <section class="section-spacing new-season-editorial-section" id="new-season-section">
      <div class="container">
        
        <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 56px;">
          <span class="subheading">CURRENT RUNWAY CAPSULE</span>
          <h2 class="section-title">A NEW EXPRESSION OF STYLE.</h2>
          <p class="section-description">
            Explore a curated collection of contemporary fashion, where timeless elegance meets modern individuality.
          </p>
        </div>

        <!-- Asymmetric Editorial Grid with 3-4 Large Campaign Images -->
        <div class="editorial-asym-grid">
          
          <!-- Large Feature Card 1 (Tall Left) -->
          <div class="editorial-asym-card tall-card">
            <div class="asym-img-wrap">
              <img src="assets/images/editorial/art-of-dressing.jpg" alt="A New Expression of Style - Look 01" class="asym-img" loading="lazy">
            </div>
            <div class="asym-content">
              <span class="asym-badge">EDITORIAL 01</span>
              <h3 class="asym-title">The Sculpted Drape</h3>
              <p class="asym-text">Pure mulberry silk bias tailoring constructed for effortless fluidity.</p>
              <a href="#/collections?category=Dresses" class="asym-link">EXPLORE SILHOUETTE →</a>
            </div>
          </div>

          <!-- Right Column Split: 2 Staggered Visuals -->
          <div class="editorial-asym-col">
            
            <!-- Card 2: Minimalist Architecture -->
            <div class="editorial-asym-card medium-card">
              <div class="asym-img-wrap">
                <img src="assets/images/campaign/campaign-hero.jpg" alt="A New Expression of Style - Look 02" class="asym-img" loading="lazy">
              </div>
              <div class="asym-content">
                <span class="asym-badge">EDITORIAL 02</span>
                <h3 class="asym-title">Monochrome Co-ords</h3>
                <p class="asym-text">Sharp lines tailored from breathable European washed linens.</p>
                <a href="#/collections?category=Co-ord Sets" class="asym-link">EXPLORE CO-ORDS →</a>
              </div>
            </div>

            <!-- Card 3: Atelier Texture Details -->
            <div class="editorial-asym-card medium-card">
              <div class="asym-img-wrap">
                <img src="assets/images/editorial/story-editorial.jpg" alt="A New Expression of Style - Look 03" class="asym-img" loading="lazy">
              </div>
              <div class="asym-content">
                <span class="asym-badge">EDITORIAL 03</span>
                <h3 class="asym-title">Statement Eveningwear</h3>
                <p class="asym-text">Elevated silhouettes designed for memorable twilight entrances.</p>
                <a href="#/collections?category=Statement Pieces" class="asym-link">EXPLORE EVENINGWEAR →</a>
              </div>
            </div>

          </div>

        </div>

        <div style="text-align: center; margin-top: 48px;">
          <a href="#/collections" class="btn btn-primary btn-lg">EXPLORE THE COLLECTION.</a>
        </div>

      </div>
    </section>


    <!-- ==========================================================================
         Section 5: Shop by Category (Image-led category cards)
         ========================================================================== -->
    <section class="section-spacing shop-by-category-section" style="background-color: var(--color-white); border-top: 1px solid var(--color-border-delicate); border-bottom: 1px solid var(--color-border-delicate);">
      <div class="container">
        
        <div class="section-header">
          <span class="subheading">CURATED DESTINATIONS</span>
          <h2 class="section-title">Shop by Category.</h2>
          <p class="section-description">
            Discover modern silhouettes curated for every facet of contemporary life—from relaxed morning coffee to high-profile celebrations.
          </p>
        </div>

        <!-- 5 Category Cards Grid -->
        <div class="category-cards-grid-5">
          ${CATEGORIES.map(cat => `
            <a href="#/collections?category=${encodeURIComponent(cat.name)}" class="category-showcase-card">
              <div class="cat-image-container">
                <img src="${cat.image}" alt="${cat.name} - FLOREE" class="cat-zoom-img" loading="lazy">
                <div class="cat-overlay-gradient"></div>
              </div>
              <div class="cat-meta-box">
                <span class="cat-counter">${cat.count}</span>
                <h3 class="cat-card-title">${cat.name}</h3>
                <span class="cat-explore-link">Explore Collection →</span>
              </div>
            </a>
          `).join('')}
        </div>

      </div>
    </section>


    <!-- ==========================================================================
         Section 6: Bestsellers / Featured Products
         ========================================================================== -->
    <section class="section-spacing bestsellers-section">
      <div class="container">
        
        <div class="section-header">
          <span class="subheading">MOST-COVETED SILHOUETTES</span>
          <h2 class="section-title">Bestsellers & Featured Styles.</h2>
          <p class="section-description">
            Explore our most sought-after dresses and contemporary ensembles. Hover over each card to preview alternate editorial angles.
          </p>
        </div>

        <!-- Demonstration Inventory Disclaimer -->
        <div class="demo-inventory-strip" style="background-color: var(--color-bg-subtle); padding: 12px 20px; border-left: 3px solid var(--color-gold); margin-bottom: 32px; font-size: 0.85rem; color: var(--color-text-secondary); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span>✦ Demonstration Inventory: Featured garments and INR pricing represent FLOREE's launch capsule showcase.</span>
          <span style="font-weight: 600; color: var(--color-text-primary);">All items available for live test checkout</span>
        </div>

        <!-- Product Grid (4 Columns Desktop / 2 Mobile) -->
        <div class="products-grid-4" id="bestsellers-grid">
          ${bestsellers.map(p => renderProductCard(p)).join('')}
        </div>

        <div style="text-align: center; margin-top: 48px;">
          <a href="#/collections" class="btn btn-secondary btn-lg">VIEW ALL SIGNATURE PIECES</a>
        </div>

      </div>
    </section>


    <!-- ==========================================================================
         Section 7: Full-Screen Editorial Campaign
         ========================================================================== -->
    <section class="campaign-banner-section">
      <div class="campaign-media-wrapper">
        <video 
          class="campaign-video" 
          autoplay 
          muted 
          loop 
          playsinline 
          preload="none"
          poster="assets/images/campaign/campaign-hero.jpg"
          aria-hidden="true"
        >
          <source src="assets/videos/campaign-video.webm" type="video/webm">
          <source src="assets/videos/campaign-video.mp4" type="video/mp4">
        </video>
        <div class="campaign-overlay"></div>
      </div>

      <div class="container">
        <div class="campaign-content">
          <span class="subheading" style="color: var(--color-champagne);">EDITORIAL NARRATIVE</span>
          <h2 style="font-size: clamp(2.4rem, 5vw, 4.2rem); letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 18px;">
            BEYOND TRENDS. INTO EXPRESSION.
          </h2>
          <p style="font-size: clamp(1rem, 2vw, 1.25rem); color: rgba(255, 255, 255, 0.88); max-width: 640px; margin: 0 auto 32px; line-height: 1.6;">
            Fashion is a reflection of who you are. Discover a world where every detail tells a story.
          </p>
          <a href="#/story" class="btn btn-luxury-primary btn-lg">EXPLORE OUR WORLD.</a>
        </div>
      </div>
    </section>


    <!-- ==========================================================================
         Section 8: Brand Story ("THE WORLD OF FLOREE.")
         ========================================================================== -->
    <section class="section-spacing floree-story-split-section">
      <div class="container">
        <div class="experience-grid">
          
          <div class="experience-content">
            <span class="subheading">PHILOSOPHY & VISION</span>
            <h2 style="font-size: clamp(2.2rem, 3.5vw, 3.2rem); margin-bottom: 24px;">THE WORLD OF FLOREE.</h2>
            <p style="font-size: 1.15rem; line-height: 1.7; color: var(--color-text-primary); margin-bottom: 20px; font-weight: 400;">
              At FLOREE, we believe fashion is an expression of individuality. Our vision is to bring together contemporary design, effortless elegance and everyday confidence through thoughtfully designed clothing.
            </p>
            <p style="line-height: 1.7; color: var(--color-text-secondary); margin-bottom: 32px;">
              Whether it’s a tailored linen co-ord for sunlit gatherings, a fluid bias-cut silk slip dress for twilight galas, or a structured trench coat silhouette, each FLOREE garment is drafted with meticulous architectural balance and supreme tactile comfort.
            </p>
            <a href="#/story" class="btn btn-light btn-lg">READ OUR STORY.</a>
          </div>

          <div class="experience-image-wrap">
            <img src="assets/images/editorial/about-philosophy.jpg" alt="The World of FLOREE Campaign Model" class="experience-img" loading="lazy">
            <div class="experience-tag-card">
              <span>"Elegance in Every Expression."</span>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ==========================================================================
         Client Confidence & Trust Highlights
         ========================================================================== -->
    <section class="section-spacing floree-difference-section" style="background-color: var(--color-white); border-top: 1px solid var(--color-border-delicate); border-bottom: 1px solid var(--color-border-delicate);">
      <div class="container">
        <div class="section-header">
          <span class="subheading">HONEST E-COMMERCE</span>
          <h2 class="section-title">The FLOREE Promise.</h2>
          <p class="section-description">
            Transparent craftsmanship, verified quality, and seamless client care at every step.
          </p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 class="benefit-title">Contemporary Fashion</h3>
            <p class="benefit-desc">Runway-inspired cuts crafted specifically for modern feminine confidence and graceful ease.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 class="benefit-title">Carefully Curated</h3>
            <p class="benefit-desc">Capsules designed for modern versatility: from everyday elegance to grand soirees.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 class="benefit-title">Effortless Elegance</h3>
            <p class="benefit-desc">Grade-6A mulberry silks, pure organic linens, and breathable linings with zero mass production.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 class="benefit-title">Complimentary Delivery</h3>
            <p class="benefit-desc">Pan-India express shipping on orders over ₹2,999 with real-time order tracking.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 class="benefit-title">Hassle-Free Care</h3>
            <p class="benefit-desc">Transparent 7-day complimentary exchanges, doorway pickup, and round-the-clock stylist concierge.</p>
          </div>
        </div>

      </div>
    </section>


    <!-- ==========================================================================
         Client Reviews & Shopping Confidence
         ========================================================================== -->
    <section class="section-spacing testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="subheading">AUTHENTIC CLIENT SENTIMENT</span>
          <h2 class="section-title">Styled, Loved & Expressed.</h2>
          <p class="section-description">
            Read testimonials from women who embrace their individuality through FLOREE creations.
          </p>
        </div>

        <div class="reviews-grid-3">
          ${REVIEWS.slice(0, 3).map(rev => `
            <div class="review-card">
              <div>
                <div class="review-stars">
                  ${'★'.repeat(rev.rating)}
                </div>
                <h4 style="font-size: 1.15rem; font-family: var(--font-serif); margin-bottom: 8px;">"${rev.title}"</h4>
                <p class="review-quote-text">
                  "${rev.comment}"
                </p>
              </div>

              <div class="review-author-row">
                <div class="author-info-left">
                  <span class="author-name">${rev.name}</span>
                  <span class="author-location">${rev.city} • Verified Client</span>
                </div>
                <span class="product-tag-pill">${rev.product.split(' ').slice(0, 2).join(' ')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>


    <!-- ==========================================================================
         Section 14: Instagram ("FOLLOW THE FLOREE WORLD.")
         ========================================================================== -->
    <section class="section-spacing instagram-section" style="background-color: var(--color-white); border-top: 1px solid var(--color-border-delicate);">
      <div class="container">
        <div class="section-header">
          <span class="subheading">COMMUNITY LOOKBOOK</span>
          <h2 class="section-title">FOLLOW THE FLOREE WORLD.</h2>
          <p class="section-description">
            Explore editorial backstage captures, client styling, and runway inspirations from our creative atelier.
          </p>
        </div>

        <div class="insta-grid">
          ${[1, 2, 3, 4, 5, 6].map(num => `
            <a href="https://instagram.com" target="_blank" rel="noopener" class="insta-item" aria-label="View FLOREE Instagram Look ${num}">
              <img src="assets/images/instagram/insta-${num}.jpg" alt="FLOREE Editorial Look" class="insta-img" loading="lazy">
              <div class="insta-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span style="font-size: 0.75rem; letter-spacing: var(--tracking-wider); text-transform: uppercase;">@FLOREE</span>
              </div>
            </a>
          `).join('')}
        </div>

        <div class="insta-cta-wrap">
          <a href="https://instagram.com" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            FOLLOW @FLOREE
          </a>
        </div>
      </div>
    </section>


    <!-- ==========================================================================
         Section 15: Newsletter ("A LITTLE MORE FLOREE.")
         ========================================================================== -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-card">
          <span class="subheading" style="color: var(--color-gold);">MAISON SOCIETY</span>
          <h2 style="font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 12px;">A LITTLE MORE FLOREE.</h2>
          <p style="color: var(--color-text-secondary); font-size: 1.05rem; max-width: 580px; margin: 0 auto 28px;">
            Be the first to receive invitations to private capsule drops, seasonal lookbooks, and personal styling invitations.
          </p>

          <form id="newsletter-form" class="newsletter-form" novalidate>
            <input 
              type="email" 
              id="newsletter-email" 
              class="newsletter-input" 
              placeholder="Enter your personal email address..." 
              required
            >
            <button type="submit" class="btn btn-primary newsletter-btn">
              Subscribe
            </button>
          </form>

          <!-- Success Reveal Box -->
          <div id="newsletter-success-box" class="newsletter-success-box">
            <h4 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 4px;">Welcome to FLOREE Privé.</h4>
            <p style="font-size: 0.875rem; margin-bottom: 8px;">Your membership is confirmed. Enjoy 10% off your inaugural order with code:</p>
            <div class="voucher-code-badge">FLOREE10</div>
          </div>

          <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 16px;">
            By subscribing, you agree to our privacy policy. Unsubscribe anytime with one click.
          </p>

        </div>
      </div>
    </section>


    <!-- ==========================================================================
         Section 16: Master Footer
         ========================================================================== -->
    <footer class="site-footer">
      <div class="container">
        
        <div class="footer-top-grid">
          
          <!-- Brand Column -->
          <div class="footer-brand-col">
            <span class="brand-name">FLOREE</span>
            <div class="footer-tagline">Elegance in Every Expression.</div>
            <p class="footer-brand-desc">
              FLOREE is a contemporary women's luxury fashion house. We bring together modern trends, architectural cuts and effortless ease for women who express themselves with confidence.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-nav-list">
              <li><a href="#/">Home</a></li>
              <li><a href="#/new-arrivals">New Arrivals</a></li>
              <li><a href="#/collections">Collections</a></li>
              <li><a href="#/story">Our Story</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </div>

          <!-- Customer Care -->
          <div>
            <h4 class="footer-col-title">Customer Care</h4>
            <ul class="footer-nav-list">
              <li><a href="#/contact">Shipping Information</a></li>
              <li><a href="#/contact">Returns & Exchanges</a></li>
              <li><a href="#/contact" id="footer-size-guide-trigger">Size Guide & Fit</a></li>
              <li><a href="#/contact">Frequently Asked Questions</a></li>
              <li><a href="#/contact">Client Concierge</a></li>
            </ul>
          </div>

          <!-- Categories -->
          <div>
            <h4 class="footer-col-title">Collections</h4>
            <ul class="footer-nav-list">
              <li><a href="#/collections?category=Dresses">Dresses</a></li>
              <li><a href="#/collections?category=Tops">Tops</a></li>
              <li><a href="#/collections?category=Co-ord%20Sets">Co-ord Sets</a></li>
              <li><a href="#/collections?category=Everyday%20Wear">Everyday Wear</a></li>
              <li><a href="#/collections?category=Statement%20Pieces">Statement Pieces</a></li>
              <li><a href="#/wishlist">My Wishlist</a></li>
            </ul>
          </div>

          <!-- Studio & Socials -->
          <div>
            <h4 class="footer-col-title">Studio & Social</h4>
            <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 12px; line-height: 1.6;">
              FLOREE Atelier & Studio<br>
              Bandra West, Mumbai, MH 400050<br>
              concierge@floree.com
            </p>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="FLOREE Instagram">Instagram</a>
              <span style="color: var(--color-border-delicate);">•</span>
              <a href="https://pinterest.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="FLOREE Pinterest">Pinterest</a>
              <span style="color: var(--color-border-delicate);">•</span>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="FLOREE Facebook">Facebook</a>
            </div>
          </div>

        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-row">
          <div>
            © 2026 FLOREE. All Rights Reserved. Elegance in Every Expression.
          </div>

          <div class="payment-methods-strip">
            <span class="payment-pill">UPI</span>
            <span class="payment-pill">VISA</span>
            <span class="payment-pill">MASTERCARD</span>
            <span class="payment-pill">RUPAY</span>
            <span class="payment-pill">NET BANKING</span>
            <span class="payment-pill">CASH ON DELIVERY</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function initHomeView() {
  initHeroVideo();
  attachProductCardListeners(document.getElementById('bestsellers-grid'));

  // Newsletter form submission
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const successBox = document.getElementById('newsletter-success-box');

  if (form && emailInput && successBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        toast.show('Please enter a valid email address.', 'info');
        emailInput.focus();
        return;
      }

      form.style.display = 'none';
      successBox.style.display = 'block';
      toast.show('Welcome to FLOREE Privé! Your 10% voucher code is FLOREE10', 'success');
    });
  }

  // Footer Size Guide Trigger
  const footerSizeGuide = document.getElementById('footer-size-guide-trigger');
  if (footerSizeGuide) {
    footerSizeGuide.addEventListener('click', (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('floree:open-size-guide'));
    });
  }
}
