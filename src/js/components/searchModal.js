// src/js/components/searchModal.js
// Floree Fashion - Instant Search Modal

import { PRODUCTS } from '../data/products.js';
import { renderProductCard, attachProductCardListeners } from './productCard.js';

class SearchModal {
  constructor() {
    this.modalOverlay = null;
    this.searchTerm = '';
    this.init();
  }

  init() {
    const existing = document.getElementById('search-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'search-modal-overlay';

    overlay.innerHTML = `
      <div class="modal-dialog search-modal-dialog">
        <button class="modal-close" id="search-modal-close" aria-label="Close Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Search Input -->
        <div class="search-input-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" style="margin-right: 12px; color: var(--color-gold);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="search" 
            id="search-input-field" 
            class="search-input-field" 
            placeholder="Search dresses, silks, silhouettes..." 
            autocomplete="off"
            autofocus
          >
        </div>

        <!-- Suggested Search Chips -->
        <div class="search-suggested-tags">
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: var(--tracking-wider); color: var(--color-text-muted);">Trending:</span>
          <button type="button" class="search-tag-chip" data-search-term="Silk">Silk Slip</button>
          <button type="button" class="search-tag-chip" data-search-term="Linen">Linen</button>
          <button type="button" class="search-tag-chip" data-search-term="Velvet">Velvet Column</button>
          <button type="button" class="search-tag-chip" data-search-term="Pleated">Pleated Midi</button>
          <button type="button" class="search-tag-chip" data-search-term="Party">Party Wear</button>
        </div>

        <!-- Live Results Container -->
        <div id="search-results-container">
          <div class="search-results-grid" id="search-results-grid"></div>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);
    this.modalOverlay = overlay;

    // Close on backdrop or X
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.close();
    });

    const closeBtn = document.getElementById('search-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Header Search Button Trigger
    const headerSearchBtn = document.getElementById('header-search-btn');
    if (headerSearchBtn) {
      headerSearchBtn.addEventListener('click', () => this.open());
    }

    // Input typing listener
    const input = document.getElementById('search-input-field');
    if (input) {
      input.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.trim().toLowerCase();
        this.renderResults();
      });
    }

    // Tag chip clicks
    overlay.querySelectorAll('.search-tag-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const term = chip.getAttribute('data-search-term');
        if (input) {
          input.value = term;
          this.searchTerm = term.toLowerCase();
          this.renderResults();
        }
      });
    });

    // Escape Key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOverlay.classList.contains('open')) {
        this.close();
      }
    });
  }

  open() {
    this.modalOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
    const input = document.getElementById('search-input-field');
    if (input) {
      input.value = '';
      this.searchTerm = '';
      setTimeout(() => input.focus(), 150);
    }
    this.renderResults();
  }

  close() {
    this.modalOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  renderResults() {
    const grid = document.getElementById('search-results-grid');
    if (!grid) return;

    let filtered = PRODUCTS;
    if (this.searchTerm) {
      filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(this.searchTerm) ||
        p.category.toLowerCase().includes(this.searchTerm) ||
        p.description.toLowerCase().includes(this.searchTerm) ||
        p.tagline.toLowerCase().includes(this.searchTerm) ||
        p.colors.some(c => c.name.toLowerCase().includes(this.searchTerm))
      );
    } else {
      filtered = PRODUCTS.slice(0, 3); // Featured default
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0; color: var(--color-text-secondary);">
          <p style="font-size: 1.125rem; font-family: var(--font-serif); margin-bottom: 8px;">No styles found matching "${this.searchTerm}"</p>
          <p style="font-size: 0.875rem;">Try searching for "silk", "dress", "linen", or "party".</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
    attachProductCardListeners(grid);

    // Auto-close modal when clicking a product link
    grid.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => this.close());
    });
  }
}

export const searchModal = new SearchModal();

