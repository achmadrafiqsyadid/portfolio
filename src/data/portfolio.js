export const portfolio = {
  personal: {
    fullName: 'Achmad Rafiq Syaddid',
    preferredName: 'Rafiq',
    role: 'Informatics Student & Junior Developer',
    university: 'Universitas Islam Kalimantan Muhammad Arsyad Al Banjari Banjarmasin',
    faculty: 'Fakultas Teknologi Informasi',
    major: 'S1 Teknik Informatika',
    semester: '7',
    location: 'Indonesia',
  },
  about: [
    'Saya sedang menempuh pendidikan S1 Teknik Informatika di Universitas Islam Kalimantan Muhammad Arsyad Al Banjari Banjarmasin.',
    'Di perkuliahan dan proyek pribadi, saya pernah mengerjakan aplikasi sederhana berbasis Java, aplikasi desktop dengan Python, serta proyek yang berkaitan dengan pengelolaan data dan perancangan sistem.',
    'Saya belum menganggap diri sebagai ahli. Saat ini saya masih memperkuat dasar pemrograman, memahami alur pengembangan aplikasi, dan membiasakan diri menyelesaikan pekerjaan dengan lebih terstruktur.',
    'Selain kegiatan perkuliahan, saya juga memiliki pengalaman magang di bidang IT Support dan pengalaman bekerja sebagai driver food delivery.',
    'Saya senang mempelajari hal baru, mencoba berbagai teknologi, dan mengembangkan kemampuan melalui praktik langsung.',
  ],
  contact: {
    email: 'achmadrafiqsyadid@gmail.com',
    github: 'https://github.com/achmadrafiqsyadid',
    repositories: 'https://github.com/achmadrafiqsyadid?tab=repositories',
    instagram: 'https://www.instagram.com/Rafiq_s4/',
    instagramHandle: '@Rafiq_s4',
  },
  skills: [
    {
      letter: 'A',
      title: 'Bahasa pemrograman',
      items: ['Java', 'Python', 'PHP', 'JavaScript'],
    },
    {
      letter: 'B',
      title: 'Pengembangan web',
      items: ['HTML', 'CSS', 'Bootstrap', 'PHP Native'],
    },
    {
      letter: 'C',
      title: 'Aplikasi desktop',
      items: ['Java GUI / Swing', 'Python PySide6'],
    },
    {
      letter: 'D',
      title: 'Database',
      items: ['MySQL', 'MariaDB', 'SQL'],
    },
    {
      letter: 'E',
      title: 'Development tools',
      items: ['Git', 'GitHub', 'NetBeans', 'Qt Creator', 'Visual Studio Code', 'XAMPP', 'Laragon'],
    },
    {
      letter: 'F',
      title: 'Bidang yang diminati',
      items: [
        'Object-Oriented Programming',
        'Database Management',
        'Software Development',
        'System Analysis and Design',
        'UML Modeling',
        'IT Support',
      ],
    },
  ],
  projects: [
    {
      number: '01',
      type: 'APLIKASI DESKTOP',
      category: 'DESKTOP APP',
      title: 'Program Sederhana Sewa Pertambangan',
      description:
        'Aplikasi desktop untuk mengelola data penyewaan alat berat dan konsumen. Proyek ini memisahkan antarmuka, logika aplikasi, dan koneksi database.',
      technologies: ['Python', 'PySide6', 'MySQL'],
      repository: 'https://github.com/achmadrafiqsyadid/ProgramSederhanaSewaPertambangan',
      linkLabel: 'Lihat source code',
      featured: true,
      visual: 'rental',
    },
    {
      number: '02',
      type: 'PERANCANGAN SISTEM',
      category: 'SYSTEM DESIGN',
      title: 'Sistem Manajemen Data Panti Asuhan',
      description:
        'Proyek kelompok dalam pembelajaran Rekayasa Perangkat Lunak. Fokus pekerjaan berada pada pemodelan kebutuhan dan diagram UML, bukan klaim aplikasi yang sudah selesai.',
      technologies: ['UML', 'Software Engineering', 'Use Case', 'Activity', 'Sequence', 'Class'],
      repository: 'https://github.com/achmadrafiqsyadid/sistem-manajemen-data-panti-asuhan',
      linkLabel: 'Lihat repository',
      featured: false,
      visual: 'orphan',
    },
    {
      number: '03',
      type: 'LATIHAN DESKTOP',
      category: 'JAVA EXERCISE',
      title: 'Aplikasi Pertambahan Dua Angka',
      description:
        'Aplikasi latihan berbasis Java untuk menerima dua angka dan menampilkan hasil penjumlahannya. Salah satu latihan dasar dalam pembelajaran pemrograman berorientasi objek.',
      technologies: ['Java', 'GUI'],
      repository: 'https://github.com/achmadrafiqsyadid/AplikasiPertambahanDuaAngka_2310010677',
      linkLabel: 'Lihat source code',
      featured: false,
      visual: 'java',
    },
    {
      number: '04',
      type: 'APLIKASI DESKTOP',
      category: 'DESKTOP APP',
      title: 'Aplikasi Cek Cuaca Sederhana',
      description:
        'Proyek aplikasi untuk menampilkan informasi cuaca. Repository dapat ditelusuri melalui daftar proyek pada akun GitHub saya.',
      technologies: ['Java', 'API'],
      repository: null,
      repositoryFallback: 'https://github.com/achmadrafiqsyadid?tab=repositories',
      linkLabel: 'Cari di daftar repository',
      featured: false,
      visual: 'weather',
    },
  ],
  education: [
    {
      period: 'SAAT INI',
      title: 'Universitas Islam Kalimantan Muhammad Arsyad Al Banjari',
      description: 'S1 Teknik Informatika · Fakultas Teknologi Informasi',
      status: 'Sedang menempuh semester 7',
    },
    {
      period: 'LULUS 2023',
      title: 'MAN 1 Barito Timur',
      description: 'Madrasah Aliyah',
      status: null,
    },
  ],
  experience: [
    {
      period: 'MAGANG',
      title: 'IT Support Intern',
      organization: 'BAPEKOM VII',
      description:
        'Memiliki pengalaman magang di bidang IT Support di BAPEKOM VII. Melalui kegiatan magang ini, saya mendapatkan pengalaman mengenal lingkungan kerja teknologi informasi, dukungan teknis, serta pentingnya ketelitian dan tanggung jawab dalam membantu kebutuhan operasional TI.',
    },
    {
      period: 'PENGALAMAN KERJA',
      title: 'Food Delivery Driver',
      organization: 'Pengantaran pesanan makanan',
      description:
        'Memiliki pengalaman bekerja sebagai driver food delivery dengan tanggung jawab mengantarkan pesanan makanan kepada pelanggan. Menjaga ketepatan waktu pengiriman, memastikan pesanan diterima dengan baik, dan berkomunikasi dengan pelanggan maupun merchant.',
    },
  ],
}

export const navigation = [
  { label: 'Tentang', href: '#tentang', id: 'tentang' },
  { label: 'Kemampuan', href: '#kemampuan', id: 'kemampuan' },
  { label: 'Karya', href: '#karya', id: 'karya' },
  { label: 'Perjalanan', href: '#perjalanan', id: 'perjalanan' },
  { label: 'Kontak', href: '#kontak', id: 'kontak', contact: true },
]
