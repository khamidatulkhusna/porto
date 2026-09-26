/**
 * PORTOFOLIO INTERAKTIF - JAVASCRIPT UTAMA
 * Penulis: Khamidatul Khusna
 * Deskripsi: Mengelola dark mode, filter proyek dinamis, modal detail proyek,
 *            animasi progress bar & counter statistik, validasi form kontak, 
 *            dan navigasi responsif.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  initStatsCounter();
  initSkillsProgress();
  initProjectFilter();
  initProjectModal();
  initContactForm();
});

/* ============================================================
   1. DARK / LIGHT MODE TOGGLE (LOCALSTORAGE PERSISTENCE)
   ============================================================ */
function initTheme() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const html = document.documentElement;

  // Cek preferensi tersimpan atau preferensi sistem operasi
  const savedTheme = localStorage.getItem('porto_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
    updateThemeIcons(true);
  } else {
    html.classList.remove('dark');
    updateThemeIcons(false);
  }

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('porto_theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  });

  function updateThemeIcons(isDark) {
    document.querySelectorAll('.theme-icon-sun').forEach(icon => {
      icon.classList.toggle('hidden', !isDark);
    });
    document.querySelectorAll('.theme-icon-moon').forEach(icon => {
      icon.classList.toggle('hidden', isDark);
    });
  }
}

/* ============================================================
   2. RESPONSIVE MOBILE NAVIGATION DRAWER
   ============================================================ */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const closeBtn = document.getElementById('close-drawer-btn');

  function openDrawer() {
    mobileDrawer.classList.remove('translate-x-full');
    drawerBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeDrawer() {
    mobileDrawer.classList.add('translate-x-full');
    drawerBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Tutup dengan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileDrawer.classList.contains('translate-x-full')) {
      closeDrawer();
    }
  });
}

/* ============================================================
   3. SCROLLSPY & STICKY NAVBAR SHADOW
   ============================================================ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop-link');
  const navbar = document.getElementById('main-navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Tambah shadow saat di-scroll
    if (scrollY > 30) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }

    // Scrollspy active highlight
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-brand-600', 'dark:text-brand-400', 'font-bold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-brand-600', 'dark:text-brand-400', 'font-bold');
      }
    });
  });
}

/* ============================================================
   4. ANIMASI HITUNG CEPAT (QUICK STATS COUNTER)
   ============================================================ */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          let count = 0;
          const speed = Math.max(15, Math.floor(1500 / target));

          const counter = setInterval(() => {
            count += 1;
            stat.textContent = count + suffix;
            if (count >= target) {
              stat.textContent = target + suffix;
              clearInterval(counter);
            }
          }, speed);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.getElementById('hero-stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ============================================================
   5. ANIMASI SKILL PROGRESS BAR
   ============================================================ */
function initSkillsProgress() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillsSection = document.getElementById('skills');
  if (!skillsSection || !skillBars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          bar.style.width = progress + '%';
        });
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(skillsSection);
}

/* ============================================================
   6. FILTER PROYEK / PORTOFOLIO (ALL, WEB APP, UI/UX, MOBILE)
   ============================================================ */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Perbarui style tombol aktif
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-600', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
        b.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200', 'dark:bg-slate-800', 'dark:text-slate-300', 'dark:hover:bg-slate-700');
      });

      btn.classList.add('bg-brand-600', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
      btn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200', 'dark:bg-slate-800', 'dark:text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
          card.style.position = 'relative';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.92)';
          setTimeout(() => {
            card.classList.add('hide');
          }, 350);
        }
      });
    });
  });
}

/* ============================================================
   7. MODAL DETAIL PROYEK INTERAKTIF
   ============================================================ */
