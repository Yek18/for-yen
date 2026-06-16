// ═══════════════════════════════════════════════
//  SOUNDTRACK SECTION — soundtrack-section.js
// ═══════════════════════════════════════════════

const SONGS = [
  { title: 'Enchanted',       era: 'Speak Now',        note: '✨', meaning: 'That overwhelming, giddy feeling of meeting someone and hoping with everything you have that they feel it too. This one always makes me think of the first time I really saw you.' },
  { title: 'Daylight',        era: 'Lover',            note: '🌅', meaning: 'About discovering that love doesn\'t have to be dramatic or painful — it can be soft, golden, and safe. That\'s what you are to me. My daylight.' },
  { title: 'Long Live',       era: 'Speak Now',        note: '👑', meaning: 'A celebration of every beautiful thing built together. Every memory, every milestone, every hard-won moment — long may they live.' },
  { title: 'Invisible String',era: 'Folklore',         note: '🧵', meaning: 'The idea that something invisible tied us together long before we ever knew. Like the universe was quietly arranging all the little moments that led us to each other.' },
  { title: 'Fearless',        era: 'Fearless',         note: '🌧️', meaning: 'Dancing in the rain and not caring about anything except right now. Being so happy you could cry. That\'s exactly how I feel with you.' },
  { title: 'Lover',           era: 'Lover',            note: '💛', meaning: 'Simple, tender, completely honest love. The kind where you say exactly what you mean and mean every word. My lover, my best friend.' },
  { title: 'Mine',            era: 'Speak Now',        note: '🌊', meaning: 'A love story told from beginning to middle to forever. The story of someone who changes your whole understanding of what home feels like.' },
  { title: 'You Are In Love', era: 'Vault — 1989',    note: '🕯️', meaning: 'The quiet, ordinary moments that end up being the most extraordinary ones. Coffee and toast. Morning light. The small things that become everything.' },
  { title: 'New Year\'s Day', era: '1989',             note: '🎊', meaning: 'About staying — the morning after, the ordinary days, the parts everyone overlooks. I want to be there for all of them with you.' },
  { title: 'Sweet Nothing',   era: 'Midnights',        note: '🌙', meaning: 'When the world is loud and demanding and exhausting, you are the sweet nothing — the quiet, the calm, the person who just lets me be.' },
];

export function renderSoundtrackContent() {
  const cards = SONGS.map(s => `
    <div class="song-card">
      <span class="song-era">${s.era}</span>
      <div class="song-title">"${s.title}"</div>
      <p class="song-meaning">${s.meaning}</p>
      <span class="song-note">${s.note} this one is for you</span>
    </div>
  `).join('');

  return `
    <div class="back-nav">
      <button class="btn btn-back" id="soundtrack-back">← Back</button>
    </div>
    <div class="section-header">
      <span class="eyebrow">✦ playing on repeat ✦</span>
      <h2>The Soundtrack of You</h2>
      <div class="section-divider">🎵</div>
      <p style="max-width:520px;margin:1rem auto 0;font-style:italic;font-size:0.95rem">
        Every song tells a story. These are the ones that tell yours.
      </p>
    </div>
    <div class="soundtrack-grid">${cards}</div>
  `;
}

export function attachSoundtrackEvents(onBack) {
  document.getElementById('soundtrack-back')?.addEventListener('click', onBack);
}