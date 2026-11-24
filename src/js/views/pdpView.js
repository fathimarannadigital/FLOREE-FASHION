// src/js/views/pdpView.js
// Floree Fashion - Master Product Details Page (PDP)

import { PRODUCTS, getProductById } from '../data/products.js';
import { cartStore } from '../store/cartStore.js';
import { wishlistStore } from '../store/wishlistStore.js';
import { formatPrice, renderProductCard, attachProductCardListeners } from '../components/productCard.js';
import { toast } from '../components/toast.js';

export function renderPdpView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];
  const isWishlisted = wishlistStore.has(product.id);
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  // Default color & image
  const defaultColor = product.colors && product.colors[0] ? product.colors[0].name : '';
  const initialImages = product.images && product.images.length ? product.images : [product.colors[0].primaryImage];

  return `
    <div class="pdp-section">
      <div class="container">
        
        <!-- Breadcrumb Navigation -->
        <nav class="breadcrumb-trail" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#/shop">Shop</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#/shop?category=${encodeURIComponent(product.category)}">${product.category}</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-black);">${product.name}</span>
        </nav>

        <!-- 2-Column Product Layout -->
        <div class="pdp-grid">
          
          <!-- Left: Multi-Angle Gallery -->
          <div class="pdp-gallery">
            <!-- Vertical Thumbnails -->
            <div class="pdp-thumbnails" id="pdp-thumbnails">
              ${initialImages.map((img, idx) => `
                <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" data-thumb-index="${idx}">
                  <img src="${img}" alt="${product.name} View ${idx + 1}" class="pdp-thumb-img">
                </div>
              `).join('')}
            </div>

            <!-- Main High-Res Image -->
            <div class="pdp-main-image-wrap" id="pdp-main-image-wrap">
              <img 
                src="${initialImages[0]}" 
                alt="${product.name}" 
                class="pdp-main-img" 
                id="pdp-main-image"
              >
            </div>
          </div>

          <!-- Right: Details, Sizing, Purchasing Actions -->
          <div class="pdp-details">
            
            <div class="pdp-header">
              <div class="pdp-badge-row">
                <span class="subheading" style="margin-bottom:0;">${product.category}</span>
                ${product.badge ? `<span class="badge ${product.badge === 'New Arrival' ? 'badge-dark' : 'badge-accent'}">${product.badge}</span>` : ''}
              </div>

              <h1 class="pdp-title">${product.name}</h1>
              <p class="pdp-tagline">"${product.tagline}"</p>

              <div class="pdp-rating-row">
                <div class="pdp-stars">
                  ${'★'.repeat(Math.round(product.rating))}
                </div>
                <span>${product.rating} (${product.reviewCount} verified client reviews)</span>
              </div>

              <div class="pdp-price-row">
                <span class="pdp-price">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="pdp-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                <span class="pdp-tax-notice">• Inclusive of all taxes</span>
              </div>
            </div>

            <!-- Description -->
            <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-secondary);">
              ${product.description}
            </p>

            <!-- Color Swatches Selector -->
            ${product.colors && product.colors.length > 0 ? `
              <div class="picker-section">
                <div class="picker-label-row">
                  <span class="picker-label">Color: <span id="pdp-selected-color-name">${defaultColor}</span></span>
                </div>
                <div class="color-options-row">
                  ${product.colors.map((c, i) => `
                    <button 
                      type="button" 
                      class="color-option-btn ${i === 0 ? 'active' : ''}" 
                      data-pdp-color="${c.name}"
                      data-pdp-primary="${c.primaryImage}"
                      data-pdp-secondary="${c.alternateImage}"
                    >
                      <span class="color-circle" style="background-color: ${c.hex};"></span>
                      <span>${c.name}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Size Selector -->
            <div class="picker-section">
              <div class="picker-label-row">
                <span class="picker-label">Select Size: <span id="pdp-selected-size-name">${product.sizes[0] ? product.sizes[0].size : ''}</span></span>
                <button type="button" class="size-guide-trigger" id="pdp-size-guide-btn">View Size Guide</button>
              </div>
              
              <div class="size-options-grid">
                ${product.sizes.map((s, i) => `
                  <button 
                    type="button" 
                    class="size-option-btn ${i === 0 ? 'active' : ''}" 
                    data-pdp-size="${s.size}"
                    data-pdp-stock="${s.stock}"
                    ${s.stock === 0 ? 'disabled' : ''}
                  >
                    ${s.size}
                  </button>
                `).join('')}
              </div>

              <div class="stock-indicator-micro" id="pdp-stock-indicator">
                In Stock • Dispatches in 24 hours
              </div>
            </div>

            <!-- Quantity & Add to Bag Actions -->
            <div class="pdp-actions-row">
              <div class="pdp-qty-and-cart">
                <div class="quantity-selector">
                  <button type="button" class="qty-btn" id="pdp-qty-minus">-</button>
                  <input type="text" class="qty-input" id="pdp-qty-input" value="1" readonly>
                  <button type="button" class="qty-btn" id="pdp-qty-plus">+</button>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-add-bag" id="pdp-add-to-bag-btn">
                  Add to Bag • ${formatPrice(product.price)}
                </button>
              </div>

              <!-- Buy Now & Wishlist Row -->
              <div style="display: flex; gap: 12px;">
                <button type="button" class="btn btn-secondary btn-full btn-lg" id="pdp-buy-now-btn">
                  Express Checkout • Buy Now
                </button>

                <button 
                  type="button" 
                  class="btn btn-secondary btn-wishlist-pdp ${isWishlisted ? 'active' : ''}" 
                  id="pdp-wishlist-toggle"
                  style="padding: 0 20px; display: flex; align-items: center; justify-content: center;"
                  title="Save to Wishlist"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Value Proposition Trust Strip -->
            <div class="pdp-trust-strip">
              <div class="trust-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <span>Complimentary Delivery over ₹2,999</span>
              </div>
              <div class="trust-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
                <span>Hassle-Free 7-Day Exchanges</span>
              </div>
              <div class="trust-item">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>100% Genuine Handcrafted Silks</span>
              </div>
            </div>

            <!-- Product Accordions -->
            <div class="accordion" id="pdp-accordion">
              
              <!-- Accordion 1: Details & Features -->
              <div class="accordion-item open">
                <button type="button" class="accordion-trigger">
                  <span>Sartorial Details & Cut</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    <ul style="list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
                      ${product.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Accordion 2: Fabric & Care -->
              <div class="accordion-item">
                <button type="button" class="accordion-trigger">
                  <span>Fabric & Care Instructions</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    <p><strong>Textile:</strong> ${product.fabricCare.fabric}</p>
                    <p style="margin-top: 6px;"><strong>Care:</strong> ${product.fabricCare.care}</p>
                  </div>
                </div>
              </div>

              <!-- Accordion 3: Delivery & Shipping -->
              <div class="accordion-item">
                <button type="button" class="accordion-trigger">
                  <span>Complimentary Shipping & Packaging</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    <p>${product.shippingReturns.shipping}</p>
                    <p style="margin-top: 8px;">Every Floree garment arrives enclosed in an archival breathable cotton dust cover and signature gold-stamped presentation box.</p>
                  </div>
                </div>
              </div>

              <!-- Accordion 4: Exchanges & Returns -->
              <div class="accordion-item">
                <button type="button" class="accordion-trigger">
                  <span>Complimentary 7-Day Returns</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    <p>${product.shippingReturns.returns}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- Section: You May Also Like -->
        <div style="margin-top: clamp(64px, 10vw, 120px);">
          <div class="section-header">
            <span class="subheading">Complementary Silhouettes</span>
            <h2 class="section-title">You May Also Like.</h2>
          </div>

          <div class="products-grid-4" id="pdp-related-grid">
            ${relatedProducts.map(p => renderProductCard(p)).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initPdpView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];
  let selectedSize = product.sizes && product.sizes[0] ? product.sizes[0].size : '';
  let selectedColor = product.colors && product.colors[0] ? product.colors[0].name : '';
  let quantity = 1;

  const mainImg = document.getElementById('pdp-main-image');
  const thumbsContainer = document.getElementById('pdp-thumbnails');
  const sizeNameLabel = document.getElementById('pdp-selected-size-name');
  const colorNameLabel = document.getElementById('pdp-selected-color-name');
  const stockIndicator = document.getElementById('pdp-stock-indicator');
  const qtyMinus = document.getElementById('pdp-qty-minus');
  const qtyPlus = document.getElementById('pdp-qty-plus');
  const qtyInput = document.getElementById('pdp-qty-input');
  const addBtn = document.getElementById('pdp-add-to-bag-btn');
  const buyNowBtn = document.getElementById('pdp-buy-now-btn');
  const wishlistBtn = document.getElementById('pdp-wishlist-toggle');
  const sizeGuideBtn = document.getElementById('pdp-size-guide-btn');

  // Thumbnail click gallery changer
  if (thumbsContainer && mainImg) {
    thumbsContainer.querySelectorAll('.pdp-thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const img = thumb.querySelector('img');
        if (img) mainImg.src = img.src;
      });
    });
  }

  // Color button clicks
  document.querySelectorAll('[data-pdp-color]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-pdp-color]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = btn.getAttribute('data-pdp-color');
      if (colorNameLabel) colorNameLabel.textContent = selectedColor;

      const primary = btn.getAttribute('data-pdp-primary');
      if (primary && mainImg) {
        mainImg.src = primary;
        // update first thumb
        const firstThumb = thumbsContainer ? thumbsContainer.querySelector('.pdp-thumb-item img') : null;
        if (firstThumb) firstThumb.src = primary;
      }
    });
  });

  // Size option clicks
  document.querySelectorAll('[data-pdp-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.hasAttribute('disabled')) return;
      document.querySelectorAll('[data-pdp-size]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.getAttribute('data-pdp-size');
      const stock = parseInt(btn.getAttribute('data-pdp-stock') || '5', 10);

      if (sizeNameLabel) sizeNameLabel.textContent = selectedSize;

      if (stockIndicator) {
        if (stock <= 2) {
          stockIndicator.textContent = `⚡ Only ${stock} left in size ${selectedSize} – Order soon`;
          stockIndicator.style.color = '#B94A48';
        } else {
          stockIndicator.textContent = `In Stock • Dispatches in 24 hours`;
          stockIndicator.style.color = 'var(--color-brown)';
        }
      }
    });
  });

  // Quantity stepper
  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyInput.value = quantity;
        if (addBtn) addBtn.textContent = `Add to Bag • ${formatPrice(product.price * quantity)}`;
      }
    });

    qtyPlus.addEventListener('click', () => {
      quantity++;
      qtyInput.value = quantity;
      if (addBtn) addBtn.textContent = `Add to Bag • ${formatPrice(product.price * quantity)}`;
    });
  }

  // Size Guide trigger
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('floree:open-size-guide'));
    });
  }

  // Add to Bag Button
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (!selectedSize) {
        toast.show('Please choose a size before adding to bag', 'info');
        return;
      }

      const result = cartStore.addItem(product.id, selectedSize, selectedColor, quantity);
      if (result.success) {
        toast.show(result.message, 'success');
        window.dispatchEvent(new CustomEvent('floree:open-cart-drawer'));
      } else {
        toast.show(result.message, 'info');
      }
    });
  }

  // Buy Now Express Checkout Button
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!selectedSize) {
        toast.show('Please select your preferred size first', 'info');
        return;
      }

      cartStore.addItem(product.id, selectedSize, selectedColor, quantity);
      window.location.hash = '#/checkout';
    });
  }

  // Wishlist Button
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
      const result = wishlistStore.toggle(product.id);
      if (result.added) {
        wishlistBtn.classList.add('active');
        wishlistBtn.querySelector('svg').setAttribute('fill', 'currentColor');
        toast.show(result.message, 'success');
      } else {
        wishlistBtn.classList.remove('active');
        wishlistBtn.querySelector('svg').setAttribute('fill', 'none');
        toast.show(result.message, 'info');
      }
    });
  }

  // Accordion Toggle Handlers
  const accordion = document.getElementById('pdp-accordion');
  if (accordion) {
    accordion.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        item.classList.toggle('open');
      });
    });
  }

  // Attach card listeners to related products
  attachProductCardListeners(document.getElementById('pdp-related-grid'));
}

