// src/js/router.js
// FLOREE - Client-Side Hash Router

import { renderHeader, initHeader } from './components/header.js';
import { renderHomeView, initHomeView } from './views/homeView.js';
import { renderShopView, initShopView } from './views/shopView.js';
import { renderPdpView, initPdpView } from './views/pdpView.js';
import { renderCheckoutView, initCheckoutView } from './views/checkoutView.js';
import { renderAboutView, initAboutView } from './views/aboutView.js';
import { renderContactView, initContactView } from './views/contactView.js';
import { renderWishlistView, initWishlistView } from './views/wishlistView.js';
import { getProductById } from './data/products.js';

class Router {
  constructor() {
    this.appContainer = document.getElementById('app');
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  parseHash() {
    const hash = window.location.hash.slice(1) || '/';
    const [pathPart, queryPart] = hash.split('?');
    const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;

    const params = {};
    if (queryPart) {
      new URLSearchParams(queryPart).forEach((val, key) => {
        params[key] = val;
      });
    }

    return { path, params };
  }

  handleRoute() {
    const { path, params } = this.parseHash();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Header container & App main
    const headerWrapper = document.getElementById('header-wrapper');
    const mainContent = document.getElementById('main-content');

    const isHome = path === '/' || path === '';

    // Render & Initialize Header
    if (headerWrapper) {
      headerWrapper.innerHTML = renderHeader(isHome);
      initHeader(isHome);
    }

    // Route matching
    if (isHome) {
      document.title = "FLOREE | Elegance in Every Expression • Contemporary Luxury Fashion";
      if (mainContent) {
        mainContent.innerHTML = renderHomeView();
        initHomeView();
      }
    } else if (path === '/collections' || path === '/shop') {
      document.title = params.category 
        ? `${params.category} | FLOREE` 
        : "Collections & Silhouettes | FLOREE";
      if (mainContent) {
        mainContent.innerHTML = renderShopView(params);
        initShopView(params);
      }
    } else if (path === '/new-arrivals') {
      document.title = "New Season Arrivals | FLOREE";
      const newArrivalParams = { ...params, filter: 'new' };
      if (mainContent) {
        mainContent.innerHTML = renderShopView(newArrivalParams);
        initShopView(newArrivalParams);
      }
    } else if (path.startsWith('/product/')) {
      const id = path.replace('/product/', '').trim();
      const product = getProductById(id);
      document.title = product ? `${product.name} | FLOREE` : "Product Details | FLOREE";
      if (mainContent) {
        mainContent.innerHTML = renderPdpView(id);
        initPdpView(id);
      }
    } else if (path === '/checkout') {
      document.title = "Secure Checkout | FLOREE";
      if (mainContent) {
        mainContent.innerHTML = renderCheckoutView();
        initCheckoutView();
      }
    } else if (path === '/story' || path === '/about') {
      document.title = "The World of FLOREE | Our Story & Philosophy";
      if (mainContent) {
        mainContent.innerHTML = renderAboutView();
        initAboutView();
      }
    } else if (path === '/contact') {
      document.title = "Client Concierge & Atelier | FLOREE";
      if (mainContent) {
        mainContent.innerHTML = renderContactView();
        initContactView();
      }
    } else if (path === '/wishlist') {
      document.title = "My Curated Wishlist | FLOREE";
      if (mainContent) {
        mainContent.innerHTML = renderWishlistView();
        initWishlistView();
      }
    } else {
      // 404 Fallback
      document.title = "Page Not Found | FLOREE";
      if (mainContent) {
        mainContent.innerHTML = `
          <div class="container section-spacing text-center" style="padding: 120px 20px; text-align: center;">
            <span class="subheading">MAISON ARCHIVE</span>
            <h1 style="font-family: var(--font-serif); font-size: 3rem; margin: 16px 0;">Page Not Found</h1>
            <p style="color: var(--color-text-secondary); max-width: 480px; margin: 0 auto 32px;">
              The silhouette or editorial look you are searching for may have been archived or moved to our private collections.
            </p>
            <a href="#/" class="btn btn-primary">Return to Homepage</a>
          </div>
        `;
      }
    }
  }
}

export const router = new Router();
