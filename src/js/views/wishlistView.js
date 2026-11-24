// src/js/views/wishlistView.js
// Floree Fashion - Master Wishlist View

import { wishlistStore } from '../store/wishlistStore.js';
import { cartStore } from '../store/cartStore.js';
import { formatPrice, renderProductCard, attachProductCardListeners } from '../components/productCard.js';
import { toast } from '../components/toast.js';

export function renderWishlistView() {
  const state = wishlistStore.getState();

  if (state.count === 0) {
    return `
      <section class="wishlist-page-header">
        <div class="container">
          <span class="subheading">Saved Pieces</span>
          <h1 style="font-size: 2.5rem; margin-bottom: 8px;">My Wishlist</h1>
        </div>
      </section>

      <div class="container section-spacing">
        <div class="empty-wishlist-box">
          <svg class="empty-wishlist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h2 style="font-size: 1.75rem; margin-bottom: 8px;">Your Wishlist is Empty</h2>
          <p style="color: var(--color-text-secondary); margin-bottom: 24px;">
            Save your favorite silhouettes and styles to revisit anytime.
          </p>
          <a href="#/shop" class="btn btn-primary btn-lg">Explore Collections</a>
        </div>
      </div>
    `;
  }

  return `
    <section class="wishlist-page-header">
      <div class="container">
        <span class="subheading">Saved Pieces</span>
        <h1 style="font-size: 2.5rem; margin-bottom: 8px;">My Wishlist</h1>
        <p style="color: var(--color-text-secondary);">${state.count} silhouette${state.count === 1 ? '' : 's'} saved</p>
      </div>
    </section>

    <div class="container section-spacing">
      <div class="products-grid-4" id="wishlist-products-grid">
        ${state.products.map(p => renderProductCard(p)).join('')}
      </div>
    </div>
  `;
}

export function initWishlistView() {
  const grid = document.getElementById('wishlist-products-grid');
  if (grid) {
    attachProductCardListeners(grid);
  }
}

