# Portofolio Pribadi (Personal Portfolio Website)

Website portofolio profesional satu halaman (*Single-Page Application*) dengan *smooth scroll*, dibangun menggunakan **HTML5**, **CSS3**, dan **JavaScript Vanilla** sesuai spesifikasi **Product Requirement Document (PRD)**.

---

## 🚀 Fitur Utama & Struktur Halaman

Sesuai dokumen PRD, website ini memuat 5 bagian utama:
1. **Header & Navbar**:
   - Logo / Nama Brand personal (`Rizky.dev`).
   - Tautan navigasi cepat dengan indikator *active link* saat di-scroll (*ScrollSpy*).
   - Tombol *action* (Hire Me) dan menu hamburger yang responsif untuk ponsel/tablet.
2. **Hero & Tentang Saya (About Section)**:
   - Status ketersediaan (*Available for Opportunities / Freelance*).
   - Headline nama & peran profesional.
   - Bio ringkas, statistik pencapaian, dan tag *tech stack*.
   - Kartu visual foto profil dengan efek bercahaya (*glow*) dan lencana mikro mengambang (*floating badges*).
   - Tombol Call-to-Action: **Hubungi Saya**, **Lihat Karya**, dan **Unduh CV**.
3. **Pendidikan & Pengalaman (Education & Experience)**:
   - Desain *timeline* modern dengan tata letak dua kolom.
   - Kolom 1: Riwayat Pendidikan (Institusi, Jurusan, Tahun, Deskripsi, Tags).
   - Kolom 2: Pengalaman Kerja, Organisasi, dan Proyek Akademik (Posisi, Nama Instansi, Poin Pencapaian).
4. **Katalog Proyek (Projects Section)**:
   - Grid kartu proyek dengan mockup *browser window* (titik navigasi Mac & URL address).
   - Judul, deskripsi fungsi proyek, kategori, serta badge teknologi yang dipakai.
   - Tombol aksi menuju repositori GitHub dan live demo.
5. **Kontak & Media Sosial (Contact & Social Media)**:
   - Kartu kontak langsung (Email, WhatsApp dengan tautan langsung, Lokasi/Domisili).
   - Ikon media sosial interaktif (LinkedIn, GitHub, Instagram, X/Twitter).
   - Formulir kontak interaktif dengan validasi input dan notifikasi toast.
6. **Footer**:
   - Hak cipta, navigasi footer, dan tombol mengambang *Back to Top*.

---

## 📂 Struktur Berkas

```
c:\PORTO\
├── index.html        # Kerangka semantik HTML5
├── style.css         # Tata letak, tipografi, tema warna, dan desain responsif (CSS3)
├── script.js         # Navigasi mobile, scrollspy, notifikasi toast, dan validasi form
└── README.md         # Dokumentasi & panduan kustomisasi
```

---

## 🎨 Cara Menjalankan Website Secara Lokal

Anda tidak memerlukan server khusus (seperti PHP/Node.js) untuk membuka website ini:
1. Buka berkas `index.html` langsung dengan klik dua kali (*double click*) di File Explorer Anda, atau:
2. Buka melalui peramban web pilihan Anda (Google Chrome, Firefox, Edge, Safari).
3. Jika menggunakan VS Code, Anda juga dapat menggunakan ekstensi **Live Server** (klik kanan `index.html` -> *Open with Live Server*).

---

## ✏️ Panduan Kustomisasi Data Pribadi

Anda dapat menyesuaikan isi data portofolio dengan data asli Anda:
1. **Mengubah Nama & Gelar/Peran**:
   - Buka `index.html`.
   - Cari elemen `<h1 class="hero-title">` dan ubah teks `Rizky Pratama`.
   - Ubah elemen `<h2 class="hero-subtitle">` dengan profesi atau jurusan Anda.
2. **Mengubah Foto Profil**:
   - Pada `index.html` baris dengan tag `<img src="..." class="profile-image">`.
   - Ganti atribut `src` dengan path foto Anda, misalnya `src="assets/foto-profil.jpg"`.
3. **Mengubah Riwayat Pendidikan & Pengalaman**:
   - Cari bagian `<section id="experience">`.
   - Edit nama institusi, tahun, dan uraian tugas pada item-item `.timeline-item`.
4. **Mengubah Daftar Proyek**:
   - Cari bagian `<section id="projects">`.
   - Sesuaikan judul, deskripsi, tautan GitHub (`href="https://github.com/username/project"`), dan tag teknologi yang dipakai.
5. **Mengubah Kontak & WhatsApp**:
   - Cari bagian `<section id="contact">`.
   - Ganti `rizky.pratama.dev@email.com` dengan email aktif Anda.
   - Ganti nomor WhatsApp pada `https://wa.me/6281234567890` dengan nomor WhatsApp Anda (format kode negara tanpa spasi, contoh: `62812xxxxxxx`).

---

## 🌐 Panduan Publikasi / Hosting Gratis

Website ini siap di-deploy secara instan ke platform hosting gratis:
- **GitHub Pages**:
  1. Buat repository baru di GitHub (misal: `portfolio`).
  2. Unggah file `index.html`, `style.css`, dan `script.js`.
  3. Buka tab **Settings** -> **Pages** -> pilih branch `main` -> Save. Website akan aktif dalam hitungan detik.
- **Vercel / Netlify**:
  - Drag and drop folder `c:\PORTO` langsung ke dashboard Netlify Drop (app.netlify.com/drop) atau Vercel.
