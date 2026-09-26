# Product Requirement Document (PRD)
## Website Portofolio Interaktif, Modern, dan Responsif

- **Nama Proyek:** Personal Portfolio Website (Portofolio Interaktif)
- **Pemilik / Profil:** Khamidatul Khusna (Frontend & UI/UX Developer)
- **Status:** Production-Ready
- **Versi:** 2.0.0
- **Teknologi:** Semantic HTML5, Tailwind CSS, Custom CSS3, Vanilla JavaScript (ES6+)

---

## 1. Latar Belakang & Tujuan (Background & Objectives)

### 1.1 Latar Belakang
Di era digital saat ini, portofolio online merupakan aset utama bagi seorang web developer dan desainer untuk menampilkan keahlian, proyek nyata, dan profesionalitas kepada calon klien, perekrut (*recruiter*), maupun mitra kolaborasi. Portofolio harus memadukan kesederhanaan (*simplicity*), daya tarik visual (*attractive aesthetics*), dan interaktivitas yang mulus (*smooth user experience*).

### 1.2 Tujuan Produk
1. **Representasi Profesional:** Menampilkan identitas personal, latar belakang, dan nilai tambah developer secara jelas dan elegan.
2. **Katalog Karya Interaktif:** Menyediakan galeri proyek yang dapat difilter berdasarkan kategori secara dinamis tanpa me-reload halaman.
3. **Showcase Keterampilan Nyata:** Menampilkan keahlian teknis dengan progress bar beranimasi dan badge interaktif.
4. **Pengalaman Pengguna Optimal:** Mendukung mode Gelap / Terang (*Dark/Light Mode*), navigasi responsif di semua perangkat (ponsel, tablet, desktop), serta interaksi formulir kontak dengan status pemrosesan (*loading state*) dan umpan balik (*feedback overlay*).

---

## 2. Target Pengguna & Persona (Target Audience & Personas)

1. **Tech Recruiters & HR:**
   - *Kebutuhan:* Memeriksa kualifikasi dengan cepat, melihat ringkasan keahlian, riwayat pengalaman, dan mengunduh CV.
   - *Ekspektasi:* Navigasi intuitif, tipografi rapi, waktu muat cepat, dan tata letak yang profesional.
2. **Klien Freelance & Calon Mitra Usaha:**
   - *Kebutuhan:* Menilai portofolio proyek terdahulu, live demo, dan kemudahan dalam menghubungi developer via WhatsApp/Email.
   - *Ekspektasi:* Desain modern, tampilan proyek yang meyakinkan, serta formulir kontak yang berfungsi interaktif.
3. **Rekan Komunitas Developer:**
   - *Kebutuhan:* Melihat repositori GitHub, stack teknologi yang digunakan, dan arsitektur kode.

---

## 3. Spesifikasi Fitur Utama (Core Feature Specifications)

### 3.1 Hero Section
- **Status Ketersediaan:** Lencana mengambang (*availability badge*) dengan indikator lampu berdenyut (*pulsing dot*) menandakan kesiapan menerima proyek/magang.
- **Perkenalan Personal:** Headline nama yang menarik dengan teks gradien modern, peran profesional, dan ringkasan bio singkat.
- **Quick Stats Counter:** Statistik pencapaian (misal: Tahun Pengalaman, Proyek Selesai, Kepuasan/Dedikasi) dengan animasi angka bertambah (*count-up*) saat masuk viewport.
- **Tombol Aksi (Call-to-Action):**
  - "Lihat Portofolio" (smooth scroll ke bagian proyek).
  - "Hubungi Saya" (smooth scroll ke formulir kontak).
  - "Unduh CV" (tombol unduh dokumen CV).
- **Tautan Media Sosial:** Ikon interaktif (GitHub, LinkedIn, Instagram, WhatsApp, Email).
- **Visual Avatar:** Foto profil berbingkai gradien halus dengan lencana mikro teknologi mengambang (*floating badges: React, Tailwind, Figma, JS*).

### 3.2 About Me Section
- **Ringkasan Profesional:** Uraian mengenai filosofi pengembangan web, dedikasi terhadap kode yang bersih, dan orientasi pada pengalaman pengguna.
- **Structured Cards (Nilai Inti):** 4 kartu terstruktur yang menjelaskan keunggulan utama:
  1. *Clean & Modern Code* (Arsitektur terstruktur dan semantik).
  2. *User-Centered Design* (Estetika visual dan kemudahan akses UI/UX).
  3. *Problem Solving* (Kemampuan analitis memecahkan tantangan teknis).
  4. *Continuous Learning & Collaboration* (Adaptif terhadap teknologi terkini).
- **Tab / Card Info Tambahan:** Pendidikan, sertifikasi, atau ringkasan perjalanan karir.

