import { config } from "dotenv";
config({ path: ".env.local" });

import { stitch } from "@google/stitch-sdk";
import { writeFileSync, readFileSync } from "fs";

async function main() {
  console.log("1. Membaca DESIGN.md...");
  const designSystem = readFileSync(".stitch/DESIGN.md", "utf-8");

  console.log("2. Membuat project...");
  const project = await stitch.createProject("Dropship Command Center");
  console.log("3. Project dibuat:", project.id ?? project.projectId);

  console.log("4. Generate screen...");
  const screen = await project.generate(
    `Buat halaman Dashboard untuk aplikasi internal bernama "Dropship Command Center".

Ikuti design system berikut DENGAN KETAT — jangan pakai warna atau gaya lain selain yang disebutkan di sini:

${designSystem}

Spesifik untuk halaman Dashboard ini:
- Header greeting dinamis: "Selamat [waktu], [nama]" + tanggal
- 4 stat cards: Total Product, Ready to Publish, Swipe Files, Product Baru
- Section "Pintasan": 3 shortcut button (Tambah Produk, Tambah Swipe File, Lihat Pipeline)
- Aktivitas Terbaru (feed 5 item) + Top Product Bulan Ini (bar list dengan progress)
- Semua label dan teks dalam Bahasa Indonesia
- Sidebar sesuai struktur navigasi di design system (Menu Utama, Resources, Pengaturan)`,
  );
  console.log("5. Screen selesai digenerate");

  const html = await screen.getHtml();
  console.log("6. HTML URL:", html);

  const res = await fetch(html);
  const htmlContent = await res.text();
  console.log("7. Panjang konten:", htmlContent.length);

  writeFileSync("output-dashboard.html", htmlContent);
  console.log("8. Disimpan ke output-dashboard.html");
}

main().catch((err) => {
  console.error("ERROR:", err);
});
