/*
Buat sebuah program kuis.
 - Tampilkan prompt() untuk meminta inputan dari user.
   Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
 - Lakukan pengecekan apakah jawaban dari user sudah benar
 - Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
 - Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
*/
while (prompt(`JAWAB KUIS BERIKUT :
  Sebutkan kepanjangan dari nama IB (Impact Byte)?`
  ).toUpperCase() !== "IMPACT BYTE") {
} alert("Selamat jawaban kamu benar")