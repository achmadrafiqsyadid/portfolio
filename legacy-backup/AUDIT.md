# Audit dan perbaikan portfolio

## File yang diterima

Arsip `Portfolio.rar` berisi tiga file: `index.html`, `styles.css`, dan `script.js`. Arsip tidak menyertakan `assets/`, foto profil, atau screenshot proyek.

## Temuan pada versi awal

### `index.html`
- Struktur semantik sudah cukup baik: terdapat header, nav, main, section, footer, skip link, heading berurutan, serta label aksesibilitas.
- Hero memakai headline bahasa Inggris yang generik untuk halaman berbahasa Indonesia: “Building Digital Solutions Through Code.”
- Jendela kode `rafiq.js`, bentuk geometris, stiker semester, dan pita teknologi bergerak menjadi ornamen yang tidak banyak menambah informasi personal.
- Bagian Tentang, Skill, Proyek, Pendidikan/Pengalaman, dan Kontak mengikuti struktur template landing page yang sangat umum.
- Lima gambar dirujuk melalui `data-src`, tetapi tidak ada satupun file gambar dalam arsip: `assets/profile.jpg` dan empat gambar proyek.
- Link proyek cek cuaca menuju pencarian/filter daftar repository, bukan URL repository langsung yang sudah dipastikan.
- Beberapa deskripsi proyek dan pengalaman terlalu umum sehingga belum memperlihatkan kontribusi atau detail pekerjaan yang spesifik.

### `styles.css`
- Sudah memakai CSS variables, warna datar, border tegas, hard shadow, breakpoint responsif, focus state, dan `prefers-reduced-motion`.
- Terlalu banyak bagian memakai pola kartu, label, border, shadow, dan chip yang seragam. Efeknya terasa seperti komponen dari template yang sama.
- Skill disajikan sebagai beberapa kartu kategori, bukan daftar teknologi yang terhubung dengan konteks penggunaannya.
- Latar section biru dan kuning yang penuh, dikombinasikan dengan banyak ornamen, membuat semua bagian saling berebut perhatian.
- Sistem visual sudah mengarah ke Neubrutalism, tetapi belum memiliki hierarki editorial yang cukup personal.

### `script.js`
- Fungsi menu mobile, penanda navigasi aktif, reveal on-scroll, gambar opsional, salin email, dan tahun footer sudah dipisahkan dengan cukup rapi.
- Masalah progressive enhancement: HTML menambahkan kelas `js` sebelum file eksternal `script.js` dimuat, sementara CSS menyetel `.js .reveal { opacity: 0; }`. Jika JavaScript gagal dimuat, elemen reveal dapat tetap tersembunyi.
- Gambar diperiksa melalui objek `Image` meskipun file gambar tidak tersedia; placeholder tetap ditampilkan, tetapi halaman jadi sangat bergantung pada aset yang tidak ikut dikirim.

## Arah perbaikan

- Mengubah hero menjadi pengenalan personal berbahasa Indonesia, bukan slogan pemasaran generik.
- Mengganti ornamen hero dengan lembar identitas yang memuat informasi nyata.
- Menghapus marquee, pseudo-terminal dekoratif, dan stiker yang tidak diperlukan.
- Mengubah bagian skill menjadi daftar editorial berdasarkan kategori teknologi yang pernah digunakan.
- Mengubah project cards menjadi catatan karya dengan panel grafis CSS. Panel tersebut diberi keterangan sebagai ilustrasi, bukan screenshot aplikasi.
- Mengurangi penggunaan kartu berulang dan menggunakan garis pemisah, tipografi, serta tata letak asimetris untuk membangun ritme visual.
- Menghindari klaim tingkat ahli dan tidak menambahkan tanggal atau tanggung jawab pekerjaan yang belum diberikan.
- Memperbaiki progressive enhancement: konten tidak disembunyikan menunggu IntersectionObserver.
- Menghapus ketergantungan pada lima gambar yang tidak ada di arsip.
- Mempertahankan struktur HTML semantik, aksesibilitas dasar, dan fungsi menu, navigasi aktif, salin email, serta tahun dinamis.

## Validasi versi revisi

- JavaScript lolos `node --check`.
- HTML berhasil diparse; tidak ditemukan ID duplikat.
- Semua tautan internal mengarah ke elemen yang ada.
- CSS berhasil diparse tanpa error sintaks top-level.
- Pengujian browser di lebar 1440 px, 820 px, dan 390 px: tidak ditemukan horizontal overflow.
- Keenam section tampil dan tidak ada elemen isi yang disembunyikan dengan opacity 0.
- Menu mobile berhasil dibuka dan ditutup.
- Tidak ada exception JavaScript saat pengujian.

## Yang masih perlu ditambahkan oleh pemilik portfolio

- Foto profil asli, bila ingin ditampilkan.
- Screenshot asli dari aplikasi sewa pertambangan, diagram UML, aplikasi pertambahan dua angka, dan aplikasi cek cuaca.
- URL repository langsung untuk aplikasi cek cuaca, setelah nama repository dipastikan.
- Detail tugas magang IT Support yang benar-benar pernah dilakukan, jika ingin ditulis lebih rinci.
