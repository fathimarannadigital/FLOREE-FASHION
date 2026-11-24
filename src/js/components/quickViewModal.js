// src/js/components/quickViewModal.js
// Floree Fashion - Quick View Modal Dialog

import { getProductById } from '../data/products.js';
import { cartStore } from '../store/cartStore.js';
import { formatPrice } from './productCard.js';
import { toast } from './toast.js';

class QuickViewModal {
  constructor() {
    this.modalOverlay = null;
    this.currentProduct = null;
    this.selectedSize = '';
    this.selectedColor = '';
    this.quantity = 1;
    this.init();
  }

  init() {
    const existing = document.getElementById('quick-view-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'quick-view-overlay';
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');

    overlay.innerHTML = `
      <div class="modal-dialog" id="quick-view-dialog">
        <button class="modal-close" id="quick-view-close-btn" aria-label="Close Preview">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div id="quick-view-content" class="quick-view-body"></div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalOverlay = overlay;

    // Close on backdrop or X
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.close();
    });

    const closeBtn = document.getElementById('quick-view-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Listen to global open event
    window.addEventListener('floree:open-quick-view', (e) => {
      if (e.detail && e.detail.productId) {
        this.open(e.detail.productId);
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOverlay.classList.contains('open')) {
        this.close();
      }
    });
  }

  open(productId) {
    const product = getProductById(productId);
    if (!product) return;

    this.currentProduct = product;
    this.selectedSize = product.sizes && product.sizes[0] ? product.sizes[0].size : '';
    this.selectedColor = product.colors && product.colors[0] ? product.colors[0].name : '';
    this.quantity = 1;

    this.render();
    this.modalOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  close() {
    this.modalOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  render() {
    const p = this.currentProduct;
    const content = document.getElementById('quick-view-content');
    if (!content) return;

    const currentColorObj = p.colors.find(c => c.name === this.selectedColor) || p.colors[0];
    const displayImage = currentColorObj ? currentColorObj.primaryImage : p.images[0];

    content.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; padding: 32px;">
        <!-- Left: Image -->
        <div style="background-color: var(--color-champagne); aspect-ratio: 3/4; overflow: hidden;">
          <img src="${displayImage}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <!-- Right: Details -->
        <div style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="subheading">${p.category}</span>
            <h2 style="font-size: 1.85rem; margin-bottom: 6px;">${p.name}</h2>
            <div style="font-size: 1.25rem; font-weight: 600; margin-bottom: 16px;">${formatPrice(p.price)}</div>
            <p style="font-size: 0.9375rem; color: var(--color-text-secondary); margin-bottom: 20px;">
              ${p.description}
            </p>

            <!-- Color Options -->
            ${p.colors.length > 1 ? `
              <div style="margin-bottom: 16px;">
                <label style="font-size: 0.8125rem; font-weight: 600; text-transform: uppercase;">Color: <span>${this.selectedColor}</span></label>
                <div style="display: flex; gap: 8px; margin-top: 6px;">
                  ${p.colors.map(c => `
                    <button type="button" class="swatch-btn ${c.name === this.selectedColor ? 'active' : ''}" style="background-color: ${c.hex};" data-qv-color="${c.name}"></button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Size Selector -->
            <div style="margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <label style="font-size: 0.8125rem; font-weight: 600; text-transform: uppercase;">Size: <span>${this.selectedSize}</span></label>
                <button type="button" class="size-guide-trigger" id="qv-size-guide-btn">Size Guide</button>
              </div>
              <div class="size-options-grid">
                ${p.sizes.map(s => `
                  <button type="button" class="size-option-btn ${s.size === this.selectedSize ? 'active' : ''}" data-qv-size="${s.size}">
                    ${s.size}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Quantity Stepper -->
            <div style="margin-bottom: 24px;">
              <label style="font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 6px;">Quantity</label>
              <div class="quantity-selector">
                <button type="button" class="qty-btn" id="qv-qty-minus">-</button>
                <input type="text" class="qty-input" id="qv-qty-input" value="${this.quantity}" readonly>
                <button type="button" class="qty-btn" id="qv-qty-plus">+</button>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button class="btn btn-primary btn-full btn-lg" id="qv-add-to-bag-btn">
              Add to Bag • ${formatPrice(p.price * this.quantity)}
            </button>
            <a href="#/product/${p.id}" class="btn btn-secondary btn-full btn-sm" id="qv-view-full-details">
              View Full Details & Editorial Gallery
            </a>
          </div>
        </div>
      </div>
    `;

    // Attach listeners inside modal
    content.querySelectorAll('[data-qv-color]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedColor = btn.getAttribute('data-qv-color');
        this.render();
      });
    });

    content.querySelectorAll('[data-qv-size]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedSize = btn.getAttribute('data-qv-size');
        content.querySelectorAll('[data-qv-size]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    const qtyMinus = document.getElementById('qv-qty-minus');
    const qtyPlus = document.getElementById('qv-qty-plus');
    const qtyInput = document.getElementById('qv-qty-input');
    const addBtn = document.getElementById('qv-add-to-bag-btn');
    const fullLink = document.getElementById('qv-view-full-details');
    const sizeGuideBtn = document.getElementById('qv-size-guide-btn');

    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        if (this.quantity > 1) {
          this.quantity--;
          qtyInput.value = this.quantity;
          if (addBtn) addBtn.textContent = `Add to Bag • ${formatPrice(p.price * this.quantity)}`;
        }
      });
    }

    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        this.quantity++;
        qtyInput.value = this.quantity;
        if (addBtn) addBtn.textContent = `Add to Bag • ${formatPrice(p.price * this.quantity)}`;
      });
    }

    if (sizeGuideBtn) {
      sizeGuideBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('floree:open-size-guide'));
      });
    }

    if (fullLink) {
      fullLink.addEventListener('click', () => {
        this.close();
      });
    }

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const result = cartStore.addItem(p.id, this.selectedSize, this.selectedColor, this.quantity);
        if (result.success) {
          toast.show(result.message, 'success');
          this.close();
          window.dispatchEvent(new CustomEvent('floree:open-cart-drawer'));
        } else {
          toast.show(result.message, 'info');
        }
      });
    }
  }
}

export const quickViewModal = new QuickViewModal();

