/**
 * ============================================================
 *  DATA.JS — FILE DATA KONTEN WEBSITE
 *  "Berbagi Kepedulian, Mendengar Aspirasi"
 * ============================================================
 *
 *  INI ADALAH SATU-SATUNYA FILE YANG PERLU KALIAN EDIT.
 *
 *  CARA MENAMBAH FOTO:
 *    1. Simpan foto ke folder "foto/" untuk dokumentasi
 *    2. Simpan foto kertas harapan ke folder "harapan/"
 *    3. Isi properti foto: "foto/nama-file.jpg"
 *    4. Simpan (Ctrl+S) lalu refresh browser
 *
 * ============================================================
 */


/* ============================================================
   BAGIAN 1: FOTO DOKUMENTASI
   ============================================================
   Simpan foto ke folder "foto/" lalu isi properti foto: di bawah.
   Contoh: foto: "foto/anggota.jpg"
   ============================================================ */

const FOTO_DOKUMENTASI = [

  {
    foto: "foto/anggota-kelompok.png",   // ← Simpan foto anggota kelompok ke: foto/anggota-kelompok.png
    judul: "Anggota Kelompok",
    deskripsi: "Tim Gerakan Nasi Harapan yang bersemangat turun langsung ke lapangan untuk berbagi kepedulian.",
    lebar: true
  },

  {
    foto: "foto/flyer.png",   // ← Simpan foto flyer ke: foto/flyer.png
    judul: "Flyer Gerakan Nasi Harapan",
    deskripsi: "Selebaran bermakna yang kami bagikan berisi pesan kemanusiaan dan kolom harapan untuk Indonesia.",
    lebar: false
  },

  {
    foto: "foto/audiens1.png",   // ← Simpan foto audiens 1 ke: foto/audiens1.png
    judul: "Momen Berbagi — Audiens 1",
    deskripsi: "Kami menyapa dan berbagi nasi bungkus kepada warga yang kami temui di sekitar lingkungan.",
    lebar: false
  },

  {
    foto: "foto/audiens2.png",   // ← Simpan foto audiens 2 ke: foto/audiens2.png
    judul: "Momen Berbagi — Audiens 2",
    deskripsi: "Setiap orang yang kami temui disambut dengan hangat dan diajak berbincang sejenak.",
    lebar: false
  },

  {
    foto: "foto/audiens3.png",   // ← Simpan foto audiens 3 ke: foto/audiens3.png
    judul: "Momen Berbagi — Audiens 3",
    deskripsi: "Warga menerima nasi bungkus dan selebaran harapan dengan senyum yang tulus.",
    lebar: false
  },

  {
    foto: "foto/audiens4.png",   // ← Simpan foto audiens 4 ke: foto/audiens4.png
    judul: "Momen Berbagi — Audiens 4",
    deskripsi: "Berbagi tidak hanya soal makanan — kami juga mendengarkan cerita dan harapan mereka.",
    lebar: false
  },

  {
    foto: "foto/audiens5.png",   // ← Simpan foto audiens 5 ke: foto/audiens5.png
    judul: "Momen Berbagi — Audiens 5",
    deskripsi: "Warga menerima nasi harapan dengan penuh rasa syukur di tengah kesibukan malam.",
    lebar: true
  },

  {
    foto: "foto/audiens6.png",   // ← Simpan foto audiens 6 ke: foto/audiens6.png
    judul: "Menulis Harapan — Audiens 6",
    deskripsi: "Warga menuliskan harapannya untuk Indonesia langsung di atas selebaran yang kami berikan.",
    lebar: false
  },

  {
    foto: "foto/audiens7.png",   // ← Simpan foto audiens 7 ke: foto/audiens7.png
    judul: "Menulis Harapan — Audiens 7",
    deskripsi: "Dengan tangan sendiri, setiap orang menitipkan doa dan harapannya untuk bangsa.",
    lebar: false
  },

  {
    foto: "foto/audiens8.png",   // ← Simpan foto audiens 8 ke: foto/audiens8.png
    judul: "Momen Berbagi — Audiens 8",
    deskripsi: "Nasi bungkus dan selebaran harapan diserahkan langsung dengan penuh keikhlasan.",
    lebar: false
  },

  {
    foto: "foto/audiens9.png",   // ← Simpan foto audiens 9 ke: foto/audiens9.png
    judul: "Menulis Harapan — Audiens 9",
    deskripsi: "Momen ketika warga menuliskan harapannya — setiap kata adalah suara nyata dari rakyat.",
    lebar: false
  },

  {
    foto: "foto/audiens10.png",   // ← Simpan foto audiens 10 ke: foto/audiens10.png
    judul: "Momen Berbagi — Audiens 10",
    deskripsi: "Kegiatan ini membuktikan bahwa kepedulian kecil bisa membawa dampak yang besar.",
    lebar: true
  },

  /* ──────────────────────────────────────────
     TAMBAHKAN FOTO BARU DI BAWAH INI
  {
    foto: "foto/nama-foto.jpg",
    judul: "Judul Foto Baru",
    deskripsi: "Deskripsi singkat foto ini.",
    lebar: false
  },
     ────────────────────────────────────────── */

];


