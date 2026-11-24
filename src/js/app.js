// src/js/app.js
// FLOREE - Master Application Bootstrapper

import { router } from './router.js';
import { cartDrawer } from './components/cartDrawer.js';
import { searchModal } from './components/searchModal.js';
import { quickViewModal } from './components/quickViewModal.js';
import { sizeGuideModal } from './components/sizeGuideModal.js';
import { accountModal } from './components/accountModal.js';
import { toast } from './components/toast.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('FLOREE — Elegance in Every Expression. Initializing...');
  
  // Start client-side router
  router.handleRoute();

  // Reveal document smoothly
  document.body.style.opacity = '1';
});
