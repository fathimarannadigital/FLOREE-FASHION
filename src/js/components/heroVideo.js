// src/js/components/heroVideo.js
// FLOREE - Master Haute Couture Hero Video Component

export function renderHeroSection() {
  return `
    <section class="hero-section" id="hero-section" aria-label="Haute Couture Campaign Hero">
      
      <!-- Video Background Container -->
      <div class="hero-video-wrapper" id="hero-video-wrapper">
        <video 
          id="hero-video" 
          class="hero-video" 
          autoplay 
          muted 
          loop 
          playsinline 
          preload="auto"
          poster="assets/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <!-- Ultra-Premium Italian Haute Couture Campaign Film -->
          <source src="assets/videos/couture-film.webm" type="video/webm">
          <source src="assets/videos/couture-film.mp4" type="video/mp4">
          <!-- Backup Luxury Campaign Video -->
          <source src="assets/videos/drome-luxury-couture.webm" type="video/webm">
          <source src="assets/videos/drome-luxury-couture.mp4" type="video/mp4">
        </video>

        <!-- High-Fashion Editorial Poster Fallback -->
        <img 
          src="assets/images/hero-poster.jpg" 
          alt="FLOREE Haute Couture Campaign" 
          class="hero-fallback-image"
          id="hero-fallback-image"
        >
      </div>

      <!-- Luxury Dark Editorial Gradient Overlay -->
      <div class="hero-overlay"></div>

      <!-- Hero Typography & CTAs -->
      <div class="hero-content">
        
        <!-- Small Text / Pre-heading -->
        <span class="hero-pretitle">THE NEW SEASON COLLECTION</span>

        <!-- Main Heading -->
        <h1 class="hero-title">
          “Fashion is more than what you wear. It’s how you express yourself.”
        </h1>
        
        <!-- Subheading -->
        <p class="hero-subtitle">
          Discover contemporary styles designed for confidence, elegance and individuality.
        </p>

        <!-- Call to Action Buttons -->
        <div class="hero-cta-group">
          <a href="#/collections" class="btn btn-luxury-primary btn-lg">SHOP THE COLLECTION</a>
          <a href="#/story" class="btn btn-luxury-outline btn-lg">DISCOVER FLOREE</a>
        </div>

      </div>

      <!-- Atelier Editorial Coordinates (Bottom Left) -->
      <div class="hero-atelier-info">
        <span class="atelier-label">FLOREE ATELIER</span>
        <span class="atelier-coords">Elegance in Every Expression • Limited Edition Silhouettes</span>
      </div>

      <!-- Minimal Audio Control Bezel (Bottom Right) -->
      <div class="hero-controls" aria-label="Campaign Video Controls">
        <button class="hero-control-btn" id="hero-mute-toggle" aria-label="Toggle Sound" title="Toggle Sound">
          <svg id="icon-sound-muted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
          <svg id="icon-sound-unmuted" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" style="display:none;">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>

        <button class="hero-control-btn" id="hero-play-toggle" aria-label="Toggle Playback" title="Play / Pause">
          <svg id="icon-video-pause" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
          <svg id="icon-video-play" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" style="display:none;">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>

      <!-- Animated Scroll Down Indicator -->
      <a href="#new-season-section" class="hero-scroll-indicator" aria-label="Scroll to Discover Collections">
        <span>Explore Collection</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </a>

    </section>
  `;
}

export function initHeroVideo() {
  const video = document.getElementById('hero-video');
  const fallback = document.getElementById('hero-fallback-image');
  const muteBtn = document.getElementById('hero-mute-toggle');
  const playBtn = document.getElementById('hero-play-toggle');
  const iconMuted = document.getElementById('icon-sound-muted');
  const iconUnmuted = document.getElementById('icon-sound-unmuted');
  const iconPause = document.getElementById('icon-video-pause');
  const iconPlay = document.getElementById('icon-video-play');

  if (!video) return;

  // Autoplay attempt
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      if (fallback) fallback.style.opacity = '0';
    }).catch(() => {
      // If browser prevents autoplay, display fallback poster image gracefully
      if (fallback) fallback.style.opacity = '1';
    });
  }

  // Mute / Unmute
  if (muteBtn && iconMuted && iconUnmuted) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        iconMuted.style.display = 'block';
        iconUnmuted.style.display = 'none';
      } else {
        iconMuted.style.display = 'none';
        iconUnmuted.style.display = 'block';
      }
    });
  }

  // Play / Pause
  if (playBtn && iconPause && iconPlay) {
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        iconPause.style.display = 'block';
        iconPlay.style.display = 'none';
      } else {
        video.pause();
        iconPause.style.display = 'none';
        iconPlay.style.display = 'block';
      }
    });
  }
}