/* ============================================================
   BAGIAN 2: KARTU HARAPAN (DINDING HARAPAN)
   ============================================================
   Teks harapan diambil langsung dari tulisan tangan di selebaran.
   Simpan foto kertas harapan ke folder "harapan/" lalu isi foto: di bawah.
   ============================================================ */

const KARTU_HARAPAN = [

  {
    // Respon 1: "CAM OANG GULIQ, B PEMERINTAH LEBIH PEDULI"
    harapan: "Calon orang guli, biar pemerintah lebih peduli.",
    nama: "Warga 01",
    tanggal: "12 Juni 2026",
    foto: "foto/respon1.png",   // ← Simpan foto kertas ke: foto/respon1.jpg
    gaya: "merah"
  },

  {
    // Respon 2: "Semoga Indonesia kedepannya lebih baik, terlepas dari berbagai masalah yg sedang terjadi. Semoga ekonomi lekas membaik."
    harapan: "Semoga Indonesia kedepannya lebih baik, terlepas dari berbagai masalah yang sedang terjadi. Semoga ekonomi lekas membaik.",
    nama: "Warga 02",
    tanggal: "12 Juni 2026",
    foto: "foto/respon2.png",   // ← Simpan foto kertas ke: foto/respon2.jpg
    gaya: ""
  },

  {
    // Respon 3: "1. Kasihan pemerintah hapus outsosing, 2. Pemerintah lebih peduli sama pihak rakyat kecil"
    harapan: "1. Pemerintah hapus outsourcing. 2. Pemerintah lebih peduli sama pihak rakyat kecil.",
    nama: "Warga 03",
    tanggal: "12 Juni 2026",
    foto: "foto/respon3.png",   // ← Simpan foto kertas ke: foto/respon3.jpg
    gaya: "hangat"
  },

  {
    // Respon 4: "Pemerintah lebih perhatikan masyarakat kecil"
    harapan: "Pemerintah lebih perhatikan masyarakat kecil.",
    nama: "Warga 04",
    tanggal: "12 Juni 2026",
    foto: "foto/respon4.png",   // ← Simpan foto kertas ke: foto/respon4.jpg
    gaya: ""
  },

  {
    // Respon 5: "Semoga harga bahan pokok tetap dan gratis kesehatan"
    harapan: "Semoga harga bahan pokok tetap stabil dan kesehatan gratis untuk semua.",
    nama: "Warga 05",
    tanggal: "12 Juni 2026",
    foto: "foto/respon5.png",   // ← Simpan foto kertas ke: foto/respon5.jpg
    gaya: "merah"
  },

  {
    // Respon 6: "Kerukunan dalam bermasyarakat yang baik ditumbuhkan oleh setiap warga"
    harapan: "Kerukunan dalam bermasyarakat yang baik ditumbuhkan oleh setiap warga.",
    nama: "Warga 06",
    tanggal: "12 Juni 2026",
    foto: "foto/respon6.png",   // ← Simpan foto kertas ke: foto/respon6.jpg
    gaya: "hangat"
  },

  {
    // Respon 7: "Semoga Ekonomi Makin Mancik"
    harapan: "Semoga ekonomi makin maju dan meningkat untuk seluruh rakyat Indonesia.",
    nama: "Warga 07",
    tanggal: "12 Juni 2026",
    foto: "foto/respon7.png",   // ← Simpan foto kertas ke: foto/respon7.jpg
    gaya: ""
  },

  {
    // Respon 8: "Tingkatkan Kepedulian di saat susah"
    harapan: "Tingkatkan kepedulian di saat susah — itulah saat kita paling membutuhkan satu sama lain.",
    nama: "Warga 08",
    tanggal: "12 Juni 2026",
    foto: "foto/respon8.png",   // ← Simpan foto kertas ke: foto/respon8.jpg
    gaya: "merah"
  },

  {
    // Respon 9: Panjang — tentang pemerintah menegakkan keadilan sosial sila ke-5
    harapan: "Menurut saya pemerintah harus benar-benar menegakkan keadilan sosial yang benar sesuai sila ke-5. Bukan hanya menguntungkan orang yang kaya dan berkuasa, karena sampai saya tulis ini masih ada yang di luar sana masih susah. Semoga Tuhan beri pertolongan.",
    nama: "Warga 09",
    tanggal: "12 Juni 2026",
    foto: "foto/respon9.png",   // ← Simpan foto kertas ke: foto/respon9.jpg
    gaya: "hangat"
  },

  {
    // Respon 10: "Sesama Indonesia harus toleransi antar umat beragama"
    harapan: "Sesama Indonesia harus toleransi antar umat beragama.",
    nama: "Warga 10",
    tanggal: "12 Juni 2026",
    foto: "foto/respon10.png",   // ← Simpan foto kertas ke: foto/respon10.jpg
    gaya: ""
  },

  /* ──────────────────────────────────────────
     TAMBAHKAN HARAPAN BARU DI BAWAH INI
  {
    harapan: "Tulis kalimat harapan warga di sini.",
    nama: "Warga 11",
    tanggal: "12 Juni 2026",
    foto: "",
    gaya: ""
  },
     ────────────────────────────────────────── */

];