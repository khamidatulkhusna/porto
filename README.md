# 🌟 Portofolio Pribadi Modern & Interaktif

Website portofolio profesional satu halaman (*Single-Page Application*) yang interaktif, bersih, responsif, dan kaya fitur, dibangun menggunakan **HTML5**, **Tailwind CSS**, **Custom CSS3**, dan **Vanilla JavaScript (ES6+)** sesuai spesifikasi dokumen **Product Requirement Document (PRD)**.

---

## ✨ Ringkasan Fitur Unggulan (Core Features)

1. **Hero Section Elegan**:
   - Status ketersediaan (*Availability Badge*) dengan efek lampu indikator berdenyut (*pulsing green dot*).
   - Headline nama dengan tipografi modern & teks gradien.
   - **Quick Stats Counter**: Statistik pencapaian (3+ Tahun Pengalaman, 15+ Proyek Selesai, 100% Dedikasi) dengan animasi angka bertambah otomatis (*count-up*).
   - Tombol Call-to-Action (Lihat Portofolio, Hubungi Saya, Unduh CV) dan tautan media sosial.
   - Foto profil dengan *glow effect* dan lencana mikro mengambang (*floating badges: React, Tailwind, Figma*).

2. **About Me (Tentang Saya)**:
   - Ringkasan profesional dan filosofi kerja developer.
   - **4 Kartu Terstruktur (Core Values)**:
     - *Clean & Readable Code*
     - *User-Centered UI/UX*
     - *Problem Solving Mindset*
     - *Continuous Growth & Collaboration*
   - Informasi detail spesialisasi, domisili, dan status ketersediaan kerja.

3. **Skills Section (Keahlian & Alat)**:
   - **Animated Progress Bars**: Persentase keahlian teknis (HTML5, CSS3, Tailwind CSS, JavaScript ES6+, React.js, Git) yang bergerak otomatis saat di-scroll (*IntersectionObserver*).
   - **Interactive Badges**: Koleksi kartu alat bantu (Figma, VS Code, Vite, REST API, MySQL/PHP, Vercel) dengan efek hover interaktif.

4. **Projects / Portfolio (Galeri Proyek)**:
   - **Filter Kategori Dinamis**: Saring proyek berdasarkan `Semua (All)`, `Web App`, `UI/UX Design`, dan `Mobile` tanpa memuat ulang halaman.
   - **Detail Modal Interaktif**: Mengklik tombol detail membuka jendela pop-up interaktif berisi gambar resolusi tinggi, deskripsi lengkap, checklist fitur utama, tag stack teknologi, serta tautan ke Live Demo dan Repositori GitHub.

5. **Contact Form & Umpan Balik (Feedback Overlay)**:
   - Kartu kontak langsung (Email, WhatsApp dengan tautan chat langsung, dan Lokasi).
   - Formulir pesan interaktif dengan validasi *real-time* (nama, email, subjek, pesan).
   - **Simulated Loading State**: Tombol submit menampilkan ikon pemintal (*spinner*) selama 1.4 detik.
   - **Success Modal Overlay**: Pop-up konfirmasi pengiriman dengan animasi centang hijau dan reset formulir otomatis.

6. **Dark / Light Mode**:
   - Tombol sakelar tema di navbar dengan ikon animasi Matahari & Bulan.
   - Menyimpan preferensi pengguna di `localStorage` (`porto_theme`).
   - Otomatis mendeteksi tema default sistem operasi (*prefers-color-scheme*).

7. **Desain Responsif & Navigasi**:
   - Navbar kaca (*glassmorphism*) yang menempel di bagian atas (*sticky*) dengan bayangan otomatis saat di-scroll.
   - Indikator menu aktif (*ScrollSpy*).
   - Menu drawer ponsel (*mobile hamburger menu*) dengan efek latar belakang blur.
   - Tombol mengambang kembali ke atas (*Back to Top*).

---

## 📁 Struktur Berkas

```text
c:\PORTO\
├── PRD.md              # Dokumen Spesifikasi Produk & Kebutuhan Fitur
├── README.md           # Panduan Penggunaan & Kustomisasi (Berkas ini)
├── index.html          # Struktur Semantik HTML5 + Kelas Tailwind CSS
├── style.css           # Styling Kustom, Glassmorphism, & Animasi Keyframe
└── script.js           # Logika JavaScript Interaktif (Dark Mode, Filter, Modal, dll.)
```

---

## 🚀 Cara Menjalankan Website

Website ini dibuat tanpa dependensi rumit dan dapat langsung dijalankan di semua browser:

### Opsi 1: Buka Langsung di Browser
1. Buka folder `c:\PORTO` di File Explorer.
2. Klik dua kali (*double click*) pada file `index.html`.
3. Website akan langsung terbuka di Google Chrome, Firefox, Edge, atau Safari.

### Opsi 2: Menggunakan Ekstensi VS Code Live Server
1. Buka folder `c:\PORTO` di VS Code.
2. Klik kanan pada file `index.html`.
3. Pilih **"Open with Live Server"**.

---

## 🎨 Panduan Kustomisasi Data Pribadi

Anda dapat mengganti informasi bawaan dengan data profil Anda sendiri secara mudah:

1. **Mengubah Nama & Judul**:
   - Buka file [index.html](file:///c:/PORTO/index.html).
   - Cari teks `Khamidatul Khusna` dan ganti dengan nama Anda.
   - Cari teks `Frontend Web Developer & UI/UX Enthusiast` untuk mengubah peran Anda.

2. **Mengganti Foto Profil**:
   - Pada baris `<img>` di dalam bagian hero, ganti URL Unsplash dengan foto lokal Anda (contoh: `src="foto-saya.jpg"`).

3. **Mengubah / Menambah Proyek**:
   - Buka file [script.js](file:///c:/PORTO/script.js).
   - Pada objek `projectData`, Anda dapat mengubah judul, kategori, deskripsi, gambar, checklist fitur, dan tautan demo/GitHub untuk masing-masing ID proyek.

4. **Mengubah Nomor WhatsApp & Email**:
   - Pada bagian `#contact` di `index.html`:
     - Ganti `khamidatulkhusna24@gmail.com` dengan email Anda.
     - Ganti tautan `https://wa.me/6281234567890` dengan nomor telepon WhatsApp Anda (gunakan kode negara `62` tanpa tanda `+` atau spasi).

---

## 🌐 Panduan Publikasi / Hosting Gratis

Website ini siap di-deploy secara instan ke layanan hosting gratis:

### 1. GitHub Pages
1. Buat repositori baru di GitHub (misal: `portfolio`).
2. Masukkan seluruh file (`index.html`, `style.css`, `script.js`, `README.md`, `PRD.md`) ke repositori tersebut:
   ```bash
   git add .
   git commit -m "feat: release portfolio website"
   git push origin main
   ```
3. Buka tab **Settings** -> **Pages** pada repositori GitHub -> pilih branch `main` -> Klik **Save**.
4. Website Anda akan online dalam beberapa detik!

### 2. Vercel atau Netlify
- Buka dashboard [Netlify Drop](https://app.netlify.com/drop) atau [Vercel](https://vercel.com).
- Cukup seret (*drag-and-drop*) folder `c:\PORTO` ke dashboard.
