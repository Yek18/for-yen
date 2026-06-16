// ═══════════════════════════════════════════════
//  MAIN CONTROLLER — main.js
// ═══════════════════════════════════════════════

import { renderHeroContent, attachHeroEvents }               from './hero.js';
import { renderGalleryContent, attachGalleryEvents }          from './photo_gallery.js';
import { renderSoundtrackContent, attachSoundtrackEvents }    from './songs.js';
import { renderEncouragementContent, attachEncouragementEvents } from './encouragement.js';
import { renderLettersContent, attachLettersEvents }          from './love_letters.js';
import { renderFinalContent, attachFinalEvents }              from './final-message.js';

const app = document.getElementById('app');

// ─── Navigation ──────────────────────────────────
function showRoute(route) {
  document.querySelectorAll('.section-page').forEach(el => el.classList.remove('active'));
  const nav = document.getElementById('global-nav');

  if (route === 'hero') {
    document.getElementById('hero-section').classList.add('active');
    nav.style.opacity = '0'; nav.style.pointerEvents = 'none';
  } else if (route === 'heart') {
    document.getElementById('gallery-section').classList.add('active');
    document.getElementById('soundtrack-section').classList.add('active');
    nav.style.opacity = '0.9'; nav.style.pointerEvents = 'all';
  } else if (route === 'reminder') {
    document.getElementById('encouragement-section').classList.add('active');
    document.getElementById('letters-section').classList.add('active');
    nav.style.opacity = '0.9'; nav.style.pointerEvents = 'all';
  } else if (route === 'final') {
    document.getElementById('final-section').classList.add('active');
    nav.style.opacity = '0.9'; nav.style.pointerEvents = 'all';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const goHome     = () => showRoute('hero');
const goHeart    = () => showRoute('heart');
const goReminder = () => showRoute('reminder');
const goFinal    = () => showRoute('final');

// ─── Render ───────────────────────────────────────
function renderApp() {
  app.innerHTML = `
    <section class="section-page" id="hero-section">${renderHeroContent()}</section>
    <section class="section-page" id="gallery-section">${renderGalleryContent()}</section>
    <section class="section-page" id="soundtrack-section">${renderSoundtrackContent()}</section>
    <section class="section-page" id="encouragement-section">${renderEncouragementContent()}</section>
    <section class="section-page" id="letters-section">${renderLettersContent()}</section>
    <section class="section-page" id="final-section">${renderFinalContent()}</section>
    <nav id="global-nav" style="position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:100;opacity:0;transition:opacity 0.4s;pointer-events:none">
      <button class="btn btn-back" id="nav-btn-always">Always ❤️</button>
    </nav>
  `;

  attachHeroEvents(goHeart, goReminder);
  attachGalleryEvents(goHome);
  attachSoundtrackEvents(goHome);
  attachEncouragementEvents(goHome);
  attachLettersEvents(goHome);
  attachFinalEvents(goHome);
  document.getElementById('nav-btn-always').addEventListener('click', goFinal);

  showRoute('hero');
}

// ─── Particles ────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  const EMOJIS = ['✨', '🌸', '💫', '⭐', '🌟', '💕', '🍃', '🦋'];

  class Particle {
    constructor(initial) {
      this.x         = Math.random() * canvas.width;
      this.y         = initial ? Math.random() * canvas.height : canvas.height + 20;
      this.vy        = -(0.35 + Math.random() * 0.55);
      this.vx        = (Math.random() - 0.5) * 0.3;
      this.size      = 11 + Math.random() * 10;
      this.alpha     = initial ? Math.random() * 0.4 : 0;
      this.targetAlpha = 0.25 + Math.random() * 0.35;
      this.emoji     = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      this.rot       = Math.random() * Math.PI * 2;
      this.drot      = (Math.random() - 0.5) * 0.012;
      this.life      = initial ? Math.floor(Math.random() * 200) : 0;
      this.maxLife   = 200 + Math.random() * 250;
    }
    reset() {
      this.x = Math.random() * canvas.width; this.y = canvas.height + 20;
      this.vy = -(0.35 + Math.random() * 0.55); this.vx = (Math.random() - 0.5) * 0.3;
      this.size = 11 + Math.random() * 10; this.alpha = 0;
      this.targetAlpha = 0.25 + Math.random() * 0.35;
      this.emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      this.rot = Math.random() * Math.PI * 2; this.drot = (Math.random() - 0.5) * 0.012;
      this.life = 0; this.maxLife = 200 + Math.random() * 250;
    }
    update() {
      this.life++; this.x += this.vx; this.y += this.vy; this.rot += this.drot;
      if      (this.life < 30)                    this.alpha = (this.life / 30) * this.targetAlpha;
      else if (this.life > this.maxLife - 40)     this.alpha = ((this.maxLife - this.life) / 40) * this.targetAlpha;
      else                                        this.alpha = this.targetAlpha;
      if (this.life >= this.maxLife) this.reset();
    }
    draw() {
      ctx.save(); ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.translate(this.x, this.y); ctx.rotate(this.rot);
      ctx.font = `${this.size}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(this.emoji, 0, 0); ctx.restore();
    }
  }

  const particles = Array.from({ length: 28 }, (_, i) => new Particle(true));

  let rafId;
  const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    rafId = requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId); else loop();
  });
}

// ─── Boot ─────────────────────────────────────────
renderApp();
initParticles();