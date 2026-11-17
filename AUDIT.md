# Audit migrasi Portfolio React

## Sumber yang dipertahankan

Kode awal berbasis HTML/CSS/JavaScript disimpan utuh di `legacy-backup/` sebelum file aktif diganti menjadi React/Vite. Arsip asli tidak menyediakan foto profil atau screenshot proyek.

## Implementasi migrasi

- React menggunakan functional components dan JSX.
- Vite sebagai development server dan production build tool.
- Tailwind CSS v4 terintegrasi menggunakan `@tailwindcss/vite` dan `@import "tailwindcss"`.
- Token warna, font, shadow, radius, dan container didefinisikan di `@theme`.
- Bagian halaman dipisahkan menjadi Navbar, Hero, About, Skills, Projects, Education, Experience, Contact, dan Footer.
- Informasi berulang disimpan di `src/data/portfolio.js`.
- Navigasi mobile menggunakan `useState`, dukungan Escape, penutupan setelah link dipilih, dan penutupan saat klik di luar.
- Navigasi aktif menggunakan `IntersectionObserver`.
- Salin email menggunakan Clipboard API dengan fallback `document.execCommand`.
- Metadata SEO, Open Graph, theme color, title, viewport, dan favicon disertakan.

## Konten yang sengaja tidak dikarang

- Repository langsung untuk Aplikasi Cek Cuaca belum terverifikasi. Link mengarah ke daftar repository GitHub pemilik akun.
- Foto profil dan gambar/screenshot asli proyek belum tersedia. Project artwork adalah ilustrasi CSS dan diberi catatan yang jelas.
- LinkedIn tidak ditampilkan karena tidak ada URL profil.
- Tidak ada tanggal atau pencapaian kerja tambahan yang direka.

## Pemeriksaan yang berhasil di lingkungan pembuatan

- 11 file JSX berhasil diparse menggunakan TypeScript JSX transpiler.
- `src/data/portfolio.js` dan `vite.config.js` lolos pemeriksaan sintaks Node.js.
- `src/index.css` berhasil diparse menggunakan PostCSS.
- Semua import lokal JSX diperiksa terhadap file tujuan.
- Semua link fragment yang dapat diidentifikasi diperiksa terhadap ID section di JSX.
- Struktur folder dan file backup diperiksa.

## Pemeriksaan yang belum dapat dilakukan

`npm install` tidak selesai karena lingkungan pembuatan tidak dapat menyelesaikan DNS ke `registry.npmjs.org` (`EAI_AGAIN`). Karena paket belum terpasang, `npm run dev`, `npm run build`, dan pengujian browser/responsive tidak dapat dijalankan di lingkungan ini. Jalankan instalasi dan build pada komputer lokal dengan koneksi internet.
