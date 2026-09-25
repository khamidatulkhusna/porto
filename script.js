/**
 * Portofolio Pribadi - Interactive JavaScript
 * Handling mobile menu, scroll spy, smooth scrolling, form validation, and feedback notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleIcon = document.getElementById('toggle-icon');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message');
  const btnCv = document.getElementById('btn-cv');
  const demoButtons = document.querySelectorAll('.project-demo-btn');

  // ---------- 1. MOBILE MENU TOGGLE ----------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      
      // Update toggle icon
      if (isOpen) {
        toggleIcon.classList.replace('fa-bars', 'fa-xmark');
      } else {
        toggleIcon.classList.replace('fa-xmark', 'fa-bars');
      }
    });

    // Close menu when clicking outside or clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleIcon.classList.replace('fa-xmark', 'fa-bars');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleIcon.classList.replace('fa-xmark', 'fa-bars');
      }
    });
  }

  // ---------- 2. SCROLL EVENTS: STICKY SHADOW & BACK TO TOP ----------
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Header background & shadow on scroll
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // ScrollSpy: highlight active navbar item
    updateActiveNavLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---------- 3. SCROLLSPY (ACTIVE NAV LINK) ----------
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop;
      const sectionId = currentSection.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ---------- 4. TOAST NOTIFICATION HELPER ----------
  let toastTimeout;
  function showToast(title, message, isSuccess = true) {
    if (!toast) return;

    clearTimeout(toastTimeout);
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    const icon = toast.querySelector('.toast-icon');
    if (isSuccess) {
      icon.className = 'fa-solid fa-circle-check toast-icon';
      icon.style.color = 'var(--status-success)';
    } else {
      icon.className = 'fa-solid fa-circle-exclamation toast-icon';
      icon.style.color = 'var(--status-danger)';
    }

    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // ---------- 5. DOWNLOAD CV INTERACTION ----------
  if (btnCv) {
    btnCv.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Unduh CV', 'Mengunduh berkas Curriculum Vitae (CV) terbaru...', true);
      
      // Menstimulasi pengunduhan CV (placeholder link)
      setTimeout(() => {
        window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
      }, 700);
    });
  }

  // ---------- 6. DEMO PROJECT BUTTONS ----------
  demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectName = button.getAttribute('data-project') || 'Proyek';
      showToast('Demo Proyek', `Membuka pratinjau live demo untuk: ${projectName}`, true);
    });
  });

  // ---------- 7. CONTACT FORM VALIDATION & SUBMISSION ----------
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    const submitBtn = document.getElementById('btn-submit');

    // Validation helper
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Silakan masukkan nama lengkap Anda.';
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('is-invalid');
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Alamat email wajib diisi.';
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Format alamat email tidak valid.';
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('is-invalid');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Subjek pesan tidak boleh kosong.';
        subjectInput.classList.add('is-invalid');
        isValid = false;
      } else {
        subjectError.textContent = '';
        subjectInput.classList.remove('is-invalid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Tuliskan pesan Anda terlebih dahulu.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Pesan minimal terdiri dari 10 karakter.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageError.textContent = '';
        messageInput.classList.remove('is-invalid');
      }

      // If valid, simulate sending
      if (isValid) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirimkan Pesan...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          
          showToast(
            'Pesan Berhasil Terkirim!',
            `Terima kasih ${nameInput.value.trim()}, pesan Anda telah diterima. Saya akan segera membalas.`
          );

          contactForm.reset();
        }, 1000);
      }
    });

    // Real-time error clearing when user types
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      input.addEventListener('input', () => {
        const errorSpan = document.getElementById(`${input.id}-error`);
        if (errorSpan) errorSpan.textContent = '';
        input.classList.remove('is-invalid');
      });
    });
  }
});
