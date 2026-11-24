// src/js/components/sizeGuideModal.js
// Floree Fashion - Size Guide Modal Dialog

class SizeGuideModal {
  constructor() {
    this.modalOverlay = null;
    this.unit = 'in'; // 'in' or 'cm'
    this.init();
  }

  init() {
    const existing = document.getElementById('size-guide-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'size-guide-overlay';
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');

    overlay.innerHTML = `
      <div class="modal-dialog" style="max-width: 680px;">
        <button class="modal-close" id="size-guide-close-btn" aria-label="Close Size Guide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="size-guide-modal-content">
          <span class="subheading">Floree Fit & Proportions</span>
          <h2 style="font-size: 2rem; margin-bottom: 8px;">Garment Size Guide</h2>
          <p style="font-size: 0.9375rem; color: var(--color-text-secondary); margin-bottom: 20px;">
            Our garments are tailored with modern European proportions and gentle ease. Refer to the body measurement chart below to find your ideal fit.
          </p>

          <!-- Unit Selector Toggle -->
          <div style="display: flex; gap: 8px; margin-bottom: 16px;">
            <button type="button" class="btn btn-sm btn-primary" id="unit-btn-in">Inches (in)</button>
            <button type="button" class="btn btn-sm btn-secondary" id="unit-btn-cm">Centimeters (cm)</button>
          </div>

          <!-- Sizing Table -->
          <div style="overflow-x: auto;">
            <table class="size-table" id="size-guide-table">
              <!-- Dynamically populated -->
            </table>
          </div>

          <!-- Measurement Tips -->
          <div style="margin-top: 24px; padding: 16px; background-color: var(--color-bg-subtle); border-left: 2px solid var(--color-gold); font-size: 0.8125rem; line-height: 1.6;">
            <strong>How to Measure:</strong><br>
            • <strong>Bust:</strong> Measure around the fullest part of your bust, keeping the measuring tape comfortably parallel to the floor.<br>
            • <strong>Waist:</strong> Measure around the narrowest contour of your natural waistline, usually 1 inch above the naval.<br>
            • <strong>Hips:</strong> Stand with feet together and measure around the fullest curve of your hips and seat.<br>
            • <strong>Custom Assistance:</strong> Unsure between sizes? Reach out to our stylists at <em>concierge@floreefashion.com</em>.
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalOverlay = overlay;

    // Close listeners
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.close();
    });

    const closeBtn = document.getElementById('size-guide-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Unit toggle buttons
    const btnIn = document.getElementById('unit-btn-in');
    const btnCm = document.getElementById('unit-btn-cm');

    if (btnIn && btnCm) {
      btnIn.addEventListener('click', () => {
        this.unit = 'in';
        btnIn.className = 'btn btn-sm btn-primary';
        btnCm.className = 'btn btn-sm btn-secondary';
        this.renderTable();
      });
      btnCm.addEventListener('click', () => {
        this.unit = 'cm';
        btnCm.className = 'btn btn-sm btn-primary';
        btnIn.className = 'btn btn-sm btn-secondary';
        this.renderTable();
      });
    }

    // Global listener
    window.addEventListener('floree:open-size-guide', () => this.open());

    // ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOverlay.classList.contains('open')) {
        this.close();
      }
    });

    this.renderTable();
  }

  open() {
    this.modalOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  close() {
    this.modalOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  renderTable() {
    const table = document.getElementById('size-guide-table');
    if (!table) return;

    const dataIn = [
      { size: 'XS (US 0-2 / UK 6)', bust: '32 – 33"', waist: '24 – 25"', hips: '34 – 35"', length: '48"' },
      { size: 'S (US 4-6 / UK 8)', bust: '34 – 35"', waist: '26 – 27"', hips: '36 – 37"', length: '48.5"' },
      { size: 'M (US 8-10 / UK 10)', bust: '36 – 37"', waist: '28 – 29"', hips: '38 – 39"', length: '49"' },
      { size: 'L (US 12-14 / UK 12)', bust: '38 – 40"', waist: '30 – 32"', hips: '40 – 42"', length: '49.5"' },
      { size: 'XL (US 16 / UK 14)', bust: '41 – 43"', waist: '33 – 35"', hips: '43 – 45"', length: '50"' }
    ];

    const dataCm = [
      { size: 'XS (US 0-2 / UK 6)', bust: '81 – 84 cm', waist: '61 – 64 cm', hips: '86 – 89 cm', length: '122 cm' },
      { size: 'S (US 4-6 / UK 8)', bust: '86 – 89 cm', waist: '66 – 69 cm', hips: '91 – 94 cm', length: '123 cm' },
      { size: 'M (US 8-10 / UK 10)', bust: '91 – 94 cm', waist: '71 – 74 cm', hips: '96 – 99 cm', length: '124 cm' },
      { size: 'L (US 12-14 / UK 12)', bust: '96 – 102 cm', waist: '76 – 81 cm', hips: '102 – 107 cm', length: '126 cm' },
      { size: 'XL (US 16 / UK 14)', bust: '104 – 109 cm', waist: '84 – 89 cm', hips: '109 – 114 cm', length: '127 cm' }
    ];

    const list = this.unit === 'in' ? dataIn : dataCm;

    table.innerHTML = `
      <thead>
        <tr>
          <th>Size</th>
          <th>Bust</th>
          <th>Waist</th>
          <th>Hips</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        ${list.map(row => `
          <tr>
            <td><strong>${row.size}</strong></td>
            <td>${row.bust}</td>
            <td>${row.waist}</td>
            <td>${row.hips}</td>
            <td>${row.length}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }
}

export const sizeGuideModal = new SizeGuideModal();

