// src/js/views/aboutView.js
// FLOREE - Master About Us / Our Story View

export function renderAboutView() {
  return `
    <!-- About Hero -->
    <section class="about-hero" style="background: linear-gradient(rgba(29, 29, 29, 0.45), rgba(29, 29, 29, 0.65)), url('assets/images/editorial/story-editorial.jpg') center/cover no-repeat; padding: clamp(120px, 16vw, 200px) 0 clamp(60px, 8vw, 100px); color: var(--color-white); text-align: center;">
      <div class="container about-hero-content">
        <span class="subheading" style="color: var(--color-champagne); letter-spacing: 0.3em;">MAISON HERITAGE & PHILOSOPHY</span>
        <h1 class="about-hero-title" style="color: var(--color-white); font-size: clamp(2.6rem, 5.5vw, 4.5rem); margin-bottom: 20px;">THE WORLD OF FLOREE.</h1>
        <p class="about-hero-lead" style="color: rgba(255, 255, 255, 0.9); font-size: clamp(1.1rem, 2vw, 1.35rem); max-width: 680px; margin: 0 auto; line-height: 1.6;">
          Elegance in Every Expression. Discover contemporary luxury fashion designed for confidence, poise, and effortless individuality.
        </p>
      </div>
    </section>

    <!-- Brand Introduction Split (Section 8 Narrative) -->
    <section class="section-spacing" style="background-color: var(--color-bg-primary);">
      <div class="container">
        <div class="about-split-section">
          
          <div class="about-image-frame">
            <img src="assets/images/editorial/about-philosophy.jpg" alt="FLOREE Editorial Model" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
          </div>

          <div class="about-text-col">
            <span class="subheading">OUR STORY</span>
            <h2 style="font-size: clamp(2.2rem, 3.5vw, 3rem); line-height: 1.2; margin-bottom: 24px;">Fashion as an Authentic Expression.</h2>
            <p style="font-size: 1.15rem; line-height: 1.7; color: var(--color-text-primary); margin-bottom: 20px;">
              At FLOREE, we believe fashion is an expression of individuality. Our vision is to bring together contemporary design, effortless elegance and everyday confidence through thoughtfully designed clothing.
            </p>
            <p style="line-height: 1.7; color: var(--color-text-secondary); margin-bottom: 24px;">
              Whether it’s a casual sunlit outing, an important boardroom presentation, or an unforgettable twilight celebration, our collections are created to empower women aged 18 to 35 to express their style with absolute poise and quiet luxury.
            </p>
            <div style="margin-top: 28px;">
              <a href="#/collections" class="btn btn-secondary btn-lg">EXPLORE THE COLLECTION</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Vision, Mission & Speciality -->
    <section class="section-spacing" style="background-color: var(--color-white); border-top: 1px solid var(--color-border-delicate); border-bottom: 1px solid var(--color-border-delicate);">
      <div class="container">
        <div class="about-split-section about-split-reversed">
          
          <div class="about-image-frame">
            <img src="assets/images/editorial/about-craft.jpg" alt="FLOREE Atelier Drapery and Craftsmanship" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
          </div>

          <div class="about-text-col">
            <span class="subheading">MAISON PURPOSE</span>
            <h2 style="font-size: clamp(2.2rem, 3.5vw, 3rem); line-height: 1.2; margin-bottom: 32px;">Vision, Mission & Craft.</h2>
            
            <div style="margin-bottom: 28px; padding-left: 20px; border-left: 2px solid var(--color-gold);">
              <h3 style="font-size: 1.35rem; font-family: var(--font-serif); margin-bottom: 8px;">Our Vision</h3>
              <p style="color: var(--color-text-secondary); line-height: 1.6;">
                To make every woman feel confident, beautiful, and effortlessly stylish in every room she enters.
              </p>
            </div>

            <div style="margin-bottom: 28px; padding-left: 20px; border-left: 2px solid var(--color-gold);">
              <h3 style="font-size: 1.35rem; font-family: var(--font-serif); margin-bottom: 8px;">Our Mission</h3>
              <p style="color: var(--color-text-secondary); line-height: 1.6;">
                To bring modern fashion trends, premium-looking styles, and an enjoyable, honest shopping experience together in one trustworthy destination.
              </p>
            </div>

            <div style="padding-left: 20px; border-left: 2px solid var(--color-gold);">
              <h3 style="font-size: 1.35rem; font-family: var(--font-serif); margin-bottom: 8px;">Our Speciality</h3>
              <p style="color: var(--color-text-secondary); line-height: 1.6;">
                Modern fashionable women's dresses, carefully selected collections, and convenient door-to-door delivery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Full-Width Editorial Campaign Banner -->
    <section class="campaign-banner-section" style="min-height: 520px;">
      <div class="campaign-media-wrapper">
        <img src="assets/images/editorial/art-of-dressing.jpg" alt="FLOREE Editorial Atelier" style="width: 100%; height: 100%; object-fit: cover;">
        <div class="campaign-overlay"></div>
      </div>

      <div class="container">
        <div class="campaign-content" style="max-width: 720px;">
          <span class="subheading" style="color: var(--color-champagne);">EDITORIAL COMMITMENT</span>
          <h2 style="font-size: clamp(2.2rem, 4.5vw, 3.8rem); margin-bottom: 16px;">
            BEYOND TRENDS. INTO EXPRESSION.
          </h2>
          <p style="font-size: 1.15rem; color: rgba(255, 255, 255, 0.9); line-height: 1.6; margin-bottom: 32px;">
            Every silhouette we release represents hours of precision draping, testing on diverse body figures, and sourcing of natural, enduring textiles.
          </p>
          <a href="#/collections" class="btn btn-luxury-primary btn-lg">DISCOVER OUR CREATIONS</a>
        </div>
      </div>
    </section>

    <!-- Brand Values Grid -->
    <section class="section-spacing" style="background-color: var(--color-bg-primary);">
      <div class="container">
        <div class="section-header">
          <span class="subheading">BRAND PERSONALITY</span>
          <h2 class="section-title">The FLOREE Ethos.</h2>
          <p class="section-description">
            Contemporary luxury defined by simplicity, tactile richness, and personal confidence.
          </p>
        </div>

        <div class="values-grid-3">
          <div class="value-card">
            <span class="subheading">01</span>
            <h3>Modern & Feminine</h3>
            <p>
              Contemporary fluid drape, subtle necklines, and clean contours designed to celebrate natural poise and individuality.
            </p>
          </div>

          <div class="value-card">
            <span class="subheading">02</span>
            <h3>Effortless & Sophisticated</h3>
            <p>
              Understated luxury that speaks through tactile textures and drape rather than flashy logos.
            </p>
          </div>

          <div class="value-card">
            <span class="subheading">03</span>
            <h3>Fashion-Forward & Confident</h3>
            <p>
              Timeless silhouettes updated with runway-inspired details to keep your wardrobe distinctive and unforgettable.
            </p>
          </div>
        </div>

        <!-- Closing Brand Statement -->
        <div style="text-align: center; max-width: 720px; margin: 80px auto 0; padding-top: 48px; border-top: 1px solid var(--color-border-delicate);">
          <blockquote style="font-family: var(--font-serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-style: italic; line-height: 1.4; color: var(--color-text-primary); margin-bottom: 16px;">
            "Elegance in Every Expression."
          </blockquote>
          <p style="color: var(--color-text-secondary); font-size: 1rem;">
            From our design studio to your doorstep, thank you for making FLOREE part of your style journey.
          </p>
        </div>

      </div>
    </section>
  `;
}

export function initAboutView() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
