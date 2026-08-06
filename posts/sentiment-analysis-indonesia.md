---
title: "Membangun Model Sentiment Analysis untuk Review Aplikasi Indonesia"
date: "2025-07-30"
description: "Bagaimana saya membangun model deep learning LSTM Bi-directional untuk menganalisis sentimen review Gojek dan Shopee dengan akurasi 91%."
tags: ["machine-learning", "python", "nlp"]
readTime: "8 min"
---

Proyek ini bermula dari pertanyaan sederhana: **bisakah komputer memahami apakah seseorang puas atau tidak dari teksnya?**

Jawabannya ternyata bisa — dan dengan akurasi yang cukup mengejutkan.

## Latar Belakang

Review aplikasi di Google Play Store adalah goldmine data. Ribuan pengguna setiap hari menulis pengalaman mereka menggunakan Gojek, Shopee, dan berbagai aplikasi Indonesia lainnya. Pertanyaannya: bagaimana bisnis bisa memproses semua feedback ini secara otomatis?

Di sinilah **Sentiment Analysis** masuk.

## Tech Stack yang Digunakan

- **Python** — bahasa utama
- **TensorFlow / Keras** — framework deep learning
- **LSTM Bi-directional** — arsitektur model
- **Streamlit** — deployment interface
- **Pandas & NumPy** — preprocessing data

## Arsitektur Model

Saya memilih **LSTM Bi-directional** karena teks bahasa Indonesia punya konteks yang kompleks. Model ini membaca kalimat dari dua arah — kiri ke kanan dan kanan ke kiri — sehingga lebih memahami konteks kata.

```python
model = Sequential([
    Embedding(vocab_size, 128, input_length=max_len),
    Bidirectional(LSTM(64, return_sequences=True)),
    Dropout(0.3),
    Bidirectional(LSTM(32)),
    Dense(64, activation='relu'),
    Dropout(0.3),
    Dense(3, activation='softmax')  # positif, negatif, netral
])
```

## Tantangan Terbesar

Bahasa Indonesia di media sosial dan review sangat informal. Pengguna menulis:

- *"gokilll bgt dah aplikasinya"* (positif)
- *"ga bisa login mulu, nyebelin"* (negatif)
- *"biasa aja sih"* (netral)

Preprocessing yang baik jadi kunci:

1. **Normalisasi** — "gokilll" → "gokil"
2. **Slang dictionary** — mapping kata tidak baku ke baku
3. **Remove noise** — hapus emoji berlebih, karakter aneh
4. **Tokenisasi** — pecah kalimat jadi token

## Hasil

Setelah training 20 epoch dengan dataset 15.000 review:

- **Akurasi training:** 94%
- **Akurasi validasi:** 91%
- **F1-Score:** 0.89

Angka 91% ini cukup solid untuk data bahasa Indonesia yang sangat beragam.

## Deployment dengan Streamlit

Interface sederhana yang memungkinkan siapa saja memasukkan teks dan langsung mendapat prediksi sentimen:

```python
import streamlit as st

text = st.text_area("Masukkan review:")
if st.button("Analisis"):
    prediction = model.predict(preprocess(text))
    label = ["Negatif", "Netral", "Positif"][prediction.argmax()]
    st.write(f"Sentimen: **{label}**")
```

## Pelajaran yang Didapat

> Kualitas data jauh lebih penting dari kompleksitas model.

Iterasi pertama saya pakai model sederhana dengan data berkualitas bagus — hasilnya 88%. Iterasi kedua pakai LSTM complex dengan data kotor — hasilnya malah 79%. Lesson learned: **garbage in, garbage out**.

## Next Steps

- Expand ke lebih banyak aplikasi Indonesia
- Tambah aspek-based sentiment (bukan hanya overall)
- Real-time monitoring dashboard untuk bisnis

---

*Tertarik dengan project ini? Hubungi saya lewat [kontak](#contact) atau cek kodenya di GitHub.*
