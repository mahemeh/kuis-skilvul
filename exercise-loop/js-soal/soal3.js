/*
Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
 - Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
 - Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
*/
let pengulangan = 0;
let hasil = ""
for (let i = 0; i < 20; i++) {
    pengulangan++
    if (i % 2 == 0) {
        hasil += `<strong>Pengulangan ke - ${pengulangan}</strong><br> 
        angka ${i} adalah angka <strong>Genap</strong> <br><br>`
    } else {
        hasil += `<strong>Pengulangan ke - ${pengulangan}</strong><br>
        angka ${i} adalah angka <strong>Ganjil</strong> <br><br>`
    }
}
document.getElementById("generateSoal").innerHTML = hasil
