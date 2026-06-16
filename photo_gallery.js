// ═══════════════════════════════════════════════
//  PHOTO GALLERY — photo-gallery.js
// ═══════════════════════════════════════════════

const PHOTOS = [
  { emoji: '🌸', label: 'Add your photo here',  quote: 'You are capable of more than you know.' },
  { emoji: '✨', label: 'A favorite memory',    quote: 'One of my favorite people in the world.', corner: true },
  { emoji: '🌷', label: 'Your beautiful smile', quote: 'You make life brighter just by existing.' },
  { emoji: '💫', label: 'An adventure together',    quote: 'I am always proud of you.', corner: true },
  { emoji: '🦋', label: 'Your favorite place',  quote: 'The world is so much better with you in it.' },
  { emoji: '💖', label: 'Just you, always', quote: 'You deserve every good thing coming your way.', corner: true },
  { emoji: '🌙', label: 'Quiet moments', quote: 'Even in your quietest days, you still shine.' },
  { emoji: '☀️', label: 'Simple happiness', quote: 'You bring warmth without even trying.', corner: true },
  { emoji: '📸', label: 'Another memory', quote: 'I never get tired of moments with you.' },
  { emoji: '💌', label: 'For you', quote: 'I hope you always remember how special you are.' },
];

function buildPolaroid(photo) {
  const quoteHtml = photo.quote ? `<span class="caption-quote">"${photo.quote}"</span>` : '';
  return `
    <div class="polaroid" tabindex="0">
      <div class="polaroid-tape ${photo.corner ? 'tape-corner' : ''}"></div>
      <div class="polaroid-img-placeholder">
        <span style="font-size:2.8rem">${photo.emoji}</span>
        <span>${photo.label}</span>
      </div>
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
}