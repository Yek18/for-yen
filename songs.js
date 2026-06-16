// ═══════════════════════════════════════════════
//  SOUNDTRACK SECTION — soundtrack-section.js
// ═══════════════════════════════════════════════

const SONGS = [
  // ─────────────── DEBUT ───────────────
  {
    title: 'I’d Lie (From the Vault)',
    era: 'Debut',
    src: 'audio/Taylor Swift - I\'d Lie.mp3',
    albumImage: 'images/debut.jpg',
    note: '💭',
    meaning: 'A secret love you never confessed, but always carried quietly in your heart.'
  },
  {
    title: 'Our Song',
    era: 'Debut',
    src: 'audio/Taylor Swift - Our Song.mp3',
    albumImage: 'images/debut.jpg',
    note: '🎶',
    meaning: 'The kind of love that feels simple, young, and unforgettable.'
  },
  {
    title: 'Picture to Burn',
    era: 'Debut',
    src: 'audio/Taylor Swift - Picture to Burn.mp3',
    albumImage: 'images/debut.jpg',
    note: '🔥',
    meaning: 'The fire of letting go when something no longer deserves your heart.'
  },

  // ─────────────── REPUTATION ───────────────
  {
    title: 'Call It What You Want',
    era: 'Reputation',
    src: 'audio/Taylor Swift - Call It What You Want.mp3',
    albumImage: 'images/reputation.webp',
    note: '🖤',
    meaning: 'Finding peace and love in a world that misunderstood you.'
  },
  {
    title: 'Getaway Car',
    era: 'Reputation',
    src: 'audio/Taylor Swift - Getaway Car.mp3',
    albumImage: 'images/reputation.webp',
    note: '🚗',
    meaning: 'A love that started as escape but ended in realization.'
  },
  {
    title: 'King of My Heart',
    era: 'Reputation',
    src: 'audio/Taylor Swift - King of My Heart.mp3',
    albumImage: 'images/reputation.webp',
    note: '👑',
    meaning: 'A love that finally feels stable, real, and home.'
  },

  // ─────────────── LOVER ───────────────
  {
    title: 'Daylight',
    era: 'Lover',
    src: 'audio/Taylor Swift - Daylight.mp3',
    albumImage: 'images/lover.webp',
    note: '🌅',
    meaning: 'Love that is soft, safe, and finally without darkness.'
  },
  {
    title: 'Cruel Summer',
    era: 'Lover',
    src: 'audio/Taylor Swift - Cruel Summer.mp3',
    albumImage: 'images/lover.webp',
    note: '🔥',
    meaning: 'A chaotic, intense love you can’t escape even when you try.'
  },
  {
    title: 'London Boy',
    era: 'Lover',
    src: 'audio/Taylor Swift - London Boy.mp3',
    albumImage: 'images/lover.webp',
    note: '🇬🇧',
    meaning: 'A playful, dreamy love story full of adventure and charm.'
  },

  // ─────────────── FOLKLORE ───────────────
  {
    title: 'August',
    era: 'Folklore',
    src: 'audio/Taylor Swift - August.mp3',
    albumImage: 'images/folklore.webp',
    note: '🌊',
    meaning: 'A fleeting summer love that was never fully yours.'
  },
  {
    title: 'Mirrorball',
    era: 'Folklore',
    src: 'audio/Taylor Swift - Mirrorball.mp3',
    albumImage: 'images/folklore.webp',
    note: '✨',
    meaning: 'Trying to be everything for someone, always reflecting what they want.'
  },
  {
    title: 'Illicit Affairs',
    era: 'Folklore',
    src: 'audio/Taylor Swift - illicit affairs.mp3',
    albumImage: 'images/folklore.webp',
    note: '🕯️',
    meaning: 'A love that exists in hidden moments and quiet sacrifices.'
  },

  // ─────────────── EVERMORE ───────────────
  {
    title: 'Dorothea',
    era: 'Evermore',
    src: 'audio/Taylor Swift - dorothea.mp3',
    albumImage: 'images/evermore.webp',
    note: '🌙',
    meaning: 'Remembering someone who left and wondering if they think of you too.'
  },
  {
    title: 'Long Story Short',
    era: 'Evermore',
    src: 'audio/Taylor Swift - long story short.mp3',
    albumImage: 'images/evermore.webp',
    note: '📖',
    meaning: 'Surviving chaos and finding your way back to peace.'
  },
  {
    title: 'Evermore',
    era: 'Evermore',
    src: 'audio/Taylor Swift - evermore.mp3',
    albumImage: 'images/evermore.webp',
    note: '🌧️',
    meaning: 'Learning that pain passes, but love still stays.'
  },

  // ─────────────── FEARLESS ───────────────
  {
    title: 'The Way I Loved You',
    era: 'Fearless',
    src: 'audio/Taylor Swift - The Way I Loved You.mp3',
    albumImage: 'images/fearless.png',
    note: '💔',
    meaning: 'Missing the chaos of a love that felt intense and real.'
  },
  {
    title: 'Fearless',
    era: 'Fearless',
    src: 'audio/Taylor Swift - Fearless.mp3',
    albumImage: 'images/fearless.png',
    note: '🌧️',
    meaning: 'Being brave enough to love without hesitation.'
  },
  {
    title: 'Hey Stephen',
    era: 'Fearless',
    src: 'audio/Taylor Swift - Hey Stephen.mp3',
    albumImage: 'images/fearless.png',
    note: '💌',
    meaning: 'A sweet, innocent crush you can’t stop thinking about.'
  },

  // ─────────────── RED ───────────────
  {
    title: 'All Too Well (10 Minute Version)',
    era: 'Red',
    src: 'audio/All Too Well.mp3',
    albumImage: 'images/red.png',
    note: '🍂',
    meaning: 'A love that stays in your memory long after it ends.'
  },
  {
    title: 'Message in a Bottle (From the Vault)',
    era: 'Red',
    src: 'audio/Taylor Swift - Message in a Bottle.mp3',
    albumImage: 'images/red.png',
    note: '📨',
    meaning: 'Hopeful longing for someone you haven’t reached yet.'
  },
  {
    title: 'Begin Again',
    era: 'Red',
    src: 'audio/Taylor Swift - Begin Again.mp3',
    albumImage: 'images/red.png',
    note: '🌸',
    meaning: 'Healing after heartbreak and learning to trust again.'
  },

  // ─────────────── MIDNIGHTS ───────────────
  {
    title: 'Hits Different',
    era: 'Midnights',
    src: 'audio/Taylor Swift - Hits Different.mp3',
    albumImage: 'images/midnights.jpg',
    note: '💫',
    meaning: 'When one love feels unlike anything before or after it.'
  },
  {
    title: 'Would’ve Could’ve Should’ve',
    era: 'Midnights',
    src: 'audio/Taylor Swift - Wouldve, Couldve, Shouldve.mp3',
    albumImage: 'images/midnights.jpg',
    note: '⏳',
    meaning: 'Regret over a love that left lasting scars.'
  },
  {
    title: 'Anti-Hero',
    era: 'Midnights',
    src: 'audio/Taylor Swift - Anti-Hero.mp3',
    albumImage: 'images/midnights.jpg',
    note: '🪞',
    meaning: 'Facing your own flaws and insecurities honestly.'
  },

  // ─────────────── SPEAK NOW ───────────────
  {
    title: 'Mine',
    era: 'Speak Now',
    src: 'audio/Taylor Swift - Mine.mp3',
    albumImage: 'images/speaknow.png',
    note: '🌊',
    meaning: 'A love story that grows from uncertainty into forever.'
  },
  {
    title: 'Dear John',
    era: 'Speak Now',
    src: 'audio/Taylor Swift - Dear John.mp3',
    albumImage: 'images/speaknow.png',
    note: '💔',
    meaning: 'A painful realization of being emotionally used.'
  },
  {
    title: 'Long Live',
    era: 'Speak Now',
    src: 'audio/Taylor Swift - Long Live.mp3',
    albumImage: 'images/speaknow.png',
    note: '👑',
    meaning: 'Celebrating memories, victories, and shared journeys.'
  },

  // ─────────────── 1989 ───────────────
  {
    title: 'Out of the Woods',
    era: '1989',
    src: 'audio/Taylor Swift - Out of the Woods.mp3',
    albumImage: 'images/1989.png',
    note: '🌲',
    meaning: 'A fragile love constantly on the edge of breaking.'
  },
  {
    title: 'Is It Over Now?',
    era: '1989',
    src: 'audio/Taylor Swift - Is It Over Now.mp3',
    albumImage: 'images/1989.png',
    note: '❓',
    meaning: 'Wondering if a past love truly ended or still lingers.'
  },
  {
    title: 'You Are In Love',
    era: '1989',
    src: 'audio/Taylor Swift - You Are In Love.mp3',
    albumImage: 'images/1989.png',
    note: '🕯️',
    meaning: 'The quiet realization of being deeply in love.'
  },

  // ─────────────── TORTURED POETS DEPT ───────────────
  {
    title: 'The Alchemy',
    era: 'TTPD',
    src: 'audio/Taylor Swift - The Alchemy.mp3',
    albumImage: 'images/ttpd.jpg',
    note: '⚗️',
    meaning: 'A love that feels like transformation and destiny.'
  },
  {
    title: 'So High School',
    era: 'TTPD',
    src: 'audio/Taylor Swift - So High School.mp3',
    albumImage: 'images/ttpd.jpg',
    note: '🎒',
    meaning: 'A playful, youthful kind of love that feels timeless.'
  },
  {
    title: 'Guilty as Sin?',
    era: 'TTPD',
    src: 'audio/Taylor Swift - Guilty as Sin.mp3',
    albumImage: 'images/ttpd.jpg',
    note: '🖤',
    meaning: 'The tension between desire, guilt, and imagination.'
  },

  // ─────────────── LIFE OF A SHOWGIRL ───────────────
  {
    title: 'Ruin the Friendship',
    era: 'Showgirl',
    src: 'audio/Taylor Swift - Ruin the Friendship.mp3',
    albumImage: 'images/showgirl.webp',
    note: '💔',
    meaning: 'When feelings risk changing everything between two people.'
  },
  {
    title: 'Father Figure',
    era: 'Showgirl',
    src: 'audio/Taylor Swift - Father Figure.mp3',
    albumImage: 'images/showgirl.webp',
    note: '🕶️',
    meaning: 'Power dynamics and emotional influence in relationships.'
  },
  {
    title: 'Wi$h Li$t',
    era: 'Showgirl',
    src: 'audio/Taylor Swift - Wish List.mp3',
    albumImage: 'images/showgirl.webp',
    note: '💭',
    meaning: 'Dreaming of a love that checks every box you’ve ever imagined.'
  },
];

