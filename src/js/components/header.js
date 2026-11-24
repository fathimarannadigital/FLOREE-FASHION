// src/js/components/header.js
// FLOREE - Master Site Header & Navigation

import { cartStore } from '../store/cartStore.js';
import { wishlistStore } from '../store/wishlistStore.js';

export function renderHeader(isHome = true) {
  return `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar" id="announcement-bar">
      <span class="announcement-text">
        Complimentary Express Shipping on Orders Above ₹2,999
        <span class="announcement-highlight">• Code FLOREE10 for 10% Off Your Inaugural Order</span>
      </span>
    </div>

    <!-- Main Navigation Header -->
    <header class="site-header ${isHome ? '' : 'solid-header'}" id="site-header">
      <div class="container header-container">
        
        <!-- Mobile Menu Toggle Button -->
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open Navigation Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Brand Wordmark (Left) -->
        <a href="#/" class="brand-logo" aria-label="FLOREE Home">
          <span class="brand-name">FLOREE</span>
          <span class="brand-tagline-micro">Elegance in Every Expression</span>
        </a>

        <!-- Desktop Navigation (Centre) -->
        <nav class="nav-desktop" aria-label="Primary Navigation">
          <a href="#/" class="nav-link" data-route="home">Home</a>
          <a href="#/new-arrivals" class="nav-link" data-route="new-arrivals">New Arrivals</a>
          <a href="#/collections" class="nav-link" data-route="collections">Collections</a>
          <a href="#/story" class="nav-link" data-route="story">Our Story</a>
        </nav>

        <!-- Action Icons (Right) -->
        <div class="header-actions">
          <!-- Currency Indicator -->
          <span class="action-btn-currency" title="Currency: Indian Rupee">₹ INR</span>

          <!-- Search Icon -->
          <button class="action-btn" id="header-search-btn" aria-label="Search Collections">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <!-- Account Icon -->
          <button class="action-btn" id="header-account-btn" aria-label="Client Account & Orders">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <!-- Wishlist Icon with Count -->
          <a href="#/wishlist" class="action-btn" id="header-wishlist-btn" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="action-badge" id="wishlist-badge" style="display: none;">0</span>
          </a>

          <!-- Shopping Bag Icon with Live Count -->
          <button class="action-btn" id="header-cart-btn" aria-label="Shopping Bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span class="action-badge" id="cart-badge" style="display: none;">0</span>
          </button>
        </div>

      </div>
    </header>

    <!-- Mobile Slide-out Navigation Drawer -->
    <div class="mobile-nav-drawer" id="mobile-nav-drawer">
      <div class="mobile-nav-header">
        <div class="brand-logo">
          <span class="brand-name">FLOREE</span>
          <span class="brand-tagline-micro">Elegance in Every Expression</span>
        </div>
        <button class="action-btn" id="mobile-menu-close" aria-label="Close Navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="mobile-nav-links">
        <a href="#/" class="mobile-nav-link" data-close="true">Home <span>01</span></a>
        <a href="#/new-arrivals" class="mobile-nav-link" data-close="true">New Arrivals <span>02</span></a>
        <a href="#/collections" class="mobile-nav-link" data-close="true">Collections <span>03</span></a>
        <a href="#/story" class="mobile-nav-link" data-close="true">Our Story <span>04</span></a>
        <a href="#/wishlist" class="mobile-nav-link" data-close="true">My Wishlist <span>05</span></a>
        <a href="#/contact" class="mobile-nav-link" data-close="true">Contact Concierge <span>06</span></a>
      </div>

      <div class="mobile-nav-footer">
        <div>
          <button type="button" class="btn btn-secondary btn-full btn-sm" id="mobile-account-trigger" style="margin-bottom: 12px;">
            VIP Client Portal Sign-In
          </button>
        </div>
        <div>
          <strong>Atelier Concierge:</strong><br>
          concierge@floree.com | +91 98200 12345
        </div>
        <div style="font-size: 0.75rem; color: var(--color-text-muted);">
          All prices in Indian Rupee (₹ INR) • Pan-India Delivery
        </div>
      </div>
    </div>
  `;
}

export function initHeader(isHome = true) {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const accountBtn = document.getElementById('header-account-btn');
  const mobileAccountBtn = document.getElementById('mobile-account-trigger');

  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 40 || !isHome) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile drawer open / close
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.classList.add('no-scroll');
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  }

  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('[data-close="true"]').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Account button listeners
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('floree:open-account'));
    });
  }

  if (mobileAccountBtn && mobileDrawer) {
    mobileAccountBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('no-scroll');
      window.dispatchEvent(new CustomEvent('floree:open-account'));
    });
  }

  // Subscribe to Cart State
  cartStore.subscribe(state => {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      if (state.totalCount > 0) {
        badge.textContent = state.totalCount;
        badge.style.display = 'flex';
        badge.classList.remove('pulse');
        void badge.offsetWidth;
        badge.classList.add('pulse');
      } else {
        badge.style.display = 'none';
      }
    }
  });

  // Subscribe to Wishlist State
  wishlistStore.subscribe(state => {
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
      if (state.count > 0) {
        badge.textContent = state.count;
        badge.style.display = 'flex';
        badge.classList.remove('pulse');
        void badge.offsetWidth;
        badge.classList.add('pulse');
      } else {
        badge.style.display = 'none';
      }
    }
  });
}
