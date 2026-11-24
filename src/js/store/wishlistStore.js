// src/js/store/wishlistStore.js
// Floree Fashion - Reactive Wishlist State Management

import { getProductById } from '../data/products.js';

const STORAGE_KEY = 'floree_wishlist_v1';

class WishlistStore {
  constructor() {
    this.items = this.loadWishlist();
    this.subscribers = [];
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load wishlist from localStorage', e);
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    callback(this.getState());
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    const state = this.getState();
    this.subscribers.forEach(cb => cb(state));
  }

  has(productId) {
    return this.items.includes(productId);
  }

  toggle(productId) {
    const product = getProductById(productId);
    const index = this.items.indexOf(productId);
    let added = false;

    if (index > -1) {
      this.items.splice(index, 1);
      added = false;
    } else {
      this.items.push(productId);
      added = true;
    }

    this.saveWishlist();
    return {
      added,
      product,
      message: added
        ? `Added "${product ? product.name : 'Item'}" to your wishlist.`
        : `Removed from your wishlist.`
    };
  }

  remove(productId) {
    this.items = this.items.filter(id => id !== productId);
    this.saveWishlist();
  }

  clearWishlist() {
    this.items = [];
    this.saveWishlist();
  }

  getState() {
    const products = this.items
      .map(id => getProductById(id))
      .filter(p => p !== undefined);

    return {
      items: this.items,
      products,
      count: products.length
    };
  }
}

export const wishlistStore = new WishlistStore();

