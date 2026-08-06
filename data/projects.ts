import { ProjectCaseStudy } from "@/lib/types";

// Isi awal diambil dari yang sudah ada di halaman utama.
// Bagian bertanda TODO sebaiknya diperkuat dengan detail asli
// (angka, screenshot, keputusan teknis spesifik) biar case study-nya kuat.

export const projects: ProjectCaseStudy[] = [
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    tagline:
      "Analisis sentimen review aplikasi Indonesia menggunakan LSTM Bi-directional, akurasi 91% pada dataset Gojek & Shopee.",
    stack: ["Python", "TensorFlow", "Streamlit"],
    problem:
      "TODO: Jelaskan masalah bisnis/riset spesifik — misalnya tim produk butuh cara cepat membaca ribuan review tanpa membaca satu-satu, atau ini bagian dari submission akademik dengan kriteria evaluasi tertentu.",
    approach:
      "Preprocessing teks berbahasa Indonesia (cleaning, tokenisasi, stopword removal), lalu melatih model LSTM Bi-directional untuk menangkap konteks kalimat dari dua arah. TODO: sebutkan ukuran dataset, split train/test, dan strategi penanganan data tidak seimbang jika ada.",
    architecture: [
      "Data collection & labeling dari review Gojek & Shopee",
      "Text preprocessing pipeline (cleaning, tokenizing, embedding)",
      "Model LSTM Bi-directional (TensorFlow/Keras)",
      "Deployment demo interaktif dengan Streamlit",
    ],
    result: [
      "Akurasi model 91% pada data uji",
      "TODO: tambahkan metrik lain (precision/recall/F1) kalau ada",
      "TODO: dampak konkret — misalnya waktu analisis review yang dihemat",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    slug: "n8n-lead-automation",
    title: "n8n Lead Automation",
    tagline:
      "Workflow otomasi lead form berbasis webhook — integrasi Google Sheets, notifikasi Slack, dan SMS via Twilio. Self-hosted di Railway.",
    stack: ["n8n", "Railway", "Twilio"],
    problem:
      "TODO: Ceritakan masalah nyatanya — misalnya tim sales kehilangan lead karena proses manual, atau notifikasi lead baru sering telat.",
    approach:
      "Membangun workflow otomatis: setiap submission form masuk lewat webhook, langsung dicatat ke Google Sheets, tim mendapat notifikasi Slack real-time, dan calon lead menerima SMS konfirmasi otomatis via Twilio. Seluruh workflow di-host sendiri di Railway agar lebih hemat biaya dan fleksibel.",
    architecture: [
      "Form submission → Webhook trigger (n8n)",
      "Node validasi & transformasi data",
      "Tulis ke Google Sheets (log lead)",
      "Notifikasi tim via Slack",
      "SMS konfirmasi otomatis via Twilio",
      "Hosting: Railway (self-hosted n8n instance)",
    ],
    result: [
      "TODO: berapa lead per hari/minggu yang diproses otomatis",
      "TODO: estimasi waktu respons tim sebelum vs sesudah otomasi",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    slug: "htl-reactor-ai-control",
    title: "HTL Reactor AI Control",
    tagline:
      "Sistem kontrol reaktor Hydrothermal Liquefaction menggunakan sensor NIR dan model AI untuk monitoring parameter secara real-time.",
    stack: ["Python", "Arduino", "NIR Sensor"],
    problem:
      "Reaktor HTL (Hydrothermal Liquefaction) untuk pengolahan limbah pangan perlu pemantauan parameter proses secara presisi agar hasil konversi optimal — pemantauan manual sulit menangkap perubahan kondisi secara real-time.",
    approach:
      "Memasang sensor NIR (Near-Infrared) pada reaktor untuk membaca komposisi bahan secara non-invasif, data dikirim ke mikrokontroler Arduino, lalu diproses model AI untuk kontrol adaptif parameter proses. TODO: sebutkan jenis model AI yang dipakai (misalnya regresi, PID adaptif berbasis ML, dsb) dan parameter apa saja yang dikendalikan (suhu, tekanan, waktu tinggal).",
    architecture: [
      "Sensor NIR membaca komposisi bahan secara real-time",
      "Mikrokontroler Arduino sebagai jembatan sensor ↔ sistem kontrol",
      "Model AI memproses data sensor untuk keputusan kontrol adaptif",
      "Dashboard monitoring parameter proses",
    ],
    result: [
      "TODO: peningkatan efisiensi konversi limbah menjadi produk (angka jika ada)",
      "TODO: konteks — bagian dari riset apa (skripsi, kompetisi, publikasi)",
    ],
    demoUrl: "",
    repoUrl: "",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