### 3.3 Skills Section
- **Animasi Progress Bar:** Persentase keahlian teknis (HTML5/CSS3, JavaScript, Tailwind CSS, React.js, PHP/Node.js, Git) yang bergerak otomatis dari 0% ke target nilai saat pengguna menggulir ke bagian ini (*IntersectionObserver*).
- **Interactive Badges:** Koleksi lencana alat bantu dan framework pendukung (Figma, VS Code, REST API, Vite, Vercel, MySQL, Responsive Design) dengan efek *hover scale*, *glow*, dan penjelasan tooltip.

### 3.4 Projects / Portfolio Gallery
- **Kategori Filter:** Tombol filter kategori yang interaktif:
  - `Semua (All)`
  - `Web App`
  - `UI/UX Design`
  - `Mobile`
- **Animasi Transisi Filter:** Kartu proyek berpindah dan memudar halus (*fade & scale transition*) sesuai filter yang dipilih.
- **Kartu Proyek Modern:**
  - Mockup visual beresolusi tinggi dengan bingkai browser/kartu elegan.
  - Tag kategori dan badge teknologi (*tech stack tags*).
  - Judul proyek dan ringkasan deskripsi solusi.
  - Tombol aksi: "Live Demo", "Source Code (GitHub)", dan "Lihat Detail" (membuka Modal Interaktif).
- **Project Detail Modal:** Jendela pop-up detail proyek yang menampilkan gambar penuh, deskripsi mendalam, fitur utama, dan tautan langsung.

### 3.5 Contact Form & Informasi Kontak
- **Kartu Informasi Kontak:**
  - Email dengan tautan `mailto:`.
  - WhatsApp dengan tautan langsung `https://wa.me/`.
  - Lokasi/domisili.
- **Formulir Interaktif:**
  - Input field: Nama Lengkap, Alamat Email, Subjek Pesan, dan Isi Pesan.
  - Validasi *client-side* seketika (menolak email tidak valid atau field kosong).
  - Status pemrosesan (*Simulated Loading State*): Tombol berubah menjadi ikon pemintal (*spinner*) dengan teks "Mengirim pesan...".
  - Umpan balik sukses (*Success Feedback Overlay/Modal*): Notifikasi sukses pop-up dengan tombol tutup dan reset form otomatis.

### 3.6 Dark / Light Mode Toggle
- **Penyimpanan Preferensi:** Preferensi pengguna disimpan di `localStorage` (`theme: 'dark'` / `theme: 'light'`).
- **Deteksi Sistem Default:** Jika belum ada preferensi, website otomatis mengikuti setelan tema sistem operasi (`prefers-color-scheme`).
- **Transisi Halus:** Perubahan warna latar belakang, teks, kartu, dan bayangan berjalan mulus (*smooth transition*).
- **Ikon Dinamis:** Tombol sakelar berganti ikon antara Matahari (*Sun*) dan Bulan (*Moon*).

### 3.7 Responsive Design & Navigasi
- **Fixed & Glassmorphism Header:** Navbar menempel di bagian atas dengan efek latar belakang kabur (*backdrop-filter: blur*).
- **ScrollSpy:** Indikator tautan navbar aktif berubah otomatis mengikuti bagian halaman yang sedang dilihat.
- **Mobile Menu Drawer:** Menu samping/dropdown responsif dengan tombol hamburger beranimasi dan penutup latar belakang (*overlay blur*).
- **Back to Top Button:** Tombol mengambang di pojok kanan bawah yang muncul otomatis ketika halaman digulir melebihi 400px.

---

## 4. Arsitektur Teknis (Technical Architecture)

```
c:\PORTO\
├── PRD.md              # Dokumen Spesifikasi Produk & Kebutuhan Fitur
├── README.md           # Panduan Penggunaan, Kustomisasi, & Deployment
├── index.html          # Struktur Semantik HTML5 + Tailwind CSS Utility Classes
├── style.css           # Styling Tambahan, Efek Glassmorphism, & Animasi CSS
└── script.js           # Logika JavaScript Interaktif (Dark Mode, Filter, Modal, Form, Observer)
```

---

## 5. Kriteria Penerimaan (Acceptance Criteria)

| Fitur | Kriteria Keberhasilan |
|---|---|
| **Dark/Light Mode** | Berfungsi saat diklik, tema tidak hilang saat halaman di-refresh (*localStorage persistence*). |
| **Filter Proyek** | Mengklik tab filter (All, Web App, UI/UX, Mobile) menyaring item yang sesuai tanpa reload halaman. |
| **Skill Progress** | Bar persentase terisi animasi secara halus saat pengguna menggulir ke section keahlian. |
| **Form Kontak** | Memvalidasi input kosong/salah; menampilkan animasi loading 1.5 detik, lalu memunculkan modal/toast sukses. |
| **Responsivitas** | Tampilan tetap proporsional dan tidak rusak pada resolusi 360px (mobile), 768px (tablet), hingga >1200px (desktop). |
| **Performa** | Memuat cepat tanpa dependensi berat (hanya menggunakan Tailwind CDN, Google Fonts, dan FontAwesome). |
