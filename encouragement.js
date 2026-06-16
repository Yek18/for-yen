// ═══════════════════════════════════════════════
//  DAILY ENCOURAGEMENT — daily-encouragement.js
// ═══════════════════════════════════════════════

const MESSAGES = [
  { emoji: '🌸', message: 'You are enough.',                    sub: 'Exactly as you are, right now, in this moment.' },
  { emoji: '✨', message: 'I believe in you.',                  sub: 'More than you could ever know, and more than you believe in yourself.' },
  { emoji: '💪', message: 'You are stronger than you think.',   sub: 'You have made it through every hard day so far. Every single one.' },
  { emoji: '💕', message: 'You are never alone.',               sub: 'Even when it feels that way, I am always with you in some corner of your heart.' },
  { emoji: '🌟', message: 'I will always support you.',         sub: 'No matter what happens, no matter how far, no matter when.' },
  { emoji: '🦋', message: 'You are doing better than you think.',sub: 'Slow progress is still progress. Quiet days still count.' },
  { emoji: '🌷', message: 'Your feelings are valid.',           sub: 'All of them. The happy ones, the hard ones, and everything in between.' },
  { emoji: '💫', message: 'You deserve good things.',           sub: 'Rest, love, joy, softness — you deserve all of it without earning it first.' },
  { emoji: '🌙', message: 'It\'s okay to rest.',               sub: 'You don\'t have to be productive to have worth. Just being is enough.' },
  { emoji: '❤️', message: 'You are so deeply loved.',          sub: 'By me, by the people around you, by life itself.' },
];

const QUICK_RESPONSES = {
  'I need a hug 🤗':        { emoji: '🫂', message: 'Come here. I\'ve got you.',              sub: 'You are held, always.' },
  'I\'m feeling lost 🌫️':  { emoji: '🕯️', message: 'It\'s okay to not know the way right now.', sub: 'The fog always lifts. I\'ll be here when it does.' },
  'I did something hard 🌟':{ emoji: '👑', message: 'Look at you. I knew you could.',          sub: 'Every hard thing you do makes you more you.' },
  'I miss you 💌':          { emoji: '💌', message: 'I miss you too. More than you know.',      sub: 'But I\'m always close, in all the small places.' },
  'I\'m proud of myself ✨':{ emoji: '🎉', message: 'YES. You should be. I am too.',           sub: 'This feeling is yours. Sit in it. You earned it.' },
  'I feel overwhelmed 🌊':  { emoji: '🌊', message: 'Take one breath. Just one.',              sub: 'You don\'t have to handle everything right now.' },
};

let lastIndex = -1;

function setDisplay(emoji, message, sub) {
  const eEl = document.getElementById('enc-emoji');
  const mEl = document.getElementById('enc-message');
  const sEl = document.getElementById('enc-sub');
  if (!eEl) return;
  [eEl, mEl, sEl].forEach(el => el.style.opacity = '0');
  setTimeout(() => {
    eEl.textContent = emoji;
    mEl.textContent = `"${message}"`;
    sEl.textContent = sub;
    [eEl, mEl, sEl].forEach(el => el.style.opacity = '1');
  }, 260);
}

function showRandom() {
  let idx;
  do { idx = Math.floor(Math.random() * MESSAGES.length); } while (idx === lastIndex && MESSAGES.length > 1);
  lastIndex = idx;
  const m = MESSAGES[idx];
  setDisplay(m.emoji, m.message, m.sub);
}

export function renderEncouragementContent() {
  const first = MESSAGES[0];
  const quickBtns = Object.keys(QUICK_RESPONSES).map(k =>
    `<button class="mini-card enc-quick" data-key="${k}">${k}</button>`
  ).join('');

  return `
    <div class="back-nav">
      <button class="btn btn-back" id="enc-back">← Back</button>
    </div>
    <div class="section-header">
      <span class="eyebrow">✦ just for you, right now ✦</span>
      <h2>When You Need A Reminder</h2>
      <div class="section-divider">💕</div>
    </div>
    <div class="encouragement-area">
      <div class="encouragement-display">
        <span class="encouragement-emoji" id="enc-emoji" style="transition:opacity 0.26s">${first.emoji}</span>
        <div class="encouragement-message" id="enc-message" style="transition:opacity 0.26s">"${first.message}"</div>
        <p class="encouragement-sub" id="enc-sub" style="transition:opacity 0.26s">${first.sub}</p>
        <button class="btn btn-primary" id="enc-next" style="margin-top:1.5rem">Another reminder ✨</button>
      </div>
      <div style="margin-top:2rem;text-align:center">
        <h3 style="margin-bottom:1rem;color:var(--text-soft);font-size:1rem;font-family:'Dancing Script',cursive">How are you feeling right now?</h3>
        <div class="mini-cards">${quickBtns}</div>
      </div>
    </div>
  `;
}

export function attachEncouragementEvents(onBack) {
  document.getElementById('enc-back')?.addEventListener('click', onBack);
  document.getElementById('enc-next')?.addEventListener('click', showRandom);

  document.querySelectorAll('.enc-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const r = QUICK_RESPONSES[btn.dataset.key];
      if (r) setDisplay(r.emoji, r.message, r.sub);
    });
  });
}