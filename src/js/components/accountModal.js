// src/js/components/accountModal.js
// FLOREE - VIP Client Account Drawer

import { toast } from './toast.js';

class AccountModal {
  constructor() {
    this.overlay = null;
    this.init();
  }

  init() {
    const existing = document.getElementById('account-drawer-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'cart-drawer-overlay';
    overlay.id = 'account-drawer-overlay';

    overlay.innerHTML = `
      <aside class="cart-drawer" id="account-drawer" style="max-width: 480px;" aria-label="VIP Client Account">
        
        <div class="cart-drawer-header">
          <div>
            <span class="subheading" style="margin-bottom: 2px;">Maison FLOREE</span>
            <h2 class="cart-drawer-title" style="font-size: 1.6rem;">Client Concierge & VIP</h2>
          </div>
          <button class="cart-drawer-close" id="account-drawer-close" aria-label="Close Account Panel">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div style="flex-grow: 1; overflow-y: auto; padding: 32px var(--space-lg);">
          
          <div style="margin-bottom: 28px; padding: 20px; background-color: var(--color-bg-subtle); border-left: 2px solid var(--color-gold);">
            <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 6px;">Privé Client Membership</h3>
            <p style="font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6;">
              Sign in to manage your orders, preview private capsule drops 24 hours prior to release, and book personal styling appointments.
            </p>
          </div>

          <!-- Sign-In Form (Demonstration Mode) -->
          <form id="client-signin-form" style="display: flex; flex-direction: column; gap: 16px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" for="client-email">Email or Mobile Number</label>
              <input type="email" id="client-email" class="form-input" placeholder="e.g. client@floree.com" required>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" for="client-password">Access Key / Password</label>
              <input type="password" id="client-password" class="form-input" placeholder="••••••••" required>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg" style="margin-top: 8px;">
              Access Client Portal
            </button>
          </form>

          <div style="text-align: center; margin: 24px 0 16px; font-size: 0.8125rem; color: var(--color-text-muted);">
            — OR QUICK TRACK AN ORDER —
          </div>

          <div style="display: flex; gap: 8px;">
            <input type="text" id="order-lookup-input" class="form-input" placeholder="Order ID (e.g. FLR-849201)" style="font-size: 0.8125rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="order-lookup-btn">Track</button>
          </div>

          <div style="margin-top: 40px; border-top: 1px solid var(--color-border-delicate); padding-top: 24px;">
            <span class="subheading">Direct Concierge</span>
            <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 12px;">
              Need bespoke measurements or assistance with a gift? Speak directly with our head stylist.
            </p>
            <a href="https://wa.me/919820012345?text=Hello%20Floree,%20I%20would%20like%20client%20assistance." target="_blank" rel="noopener" class="whatsapp-direct-btn" style="padding: 12px; font-size: 0.8125rem;">
              Chat with Stylist on WhatsApp
            </a>
          </div>

        </div>

      </aside>
    `;

    document.body.appendChild(overlay);
    this.overlay = overlay;

    // Close on backdrop or X
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    const closeBtn = document.getElementById('account-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Header Account Button Listener
    window.addEventListener('floree:open-account', () => this.open());

    // Submit form handler
    const form = document.getElementById('client-signin-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('client-email').value;
        toast.show(`Welcome to FLOREE Privé, ${email.split('@')[0]}!`, 'success');
        this.close();
      });
    }

    const trackBtn = document.getElementById('order-lookup-btn');
    const trackInput = document.getElementById('order-lookup-input');
    if (trackBtn && trackInput) {
      trackBtn.addEventListener('click', () => {
        const val = trackInput.value.trim();
        if (!val) {
          toast.show('Please enter your 6-digit FLOREE Order ID', 'info');
          return;
        }
        toast.show(`Order ${val}: Dispatched from Atelier. In transit via Express courier.`, 'info', 5000);
      });
    }
  }

  open() {
    this.overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  close() {
    this.overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
}

export const accountModal = new AccountModal();

