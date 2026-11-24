// src/js/views/shopView.js
// FLOREE - Master Shop & Collection Page

import { PRODUCTS } from '../data/products.js';
import { renderProductCard, attachProductCardListeners } from '../components/productCard.js';

export function renderShopView(params = {}) {
  let initialCategory = 'All';
  if (params.category) {
    initialCategory = decodeURIComponent(params.category);
  } else if (params.filter === 'new') {
    initialCategory = 'New Arrivals';
  } else if (params.filter === 'trending') {
    initialCategory = 'Trending';
  }

  return `
    <!-- Shop Hero Banner -->
    <section class="shop-page-hero">
      <div class="container shop-hero-content">
        <span class="subheading">MAISON FLOREE ARCHIVES</span>
        <h1 class="shop-hero-title" id="shop-main-title">${initialCategory === 'All' ? 'Collections & Silhouettes' : initialCategory}</h1>
        <p class="shop-hero-desc">
          Immerse yourself in modern women's fashion, flowing silhouettes, and timeless tailoring crafted from genuine mulberry silks, pure linens, and sculptured velvets.
        </p>
      </div>
    </section>

    <!-- Main Shop Container -->
    <div class="container section-spacing-sm">
      
      <!-- Primary Category Filter Chips Bar -->
      <div class="shop-controls-bar">
        <div class="shop-filter-group-left" id="category-chips-group">
          <button type="button" class="filter-chip-btn ${initialCategory === 'All' ? 'active' : ''}" data-cat="All">All Styles</button>
          <button type="button" class="filter-chip-btn ${initialCategory === 'New Arrivals' ? 'active' : ''}" data-cat="New Arrivals">New Arrivals</button>
          <button type="button" class="filter-chip-btn ${initialCategory === 'Dresses' ? 'active' : ''}" data-cat="Dresses">Dresses</button>
          <button type="button" class="filter-chip-btn ${initialCategory === 'Tops' ? 'active' : ''}" data-cat="Tops">Tops</button>
          <button type="button" class="filter-chip-btn ${initialCategory === 'Co-ord Sets' ? 'active' : ''}" data-cat="Co-ord Sets">Co-ord Sets</button>
          <button type="button" class="filter-chip-btn ${initialCategory === 'Everyday Wear' ? 'active' : ''}" data-cat="Everyday Wear">Everyday Wear</button>
          <button type="button" class="filter-chip-btn ${initialCategory === 'Statement Pieces' ? 'active' : ''}" data-cat="Statement Pieces">Statement Pieces</button>
        </div>

        <div class="shop-controls-right">
          <span class="product-count-display" id="product-count-display">Showing 12 styles</span>
          
          <div class="sort-select-wrapper">
            <select id="shop-sort-select" class="sort-select" aria-label="Sort Collections">
              <option value="recommended">Sort: Recommended</option>
              <option value="newest">Sort: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Secondary Filter Bar (Size, Color, Price, Stock) -->
      <div class="secondary-filter-panel">
        
        <!-- Size Filter -->
        <div class="filter-dropdown-item">
          <label class="filter-label" for="filter-size">Size:</label>
          <select id="filter-size" class="filter-select">
            <option value="all">All Sizes</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <!-- Color Filter -->
        <div class="filter-dropdown-item">
          <label class="filter-label" for="filter-color">Color:</label>
          <select id="filter-color" class="filter-select">
            <option value="all">All Colors</option>
            <option value="Champagne">Champagne / Gold</option>
            <option value="Ivory">Ivory / White</option>
            <option value="Black">Black / Charcoal</option>
            <option value="Camel">Camel / Sand</option>
            <option value="Rose">Rose / Blush</option>
          </select>
        </div>

        <!-- Price Range Filter -->
        <div class="filter-dropdown-item">
          <label class="filter-label" for="filter-price">Price:</label>
          <select id="filter-price" class="filter-select">
            <option value="all">All Prices</option>
            <option value="under-5000">Under ₹5,000</option>
            <option value="5000-7000">₹5,000 – ₹7,000</option>
            <option value="above-7000">Above ₹7,000</option>
          </select>
        </div>

        <!-- Reset Button -->
        <button type="button" id="clear-all-filters-btn" class="clear-filters-btn">
          Reset Filters
        </button>
      </div>

      <!-- Demonstration Inventory Banner -->
      <div style="background-color: var(--color-bg-subtle); padding: 12px 18px; border-left: 3px solid var(--color-gold); margin-bottom: 24px; font-size: 0.85rem; color: var(--color-text-secondary); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <span>✦ <strong>FLOREE Launch Preview:</strong> Demonstration inventory catalog. Prices in INR (₹).</span>
        <span>Orders process with live mock confirmation & tracking</span>
      </div>

      <!-- Product Grid (4 Columns Desktop / 2 Mobile) -->
      <div class="products-grid-4" id="shop-products-grid">
        <!-- Rendered by initShopView -->
      </div>

      <!-- Empty State Fallback -->
      <div id="shop-empty-state" class="shop-empty-state" style="display: none; text-align: center; padding: 64px 20px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 8px;">No matching silhouettes found.</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: 24px;">Please adjust your size, color, or category filters to explore more of the FLOREE collection.</p>
        <button type="button" class="btn btn-secondary" id="reset-empty-btn">Show All Styles</button>
      </div>

    </div>
  `;
}

