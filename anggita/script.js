/**
 * ==========================================================================
 * 💜 INTERACTIVE JAVASCRIPT - LILAC & MIDNIGHT ROMANTIC OCEAN DESCENT 💜
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initDynamicContent();
  initAmbientCanvas();
  initDepthMeter();
  initLoveCounter();
  initCountdowns();
  initAudioPlayer();
  initEnvelope();
  initPolaroidModal();
  initInteractiveHearts();
  initNavigation();
});

// ==========================================
// 1. DYNAMIC CONTENT INJECTION FROM CONFIG
// ==========================================
function initDynamicContent() {
  if (typeof CONFIG === 'undefined') return;

  // Title & Brand
  document.title = CONFIG.websiteTitle || `${CONFIG.recipientName}'s World 💜`;
  const brandTitle = document.getElementById('nav-brand-title');
  if (brandTitle) brandTitle.textContent = `${CONFIG.recipientName}'s World`;
  
  const footerName = document.getElementById('footer-recipient-name');
  if (footerName) footerName.textContent = CONFIG.recipient?.nickName || CONFIG.recipientName;

  // Hero Section
  const badgeText = document.getElementById('hero-badge-text');
  if (badgeText) badgeText.textContent = CONFIG.heroBadge;

  const mainTitle = document.getElementById('hero-main-title');
  if (mainTitle) mainTitle.textContent = CONFIG.heroMainTitle;

  const highlightTitle = document.getElementById('hero-highlight-title');
  if (highlightTitle) highlightTitle.textContent = CONFIG.heroHighlightTitle;

  const subtitle = document.getElementById('hero-subtitle');
  if (subtitle) subtitle.textContent = CONFIG.heroSubtitle;

  // Couple Profile Info
  const coupleRecipient = document.getElementById('couple-recipient-name');
  if (coupleRecipient && CONFIG.recipient) {
    coupleRecipient.textContent = CONFIG.recipient.fullName;
  }
  const coupleSender = document.getElementById('couple-sender-name');
  if (coupleSender && CONFIG.sender) {
    coupleSender.textContent = CONFIG.sender.fullName;
  }

  // Timeline / Memories
  const timelineContainer = document.getElementById('timeline-cards-container');
  if (timelineContainer && CONFIG.memories) {
    timelineContainer.innerHTML = '';
    CONFIG.memories.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'timeline-card';
      card.innerHTML = `
        <div class="timeline-node">${item.icon || '✨'}</div>
        <span class="timeline-depth-tag"><i class="fa-solid fa-water"></i> ${item.depth} · ${item.tag}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-date"><i class="fa-regular fa-calendar"></i> ${item.date}</p>
        <p class="timeline-desc">${item.description}</p>
      `;
      timelineContainer.appendChild(card);
    });
  }

  // Polaroid Gallery
  const polaroidGrid = document.getElementById('polaroid-grid');
  if (polaroidGrid && CONFIG.photos) {
    polaroidGrid.innerHTML = '';
    CONFIG.photos.forEach((photo, index) => {
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      card.style.transform = `rotate(${photo.rotation || '0deg'})`;
      card.setAttribute('data-url', photo.url);
      card.setAttribute('data-caption', photo.caption);
      card.setAttribute('data-date', photo.date);
      
      card.innerHTML = `
        <div class="polaroid-tape"></div>
        <div class="polaroid-img-wrapper">
          <img src="${photo.url}" alt="${photo.caption}" class="polaroid-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80'">
        </div>
        <p class="polaroid-caption">${photo.caption}</p>
        <p class="polaroid-date">${photo.date}</p>
      `;
      polaroidGrid.appendChild(card);
    });
  }

  // Secret Letter
  const letterForName = document.getElementById('letter-for-name');
  if (letterForName) letterForName.textContent = CONFIG.recipientName;

  const salutation = document.getElementById('paper-salutation');
  if (salutation && CONFIG.letter) salutation.textContent = CONFIG.letter.salutation;

  const paragraphsContainer = document.getElementById('paper-paragraphs');
  if (paragraphsContainer && CONFIG.letter && CONFIG.letter.content) {
    paragraphsContainer.innerHTML = '';
    CONFIG.letter.content.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      paragraphsContainer.appendChild(p);
    });
  }

  const paperClosing = document.getElementById('paper-closing');
  if (paperClosing && CONFIG.letter) paperClosing.textContent = CONFIG.letter.closing;

  const paperSignature = document.getElementById('paper-signature');
  if (paperSignature && CONFIG.letter) paperSignature.textContent = CONFIG.letter.signature;

  const paperDate = document.getElementById('paper-current-date');
  if (paperDate) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    paperDate.textContent = today.toLocaleDateString('id-ID', options);
  }

  // Reasons Why / Wish Bottles
  const reasonsGrid = document.getElementById('reasons-grid');
  if (reasonsGrid && CONFIG.reasons) {
    reasonsGrid.innerHTML = '';
    const icons = ['🌸', '✨', '💌', '🌙', '💍', '🌟', '🕊️', '💫'];
    CONFIG.reasons.forEach((reason, index) => {
      const card = document.createElement('div');
      card.className = 'reason-card';
      const icon = icons[index % icons.length];
      card.innerHTML = `
        <div class="reason-header">
          <span class="reason-bottle-icon">${icon}</span>
          <h4 class="reason-title">${reason.title}</h4>
        </div>
        <p class="reason-desc">${reason.desc}</p>
      `;
      reasonsGrid.appendChild(card);
    });
  }

  // Future Promise & Closing
  if (CONFIG.closingWishes) {
    const closingTitle = document.getElementById('closing-title');
    if (closingTitle) closingTitle.textContent = CONFIG.closingWishes.title;

    const closingMessage = document.getElementById('closing-message');
    if (closingMessage) closingMessage.textContent = CONFIG.closingWishes.message;
  }
}

// ==========================================
// 2. AMBIENT BIOLUMINESCENT PARTICLES (CANVAS)
// ==========================================
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  const particleCount = 65;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedY = -(Math.random() * 0.4 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.fadeSpeed = Math.random() * 0.008 + 0.002;
      this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      // Lilac, Soft Gold & Cyan Bioluminescence
      const colors = [
        'rgba(214, 188, 250, ',
        'rgba(183, 148, 244, ',
        'rgba(250, 204, 21, ',
        'rgba(254, 240, 138, ',
        'rgba(192, 132, 252, '
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.2;
      
      this.opacity += this.fadeSpeed * this.fadeDirection;
      if (this.opacity >= 0.85) this.fadeDirection = -1;
      if (this.opacity <= 0.15) this.fadeDirection = 1;

      if (this.y < -10) this.y = height + 10;
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + this.opacity + ')';
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.colorBase + '0.8)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 3. SIDE DEPTH METER ON SCROLL
// ==========================================
function initDepthMeter() {
  const depthDisplay = document.getElementById('depth-display');
  const depthBarFill = document.getElementById('depth-bar-fill');
  const depthMarker = document.getElementById('depth-marker');
  const depthZoneName = document.getElementById('depth-zone-name');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateDepth() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollY / (maxScroll || 1), 0), 1);

    // Calculate depth in meters: 0.0m to 4000.0m
    const currentDepth = (progress * 4000).toFixed(1);
    if (depthDisplay) depthDisplay.textContent = `${currentDepth}m`;

    if (depthBarFill) depthBarFill.style.height = `${progress * 100}%`;
    if (depthMarker) depthMarker.style.top = `${progress * 100}%`;

    // Update Zone Name
    if (depthZoneName) {
      if (currentDepth < 200) depthZoneName.textContent = 'Surface';
      else if (currentDepth < 1000) depthZoneName.textContent = 'Sunlight';
      else if (currentDepth < 2500) depthZoneName.textContent = 'Twilight';
      else if (currentDepth < 3800) depthZoneName.textContent = 'Midnight';
      else depthZoneName.textContent = 'The Abyss';
    }

    // Active Nav Link on Scroll
    let currentSection = 'surface';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateDepth, { passive: true });
  updateDepth();
}

// ==========================================
// 4. LOVE DURATION COUNTER
// ==========================================
function initLoveCounter() {
  if (typeof CONFIG === 'undefined' || !CONFIG.relationshipStartDate) return;

  const startDate = new Date(CONFIG.relationshipStartDate);
  const startLabel = document.getElementById('relationship-start-label');
  
  if (startLabel) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    startLabel.textContent = `Dimulai sejak ${startDate.toLocaleDateString('id-ID', options)}`;
  }

  const countDays = document.getElementById('count-days');
  const countHours = document.getElementById('count-hours');
  const countMinutes = document.getElementById('count-minutes');
  const countSeconds = document.getElementById('count-seconds');
  const heroDaysCounter = document.getElementById('hero-days-counter');

  function updateCounter() {
    const now = new Date();
    const diffTime = Math.max(now - startDate, 0);

    const totalSeconds = Math.floor(diffTime / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (countDays) countDays.textContent = days.toLocaleString();
    if (countHours) countHours.textContent = String(hours).padStart(2, '0');
    if (countMinutes) countMinutes.textContent = String(minutes).padStart(2, '0');
    if (countSeconds) countSeconds.textContent = String(seconds).padStart(2, '0');

    if (heroDaysCounter) {
      heroDaysCounter.textContent = `${days.toLocaleString()} Hari & ${hours} Jam Bersamamu 💜`;
    }
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

// ==========================================
// 4B. UPCOMING MILESTONES COUNTDOWN
// ==========================================
function initCountdowns() {
  if (typeof CONFIG === 'undefined' || !CONFIG.countdowns) return;
  const container = document.getElementById('countdown-cards-grid');
  if (!container) return;

  container.innerHTML = '';
  const timerElements = [];

  CONFIG.countdowns.forEach(item => {
    const card = document.createElement('div');
    card.className = 'countdown-card';
    card.innerHTML = `
      <div>
        <div class="countdown-card-header">
          <div class="countdown-card-icon-title">
            <span class="countdown-icon">${item.icon}</span>
            <h4 class="countdown-title">${item.title}</h4>
          </div>
          <span class="countdown-badge-date">${item.dateLabel}</span>
        </div>
        <p class="countdown-card-subtitle">${item.subtitle}</p>

        <div class="countdown-timer-boxes">
          <div class="countdown-box-mini">
            <span class="mini-num" id="${item.id}-days">0</span>
            <span class="mini-label">HARI</span>
          </div>
          <div class="countdown-box-mini">
            <span class="mini-num" id="${item.id}-hours">00</span>
            <span class="mini-label">JAM</span>
          </div>
          <div class="countdown-box-mini">
            <span class="mini-num" id="${item.id}-mins">00</span>
            <span class="mini-label">MENIT</span>
          </div>
          <div class="countdown-box-mini">
            <span class="mini-num" id="${item.id}-secs">00</span>
            <span class="mini-label">DETIK</span>
          </div>
        </div>
      </div>

      <p class="countdown-note">${item.note}</p>
    `;
    container.appendChild(card);

    timerElements.push({
      targetDate: new Date(item.date),
      daysEl: document.getElementById(`${item.id}-days`),
      hoursEl: document.getElementById(`${item.id}-hours`),
      minsEl: document.getElementById(`${item.id}-mins`),
      secsEl: document.getElementById(`${item.id}-secs`)
    });
  });

  function updateTimers() {
    const now = new Date();
    timerElements.forEach(timer => {
      const diff = timer.targetDate - now;
      if (diff > 0) {
        const totalSec = Math.floor(diff / 1000);
        const d = Math.floor(totalSec / (3600 * 24));
        const h = Math.floor((totalSec % (3600 * 24)) / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;

        if (timer.daysEl) timer.daysEl.textContent = d;
        if (timer.hoursEl) timer.hoursEl.textContent = String(h).padStart(2, '0');
        if (timer.minsEl) timer.minsEl.textContent = String(m).padStart(2, '0');
        if (timer.secsEl) timer.secsEl.textContent = String(s).padStart(2, '0');
      } else {
        if (timer.daysEl) timer.daysEl.textContent = "0";
        if (timer.hoursEl) timer.hoursEl.textContent = "00";
        if (timer.minsEl) timer.minsEl.textContent = "00";
        if (timer.secsEl) timer.secsEl.textContent = "🎉";
      }
    });
  }

  updateTimers();
  setInterval(updateTimers, 1000);
}

// ==========================================
// 5. INTERACTIVE 3D WAX SEAL ENVELOPE
// ==========================================
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('wax-seal');
  const closeBtn = document.getElementById('close-letter-btn');
  const controls = document.getElementById('letter-controls');

  if (!envelope || !waxSeal) return;

  waxSeal.addEventListener('click', () => {
    openEnvelope();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeEnvelope();
    });
  }

  function openEnvelope() {
    envelope.classList.add('open');
    if (controls) controls.style.display = 'block';
    spawnHeartsBurst(window.innerWidth / 2, window.innerHeight / 2, 12);
  }

  function closeEnvelope() {
    envelope.classList.remove('open');
    if (controls) controls.style.display = 'none';
  }
}

// ==========================================
// 6. POLAROID LIGHTBOX MODAL
// ==========================================
function initPolaroidModal() {
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalDate = document.getElementById('modal-date');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const cards = document.querySelectorAll('.polaroid-card');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-url');
      const caption = card.getAttribute('data-caption');
      const date = card.getAttribute('data-date');

      if (modalImg) modalImg.src = url;
      if (modalCaption) modalCaption.textContent = caption;
      if (modalDate) modalDate.textContent = date;

      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================
// 7. INTERACTIVE HEARTS & PARTICLES ON CLICK
// ==========================================
function initInteractiveHearts() {
  const sendLoveBtn = document.getElementById('send-love-btn');
  const loveBadge = document.getElementById('love-count-badge');
  let loveCount = 0;

  if (sendLoveBtn) {
    sendLoveBtn.addEventListener('click', (e) => {
      loveCount++;
      if (loveBadge) loveBadge.textContent = `❤️ Dikirim: ${loveCount} kali`;
      const rect = sendLoveBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;
      spawnHeartsBurst(x, y, 15);
    });
  }

  // Click anywhere on body to spawn subtle heart
  document.addEventListener('click', (e) => {
    // Avoid triggering on buttons & inputs
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.wax-seal')) return;
    createFloatingHeart(e.clientX, e.clientY);
  });
}

function createFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  const symbols = ['💜', '✨', '💖', '🤍', '🌸', '💫', '💍'];
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = `${Math.random() * 1.2 + 1}rem`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1800);
}

function spawnHeartsBurst(x, y, count = 10) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 140;
      const offsetY = (Math.random() - 0.5) * 60;
      createFloatingHeart(x + offsetX, y + offsetY);
    }, i * 60);
  }
}

// ==========================================
// 8. BGM AUDIO CONTROLLER & WEB AUDIO SYNTH
// ==========================================
function initAudioPlayer() {
  const audio = document.getElementById('bgm-audio');
  const audioBtn = document.getElementById('audio-btn');
  const audioIcon = document.getElementById('audio-icon');
  const audioDisc = document.getElementById('audio-disc');
  const soundWave = document.getElementById('sound-wave');
  const audioTitle = document.getElementById('audio-title');
  const audioArtist = document.getElementById('audio-artist');

  if (typeof CONFIG !== 'undefined' && CONFIG.music) {
    if (audioTitle) audioTitle.textContent = CONFIG.music.title || 'Romantic Melody';
    if (audioArtist) audioArtist.textContent = CONFIG.music.artist || 'Special For You';
    if (CONFIG.music.src && audio) {
      audio.src = CONFIG.music.src;
    }
  }

  let isPlaying = false;
  let synthEngine = null;

  function togglePlay() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  function playAudio() {
    isPlaying = true;
    if (audio && audio.src && audio.src !== window.location.href) {
      audio.play().catch(() => {
        // Autoplay policy fallback to Web Audio synth
        startSynth();
      });
    } else {
      startSynth();
    }

    if (audioIcon) {
      audioIcon.classList.remove('fa-play');
      audioIcon.classList.add('fa-pause');
    }
    if (audioDisc) audioDisc.classList.add('spinning');
    if (soundWave) soundWave.classList.add('playing');
  }

  function pauseAudio() {
    isPlaying = false;
    if (audio) audio.pause();
    stopSynth();

    if (audioIcon) {
      audioIcon.classList.remove('fa-pause');
      audioIcon.classList.add('fa-play');
    }
    if (audioDisc) audioDisc.classList.remove('spinning');
    if (soundWave) soundWave.classList.remove('playing');
  }

  if (audioBtn) audioBtn.addEventListener('click', togglePlay);

  // Fallback Romantic Synth Generator (Lofi romantic progression in D Major: Dmaj7 - F#m7 - Gmaj7 - A7)
  function startSynth() {
    if (synthEngine) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const chords = [
        [293.66, 369.99, 440.00, 554.37], // Dmaj7
        [369.99, 440.00, 554.37, 659.25], // F#m7
        [392.00, 493.88, 587.33, 739.99], // Gmaj7
        [440.00, 554.37, 659.25, 880.00]  // A7
      ];

      let chordIndex = 0;
      let noteIndex = 0;
      let timer = null;

      function playNextNote() {
        if (!isPlaying) return;
        const chord = chords[chordIndex];
        const freq = chord[noteIndex];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.0);

        noteIndex = (noteIndex + 1) % chord.length;
        if (noteIndex === 0) {
          chordIndex = (chordIndex + 1) % chords.length;
        }

        timer = setTimeout(playNextNote, 600);
      }

      playNextNote();

      synthEngine = {
        ctx,
        stop: () => {
          clearTimeout(timer);
          ctx.close();
          synthEngine = null;
        }
      };
    } catch (err) {
      console.warn('Audio synth initialized:', err);
    }
  }

  function stopSynth() {
    if (synthEngine) {
      synthEngine.stop();
    }
  }
}

// ==========================================
// 9. NAVIGATION & MOBILE MENU
// ==========================================
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
}

