// src/js/components/cartDrawer.js
// Floree Fashion - Slide-out Cart Drawer

import { cartStore } from '../store/cartStore.js';
import { formatPrice } from './productCard.js';
import { toast } from './toast.js';

class CartDrawer {
  constructor() {
    this.overlay = null;
    this.init();
  }

  init() {
    const existing = document.getElementById('cart-drawer-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'cart-drawer-overlay';
    overlay.id = 'cart-drawer-overlay';

    overlay.innerHTML = `
      <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping Bag Drawer">
        <!-- Drawer Header -->
        <div class="cart-drawer-header">
          <h2 class="cart-drawer-title">Shopping Bag</h2>
          <button class="cart-drawer-close" id="cart-drawer-close" aria-label="Close Shopping Bag">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Free Shipping Progress -->
        <div class="free-shipping-bar-wrap" id="drawer-shipping-wrap"></div>

        <!-- Cart Items List Container -->
        <div class="cart-drawer-items" id="drawer-items-list"></div>

        <!-- Cart Footer -->
        <div class="cart-drawer-footer" id="drawer-footer"></div>
      </aside>
    `;

    document.body.appendChild(overlay);
    this.overlay = overlay;

    // Close on backdrop or X
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    const closeBtn = document.getElementById('cart-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Listen to global open event
    window.addEventListener('floree:open-cart-drawer', () => this.open());

    // Header Cart Button
    const headerCartBtn = document.getElementById('header-cart-btn');
    if (headerCartBtn) {
      headerCartBtn.addEventListener('click', () => this.open());
    }

    // Escape Key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('open')) {
        this.close();
      }
    });

