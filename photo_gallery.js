// ═══════════════════════════════════════════════
//  PHOTO GALLERY — photo-gallery.js
// ═══════════════════════════════════════════════

const PHOTOS = [
  { emoji: '🌸', label: 'Add your photo here', image: 'images/yen1.jpeg', quote: 'You are capable of more than you know.' },
  { emoji: '✨', label: 'A favorite memory',  image: 'images/yen2.jpeg',  quote: 'One of my favorite people in the world.', corner: true },
  { emoji: '🌷', label: 'Your beautiful smile', image: 'images/yen3.jpeg', quote: 'You make life brighter just by existing.' },
  { emoji: '💫', label: 'An adventure together', image: 'images/yen4.jpeg', quote: 'I am always proud of you.', corner: true },
  { emoji: '🦋', label: 'Your favorite place', image: 'images/yen5.jpeg', quote: 'The world is so much better with you in it.' },
  { emoji: '💖', label: 'Just you, always', image: 'images/yen6.jpeg', quote: 'You deserve every good thing coming your way.', corner: true },
  { emoji: '🌙', label: 'Quiet moments', image: 'images/yen7.jpeg', quote: 'Even in your quietest days, you still shine.' },
  { emoji: '☀️', label: 'Simple happiness', image: 'images/yen8.jpeg', quote: 'You bring warmth without even trying.', corner: true },
  { emoji: '📸', label: 'Another memory', image: 'images/yen9.jpeg', quote: 'I never get tired of moments with you.' },
  { emoji: '💌', label: 'For you', image: 'images/yen10.jpeg', quote: 'I hope you always remember how special you are.' },
];

function buildPolaroid(photo) {
  const quoteHtml = photo.quote ? `<span class="caption-quote">"${photo.quote}"</span>` : '';
  const imgSrc = photo.src || photo.image || null;
  const imgHtml = imgSrc
    ? `<div class="polaroid-img"><img src="${imgSrc}" alt="${photo.label}"></div>`
    : `
      <div class="polaroid-img-placeholder">
        <span style="font-size:2.8rem">${photo.emoji}</span>
        <span>${photo.label}</span>
      </div>
    `;

  return `
    <div class="polaroid" tabindex="0">
      <div class="polaroid-tape ${photo.corner ? 'tape-corner' : ''}"></div>
      ${imgHtml}
      <div class="polaroid-caption">
        ${quoteHtml}
      </div>
    </div>
  `;
}

export function renderGalleryContent() {
  return `
    <div class="back-nav">
      <button class="btn btn-back" id="gallery-back">← Back</button>
    </div>
    <div class="section-header">
      <span class="eyebrow">✦ a scrapbook of you ✦</span>
      <h2>Pictures That Make Me Smile</h2>
      <div class="section-divider">💕</div>
      <p style="max-width:500px;margin:1rem auto 0;font-style:italic;font-size:0.95rem">
        Every one of these photos lives in my heart forever.
      </p>
    </div>
    <div class="polaroid-grid">
      ${PHOTOS.map(buildPolaroid).join('')}
    </div>
  `;
}

export function attachGalleryEvents(onBack) {
  document.getElementById('gallery-back')?.addEventListener('click', onBack);
  // Open lightbox when a polaroid is clicked
  document.querySelectorAll('.polaroid').forEach(p => {
    p.addEventListener('click', (e) => {
      // prefer the actual image if present
      const imgEl = p.querySelector('.polaroid-img img');
      const src = imgEl ? imgEl.getAttribute('src') : null;
      const label = p.querySelector('.polaroid-img-placeholder span:last-child')?.textContent || p.querySelector('.polaroid-caption .caption-quote')?.textContent || '';
      if (src) openLightbox(src, label);
    });
  });
}

// --- Lightbox helpers ---
function ensureLightbox() {
  let lb = document.getElementById('site-lightbox');
  if (lb) return lb;
  lb = document.createElement('div');
  lb.id = 'site-lightbox';
  lb.innerHTML = `
    <div class="lightbox-inner" role="dialog" aria-modal="true">
      <button class="lightbox-close" aria-label="Close">✕</button>
      <div class="lightbox-polaroid"></div>
    </div>
  `;
  document.body.appendChild(lb);

  lb.addEventListener('click', (ev) => {
    if (ev.target === lb || ev.target.classList.contains('lightbox-close')) closeLightbox();
  });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeLightbox(); });
  return lb;
}

function openLightbox(src, caption, corner = false, label = '') {
  const lb = ensureLightbox();
  const container = lb.querySelector('.lightbox-polaroid');
  const polaroidHtml = `
    <div class="polaroid lightbox-polaroid-card" tabindex="0">
      <div class="polaroid-tape ${corner ? 'tape-corner' : ''}"></div>
      <div class="polaroid-img"><img src="${src}" alt="${label || ''}"></div>
      <div class="polaroid-caption">
        ${caption ? `<span class="caption-quote">"${caption.replace(/"/g, '&quot;')}"</span>` : ''}
      </div>
    </div>
  `;
  container.innerHTML = polaroidHtml;
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('site-lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  const img = lb.querySelector('.lightbox-img');
  if (img) img.src = '';
}