export function renderSoundtrackContent() {
  const cards = SONGS.map((s, i) => `
    <div class="song-card" data-index="${i}" data-src="${s.src || ''}" data-album="${s.albumImage || ''}">
      <button class="song-play-btn" aria-label="Play ${s.title}">▶</button>
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

  // Single-audio manager so only one song plays at a time
  let currentAudio = null;
  let currentCard = null;

  function ensurePlayer() {
    let p = document.getElementById('song-player-overlay');
    if (p) return p;
    p = document.createElement('div');
    p.id = 'song-player-overlay';
    p.innerHTML = `
      <div class="player-inner">
        <button class="player-close" aria-label="Close">✕</button>
        <div class="player-album"><img src="" alt="album"></div>
        <div class="player-meta">
          <div class="player-title"></div>
          <div class="player-controls">
            <button class="player-toggle">Play</button>
            <div class="player-progress"><div class="player-progress-bar"></div></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(p);
    p.addEventListener('click', (ev) => { if (ev.target === p || ev.target.classList.contains('player-close')) stopAndClose(); });
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') stopAndClose(); });
    return p;
  }

  function stopCurrent() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    if (currentCard) {
      currentCard.classList.remove('playing');
      currentCard = null;
    }
  }

  function stopAndClose() {
    stopCurrent();
    const p = document.getElementById('song-player-overlay');
    if (p) p.classList.remove('open');
  }

  function openPlayer(card, src) {
    const overlay = ensurePlayer();
    const img = overlay.querySelector('.player-album img');
    const title = overlay.querySelector('.player-title');
    const toggle = overlay.querySelector('.player-toggle');
    const progBar = overlay.querySelector('.player-progress-bar');

    const index = card.dataset.index; const song = SONGS[index];
    img.src = card.dataset.album || '';
    title.textContent = `"${song.title}" — ${song.era}`;

    // stop previous audio if different
    if (currentAudio && currentAudio.src !== src) stopCurrent();

    if (!currentAudio) {
      currentAudio = new Audio(src);
      currentAudio.preload = 'auto';
      currentAudio.addEventListener('ended', () => { card.classList.remove('playing'); toggle.textContent = 'Play'; });
      currentAudio.addEventListener('timeupdate', () => {
        if (currentAudio && currentAudio.duration) {
          const pct = (currentAudio.currentTime / currentAudio.duration) * 100;
          progBar.style.width = pct + '%';
        }
      });
    }

    overlay.classList.add('open');
    currentCard = card; card.classList.add('playing');
    toggle.textContent = currentAudio.paused ? 'Play' : 'Pause';
    toggle.onclick = () => {
      if (!currentAudio) return;
      if (currentAudio.paused) { currentAudio.play(); toggle.textContent = 'Pause'; card.classList.add('playing'); }
      else { currentAudio.pause(); toggle.textContent = 'Play'; card.classList.remove('playing'); }
    };

    currentAudio.play().then(() => { toggle.textContent = 'Pause'; card.classList.add('playing'); }).catch(() => {});

    overlay.querySelector('.player-close').onclick = stopAndClose;
  }

  document.querySelectorAll('.song-card').forEach(card => {
    const btn = card.querySelector('.song-play-btn');
    btn?.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const src = card.dataset.src;
      if (!src) return alert('No audio source set for this song. Add a `src` property to the SONGS entry.');
      openPlayer(card, src);
    });
  });
}