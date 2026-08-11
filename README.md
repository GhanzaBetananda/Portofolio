# Portofolio — Ghanza Betananda Dilva

Portofolio React (Vite + Tailwind) berbasis warna putih, dibuat dari CV.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Struktur konten

Semua isi (pengalaman, proyek, skill, dsb) ada di bagian atas file
`src/App.jsx` dalam bentuk array (`EXPERIENCE`, `PROJECTS`, `SKILLS`, dst).
Untuk mengubah isi portofolio, cukup edit array-array itu — tidak perlu
menyentuh bagian JSX di bawahnya.

## Deploy ke Vercel

**Opsi 1 — lewat GitHub (disarankan):**
1. Push folder ini ke repo GitHub baru.
2. Buka https://vercel.com/new, import repo tersebut.
3. Vercel otomatis mendeteksi Vite — biarkan setting default:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Klik **Deploy**.

**Opsi 2 — lewat Vercel CLI:**
```bash
npm install -g vercel
vercel
```
Ikuti instruksi di terminal (login, pilih scope, konfirmasi folder).

Setiap kali kamu push perubahan ke branch utama, Vercel akan otomatis
build ulang dan deploy versi terbaru.

## Mengganti font / warna

Token desain (warna, font) ada di `tailwind.config.js` pada bagian
`theme.extend`. Warna aksen saat ini `#2954FF` (biru), latar putih
`#FFFFFF`, dan permukaan kartu abu sangat muda `#F6F7F9`.
