// ═══════════════════════════════════════════════
//  FINAL MESSAGE — final-message.js
// ═══════════════════════════════════════════════

export function renderFinalContent() {
  return `
    <div style="display:flex;align-items:center;justify-content:center;min-height:80vh;padding:1rem">
      <div class="glass-card final-card">
        <span class="final-always">Always</span>
        <span class="final-stars">✦ ✦ ✦</span>
        <p class="final-message">
          No matter where life takes us, I hope this little corner of the internet
          reminds you that someone believes in you, supports you, thinks about you,
          and loves you every single day.
        </p>
        <p class="final-message">
          Whenever things feel heavy, you can always come back here —
          and remember you are never, ever alone.
        </p>
        <div style="width:60px;height:1px;background:linear-gradient(to right,transparent,var(--gold),transparent);margin:2rem auto"></div>
        <span class="final-signature">Forever yours, Jolex ❤️</span>
        <span class="final-heart">❤️</span>
        <div style="margin-top:2.5rem">
          <button class="btn btn-primary" id="final-hero-btn">🌸 Back to the beginning</button>
        </div>
      </div>
    </div>
  `;
}

export function attachFinalEvents(onBack) {
  document.getElementById('final-back')?.addEventListener('click', onBack);
  document.getElementById('final-hero-btn')?.addEventListener('click', onBack);
}