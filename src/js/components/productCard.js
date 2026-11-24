// src/js/components/productCard.js
// Floree Fashion - Luxury Product Card Component

import { wishlistStore } from '../store/wishlistStore.js';
import { toast } from './toast.js';

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function renderProductCard(product) {
  const isWishlisted = wishlistStore.has(product.id);
  const primaryImg = product.colors && product.colors[0] ? product.colors[0].primaryImage : product.images[0];
  const secondaryImg = product.colors && product.colors[0] ? product.colors[0].alternateImage : (product.images[1] || primaryImg);

  const swatchesHtml = product.colors && product.colors.length > 1
    ? `
      <div class="product-swatches" aria-label="Available Colors">
        ${product.colors.map((color, i) => `
          <button 
            type="button" 
            class="swatch-btn ${i === 0 ? 'active' : ''}" 
            style="background-color: ${color.hex};" 
            title="${color.name}"
            data-product-id="${product.id}"
            data-primary="${color.primaryImage}"
            data-secondary="${color.alternateImage}"
            aria-label="Color ${color.name}"
          ></button>
        `).join('')}
      </div>
    `
    : '';

  const badgeHtml = product.badge
    ? `<span class="badge product-badge ${product.badge === 'New Arrival' ? 'badge-dark' : 'badge-accent'}">${product.badge}</span>`
    : '';

  return `
    <article class="product-card" data-product-id="${product.id}">
      
      <!-- Product Image Container -->
      <div class="product-image-wrapper">
        ${badgeHtml}
        
        <!-- Wishlist Button -->
        <button 
          class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
          data-wishlist-id="${product.id}" 
          aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
          title="Save to Wishlist"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <!-- Product Image Link -->
        <a href="#/product/${product.id}" aria-label="${product.name}">
          <img 
            src="${primaryImg}" 
            alt="${product.name}" 
            class="product-img img-primary" 
            loading="lazy"
            id="card-img-primary-${product.id}"
          >
          <img 
            src="${secondaryImg}" 
            alt="${product.name} Alternate View" 
            class="product-img img-secondary" 
            loading="lazy"
            id="card-img-secondary-${product.id}"
          >
        </a>

        <!-- Quick View Overlay Button -->
        <div class="product-actions-overlay">
          <button class="btn-quick-view" data-quick-view="${product.id}">
            Quick View
          </button>
        </div>
      </div>

      <!-- Product Meta Details -->
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">
          <a href="#/product/${product.id}">${product.name}</a>
        </h3>
        
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>

        ${swatchesHtml}
      </div>

    </article>
  `;
}

export function attachProductCardListeners(container = document) {
  // Wishlist clicks
  container.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-wishlist-id');
      const result = wishlistStore.toggle(id);
      
      if (result.added) {
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
        toast.show(result.message, 'success');
      } else {
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
        toast.show(result.message, 'info');
      }
    });
  });

  // Swatch color clicks
  container.querySelectorAll('.swatch-btn').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = swatch.closest('.product-swatches');
      parent.querySelectorAll('.swatch-btn').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const productId = swatch.getAttribute('data-product-id');
      const primary = swatch.getAttribute('data-primary');
      const secondary = swatch.getAttribute('data-secondary');

      const primaryImg = document.getElementById(`card-img-primary-${productId}`);
      const secondaryImg = document.getElementById(`card-img-secondary-${productId}`);

      if (primaryImg && primary) primaryImg.src = primary;
      if (secondaryImg && secondary) secondaryImg.src = secondary;
    });
  });

  // Quick View triggers
  container.querySelectorAll('[data-quick-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-quick-view');
      window.dispatchEvent(new CustomEvent('floree:open-quick-view', { detail: { productId: id } }));
    });
  });
}

