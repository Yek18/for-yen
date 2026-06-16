// ═══════════════════════════════════════════════
//  LOVE LETTERS — love-letters.js
// ═══════════════════════════════════════════════

const LETTERS = [
  {
    id: 'tired', label: 'When you\'re tired', seal: '🌙',
    to: 'To you, on a tired day —',
    body: `You don't have to do everything today. You don't have to be okay. Rest is not a reward for finishing things — it is something you deserve just because you exist.\n\nI know how hard you push. I know how much you carry, even when you try to make it look easy. And I want you to know that it's okay to put it all down for a little while.\n\nThe world will still be there. Your dreams will still be there. But right now, please be kind to yourself. Drink water. Close your eyes. Let the day be soft.\n\nI am so proud of you for getting this far. Really. Even on the days that don't feel like enough — you are always enough.`,
    sign: 'All my love, Jolex ❤️',
  },
  {
    id: 'sad', label: 'When you\'re sad', seal: '💧',
    to: 'To you, in the middle of something hard —',
    body: `Let yourself feel it. All of it. Sadness is not weakness — it means you cared, and caring is one of the most beautiful things about you.\n\nYou don't have to explain it. You don't have to fix it right now. Sometimes it just needs to move through you, and that takes time, and that is perfectly okay.\n\nI wish I could be there with you in person, to sit quietly beside you and let you know without words that you are not alone in this. But since I can't, I hope these words do something similar.\n\nCry if you need to. Eat something soft. Wrap yourself in something warm. And know that on the other side of this sadness, there is still so much beauty waiting for you — and I'll be here for all of it.`,
    sign: 'Holding you from here, Jolex 💕',
  },
  {
    id: 'miss', label: 'When you miss me', seal: '💌',
    to: 'To you, when the distance feels heavy —',
    body: `Missing someone means you have something real. Something worth missing. And what we have is so real — even when the miles or the days or the busyness try to make it feel far away.\n\nI think about you more than you probably know. I carry little pieces of you everywhere I go — in the songs that remind me of you, in the things I want to tell you first, in the way the best moments feel incomplete until I've shared them with you.\n\nSo even when we can't be in the same place: I am there. In the warm spaces. In the quiet. In the little things that feel a little bit like us.\n\nDistance is just a temporary state. What I feel for you? That has no distance at all.`,
    sign: 'Always thinking of you, Jolex 🌙',
  },
  {
    id: 'doubt', label: 'When you doubt yourself', seal: '⭐',
    to: 'To you, on a day when you\'re not sure —',
    body: `I need you to hear this: I have never once doubted you. Not even for a moment.\n\nThe things you call flaws, I call details. The things you call failures, I call lessons you learned the hard way. The version of yourself you think isn't enough? That version is already more than you realize.\n\nYou are someone who tries. Who cares. Who keeps going even when it's hard. Those are not small things — those are the rarest and most important things.\n\nWhenever your mind tries to convince you that you're not smart enough, not good enough, not enough — please remember that the voice saying those things is lying to you. And then please come back here and let me tell you the truth.\n\nYou are extraordinary. I have seen it. I know.`,
    sign: 'Your biggest believer, Jolex ✨',
  },
];

function buildEnvelope(letter) {
  const paras = letter.body.split('\n\n').map(p => `<p style="margin-bottom:1.1rem">${p}</p>`).join('');
  return `
    <div class="envelope-wrapper" data-id="${letter.id}">
      <!-- Closed envelope -->
      <div class="envelope-closed" id="env-closed-${letter.id}" role="button" tabindex="0" aria-label="Open: ${letter.label}">
        <div class="envelope-body">
          <div class="envelope-flap" id="env-flap-${letter.id}"></div>
          <div class="envelope-left-fold"></div>
          <div class="envelope-right-fold"></div>
          <div class="envelope-seal">${letter.seal}</div>
          <div class="envelope-label">${letter.label}</div>
        </div>
      </div>
      <!-- Open letter -->
      <div class="letter-content" id="letter-open-${letter.id}">
        <div class="letter-lines">
          <span class="letter-to">${letter.to}</span>
          <div class="letter-body">${paras}</div>
          <span class="letter-sign">${letter.sign}</span>
        </div>
        <button class="letter-close-btn" data-close="${letter.id}">✦ Close this letter ✦</button>
      </div>
    </div>
  `;
}

function openEnvelope(id) {
  const closed = document.getElementById(`env-closed-${id}`);
  const flap   = document.getElementById(`env-flap-${id}`);
  const open   = document.getElementById(`letter-open-${id}`);
  if (!closed || !open) return;
  flap.classList.add('envelope-flap-open');
  setTimeout(() => { closed.style.display = 'none'; open.classList.add('open'); }, 420);
}

function closeEnvelope(id) {
  const closed = document.getElementById(`env-closed-${id}`);
  const flap   = document.getElementById(`env-flap-${id}`);
  const open   = document.getElementById(`letter-open-${id}`);
  if (!closed || !open) return;
  open.classList.remove('open');
  closed.style.display = '';
  setTimeout(() => flap.classList.remove('envelope-flap-open'), 50);
}

export function renderLettersContent() {
  return `
    <div class="back-nav">
      <button class="btn btn-back" id="letters-back">← Back</button>
    </div>
    <div class="section-header">
      <span class="eyebrow">✦ written just for you ✦</span>
      <h2>Letters You'll Always Have</h2>
      <div class="section-divider">💌</div>
      <p style="max-width:480px;margin:1rem auto 0;font-style:italic;font-size:0.95rem">
        Tap an envelope to open it. These words are always here when you need them.
      </p>
    </div>
    <div class="envelopes-grid">
      ${LETTERS.map(buildEnvelope).join('')}
    </div>
  `;
}

export function attachLettersEvents(onBack) {
  document.getElementById('letters-back')?.addEventListener('click', onBack);
  LETTERS.forEach(letter => {
    const closed = document.getElementById(`env-closed-${letter.id}`);
    closed?.addEventListener('click', () => openEnvelope(letter.id));
    closed?.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openEnvelope(letter.id); });
  });
  document.querySelectorAll('.letter-close-btn').forEach(btn => {
    btn.addEventListener('click', () => closeEnvelope(btn.dataset.close));
  });
}