const projectData = {
  1: {
    title: 'SaaS EduPlatform - Portal Pembelajaran Daring',
    category: 'Web App',
    categoryBadge: 'Full Stack Web App',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    description: 'Platform manajemen kursus digital yang dilengkapi fitur pendaftaran siswa, streaming video materi, kuis interaktif, pelacakan progres belajar, dan integrasi payment gateway otomatis.',
    highlights: [
      'Dashboard pengguna interaktif dengan grafik kemajuan belajar.',
      'Sistem autentikasi aman dengan perlindungan role admin & siswa.',
      'Dukungan responsif penuh pada browser tablet maupun smartphone.',
      'Integrasi notifikasi email otomatis untuk pendaftaran kelas.'
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript ES6', 'PHP', 'MySQL', 'REST API'],
    demoUrl: 'https://demo-eduplatform.example.com',
    githubUrl: 'https://github.com/khamidatulkhusna/eduplatform'
  },
  2: {
    title: 'Finansia - Mobile Banking & Budgeting UI Kit',
    category: 'UI/UX Design',
    categoryBadge: 'UI/UX & Prototyping',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    description: 'Rancangan antarmuka aplikasi dompet digital modern yang memprioritaskan kemudahan navigasi transfer instan, visualisasi pengeluaran bulanan, dan sistem keamanan otentikasi biometrik.',
    highlights: [
      'Desain sistem lengkap dengan 45+ komponen reusable di Figma.',
      'Studi kasus riset pengguna (User Journey & Wireframing).',
      'Prototipe interaktif dengan animasi mikro transaksi berhasil.',
      'Mode gelap dan terang dengan kontras warna standar WCAG AAA.'
    ],
    techStack: ['Figma', 'Prototyping', 'Design System', 'User Research', 'Adobe XD'],
    demoUrl: 'https://figma.com/@khamidatulkhusna/finansia',
    githubUrl: 'https://github.com/khamidatulkhusna/finansia-ui'
  },
  3: {
    title: 'EcoMarket - Toko Online Produk Berkelanjutan',
    category: 'Web App',
    categoryBadge: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    description: 'Website e-commerce untuk produk ramah lingkungan dengan sistem keranjang belanja dinamis, filter kategori produk instan, pencarian kata kunci cepat, dan formulir checkout WhatsApp terintegrasi.',
    highlights: [
      'Katalog produk responsif dengan kalkulasi diskon otomatis.',
      'Manajemen keranjang belanja berbasis LocalStorage tanpa lag.',
      'Fitur filter harga, peringkat ulasan, dan tag keberlanjutan.',
      'Optimasi performa SEO dan loading aset berkecepatan tinggi.'
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'LocalStorage', 'Responsive'],
    demoUrl: 'https://demo-ecomarket.example.com',
    githubUrl: 'https://github.com/khamidatulkhusna/ecomarket'
  },
  4: {
    title: 'FitPulse - Workout Tracker & Health Mobile App',
    category: 'Mobile',
    categoryBadge: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    description: 'Aplikasi pencatat kebugaran jasmani dan asupan kalori harian yang memudahkan pengguna merancang jadwal latihan, memantau denyut jantung, serta membagikan pencapaian ke komunitas.',
    highlights: [
      'Pencatatan sesi latihan dengan pengatur waktu interval otomatis.',
      'Grafik visualisasi kalori harian dan mingguan.',
      'Peringatan pengingat minum air dan istirahat cerdas.',
      'Sinkronisasi data ke cloud server secara aman.'
    ],
    techStack: ['React Native', 'JavaScript', 'CSS Modules', 'Redux', 'REST API'],
    demoUrl: 'https://fitpulse.example.com',
    githubUrl: 'https://github.com/khamidatulkhusna/fitpulse'
  },
  5: {
    title: 'NexaFlow - Task Management & Collaboration Tool',
    category: 'Web App',
    categoryBadge: 'Productivity Tool',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    description: 'Aplikasi manajemen tugas bergaya Kanban papan kolaboratif untuk tim kreatif. Menyediakan fitur drag-and-drop tugas, penetapan tenggat waktu, label prioritas, dan filter anggota tim.',
    highlights: [
      'Sistem papan Kanban dengan interaksi drag-and-drop mulus.',
      'Pelacakan aktivitas tim secara real-time.',
      'Manajemen file lampiran dan kolom komentar terintegrasi.',
      'Mode fokus (*Pomodoro Timer*) terpasang langsung pada tugas.'
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript ES6', 'Drag & Drop API'],
    demoUrl: 'https://nexaflow.example.com',
    githubUrl: 'https://github.com/khamidatulkhusna/nexaflow'
  },
  6: {
    title: 'KopiKita - Coffee Shop Brand Identity & UI Design',
    category: 'UI/UX Design',
    categoryBadge: 'Brand & Web UI',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    description: 'Perancangan identitas visual dan antarmuka pemesanan meja dan menu kopi lokal secara digital. Menampilkan tata letak minimalis bergaya warm aesthetic dengan navigasi pemesanan simpel.',
    highlights: [
      'Desain landing page promosi dengan visual storytelling memikat.',
      'Katalog menu digital dengan animasi interaktif saat dipilih.',
      'Sistem reservasi meja online dengan konfirmasi instan.',
      'Integrasi testimoni pelanggan dengan slider interaktif.'
    ],
    techStack: ['Figma', 'UI/UX Design', 'Wireframing', 'Color Theory', 'Prototyping'],
    demoUrl: 'https://figma.com/@khamidatulkhusna/kopikita',
    githubUrl: 'https://github.com/khamidatulkhusna/kopikita-ui'
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalImage = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalStack = document.getElementById('modal-stack');
  const modalDemoBtn = document.getElementById('modal-demo-btn');
  const modalGithubBtn = document.getElementById('modal-github-btn');

  // Tombol buka modal di kartu proyek
  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const data = projectData[projectId];

      if (data) {
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.categoryBadge;
        modalDesc.textContent = data.description;
        modalImage.src = data.image;
        modalImage.alt = data.title;
        modalDemoBtn.href = data.demoUrl;
        modalGithubBtn.href = data.githubUrl;

        // Render highlights checklist
        modalHighlights.innerHTML = '';
        data.highlights.forEach(item => {
          const li = document.createElement('li');
          li.className = 'flex items-start text-sm text-slate-600 dark:text-slate-300';
          li.innerHTML = `
            <span class="mr-2 text-brand-600 dark:text-brand-400 font-bold"><i class="fa-solid fa-circle-check"></i></span>
            <span>${item}</span>
          `;
          modalHighlights.appendChild(li);
        });

        // Render tech stack tags
        modalStack.innerHTML = '';
        data.techStack.forEach(tech => {
          const badge = document.createElement('span');
          badge.className = 'px-2.5 py-1 text-xs font-semibold rounded-md bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 border border-brand-200 dark:border-brand-800';
          badge.textContent = tech;
          modalStack.appendChild(badge);
        });

        // Buka modal
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* ============================================================
   8. FORMULIR KONTAK INTERAKTIF DENGAN SIMULASI LOADING & OVERLAY
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const btnSubmit = document.getElementById('btn-submit-contact');
  const btnText = document.getElementById('btn-submit-text');
  const btnSpinner = document.getElementById('btn-submit-spinner');
  const successModal = document.getElementById('contact-success-modal');
  const successModalClose = document.getElementById('btn-close-success');

  if (!form) return;

  // Hapus pesan error saat user mengetik
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const errorMsg = document.getElementById(`${input.id}-error`);
      if (errorMsg) errorMsg.textContent = '';
      input.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-200');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const subject = document.getElementById('contact-subject');
    const message = document.getElementById('contact-message');

    let isValid = true;

    // Validasi Nama
    if (!name.value.trim()) {
      showError('contact-name', 'Silakan masukkan nama lengkap Anda.');
      isValid = false;
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError('contact-email', 'Alamat email wajib diisi.');
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError('contact-email', 'Format email tidak valid (contoh: nama@domain.com).');
      isValid = false;
    }

    // Validasi Subjek
    if (!subject.value.trim()) {
      showError('contact-subject', 'Silakan tentukan subjek pesan Anda.');
      isValid = false;
    }

    // Validasi Pesan
    if (!message.value.trim() || message.value.trim().length < 10) {
      showError('contact-message', 'Pesan minimal berisi 10 karakter.');
      isValid = false;
    }

    if (!isValid) return;

    // Aktifkan Loading State
    btnSubmit.disabled = true;
    btnText.textContent = 'Mengirimkan Pesan...';
    btnSpinner.classList.remove('hidden');

    // Simulasi pengiriman jaringan ke server (1.4 detik)
    setTimeout(() => {
      // Pulihkan status tombol
      btnSubmit.disabled = false;
      btnText.textContent = 'Kirimkan Pesan';
      btnSpinner.classList.add('hidden');

      // Tampilkan Modal Feedback Sukses
      if (successModal) {
        successModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }

      // Reset form
      form.reset();
    }, 1400);
  });

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) {
      input.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-200');
    }
    if (errorEl) {
      errorEl.textContent = message;
    }
  }

  if (successModalClose) {
    successModalClose.addEventListener('click', () => {
      successModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Tutup success modal saat klik backdrop
  const successBackdrop = document.getElementById('success-modal-backdrop');
  if (successBackdrop) {
    successBackdrop.addEventListener('click', () => {
      successModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }
}

/* ============================================================
   9. TOMBOL BACK TO TOP FLOATING
   ============================================================ */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