export function initShopView(params = {}) {
  let activeCategory = 'All';
  if (params.category) {
    activeCategory = decodeURIComponent(params.category);
  } else if (params.filter === 'new') {
    activeCategory = 'New Arrivals';
  } else if (params.filter === 'trending') {
    activeCategory = 'Trending';
  }

  let activeSize = 'all';
  let activeColor = 'all';
  let activePrice = 'all';
  let activeSort = 'recommended';

  const grid = document.getElementById('shop-products-grid');
  const emptyState = document.getElementById('shop-empty-state');
  const countDisplay = document.getElementById('product-count-display');
  const mainTitle = document.getElementById('shop-main-title');
  const chipButtons = document.querySelectorAll('.filter-chip-btn');
  const sizeSelect = document.getElementById('filter-size');
  const colorSelect = document.getElementById('filter-color');
  const priceSelect = document.getElementById('filter-price');
  const sortSelect = document.getElementById('shop-sort-select');
  const clearBtn = document.getElementById('clear-all-filters-btn');
  const resetEmptyBtn = document.getElementById('reset-empty-btn');

  function filterAndRender() {
    let list = [...PRODUCTS];

    // Filter by Category
    if (activeCategory === 'New Arrivals') {
      list = list.filter(p => p.isNew);
    } else if (activeCategory === 'Trending') {
      list = list.filter(p => p.isTrending);
    } else if (activeCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by Size
    if (activeSize !== 'all') {
      list = list.filter(p => p.sizes.some(s => s.size === activeSize && s.stock > 0));
    }

    // Filter by Color
    if (activeColor !== 'all') {
      const col = activeColor.toLowerCase();
      list = list.filter(p => p.colors.some(c => c.name.toLowerCase().includes(col)));
    }

    // Filter by Price
    if (activePrice === 'under-5000') {
      list = list.filter(p => p.price < 5000);
    } else if (activePrice === '5000-7000') {
      list = list.filter(p => p.price >= 5000 && p.price <= 7000);
    } else if (activePrice === 'above-7000') {
      list = list.filter(p => p.price > 7000);
    }

    // Sort
    if (activeSort === 'newest') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (activeSort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    }

    // Update Counter
    if (countDisplay) {
      countDisplay.textContent = `Showing ${list.length} style${list.length === 1 ? '' : 's'}`;
    }

    // Render Grid
    if (list.length === 0) {
      if (grid) grid.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      if (grid) {
        grid.style.display = 'grid';
        grid.innerHTML = list.map(p => renderProductCard(p)).join('');
        attachProductCardListeners(grid);
      }
    }
  }

  // Bind Category Chips
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      chipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      if (mainTitle) {
        mainTitle.textContent = activeCategory === 'All' ? 'Collections & Silhouettes' : activeCategory;
      }
      filterAndRender();
    });
  });

  // Bind Select Dropdowns
  if (sizeSelect) {
    sizeSelect.addEventListener('change', (e) => {
      activeSize = e.target.value;
      filterAndRender();
    });
  }

  if (colorSelect) {
    colorSelect.addEventListener('change', (e) => {
      activeColor = e.target.value;
      filterAndRender();
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      activePrice = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      filterAndRender();
    });
  }

  function resetAll() {
    activeCategory = 'All';
    activeSize = 'all';
    activeColor = 'all';
    activePrice = 'all';
    activeSort = 'recommended';

    chipButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-cat') === 'All'));
    if (sizeSelect) sizeSelect.value = 'all';
    if (colorSelect) colorSelect.value = 'all';
    if (priceSelect) priceSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'recommended';
    if (mainTitle) mainTitle.textContent = 'Collections & Silhouettes';

    filterAndRender();
  }

  if (clearBtn) clearBtn.addEventListener('click', resetAll);
  if (resetEmptyBtn) resetEmptyBtn.addEventListener('click', resetAll);

  // Initial Run
  filterAndRender();
}
