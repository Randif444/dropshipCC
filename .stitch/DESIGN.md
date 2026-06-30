# Design System — Dropship Command Center (DCC)

> Internal SaaS dashboard untuk mengelola bisnis dropship organik dan affiliate marketing.
> Status: Living document — update sesuai keputusan desain selama development.

---

## 1. Prinsip Desain

- **Light mode**, bukan dark mode (override dari draft awal PRD).
- Vibe: internal ops tool yang bersih dan profesional — mirip Notion / Linear light mode.
- Dense tapi tetap readable. Tidak terlihat seperti landing page marketing.
- Konsistensi adalah prioritas: sidebar, card, button, dan typography harus identik di semua halaman.

---

## 2. Color Tokens

### Base

| Token              | Value     | Penggunaan                |
| ------------------ | --------- | ------------------------- |
| `--bg-page`        | `#FFFFFF` | Background utama konten   |
| `--bg-sidebar`     | `#F7F7F7` | Background sidebar        |
| `--bg-surface`     | `#FFFFFF` | Background card/table     |
| `--border-default` | `#E5E7EB` | Border card, table, input |

### Text

| Token             | Value     | Penggunaan                          |
| ----------------- | --------- | ----------------------------------- |
| `--text-primary`  | `#111827` | Judul, body text utama              |
| `--text-muted`    | `#6B7280` | Subtitle, label sekunder, timestamp |
| `--text-disabled` | `#9CA3AF` | Teks nonaktif/archived              |

### Accent

| Token                 | Value     | Penggunaan                                                 |
| --------------------- | --------- | ---------------------------------------------------------- |
| `--accent-primary`    | `#16A34A` | Active nav, link, CTA primary, progress bar, nilai positif |
| `--accent-primary-bg` | `#F0FDF4` | Background untuk active state / badge approved             |

### Status Badge

| Status      | Background | Text      |
| ----------- | ---------- | --------- |
| Prospect    | `#F3F4F6`  | `#6B7280` |
| Researching | `#EFF6FF`  | `#3B82F6` |
| Approved    | `#F0FDF4`  | `#16A34A` |
| Rejected    | `#FEF2F2`  | `#EF4444` |
| Archived    | `#F3F4F6`  | `#9CA3AF` |

---

## 3. Typography

- **Font:** Geist Sans (fallback: Inter, sans-serif)
- **Page title:** 24px / Bold / `#111827`
- **Section label:** 16px / Semibold / `#111827`
- **Body text:** 14px / Regular / `#111827`
- **Muted/caption:** 13px / Regular / `#6B7280`
- **Stat number (besar):** 28–32px / Bold / `#111827`

---

## 4. Spacing & Radius

- Card padding: `16px` (compact) atau `24px` (section besar) — konsisten per konteks
- Border radius card: `8px`
- Border radius button/input/badge: `6px`
- Gap antar card dalam grid: `16px`
- Sidebar width: `240px` (fixed, tidak berubah di semua halaman)

---

## 5. Layout Global

```
┌──────────────┬─────────────────────────────────────┐
│              │  Page Header (judul + subtitle)      │
│   Sidebar    ├─────────────────────────────────────┤
│   (240px)    │                                       │
│   fixed      │       Main Content Area (flex-1)     │
│              │                                       │
└──────────────┴─────────────────────────────────────┘
```

### Sidebar (harus identik di semua halaman)

- Logo + nama produk di atas
- Grup navigasi:
  - **Menu Utama:** Dashboard, Product Intel, Content Pipeline, Analytics
  - **Resources:** Swipe Files
  - **Pengaturan:** Settings
- Active nav item: background `#F0FDF4`, text `#16A34A`, icon ikut warna accent
- User profile card di bagian bawah: avatar + nama + email + dot online hijau

---

## 6. Komponen Reusable

| Komponen                  | Variant                           | Catatan                                              |
| ------------------------- | --------------------------------- | ---------------------------------------------------- |
| Button                    | primary, secondary, ghost, danger | Hanya icon + label teks, tanpa prop/variant terlihat |
| Badge                     | status colors di atas             | Rounded 6px, padding horizontal 8px                  |
| Card                      | default                           | Border `#E5E7EB`, radius 8px, padding 16–24px        |
| Modal                     | wrapper + backdrop                | Untuk detail Swipe File                              |
| Drawer                    | slide-over kanan                  | Untuk detail Produk & Konten                         |
| Input / Select / Textarea | styled konsisten                  | Border `#E5E7EB`, radius 6px                         |
| Toast                     | sukses/gagal                      | Notifikasi setiap operasi CRUD                       |
| Skeleton                  | loading placeholder               | Dipakai di semua data fetch                          |
| EmptyState                | data kosong                       | Dipakai di semua list view                           |
| ConfirmDialog             | konfirmasi delete                 | Sebelum semua aksi destructive                       |

---

## 7. Halaman / Screen Spec

### 7.1 Dashboard

- Header greeting dinamis: "Selamat [waktu], [nama]" + tanggal
- 4 stat cards: Total Product, Ready to Publish, Swipe Files, Product Baru
- Section "Pintasan": 3 shortcut button (Tambah Produk, Tambah Swipe File, Lihat Pipeline)
- Aktivitas Terbaru (feed 5 item) + Top Product Bulan Ini (bar list dengan progress)

### 7.2 Product Intel

- Toolbar: search, filter status, filter niche, toggle Tabel/Grid, tombol Tambah Produk
- Tabel: Nama Produk, Niche, Sumber, Profit Est., Skor Potensi (bintang), Status (badge), Tanggal Tambah, Aksi
- Drawer detail produk dari kanan + tombol "Buat Konten dari Produk Ini"

### 7.3 Swipe Files

- Toolbar: search, filter tipe, filter tag, tombol Tambah Swipe File
- Card grid masonry: thumbnail, judul, tag, platform, tanggal, hover action (Edit/Delete/Copy Link)
- Modal detail dengan tombol "Gunakan sebagai Referensi"

### 7.4 Content Pipeline

- Toolbar: filter produk, filter platform, toggle Kanban/List
- Kanban 7 kolom: Ide → Riset → Scripting → Produksi → Review → Scheduled → Published
- Drawer detail konten + tombol "Tandai Published"

### 7.5 Analytics

- Date range tabs: Minggu ini / Bulan ini / Custom
- Section Performa Produk: bar chart Top 5 + tabel summary
- Section Performa Konten: line chart trend publish + donut chart distribusi platform + 2 stat card
- Section Input Manual Metrics: form pencatatan klik affiliate & revenue

### 7.6 Settings

- Profil Bisnis (nama bisnis, pemilik, timezone)
- CRUD Niche/Kategori (tabel kecil + badge preview)
- CRUD Tag Swipe File
- CRUD Platform (nama, icon, warna)

---

## 8. Aturan Konsistensi (Checklist QA)

- [ ] Sidebar identik di semua 6 halaman (lebar, warna, grouping, active state, profile card)
- [ ] Tidak ada teks/kode bocor di UI (tidak ada `{variable}`, nama komponen, atau prop terlihat sebagai label)
- [ ] Semua button hanya menampilkan icon + label bersih
- [ ] Semua card pakai padding & radius yang sama sesuai konteksnya
- [ ] Warna accent hijau `#16A34A` hanya dipakai untuk: active nav, link, CTA primer, progress bar, nilai positif
- [ ] Loading state pakai Skeleton, bukan teks "Loading..."
- [ ] Empty state pakai komponen EmptyState, bukan tabel kosong tanpa pesan
