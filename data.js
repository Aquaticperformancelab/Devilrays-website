/* =========================================================
   DATA KLUB DEVILRAYS AQUATICS
   ---------------------------------------------------------
   File ini berisi semua data yang sering diperbarui:
   kontak, asisten pelatih, pengumuman, dan agenda kalender.

   ATURAN SAAT MENGEDIT
   - Teks selalu diapit tanda kutip ganda: "seperti ini"
   - Setiap blok { ... } di dalam daftar [ ... ] diakhiri koma
   - Tanggal ditulis TAHUN-BULAN-TANGGAL, mis. "2027-01-17"
   - Jangan memakai tanda kutip ganda di dalam teks

   CEK SETELAH EDIT
   Buka website dengan tambahan #cek-data di akhir alamat,
   mis. https://devilraysaquatics.github.io/#cek-data
   Panel pemeriksa akan menunjukkan kalau ada yang salah.
   ========================================================= */

const CONFIG = {
  // Nomor WhatsApp klub, format internasional tanpa + (mis. "6281234567890").
  // Jika dikosongkan, pendaftar memilih sendiri kontak tujuan di WhatsApp.
  whatsapp: "628112931103",
  instagram: "",          // mis. "devilrays.aquatics"
  email: "",              // mis. "halo@devilrays.id"
  // Link Google Business Profile Devilrays (isi setelah profil terverifikasi).
  // Selama kosong, tombol peta membuka titik lokasi kolam di Google Maps.
  googleBusinessUrl: ""
};

// Asisten pelatih. Tambahkan satu blok { } per asisten; bagian "Coaching Team"
// otomatis muncul di website begitu daftar ini berisi minimal satu nama.
// photo boleh dikosongkan ("") — website akan menampilkan inisial.
const ASSISTANT_COACHES = [
  // {
  //   name: "Nama Asisten",
  //   role: "Assistant Coach",
  //   photo: "img/coach-nama.webp",
  //   bio: "Satu sampai dua kalimat tentang pengalaman dan perannya di Devilrays."
  // },
];



// Pengumuman (terbaru di atas). pinned:true = disorot.
const ANNOUNCEMENTS = [
  {date:"2026-12-07", cat:"club", pinned:true, title:"Pendaftaran Angkatan Pertama Dibuka",
   body:"Mulai 7 Desember 2026, Devilrays Aquatics membuka penerimaan atlet angkatan pertama untuk Season 2026–2027, untuk program Competitive Development dan Performance Squad. Isi Initial Inquiry di website, lalu tim kami akan menghubungi lewat WhatsApp untuk konsultasi dan jadwal Trial Session."},
  {date:"2026-11-11", cat:"club", title:"Season 2026–2027 Dimulai Desember",
   body:"Musim latihan perdana berjalan Desember 2026 hingga November 2027, dengan periodisasi yang memperhitungkan kalender sekolah dan masa ujian atlet."},
  {date:"2026-11-11", cat:"adjust", title:"Jadwal Latihan Saat Ramadan",
   body:"Ramadan 1448 H diperkirakan mulai 8 Februari 2027. Jam dan beban latihan selama Ramadan akan disesuaikan dan diumumkan menjelang bulan puasa."}
   {date:"2026-11-17", cat:"competition", title:"KRAPSI Piala KONI PUSAT",
   body:"Event Nasional : KRAPSI Piala KONI PUSAT 18 - 20 Desember. Mandatory Event for Performance Squad"}
   
];

// Agenda kalender. end (opsional) untuk rentang beberapa hari.
const EVENTS = [
  {date:"2026-12-07", cat:"club", title:"Pendaftaran atlet dibuka", note:"Angkatan pertama: Competitive Development & Performance Squad"},
  {date:"2026-12-01", cat:"club", title:"Awal Season 2026–2027", note:"Mulai fase persiapan umum"},
  {date:"2026-12-18", end:"2026-12-20, "cat:"competition", title:"KRAPSI Piala KONI PUSAT 18-20 Desember", note:"Mandatory Event for Performance Squad"}
  {date:"2026-12-25", cat:"holiday", title:"Hari Raya Natal", note:"Libur nasional"},
  {date:"2027-01-01", cat:"holiday", title:"Tahun Baru 2027", note:"Libur nasional"},
  {date:"2027-02-08", end:"2027-03-08", cat:"adjust", title:"Ramadan 1448 H (perkiraan)", note:"Jadwal & beban latihan disesuaikan"},
  {date:"2027-03-08", cat:"holiday", title:"Hari Suci Nyepi", note:"Libur nasional"},
  {date:"2027-03-10", end:"2027-03-11", cat:"holiday", title:"Idulfitri 1448 H (perkiraan)", note:"Libur nasional; cuti bersama 9, 12, 15 Maret"},
  {date:"2027-11-30", cat:"club", title:"Akhir Season 2026–2027", note:"Evaluasi & goal-setting musim berikutnya"}
];

// Rentang bulan yang bisa dibuka di kalender (TAHUN-BULAN)
const SEASON = {start:"2026-11", end:"2027-11"};
