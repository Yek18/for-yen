// ═══════════════════════════════════════════════
//  HERO SECTION — hero-section.js
// ═══════════════════════════════════════════════

export function renderHeroContent() {
  const floatingElements = ['✨', '🌸', '💫', '🦋', '⭐', '🌷', '💕', '🌟', '🍃', '💖'];
  const floats = floatingElements.map(el => {
    const left     = 5 + Math.random() * 90;
    const delay    = Math.random() * 12;
    const duration = 10 + Math.random() * 14;
    const size     = 0.9 + Math.random() * 0.9;
    return `<span class="float-el" style="left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s;font-size:${size}rem">${el}</span>`;
  }).join('');

  return `
    <div class="hero-floats">${floats}</div>
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;padding:2rem 1.5rem;position:relative;z-index:1">
      <div class="glass-card hero-card">
        <span class="hero-badge">✦ Just For You ✦</span>

        <h1 class="hero-title">For My<br><span>Favorite Person</span> ❤️</h1>

        <p class="hero-subtitle">
          A little corner of the internet dedicated to the girl
          who makes every day feel a little brighter.
        </p>

        <div class="hero-divider">✦ ✦ ✦</div>

        <div class="hero-buttons">
          <div class="hero-btn-group">
            <button class="btn btn-primary" id="btn-open-heart">🌸 Open My Heart</button>
            <span class="hero-btn-hint">→ Gallery &amp; your soundtrack</span>
          </div>
          <div class="hero-btn-group">
            <button class="btn btn-secondary" id="btn-today-reminder">💌 Today's Reminder</button>
            <span class="hero-btn-hint">→ Encouragement &amp; letters</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function attachHeroEvents(onOpenHeart, onTodayReminder) {
  document.getElementById('btn-open-heart')?.addEventListener('click', onOpenHeart);
  document.getElementById('btn-today-reminder')?.addEventListener('click', onTodayReminder);
}