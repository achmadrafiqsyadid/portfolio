# Portfolio — Achmad Rafiq Syaddid

Portfolio pribadi yang dimigrasikan dari HTML, CSS, dan JavaScript statis menjadi aplikasi React berbasis Vite dengan Tailwind CSS v4. Migrasi mempertahankan karakter Editorial Neubrutalism dan konten yang tersedia pada project awal.

## Teknologi

- React 19
- Vite 8
- Tailwind CSS 4 melalui plugin resmi `@tailwindcss/vite`
- Lucide React untuk ikon antarmuka
- JavaScript / JSX

## Persyaratan

- Node.js `^20.19.0` atau `>=22.12.0`
- npm

## Instalasi

```bash
npm install
```

## Menjalankan mode development

```bash
npm run dev
```

Vite akan menampilkan alamat lokal (umumnya `http://localhost:5173`).

## Build production

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`.

## Preview build production

```bash
npm run preview
```

## Struktur folder

```text
Portfolio/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── AUDIT.md
├── legacy-backup/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── README.md
│   └── AUDIT.md
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Konten dan aset yang perlu dilengkapi

- Foto profil dan screenshot proyek asli belum tersedia pada arsip sumber. Untuk saat ini, panel proyek tetap menggunakan ilustrasi CSS dan diberi keterangan bahwa itu bukan screenshot aplikasi.
- URL repository langsung untuk **Aplikasi Cek Cuaca Sederhana** belum dapat diverifikasi. Tautannya mengarah ke daftar repository GitHub akun pemilik, bukan URL yang ditebak.
- LinkedIn tidak ditampilkan karena belum ada alamat profil yang diberikan.

## Backup

File HTML/CSS/JS sebelum migrasi disimpan di `legacy-backup/` sebagai arsip. File tersebut tidak dimuat oleh aplikasi React dan tidak masuk ke proses build Vite.
