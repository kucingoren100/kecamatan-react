# Website Kecamatan Karang Tengah — React.js

Website pusat informasi pelayanan Kecamatan Karang Tengah, Kota Tangerang.
Dibangun dengan **React 18 + Vite + React Router v6**.

---

## Struktur Folder

```
kecamatan-react/
├── index.html                  ← Entry HTML
├── vite.config.js              ← Konfigurasi Vite
├── package.json
├── README.md
└── src/
    ├── main.jsx                ← Entry React + BrowserRouter
    ├── App.jsx                 ← Router utama (Routes)
    ├── data/
    │   └── config.js           ← Data konstan: nama, alamat, navigasi
    ├── components/
    │   ├── Layout.jsx          ← Wrapper Header + Footer
    │   ├── Header.jsx          ← Topbar + navigasi responsif
    │   ├── Footer.jsx          ← Footer 4 kolom
    │   ├── PageHero.jsx        ← Hero reusable untuk halaman dalam
    │   └── SectionHeader.jsx   ← Judul section reusable
    ├── pages/
    │   ├── Beranda.jsx         ← Halaman Beranda
    │   ├── Profil.jsx          ← Halaman Profil Kecamatan
    │   ├── Pelayanan.jsx       ← Halaman Layanan Publik
    │   ├── FAQ.jsx             ← Halaman FAQ (accordion)
    │   └── SKM.jsx             ← Halaman Survei Kepuasan Masyarakat
    └── assets/
        └── css/
            └── style.css       ← Stylesheet utama
```

---

## Cara Menjalankan

### 1. Install dependensi
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```
Buka browser: `http://localhost:5173`

### 3. Build untuk production
```bash
npm run build
```
Output di folder `dist/`.

---

## Routing

| URL           | Halaman      |
|---------------|--------------|
| `/`           | Beranda      |
| `/profil`     | Profil       |
| `/pelayanan`  | Pelayanan    |
| `/faq`        | FAQ          |
| `/skm`        | SKM / Survei |

---

## Kustomisasi

### Ubah data kecamatan
Edit `src/data/config.js`:
```js
export const SITE = {
  name:    'Kecamatan Karang Tengah',
  alamat:  'Jl. KH. Hasyim Ashari No. 1, ...',
  // ...
}
```

### Tambah halaman baru
1. Buat file baru di `src/pages/HalamanBaru.jsx`
2. Import dan tambahkan `<Route>` di `src/App.jsx`
3. Tambahkan ke `NAV_ITEMS` di `src/data/config.js`

---

## Teknologi
- **React 18** — UI Library
- **Vite 5** — Build tool & dev server
- **React Router v6** — Client-side routing
- **CSS Murni** — Tanpa framework CSS (custom design)
- **Font Awesome 6** — Ikon (via CDN)
- **Google Fonts** — Plus Jakarta Sans + Lora
