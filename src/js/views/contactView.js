// src/js/views/contactView.js
// Floree Fashion - Master Contact & Concierge View

import { toast } from '../components/toast.js';

export function renderContactView() {
  return `
    <section class="contact-hero">
      <div class="container" style="max-width: 720px; margin: 0 auto;">
        <span class="subheading">Client Concierge</span>
        <h1 style="font-size: clamp(2.4rem, 5vw, 4rem); margin-bottom: 12px;">We'd Love to Hear From You.</h1>
        <p style="color: var(--color-text-secondary); font-size: 1.1rem; line-height: 1.7;">
          Have a question regarding fit, fabric, custom sizing, or delivery? Our dedicated styling concierge is here to assist you.
        </p>
      </div>
    </section>

    <div class="container section-spacing">
      <div class="contact-layout-grid">
        
        <!-- Left: Contact Form -->
        <div class="contact-form-card">
          <h2 style="font-size: 1.85rem; margin-bottom: 8px;">Send a Message</h2>
          <p style="color: var(--color-text-secondary); font-size: 0.9375rem; margin-bottom: 24px;">
            Fill in your details below and a client advisor will respond within 24 business hours.
          </p>

          <form id="contact-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label" for="contact-name">Your Full Name *</label>
                <input type="text" id="contact-name" class="form-input" placeholder="e.g. Priyadarshini Mehta" required>
                <span class="form-error" id="contact-name-error"></span>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Email Address *</label>
                <input type="email" id="contact-email" class="form-input" placeholder="e.g. name@example.com" required>
                <span class="form-error" id="contact-email-error"></span>
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label" for="contact-phone">Phone Number (Optional)</label>
                <input type="tel" id="contact-phone" class="form-input" placeholder="+91 98200 12345">
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-subject">Inquiry Subject *</label>
                <select id="contact-subject" class="form-select" required>
                  <option value="">Select a Subject</option>
                  <option value="sizing">Size & Fit Consultation</option>
                  <option value="order">Order Status & Dispatch</option>
                  <option value="exchange">Return or Exchange Request</option>
                  <option value="press">Press & Editorial Inquiries</option>
                  <option value="general">General Brand Inquiries</option>
                </select>
                <span class="form-error" id="contact-subject-error"></span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-message">Your Message *</label>
              <textarea id="contact-message" class="form-textarea" rows="5" placeholder="How can we assist you with your Floree style today?" required></textarea>
              <span class="form-error" id="contact-message-error"></span>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-full" id="contact-submit-btn">
              Send Message to Concierge
            </button>
          </form>

          <!-- Success Box -->
          <div id="contact-success-notice" class="contact-success-notice">
            <h3 style="font-family: var(--font-serif); margin-bottom: 6px;">Thank You for Reaching Out</h3>
            <p style="font-size: 0.9375rem;">Your message has been received by our personal styling concierge. We will get back to you shortly.</p>
          </div>
        </div>

        <!-- Right: Studio Info & WhatsApp Quick Chat -->
        <div class="contact-info-col">
          
          <div class="contact-info-box">
            <h3>Direct Contact</h3>

            <div class="contact-method-line">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong>Email Us:</strong><br>
                <span>concierge@floreefashion.com</span>
              </div>
            </div>

            <div class="contact-method-line">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <strong>Call Us:</strong><br>
                <span>+91 98200 12345 (Mon–Sat, 10 AM – 7 PM IST)</span>
              </div>
            </div>

            <div class="contact-method-line">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>Floree Atelier:</strong><br>
                <span>Level 3, Design Pavilion, Linking Road, Bandra West, Mumbai, MH 400050</span>
              </div>
            </div>

            <!-- WhatsApp Instant Connect -->
            <a href="https://wa.me/919820012345?text=Hello%20Floree%20Fashion,%20I%20would%20like%20assistance%20with%20a%20style." target="_blank" rel="noopener" class="whatsapp-direct-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
              </svg>
              <span>Chat with Stylist on WhatsApp</span>
            </a>
          </div>

          <!-- FAQ Accordion -->
          <div class="contact-info-box">
            <h3>Frequently Asked Questions</h3>

            <div class="accordion" id="contact-faq-accordion">
              <div class="accordion-item open">
                <button type="button" class="accordion-trigger">
                  <span>How long does delivery take?</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    Orders are dispatched from Mumbai within 24 hours. Metros receive orders in 2–3 business days; all other regions within 3–5 business days.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <button type="button" class="accordion-trigger">
                  <span>What is your exchange policy?</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    We offer a 7-day complimentary doorstep reverse pickup for exchanges and size adjustments. Garments must have brand tags intact.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <button type="button" class="accordion-trigger">
                  <span>Can I request bespoke sizing?</span>
                  <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="accordion-content">
                  <div class="accordion-body">
                    Yes! For custom length alterations or special event fitting, contact our concierge on WhatsApp with your measurements.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  `;
}

export function initContactView() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success-notice');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value.trim();

      let valid = true;

      function check(val, id, msg) {
        const el = document.getElementById(id);
        if (!val) {
          if (el) el.textContent = msg;
          valid = false;
        } else {
          if (el) el.textContent = '';
        }
      }

      check(name, 'contact-name-error', 'Please enter your name');
      check(email, 'contact-email-error', 'Please enter your email');
      check(subject, 'contact-subject-error', 'Please select a subject');
      check(message, 'contact-message-error', 'Please enter your message');

      if (!valid) {
        toast.show('Please fill in all required fields.', 'info');
        return;
      }

      form.style.display = 'none';
      if (successBox) successBox.style.display = 'block';
      toast.show('Thank you! Your message has been sent to our concierge.', 'success');
    });
  }

  // FAQ Accordion
  const accordion = document.getElementById('contact-faq-accordion');
  if (accordion) {
    accordion.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        item.classList.toggle('open');
      });
    });
  }
}

