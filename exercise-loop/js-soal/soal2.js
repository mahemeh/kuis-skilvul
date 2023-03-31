/*
Lakukan pengulangan menggunakan FOR LOOP untuk melakukan 
 - penambahan nilai sebanyak 10 kali.
 - Nilai awal = 0
 - Pengulangan = 10 kali
 - Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan
*/
let pengulangan = 0
let hasil = ""
for (let i = 0; i < 10; i++) {
    pengulangan++
    hasil += `pengulangan ke - ${pengulangan}<br> ${i} + 2 = ${i+2} <br>`
}
document.getElementById("generateSoal").innerHTML = hasil