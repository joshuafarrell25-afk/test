/**
 * BERBAGI KEPEDULIAN, MENDENGAR ASPIRASI
 * Proyek Pancasila — Script Utama
 *
 * Fitur:
 * 1. Navbar scroll effect
 * 2. Hamburger menu mobile
 * 3. Scroll-reveal animation (IntersectionObserver)
 * 4. Animated counter untuk jumlah harapan
 * 5. Active nav link highlight
 * 6. Smooth close mobile menu saat link diklik
 */

/* ============================================================
   1. NAVBAR — scroll shadow & hamburger
   ============================================================ */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');

  // Tambah kelas .scrolled saat halaman di-scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle menu mobile
  hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    // Animasi hamburger → X
    const spans = hamburger.querySelectorAll('span');
    const isOpen = navMobile.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Tutup menu mobile saat salah satu link diklik
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
})();


/* ============================================================
   2. SCROLL-REVEAL — elemen dengan atribut [data-reveal]
   ============================================================ */
(function initScrollReveal() {
  const revealTargets = document.querySelectorAll('[data-reveal]');

  if (!revealTargets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Setelah terungkap, hentikan observasi (hemat performa)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,   // Mulai animasi ketika 12% elemen terlihat
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealTargets.forEach(el => observer.observe(el));
})();


/* ============================================================
   3. COUNTER ANIMASI — angka harapan di aspiration section
   ============================================================ */
(function initHopeCounter() {
  const counterEl = document.getElementById('hopeCount');
  if (!counterEl) return;

  const targetCount = parseInt(counterEl.textContent, 10);
  let hasRun = false;

  function animateCount(el, end, duration) {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        el.textContent = end;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start);
      }
    }, 16);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          animateCount(counterEl, targetCount, 1200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(counterEl);
})();


/* ============================================================
   4. ACTIVE NAV LINK — highlight sesuai section yang sedang di-scroll
   ============================================================ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.style.color = '';
            link.style.fontWeight = '';
            if (link.getAttribute('href') === `#${id}`) {
              link.style.color = 'var(--soil)';
              link.style.fontWeight = '700';
            }
          });
        }
      });
    },
    {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));
})();


/* ============================================================
   5. GALLERY PLACEHOLDER — tampilkan teks placeholder
      ketika gambar belum ada (src kosong)
   ============================================================ */
(function initGalleryPlaceholders() {
  const imgs = document.querySelectorAll('.gallery-img');

  imgs.forEach(img => {
    // Jika src kosong atau tidak valid, tambahkan class placeholder-active
    function checkSrc() {
      const wrap = img.closest('.gallery-img-wrap');
      if (!wrap) return;
      if (!img.src || img.src === window.location.href || img.naturalWidth === 0) {
        wrap.classList.add('no-image');
      } else {
        wrap.classList.remove('no-image');
        // Sembunyikan teks placeholder via CSS
        wrap.style.setProperty('--placeholder-display', 'none');
      }
    }

    img.addEventListener('load', checkSrc);
    img.addEventListener('error', () => {
      const wrap = img.closest('.gallery-img-wrap');
      if (wrap) wrap.classList.add('no-image');
    });

    // Cek langsung saat halaman dimuat
    if (img.complete) checkSrc();
  });
})();


/* ============================================================
   6. SMOOTH SCROLL — untuk browser lama yang tidak support
      scroll-behavior: smooth di CSS
   ============================================================ */
(function initSmoothScroll() {
  // Browser modern sudah handle ini via CSS scroll-behavior: smooth
  // Ini fallback untuk browser lama
  if ('scrollBehavior' in document.documentElement.style) return;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();


/* ============================================================
   7. HOPE CARD HOVER PARALLAX — efek kecil pada kartu harapan
   ============================================================ */
(function initCardTilt() {
  // Hanya aktif di desktop (pointer: fine = mouse)
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cards = document.querySelectorAll('.hope-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `
        translateY(-6px)
        rotateX(${-y * 4}deg)
        rotateY(${x * 4}deg)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


/* ============================================================
   CATATAN PENGEMBANG:
   
   Untuk menambahkan kartu harapan baru secara otomatis dari data:
   
   const aspirations = [
     { text: "Harapan saya...", name: "Warga 09", date: "13 Mei 2025" },
     // tambahkan lebih banyak di sini
   ];
   
   const wall = document.querySelector('.wall-of-hope');
   aspirations.forEach(a => {
     wall.insertAdjacentHTML('beforeend', `
       <div class="hope-card" data-reveal>
         <div class="hope-note-img">
           <div class="note-placeholder">
             <span class="note-icon">✍</span>
             <small>Foto harapan</small>
           </div>
         </div>
         <div class="hope-content">
           <blockquote class="hope-text">"${a.text}"</blockquote>
           <div class="hope-meta">
             <span class="hope-name">— ${a.name}</span>
             <span class="hope-date">${a.date}</span>
           </div>
         </div>
       </div>
     `);
   });
   ============================================================ */

console.log('🇮🇩 Berbagi Kepedulian, Mendengar Aspirasi — siap digunakan.');