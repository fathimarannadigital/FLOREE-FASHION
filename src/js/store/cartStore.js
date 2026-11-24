// src/js/store/cartStore.js
// Floree Fashion - Reactive Cart State Management

import { PRODUCTS, getProductById } from '../data/products.js';

const STORAGE_KEY = 'floree_cart_v1';
const FREE_SHIPPING_THRESHOLD = 2999;
const STANDARD_SHIPPING_FEE = 150;

class CartStore {
  constructor() {
    this.items = this.loadCart();
    this.promoCode = localStorage.getItem('floree_promo_code') || '';
    this.discountPercent = 0;
    this.discountFlat = 0;
    this.subscribers = [];
    
    if (this.promoCode) {
      this.applyPromoCode(this.promoCode, false);
    }
  }

  loadCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
      if (this.promoCode) {
        localStorage.setItem('floree_promo_code', this.promoCode);
      } else {
        localStorage.removeItem('floree_promo_code');
      }
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
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

  addItem(productId, size, colorName, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return { success: false, message: 'Product not found' };
    if (!size) return { success: false, message: 'Please select a size first' };

    const selectedColor = colorName || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const existingIndex = this.items.findIndex(
      item => item.productId === productId && item.size === size && item.colorName === selectedColor
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        productId,
        size,
        colorName: selectedColor,
        quantity,
        addedAt: Date.now()
      });
    }

    this.saveCart();
    return { success: true, message: `Added "${product.name}" (${size}) to your bag.` };
  }

  updateQuantity(productId, size, colorName, newQuantity) {
    const index = this.items.findIndex(
      item => item.productId === productId && item.size === size && item.colorName === colorName
    );

    if (index > -1) {
      if (newQuantity <= 0) {
        this.items.splice(index, 1);
      } else {
        this.items[index].quantity = newQuantity;
      }
      this.saveCart();
    }
  }

  removeItem(productId, size, colorName) {
    this.items = this.items.filter(
      item => !(item.productId === productId && item.size === size && item.colorName === colorName)
    );
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  applyPromoCode(code, triggerNotify = true) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (!cleanCode) {
      this.promoCode = '';
      this.discountPercent = 0;
      this.discountFlat = 0;
      if (triggerNotify) this.saveCart();
      return { success: false, message: 'Promo code cleared' };
    }

    if (cleanCode === 'FLOREE10') {
      this.promoCode = cleanCode;
      this.discountPercent = 10;
      this.discountFlat = 0;
      if (triggerNotify) this.saveCart();
      return { success: true, message: '10% discount applied successfully!' };
    } else if (cleanCode === 'WELCOME500') {
      this.promoCode = cleanCode;
      this.discountPercent = 0;
      this.discountFlat = 500;
      if (triggerNotify) this.saveCart();
      return { success: true, message: '₹500 welcome discount applied!' };
    } else if (cleanCode === 'ELEGANCE') {
      this.promoCode = cleanCode;
      this.discountPercent = 15;
      this.discountFlat = 0;
      if (triggerNotify) this.saveCart();
      return { success: true, message: '15% VIP discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try "FLOREE10" or "WELCOME500".' };
    }
  }

  removePromoCode() {
    this.promoCode = '';
    this.discountPercent = 0;
    this.discountFlat = 0;
    this.saveCart();
  }

  getState() {
    const detailedItems = this.items.map(item => {
      const product = getProductById(item.productId);
      const colorObj = product && product.colors ? product.colors.find(c => c.name === item.colorName) : null;
      const image = colorObj ? colorObj.primaryImage : (product ? product.images[0] : '');
      const unitPrice = product ? product.price : 0;
      const itemTotal = unitPrice * item.quantity;
      return {
        ...item,
        product,
        image,
        unitPrice,
        itemTotal
      };
    }).filter(item => item.product !== undefined);

    const totalCount = detailedItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = detailedItems.reduce((acc, item) => acc + item.itemTotal, 0);
    
    let discount = 0;
    if (this.discountPercent > 0) {
      discount = Math.round((subtotal * this.discountPercent) / 100);
    } else if (this.discountFlat > 0) {
      discount = Math.min(this.discountFlat, subtotal);
    }

    const freeShippingThreshold = FREE_SHIPPING_THRESHOLD;
    const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
    const shippingFee = isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
    const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
    const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

    const grandTotal = Math.max(0, subtotal - discount + shippingFee);

    return {
      items: detailedItems,
      totalCount,
      subtotal,
      discount,
      discountPercent: this.discountPercent,
      discountFlat: this.discountFlat,
      promoCode: this.promoCode,
      shippingFee,
      isFreeShipping,
      freeShippingThreshold,
      remainingForFreeShipping,
      freeShippingProgress,
      grandTotal
    };
  }
}

export const cartStore = new CartStore();

