# Brainstorm Web Surprise Ulang Tahun Bestie

## Informasi inti
- Nama yang berulang tahun: **Bestie**
- Tanggal ulang tahun: **01/01/2026**
- Format proyek: web surprise bertema **Hello Kitty**
- Platform target: **mobile-first**, lalu tetap nyaman dibuka di desktop
- Teknologi rencana: **React JS + Vite**
- Target deploy: **GitHub Pages**

## Tujuan web
Web ini berfungsi sebagai kejutan ulang tahun digital yang terasa personal, manis, dan interaktif. Fokus utamanya bukan sekadar tampilan lucu, tetapi pengalaman emosional saat membuka halaman demi halaman kecil berisi ucapan, kenangan, dan kejutan.

## Kata kunci konsep
- Cute
- Sweet
- Pink pastel
- Friendly
- Personal
- Heartwarming
- Playful
- Hello Kitty vibe
- Scrapbook digital
- Gift reveal

## Arah konsep utama
Konsep terbaik untuk tahap awal adalah **digital surprise card + mini scrapbook**. Jadi, web terasa seperti gabungan kartu ucapan, album kenangan, dan kotak hadiah kecil yang dibuka perlahan.

Nuansa yang ingin dibangun:
- Lembut dan manis
- Girly tapi tetap rapi
- Interaktif namun ringan
- Berasa dibuat khusus untuk teman spesial
- Cocok dibuka dari layar HP

## Ide alur pengalaman pengguna
### 1. Opening screen
Halaman pembuka sederhana dengan latar pink lembut, elemen pita atau bow, dan teks seperti:
- “Hi Bestie, ada sesuatu buat kamu 🎀”
- “Tap untuk buka surprise kamu”

Tombol utama:
- Buka kejutan

### 2. Hero section
Bagian utama setelah opening menampilkan:
- Nama Bestie
- Ucapan “Happy Birthday”
- Tanggal 01/01/2026
- Visual Hello Kitty style, seperti bow, heart, stars, cloud, atau pattern polkadot

Contoh copy:
> Selamat ulang tahun, Bestie. Hari ini semua hal manis harus jadi milik kamu.

### 3. Memory section
Bagian ini berisi kenangan atau momen bersama. Bisa dalam bentuk:
- Slider foto
- Kartu kenangan
- Timeline singkat
- Caption lucu atau pesan pendek di tiap foto

Kalau foto belum siap, section ini bisa tetap dibuat sebagai placeholder konsep.

### 4. Letter section
Surat digital yang terbuka seperti amplop atau note. Isi bisa berupa:
- Ucapan tulus
- Alasan kamu spesial
- Harapan baik untuk tahun ini
- Kata-kata yang lebih personal

Interaksi yang cocok:
- Tap untuk membuka surat
- Efek ketik perlahan
- Teks muncul bertahap

### 5. Wishes section
Daftar harapan ulang tahun dalam bentuk card kecil atau list manis.

Contoh isi:
- Semoga selalu sehat
- Semoga semua yang diusahakan lancar
- Semoga banyak hal baik datang tahun ini
- Semoga tetap jadi orang yang hangat dan menyenangkan

### 6. Final surprise section
Bagian terakhir sebagai penutup yang memorable. Bisa berisi salah satu atau gabungan dari:
- Confetti animation
- Tombol replay
- Hidden message
- Playlist link
- Video pendek
- “1 alasan kenapa kamu spesial” yang muncul satu per satu

## Referensi gaya visual
### Palet warna
Warna utama yang cocok:
- Soft pink
- Baby pink
- White
- Cream
- Sedikit merah muda lebih tegas untuk aksen

Warna pendukung opsional:
- Pastel yellow
- Pastel mint

### Elemen visual
- Ribbon / bow
- Heart
- Cloud
- Star sparkle
- Polkadot
- Rounded card
- Envelope
- Gift box
- Sticker-style ornament

### Arah UI
- Banyak sudut rounded
- Shadow lembut
- Card seperti scrapbook
- Spasi lega agar tetap nyaman di mobile
- Satu kolom untuk mayoritas layout mobile

## Gaya copywriting
Tone tulisan sebaiknya:
- Hangat
- Manis
- Santai
- Personal
- Tidak terlalu formal

Contoh kalimat yang bisa dipakai:
- “Hari ini spesial, karena kamu juga spesial.”
- “Semoga hari kamu semanis tema web ini.”
- “Scroll pelan-pelan ya, ada beberapa hal kecil yang disiapkan buat kamu.”
- “Web kecil ini dibuat khusus buat seseorang yang ulang tahun di 01 Januari 2026.”

## Ide fitur interaktif
Fitur yang cocok dan masih aman untuk GitHub Pages:
- Tap to open surprise
- Smooth scroll per section
- Animasi fade-up ringan
- Slider foto
- Typing text effect
- Confetti ringan di akhir
- Background music on/off
- Tombol replay surprise

Fitur yang tidak perlu berlebihan:
- Animasi berat
- Video autoplay besar
- Terlalu banyak popup
- Layout kompleks yang menyulitkan mobile

## Struktur komponen React
Rancangan komponen awal:
- `OpeningScreen`
- `HeroBirthday`
- `MemoryGallery`
- `LetterForBestie`
- `BirthdayWishes`
- `FinalSurprise`
- `MusicToggle`
- `Footer`

## Struktur section satu halaman
Urutan section yang direkomendasikan:
1. Opening screen
2. Hero birthday
3. Short intro message
4. Memory gallery
5. Letter for Bestie
6. Birthday wishes
7. Final surprise
8. Closing footer

## Mobile-first notes
Hal-hal yang harus dijaga saat desain:
- Ukuran tombol minimal nyaman disentuh
- Font cukup besar dan jelas
- Tidak terlalu banyak teks dalam satu layar
- Gambar responsif
- Spasi antar elemen longgar
- CTA utama tetap terlihat jelas di layar HP
- Gunakan layout satu kolom sebagai default

## Ide nama project
Beberapa opsi nama repo / project:
- `bestie-birthday-surprise`
- `happy-birthday-bestie`
- `cute-hello-kitty-surprise`
- `special-day-surprise`
- `birthday-gift-for-bestie`

## Arah teknis awal
Stack yang cocok:
- React JS
- Vite
- CSS biasa atau Tailwind
- Framer Motion opsional untuk animasi ringan
- Deploy ke GitHub Pages

Catatan deploy:
- Sebaiknya dibuat sebagai single-page app sederhana
- Asset dibuat ringan agar loading cepat di mobile
- Gunakan base path yang sesuai saat deploy GitHub Pages

## Konsep terbaik untuk dilanjutkan
Konsep yang paling seimbang untuk dilanjutkan ke tahap wireframe adalah:

**Gift Reveal + Digital Scrapbook**

Alasannya:
- Cocok dengan tema Hello Kitty yang manis
- Mudah dibuat emosional dan personal
- Aman untuk mobile-first layout
- Cocok untuk React single-page project
- Mudah dikembangkan bertahap, mulai dari versi sederhana lalu ditambah animasi
