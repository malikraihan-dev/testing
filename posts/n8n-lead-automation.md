---
title: "Otomasi Lead Form dengan n8n: Dari Webhook ke WhatsApp dalam 5 Menit"
date: "2025-07-15"
description: "Cara membangun workflow otomasi lead form menggunakan n8n self-hosted di Railway — dari form submission sampai notifikasi WhatsApp otomatis."
tags: ["automation", "n8n", "no-code"]
readTime: "6 min"
---

Bayangkan setiap kali ada orang mengisi form di website kamu, secara otomatis:

1. Data masuk ke Google Sheets
2. Tim sales dapat notifikasi Slack
3. Calon klien dapat pesan WhatsApp sambutan

**Semua itu tanpa satu baris kode pun.** Hanya workflow n8n.

## Apa itu n8n?

n8n adalah tool workflow automation open-source — bayangkan Zapier tapi bisa self-hosted dan gratis. Kamu bisa connect ratusan service berbeda dengan visual drag-and-drop.

Yang bikin n8n spesial:

- **Self-hosted** — data kamu, privasi kamu
- **Open source** — bisa custom sesuka hati
- **Visual** — tidak perlu coding untuk workflow sederhana

## Arsitektur Workflow

```
Form Submit → Webhook → n8n → Google Sheets
                           ↓
                        Slack Notification
                           ↓
                        WhatsApp Message (Twilio)
```

## Setup di Railway

Saya deploy n8n di Railway karena gratis untuk usage ringan dan setup-nya hanya 3 klik:

1. Buka [railway.app](https://railway.app)
2. New Project → Deploy from Template → cari "n8n"
3. Set environment variable `N8N_BASIC_AUTH_PASSWORD`

Selesai. n8n kamu live dalam 2 menit.

## Membuat Workflow

### Node 1: Webhook Trigger

```json
{
  "method": "POST",
  "path": "lead-form",
  "responseMode": "onReceived"
}
```

URL webhook ini yang kamu pasang di form HTML-mu.

### Node 2: Google Sheets

Connect ke Google account, pilih spreadsheet, mapping field:

- `nama` → Column A
- `email` → Column B  
- `pesan` → Column C
- `timestamp` → Column D (pakai `{{$now}}`)

### Node 3: Slack Notification

```
🔔 Lead Baru!
Nama: {{$json.nama}}
Email: {{$json.email}}
Waktu: {{$now.format('DD MMM YYYY HH:mm')}}
```

### Node 4: WhatsApp via Twilio

```
Halo {{$json.nama}}! 👋

Terima kasih sudah menghubungi kami. Tim kami akan merespons dalam 24 jam.

Sementara itu, cek portofolio kami di: malik.dev
```

## Hasil

Workflow ini sudah handle ratusan lead tanpa satu pun yang terlewat. Waktu response tim sales turun dari rata-rata 4 jam menjadi di bawah 5 menit karena notifikasi Slack yang instan.

## Tips Penting

> Selalu tambahkan **error handling** di setiap node. n8n punya fitur "On Error" yang bisa kirim notifikasi kalau ada yang gagal.

Jangan lupa set `WEBHOOK_URL` di environment variable production — jangan hardcode di workflow.

## Kesimpulan

Otomasi bukan hanya untuk perusahaan besar. Dengan n8n, satu orang bisa handle volume kerja yang biasanya butuh tim — dan gratis.

*Project ini tersedia untuk konsultasi. Hubungi saya kalau kamu mau setup workflow serupa untuk bisnismu.*
