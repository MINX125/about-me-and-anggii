// ==========================================================================
// 💜 WEBSITE CONFIGURATION - UNTUK GIRLFRIEND TERSAYANG 💜
// Kamu bisa mengubah teks, nama, tanggal, foto, dan lagu di bawah ini dengan mudah!
// ==========================================================================

const CONFIG = {
  // --- IDENTITAS PASANGAN ---
  recipient: {
    fullName: "Anggita Isnayni Hidayah",
    nickName: "Anggita",
    birthDate: "20 Juni 2011",
    zodiac: "Gemini ♊",
    role: "The Prettiest Girlfriend 🌸",
    avatar: "assets/images/fotoanggi.jpg"
  },
  sender: {
    fullName: "Mochamad Khoirul Fahmi",
    nickName: "Fahmi",
    birthDate: "11 Desember 2011",
    zodiac: "Sagitarius ♐",
    role: "Your Lucky Guy 🤍",
    avatar: "assets/images/fotofahmi.jpg"
  },

  // --- IDENTITAS & JUDUL WEBSITE ---
  recipientName: "Anggita Isnayni Hidayah", // Nama lengkap pasangan
  nickname: "Anggita", // Panggilan sayang
  websiteTitle: "Anggita & Fahmi 💜 | To My Favorite Person",
  
  // --- SUBTITLE & HEADER HERO ---
  heroBadge: "A MESSAGE CARRIED IN ON THE TIDE, JUST FOR YOU",
  heroMainTitle: "To My Dearest Girlfriend,",
  heroHighlightTitle: "Anggita Isnayni Hidayah ✨",
  heroSubtitle: "Somewhere past the breakers, ada ribuan rasa dan cerita yang tersimpan rapi untukmu. Dari Fahmi untuk Anggita, scroll ke bawah untuk menyelami setiap kedalaman cerita kita dan temukan surat cinta spesial di dasar samudra.",
  
  // --- TANGGAL JADIAN / PERTAMA KETEMU (UNTUK LOVE COUNTER) ---
  // Format: YYYY-MM-DD (Tahun-Bulan-Tanggal)
  relationshipStartDate: "2026-02-02", 
  
  // --- MUSIK LATAR (BGM) ---
  music: {
    title: "Until I Found You",
    artist: "Stephen Sanchez (Lofi Romantic Cover)",
    // Jika punya file MP3 sendiri, masukkan ke folder assets/music/ dan ganti link di bawah ini
    // Contoh: "assets/music/lagu-kita.mp3"
    // Jika dibiarkan kosong (""), website akan otomatis memainkan melodi piano romantis interaktif yang menenangkan!
    src: "" 
  },

  // --- TIMELINE / KISAH PERJALANAN KITA (DEPTH ZONES) ---
  memories: [
    {
      depth: "0m - The Surface",
      tag: "First Chapter",
      title: "Hari Pertama Semuanya Dimulai ✨",
      date: "Pertemuan Pertama",
      description: "Masih ingat pertama kali kita saling kenal dan menyapa? Dari sekadar obrolan biasa yang tak disangka tumbuh menjadi salah satu bagian terindah dalam hidup Fahmi. Senyum manis Anggita hari itu selalu tersimpan rapi di ingatan.",
      icon: "✨"
    },
    {
      depth: "200m - The Sunlight Zone",
      tag: "Sweet Little Things",
      title: "Tawa, Cerita & Semua Hal Random 🌙",
      date: "Setiap Hari Bersamamu",
      description: "Menemukan Anggita adalah seperti menemukan tempat pulang yang paling nyaman bagi Fahmi. Dari obrolan larut malam, berbagi lelucon receh, hingga saling mendengarkan keluh kesah di hari yang melelahkan.",
      icon: "🌊"
    },
    {
      depth: "1000m - The Twilight Zone",
      tag: "Growing Stronger",
      title: "Melewati Pasang Surut Bersama 💜",
      date: "Saat-saat Berharga",
      description: "Hubungan kita bukan cuma tentang hari-hari yang manis, tapi juga tentang bagaimana kita belajar saling mengerti, saling memaafkan, dan saling menggenggam tangan lebih erat saat ombak datang.",
      icon: "🌌"
    },
    {
      depth: "4000m - The Abyssal Zone",
      tag: "Deepest Feelings",
      title: "Rasa Sayang yang Selalu Bertumbuh 💍",
      date: "Hari Ini & Seterusnya",
      description: "Semakin dalam waktu berjalan, semakin Fahmi bersyukur memiliki Anggita di sampingku. Kamu adalah alasan di balik senyumku hari ini dan doa yang selalu kusebut di setiap sujudku.",
      icon: "💫"
    }
  ],

  // --- POLAROID PHOTO GALLERY ---
  // Kamu bisa memasukkan foto dari Google Drive ke folder assets/images/ (misal: foto1.jpg, foto2.jpg)
  // dan tuliskan namanya di bawah ini:
  photos: [
    {
      url: "assets/images/foto1.jpg",
      caption: "Senyuman terfavorit di dunia 🌸",
      date: "Anggita's Smile",
      rotation: "-3deg"
    },
    {
      url: "assets/images/foto2.jpg",
      caption: "Di bawah langit yang sama ✨",
      date: "Under The Stars",
      rotation: "2deg"
    },
    {
      url: "assets/images/foto3.jpg",
      caption: "Momen manis yang tak terlupakan 💜",
      date: "Sweetest Memory",
      rotation: "-2deg"
    },
    {
      url: "assets/images/foto4.jpg",
      caption: "Setiap detik bersamamu terasa indah 💌",
      date: "Just With You",
      rotation: "4deg"
    },
    {
      url: "assets/images/foto5.jpg",
      caption: "Genggaman tangan yang menenangkan 🌊",
      date: "Holding Hands",
      rotation: "-1.5deg"
    },
    {
      url: "assets/images/foto6.jpg",
      caption: "Untuk hari ini, esok, dan selamanya 🤍",
      date: "Forever & Always",
      rotation: "3deg"
    }
  ],

  // --- THE SECRET LOVE LETTER (SURAT DENGAN SEGEL LILIN EMAS) ---
  letter: {
    salutation: "Halo Anggita Isnayni Hidayah, Gadis Cantikku,",
    content: [
      "Kalau kamu sedang membaca surat ini, Fahmi cuma mau mengingatkan betapa berharganya kehadiranmu di hidupku. Dari sekian miliar manusia di bumi ini, aku bersyukur semesta mempertemukan kita dan memberiku kesempatan untuk mencintaimu.",
      "Terima kasih ya Anggita sudah selalu menjadi orang yang sabar, hangat, dan selalu mendukung Fahmi dalam keadaan apapun. Kamu bukan cuma pasanganku, tapi juga sahabat terbaik, tempat cerita teraman, dan kebahagiaan terbesarku.",
      "Mungkin aku tidak sempurna dan kadang membuatmu kesal, tapi percayalah, perasaanku padamu selalu tulus dan akan terus kujaga. Jangan pernah merasa sendiri ya, karena Fahmi akan selalu ada di sini, menemani setiap langkah dan impianmu.",
      "I love you more than words can express, Anggita. I'll keep choosing you over and over again."
    ],
    closing: "Dengan segenap rasa sayang,",
    signature: "Mochamad Khoirul Fahmi 🤍"
  },

  // --- REASONS WHY I LOVE YOU (WISH BOTTLES / INTERACTIVE CARDS) ---
  reasons: [
    {
      title: "Senyum Manis Anggita",
      desc: "Senyummu punya kekuatan magis yang selalu berhasil mengubah hari Fahmi yang paling lelah menjadi cerah seketika."
    },
    {
      title: "Hati yang Tulus & Lembut",
      desc: "Kebaikan hatimu dan caramu memperlakukan orang-orang di sekitarmu selalu membuat Fahmi kagum dan bangga memilikimu."
    },
    {
      title: "Pendengar Terbaik Fahmi",
      desc: "Terima kasih selalu mendengarkan setiap ceritaku, dari hal penting sampai hal paling random tanpa pernah merasa bosan."
    },
    {
      title: "Tawamu yang Menular",
      desc: "Melihat Anggita tertawa lepas adalah salah satu pemandangan terindah di dunia yang tak pernah membosankan untuk dilihat."
    },
    {
      title: "Dukunganmu yang Tak Pernah Putus",
      desc: "Kamu selalu percaya pada Fahmi bahkan di saat aku sendiri sempat ragu. Anggita adalah kekuatanku."
    },
    {
      title: "Menjadi Dirimu Sendiri",
      desc: "Aku mencintaimu dengan segala keunikan, kebaikan, dan caramu melihat dunia. Tetaplah jadi Anggita yang selalu Fahmi kagumi."
    }
  ],

  // --- COUNTDOWN MOMEN SPESIAL BERIKUTNYA ---
  countdowns: [
    {
      id: "birthday-fahmi",
      title: "Ulang Tahun Fahmi 🎂",
      subtitle: "Hari Spesial Cowokmu",
      date: "2026-12-11T00:00:00",
      dateLabel: "11 Desember 2026",
      icon: "🎂",
      note: "Hari kelahiran cowok yang paling beruntung memiliki Anggita 🤍"
    },
    {
      id: "anniversary-1",
      title: "1st Anniversary 💍",
      subtitle: "1 Tahun Perjalanan Cinta",
      date: "2027-02-02T00:00:00",
      dateLabel: "2 Februari 2027",
      icon: "💍",
      note: "Menyambut 365 hari penuh cinta, tawa, dan kebersamaan indah 💜"
    },
    {
      id: "birthday-anggi",
      title: "Ulang Tahun Anggita 🌸",
      subtitle: "Hari Kelahiran Gadis Tercantik",
      date: "2027-06-20T00:00:00",
      dateLabel: "20 Juni 2027",
      icon: "🌸",
      note: "Hari kelahiran bidadari tersayang yang selalu membawa kebahagiaan ✨"
    }
  ],

  // --- PESAN AKHIR & HARAPAN MASA DEPAN ---
  closingWishes: {
    title: "Janji & Harapan Masa Depan 💫",
    message: "Semoga perjalanan cinta Fahmi & Anggita ke depan selalu dipenuhi dengan tawa, kesehatan, kebahagiaan, dan rasa sayang yang semakin bertumbuh. Mari kita ciptakan lebih banyak kenangan indah bersama!"
  }
};