    // Subscribe to cart changes
    cartStore.subscribe(() => {
      this.render();
    });
  }

  open() {
    this.overlay.classList.add('open');
    document.body.classList.add('no-scroll');
    this.render();
  }

  close() {
    this.overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  render() {
    const state = cartStore.getState();
    const shippingWrap = document.getElementById('drawer-shipping-wrap');
    const itemsList = document.getElementById('drawer-items-list');
    const footer = document.getElementById('drawer-footer');

    if (!itemsList || !footer || !shippingWrap) return;

    // 1. Shipping Progress Bar
    if (state.totalCount > 0) {
      shippingWrap.style.display = 'block';
      if (state.isFreeShipping) {
        shippingWrap.innerHTML = `
          <div class="free-shipping-msg" style="color: var(--color-success); font-weight: 500;">
            ✓ You have unlocked <strong>Complimentary Express Delivery</strong>!
          </div>
          <div class="shipping-progress-track">
            <div class="shipping-progress-fill" style="width: 100%; background-color: var(--color-success);"></div>
          </div>
        `;
      } else {
        shippingWrap.innerHTML = `
          <div class="free-shipping-msg">
            Add <strong>${formatPrice(state.remainingForFreeShipping)}</strong> more to unlock <strong>Complimentary Express Shipping</strong>
          </div>
          <div class="shipping-progress-track">
            <div class="shipping-progress-fill" style="width: ${state.freeShippingProgress}%;"></div>
          </div>
        `;
      }
    } else {
      shippingWrap.style.display = 'none';
    }

    // 2. Empty State or Items List
    if (state.totalCount === 0) {
      itemsList.innerHTML = `
        <div class="empty-cart-view">
          <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h3 class="empty-cart-title">Your Bag is Empty</h3>
          <p class="empty-cart-desc">
            Explore our new arrivals and editorial dresses to find your next unforgettable look.
          </p>
          <a href="#/shop" class="btn btn-primary btn-sm" id="empty-cart-shop-btn">
            Explore Collections
          </a>
        </div>
      `;

      const emptyShopBtn = document.getElementById('empty-cart-shop-btn');
      if (emptyShopBtn) {
        emptyShopBtn.addEventListener('click', () => this.close());
      }

      footer.innerHTML = '';
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'flex';

    // Render items
    itemsList.innerHTML = state.items.map(item => `
      <div class="cart-item-row" data-cart-row="${item.productId}-${item.size}-${item.colorName}">
        <div class="cart-item-img-wrap">
          <img src="${item.image}" alt="${item.product.name}" class="cart-item-img">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title-row">
            <h4 class="cart-item-name">
              <a href="#/product/${item.productId}" class="cart-item-link" data-close-cart="true">${item.product.name}</a>
            </h4>
            <button class="cart-item-remove-btn" data-remove="${item.productId}" data-size="${item.size}" data-color="${item.colorName}" title="Remove item">
              ✕
            </button>
          </div>
          <div class="cart-item-meta">
            Size: ${item.size} • Color: ${item.colorName}
          </div>
          <div class="cart-item-bottom-row">
            <div class="quantity-selector" style="height: 32px;">
              <button class="qty-btn" style="width: 28px; height: 32px; font-size: 0.875rem;" data-qty-minus="${item.productId}" data-size="${item.size}" data-color="${item.colorName}">-</button>
              <input type="text" class="qty-input" style="width: 32px; height: 32px; font-size: 0.8125rem;" value="${item.quantity}" readonly>
              <button class="qty-btn" style="width: 28px; height: 32px; font-size: 0.875rem;" data-qty-plus="${item.productId}" data-size="${item.size}" data-color="${item.colorName}">+</button>
            </div>
            <span class="cart-item-price">${formatPrice(item.itemTotal)}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Attach row listeners
    itemsList.querySelectorAll('[data-close-cart="true"]').forEach(a => {
      a.addEventListener('click', () => this.close());
    });

    itemsList.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove');
        const size = btn.getAttribute('data-size');
        const color = btn.getAttribute('data-color');
        cartStore.removeItem(id, size, color);
        toast.show('Item removed from bag', 'info');
      });
    });

    itemsList.querySelectorAll('[data-qty-minus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-qty-minus');
        const size = btn.getAttribute('data-size');
        const color = btn.getAttribute('data-color');
        const item = state.items.find(i => i.productId === id && i.size === size && i.colorName === color);
        if (item) {
          cartStore.updateQuantity(id, size, color, item.quantity - 1);
        }
      });
    });

    itemsList.querySelectorAll('[data-qty-plus]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-qty-plus');
        const size = btn.getAttribute('data-size');
        const color = btn.getAttribute('data-color');
        const item = state.items.find(i => i.productId === id && i.size === size && i.colorName === color);
        if (item) {
          cartStore.updateQuantity(id, size, color, item.quantity + 1);
        }
      });
    });

    // 3. Render Footer (Promo Code & Totals)
    const promoHtml = state.promoCode
      ? `
        <div class="applied-promo-tag">
          <span>Code <strong>${state.promoCode}</strong> applied (-${formatPrice(state.discount)})</span>
          <button type="button" id="drawer-remove-promo-btn" style="background:none; border:none; color:inherit; cursor:pointer; font-size: 0.75rem;">✕ Remove</button>
        </div>
      `
      : `
        <div class="promo-code-box">
          <input type="text" id="drawer-promo-input" class="promo-input" placeholder="Promo code (e.g. FLOREE10)">
          <button type="button" id="drawer-apply-promo-btn" class="btn btn-secondary promo-apply-btn">Apply</button>
        </div>
      `;

    footer.innerHTML = `
      ${promoHtml}
      
      <div class="cart-totals-summary">
        <div class="cart-total-line">
          <span>Subtotal</span>
          <span>${formatPrice(state.subtotal)}</span>
        </div>
        ${state.discount > 0 ? `
          <div class="cart-total-line" style="color: var(--color-success);">
            <span>Discount</span>
            <span>-${formatPrice(state.discount)}</span>
          </div>
        ` : ''}
        <div class="cart-total-line">
          <span>Delivery</span>
          <span>${state.shippingFee === 0 ? 'FREE' : formatPrice(state.shippingFee)}</span>
        </div>
        <div class="cart-total-line final-line">
          <span>Estimated Total</span>
          <span>${formatPrice(state.grandTotal)}</span>
        </div>
      </div>

      <div style="font-size: 0.75rem; color: var(--color-text-muted); text-align: center;">
        Taxes and duties included • 7-day complimentary exchanges
      </div>

      <a href="#/checkout" class="btn btn-primary btn-full btn-lg" id="drawer-checkout-btn">
        Proceed to Checkout
      </a>
    `;

    // Promo code listeners
    const applyPromoBtn = document.getElementById('drawer-apply-promo-btn');
    const promoInput = document.getElementById('drawer-promo-input');
    const removePromoBtn = document.getElementById('drawer-remove-promo-btn');
    const checkoutBtn = document.getElementById('drawer-checkout-btn');

    if (applyPromoBtn && promoInput) {
      applyPromoBtn.addEventListener('click', () => {
        const res = cartStore.applyPromoCode(promoInput.value);
        toast.show(res.message, res.success ? 'success' : 'info');
      });
    }

    if (removePromoBtn) {
      removePromoBtn.addEventListener('click', () => {
        cartStore.removePromoCode();
        toast.show('Promo code removed', 'info');
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}

export const cartDrawer = new CartDrawer();

