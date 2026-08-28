# 💜 WEBSITE ROMANTIS UNTUK GIRLFRIEND (ANGGITA) 💜

Website interaktif bertema **Lilac & Midnight Purple dengan aksen Warm Gold** yang terinspirasi dari konsep *Ocean Depth Descent* (Selami Kedalaman Cinta).

---

## 🚀 Cara Membuka Website:
1. Klik dua kali (double click) file **`index.html`** di folder ini, maka website akan langsung terbuka di browser (Chrome, Edge, Safari, dll).
2. Atau kamu bisa menggunakan live server di VS Code / editor favoritmu.

---

## ⚙️ Cara Mengubah Teks, Foto, Tanggal, dan Lagu:
Cukup buka file **`config.js`** dengan Notepad atau text editor apa saja:

### 1. Mengubah Nama & Panggilan Sayang:
```javascript
recipientName: "Anggita",
nickname: "My Favorite Person",
```

### 2. Mengubah Tanggal Jadian (Love Counter):
```javascript
relationshipStartDate: "2023-01-14", // Format: TAHUN-BULAN-TANGGAL
```

### 3. Mengubah Lagu Latar (BGM):
- Jika ingin memasukkan lagu MP3 sendiri:
  1. Masukkan file lagu ke dalam folder `assets/music/` (misal: `lagu-kita.mp3`).
  2. Di `config.js`, ubah bagian:
  ```javascript
  music: {
    title: "Judul Lagu",
    artist: "Nama Penyanyi",
    src: "assets/music/lagu-kita.mp3"
  }
  ```
- *Catatan: Jika `src: ""` dikosongkan, website otomatis memainkan alunan piano romantis lofi built-in!*

### 4. Mengubah Foto Galeri Polaroid:
- Masukkan foto-foto kalian ke folder `assets/images/` (misal: `foto1.jpg`, `foto2.jpg`).
- Ubah path di `config.js` pada bagian `photos`:
  ```javascript
  photos: [
    {
      url: "assets/images/foto1.jpg",
      caption: "Senyuman terfavorit di dunia 🌸",
      date: "Memory #01",
      rotation: "-3deg"
    },
    ...
  ]
  ```

### 5. Mengubah Isi Surat Cinta (The Secret Letter):
- Edit teks di bagian `letter.content` pada `config.js`.

### 6. Mengubah Kartu Alasan & Botol Harapan (Reasons Why):
- Edit daftar di bagian `reasons` pada `config.js`.

---

## 🌐 Cara Mengirimkan Website Ini ke Pasangan Secara Online:
Kamu bisa upload website ini secara gratis agar bisa diakses lewat link HP/Laptop:
1. **Vercel** (Rekomendasi - gratis & sangat cepat): Drag & drop folder ini ke [vercel.com](https://vercel.com).
2. **Netlify Drop**: Drag & drop folder ini ke [app.netlify.com/drop](https://app.netlify.com/drop).
3. **GitHub Pages**: Upload repository ke GitHub lalu aktifkan Pages di Settings.

---
*Dibuat dengan segenap rasa sayang untuk Anggita 💜*

