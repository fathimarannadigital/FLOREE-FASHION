// src/js/views/checkoutView.js
// Floree Fashion - Master Checkout & Order Confirmation View

import { cartStore } from '../store/cartStore.js';
import { formatPrice } from '../components/productCard.js';
import { toast } from '../components/toast.js';

export function renderCheckoutView() {
  const state = cartStore.getState();

  if (state.totalCount === 0) {
    return `
      <div class="checkout-section">
        <div class="container container-narrow" style="text-align: center; padding: 64px 0;">
          <h1 style="font-size: 2.5rem; margin-bottom: 12px;">Your Bag is Currently Empty</h1>
          <p style="color: var(--color-text-secondary); margin-bottom: 24px;">
            Please select items from our collection before proceeding to checkout.
          </p>
          <a href="#/shop" class="btn btn-primary btn-lg">Explore Collection</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="checkout-section">
      <div class="container">
        
        <div style="margin-bottom: 32px;">
          <span class="subheading">Secure Checkout</span>
          <h1 style="font-size: clamp(2rem, 4vw, 3rem); line-height: 1.15;">Complete Your Floree Order.</h1>
          <p style="color: var(--color-text-secondary);">Complimentary luxury presentation packaging included with every order.</p>
        </div>

        <div class="checkout-grid" id="checkout-main-grid">
          
          <!-- Left: Checkout Forms -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <form id="checkout-form" novalidate>
              
              <!-- Step 1: Customer Contact -->
              <div class="checkout-panel" style="margin-bottom: 24px;">
                <h2 class="checkout-step-title">
                  <span class="step-num">1</span>
                  <span>Customer Contact Details</span>
                </h2>
                
                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="cust-email">Email Address *</label>
                    <input type="email" id="cust-email" class="form-input" placeholder="e.g. yourname@example.com" required>
                    <span class="form-error" id="cust-email-error"></span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="cust-phone">Mobile Phone (for delivery SMS/OTP) *</label>
                    <input type="tel" id="cust-phone" class="form-input" placeholder="+91 98765 43210" required>
                    <span class="form-error" id="cust-phone-error"></span>
                  </div>
                </div>
              </div>

              <!-- Step 2: Shipping Destination -->
              <div class="checkout-panel" style="margin-bottom: 24px;">
                <h2 class="checkout-step-title">
                  <span class="step-num">2</span>
                  <span>Delivery Address</span>
                </h2>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="cust-fname">First Name *</label>
                    <input type="text" id="cust-fname" class="form-input" placeholder="First name" required>
                    <span class="form-error" id="cust-fname-error"></span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="cust-lname">Last Name *</label>
                    <input type="text" id="cust-lname" class="form-input" placeholder="Last name" required>
                    <span class="form-error" id="cust-lname-error"></span>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="cust-address">Street Address / Apartment / Suite *</label>
                  <input type="text" id="cust-address" class="form-input" placeholder="Flat No., Wing, Building Name, Street" required>
                  <span class="form-error" id="cust-address-error"></span>
                </div>

                <div class="form-row-3">
                  <div class="form-group">
                    <label class="form-label" for="cust-city">City *</label>
                    <input type="text" id="cust-city" class="form-input" placeholder="City" required>
                    <span class="form-error" id="cust-city-error"></span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="cust-state">State *</label>
                    <select id="cust-state" class="form-select" required>
                      <option value="">Select State</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi NCR</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Goa">Goa</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Other">Other State / UT</option>
                    </select>
                    <span class="form-error" id="cust-state-error"></span>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="cust-pincode">PIN Code *</label>
                    <input type="text" id="cust-pincode" class="form-input" placeholder="6-digit PIN" maxlength="6" required>
                    <span class="form-error" id="cust-pincode-error"></span>
                  </div>
                </div>

                <div class="form-group" style="margin-top: 8px;">
                  <label class="form-label" for="cust-notes">Special Delivery Instructions (Optional)</label>
                  <input type="text" id="cust-notes" class="form-input" placeholder="e.g. Leave with building security if unavailable">
                </div>
              </div>

              <!-- Step 3: Payment Options -->
              <div class="checkout-panel">
                <h2 class="checkout-step-title">
                  <span class="step-num">3</span>
                  <span>Payment Method</span>
                </h2>

                <div class="payment-options-list">
                  
                  <!-- Option 1: UPI -->
                  <label class="payment-option-label selected" data-method="upi">
                    <div class="payment-option-left">
                      <input type="radio" name="payment_method" value="upi" checked>
                      <span>Instant UPI (Google Pay, PhonePe, Paytm, QR)</span>
                    </div>
                    <span class="badge badge-accent">Fastest & Preferred</span>
                  </label>

                  <!-- Option 2: Cards -->
                  <label class="payment-option-label" data-method="card">
                    <div class="payment-option-left">
                      <input type="radio" name="payment_method" value="card">
                      <span>Credit or Debit Card (Visa, Mastercard, RuPay, Amex)</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">256-Bit Encrypted</span>
                  </label>

                  <!-- Option 3: Net Banking -->
                  <label class="payment-option-label" data-method="netbanking">
                    <div class="payment-option-left">
                      <input type="radio" name="payment_method" value="netbanking">
                      <span>Net Banking (All Major Indian Banks)</span>
                    </div>
                  </label>

                  <!-- Option 4: Cash on Delivery -->
                  <label class="payment-option-label" data-method="cod">
                    <div class="payment-option-left">
                      <input type="radio" name="payment_method" value="cod">
                      <span>Cash on Delivery (Pay upon arrival)</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">Available in serviceable PINs</span>
                  </label>

                </div>

                <!-- Interactive Simulated Payment Box -->
                <div id="payment-details-box" style="margin-top: 20px; padding: 16px; background-color: var(--color-bg-primary); border: 1px dashed var(--color-border-medium);">
                  <div id="upi-details-pane">
                    <label class="form-label">Enter Virtual Payment Address (UPI ID)</label>
                    <input type="text" id="upi-id-input" class="form-input" placeholder="e.g. yourname@okhdfcbank" value="customer@upi">
                    <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 6px;">
                      You will receive a simulated instant approval request on your UPI application.
                    </p>
                  </div>
                </div>

                <div style="margin-top: 24px;">
                  <button type="submit" class="btn btn-primary btn-full btn-lg" id="place-order-btn">
                    Place Order • ${formatPrice(state.grandTotal)}
                  </button>
                  <p style="font-size: 0.75rem; color: var(--color-text-muted); text-align: center; margin-top: 10px;">
                    By placing your order, you agree to Floree Fashion's Terms of Sale and 7-day Exchange Policy.
                  </p>
                </div>

              </div>

            </form>

          </div>

          <!-- Right: Sticky Order Summary -->
          <div class="order-summary-box">
            <h3 style="font-size: 1.35rem; margin-bottom: 4px;">Order Summary</h3>
            <span style="font-size: 0.75rem; color: var(--color-text-muted); letter-spacing: var(--tracking-wider); text-transform: uppercase;">
              ${state.totalCount} Item${state.totalCount === 1 ? '' : 's'} in Bag
            </span>

            <div class="summary-items-list">
              ${state.items.map(item => `
                <div class="summary-item-micro">
                  <img src="${item.image}" alt="${item.product.name}">
                  <div class="summary-item-micro-info">
                    <div class="summary-item-micro-name">${item.product.name}</div>
                    <div class="summary-item-micro-meta">Size: ${item.size} • Qty: ${item.quantity}</div>
                    <div style="font-weight: 600; margin-top: 2px;">${formatPrice(item.itemTotal)}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Totals Breakout -->
            <div class="cart-totals-summary" style="margin-top: 16px; border-top: 1px solid var(--color-border-delicate); padding-top: 16px;">
              <div class="cart-total-line">
                <span>Subtotal</span>
                <span>${formatPrice(state.subtotal)}</span>
              </div>
              ${state.discount > 0 ? `
                <div class="cart-total-line" style="color: var(--color-success);">
                  <span>Discount (${state.promoCode || 'PROMO'})</span>
                  <span>-${formatPrice(state.discount)}</span>
                </div>
              ` : ''}
              <div class="cart-total-line">
                <span>Shipping</span>
                <span>${state.shippingFee === 0 ? 'FREE' : formatPrice(state.shippingFee)}</span>
              </div>
              <div class="cart-total-line final-line">
                <span>Total Amount</span>
                <span>${formatPrice(state.grandTotal)}</span>
              </div>
            </div>

            <!-- Guarantee Note -->
            <div style="margin-top: 20px; padding: 12px; background-color: var(--color-bg-primary); border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--color-text-secondary); line-height: 1.5;">
              🔒 <strong>Floree Buyer Protection:</strong> Dispatched in luxury presentation boxes with tamper-proof security seals and insured courier transit.
            </div>

          </div>

        </div>

        <!-- Order Confirmation Container (Initially Hidden) -->
        <div id="order-confirmation-container" style="display: none;"></div>

      </div>
    </div>
  `;
}

export function initCheckoutView() {
  const form = document.getElementById('checkout-form');
  const mainGrid = document.getElementById('checkout-main-grid');
  const confirmContainer = document.getElementById('order-confirmation-container');

  if (!form) return;

  // Payment radio options handler
  document.querySelectorAll('.payment-option-label').forEach(label => {
    label.addEventListener('click', () => {
      document.querySelectorAll('.payment-option-label').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
      const radio = label.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const method = label.getAttribute('data-method');
      const detailsBox = document.getElementById('payment-details-box');
      if (!detailsBox) return;

      if (method === 'upi') {
        detailsBox.innerHTML = `
          <label class="form-label">Enter Virtual Payment Address (UPI ID)</label>
          <input type="text" id="upi-id-input" class="form-input" placeholder="e.g. yourname@okhdfcbank" value="customer@upi">
          <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 6px;">
            You will receive a simulated instant verification notification.
          </p>
        `;
      } else if (method === 'card') {
        detailsBox.innerHTML = `
          <div class="form-group" style="margin-bottom: 8px;">
            <label class="form-label">Card Number</label>
            <input type="text" class="form-input" placeholder="4111 2222 3333 4444" maxlength="19">
          </div>
          <div class="form-row-2">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">Expiry MM/YY</label>
              <input type="text" class="form-input" placeholder="12/28" maxlength="5">
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">CVV / CVC</label>
              <input type="password" class="form-input" placeholder="•••" maxlength="4">
            </div>
          </div>
        `;
      } else if (method === 'netbanking') {
        detailsBox.innerHTML = `
          <label class="form-label">Select Your Bank</label>
          <select class="form-select">
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            <option>State Bank of India</option>
            <option>Axis Bank</option>
            <option>Kotak Mahindra Bank</option>
          </select>
        `;
      } else if (method === 'cod') {
        detailsBox.innerHTML = `
          <p style="font-size: 0.8125rem; color: var(--color-text-secondary);">
            Cash on Delivery is available for your address. Please keep exact cash of <strong>${formatPrice(cartStore.getState().grandTotal)}</strong> ready at the time of delivery.
          </p>
        `;
      }
    });
  });

  // Submit Order Form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation
    const email = document.getElementById('cust-email').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const fname = document.getElementById('cust-fname').value.trim();
    const lname = document.getElementById('cust-lname').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const city = document.getElementById('cust-city').value.trim();
    const stateVal = document.getElementById('cust-state').value;
    const pincode = document.getElementById('cust-pincode').value.trim();

    let valid = true;

    function check(val, errId, msg) {
      const errEl = document.getElementById(errId);
      if (!val) {
        if (errEl) errEl.textContent = msg;
        valid = false;
      } else {
        if (errEl) errEl.textContent = '';
      }
    }

    check(email, 'cust-email-error', 'Please enter your email');
    check(phone, 'cust-phone-error', 'Please enter your mobile phone');
    check(fname, 'cust-fname-error', 'First name is required');
    check(lname, 'cust-lname-error', 'Last name is required');
    check(address, 'cust-address-error', 'Delivery address is required');
    check(city, 'cust-city-error', 'City is required');
    check(stateVal, 'cust-state-error', 'Please select state');
    check(pincode, 'cust-pincode-error', '6-digit PIN code required');

    if (!valid) {
      toast.show('Please fill in all required delivery fields.', 'info');
      return;
    }

    const state = cartStore.getState();
    const orderId = `FLR-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date();
    const estDate = new Date(today.setDate(today.getDate() + 3)).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const orderItems = [...state.items];
    const finalTotal = state.grandTotal;

    // Show processing button state
    const submitBtn = document.getElementById('place-order-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing Payment & Authorizing...';
    }

    setTimeout(() => {
      // Clear cart
      cartStore.clearCart();

      // Render Confirmation Receipt
      if (mainGrid && confirmContainer) {
        mainGrid.style.display = 'none';
        confirmContainer.style.display = 'block';

        confirmContainer.innerHTML = `
          <div class="order-confirmation-card">
            <div class="confirm-check-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <span class="subheading">Order Confirmed</span>
            <h2 style="font-size: 2.2rem; margin-bottom: 6px;">Thank You, ${fname}!</h2>
            <p style="color: var(--color-text-secondary); font-size: 1.05rem;">
              Your order has been received and is being prepared in our atelier.
            </p>

            <div class="order-id-badge">
              ORDER REFERENCE: ${orderId}
            </div>

            <table class="confirm-details-table">
              <tr>
                <td>Estimated Delivery Date</td>
                <td><strong>${estDate}</strong></td>
              </tr>
              <tr>
                <td>Delivery Address</td>
                <td>${address}, ${city}, ${stateVal} – ${pincode}</td>
              </tr>
              <tr>
                <td>Recipient Details</td>
                <td>${fname} ${lname} (${phone})</td>
              </tr>
              <tr>
                <td>Order Confirmation Sent To</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td>Total Paid</td>
                <td><strong>${formatPrice(finalTotal)}</strong></td>
              </tr>
            </table>

            <div style="display: flex; gap: 12px; justify-content: center; margin-top: 32px; flex-wrap: wrap;">
              <a href="#/shop" class="btn btn-primary btn-lg">Continue Shopping</a>
              <button type="button" class="btn btn-secondary btn-lg" onclick="window.print()">Print Order Receipt</button>
            </div>
          </div>
        `;

        toast.show(`Order ${orderId} placed successfully!`, 'success', 5000);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 1200);
  });
}

