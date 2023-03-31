/*
Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
 - Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
 - Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
 - Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan yang
   sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
*/
let klik = 0
while (confirm("Apakah anda mau mengulang")) { klik ++ }
if (klik == 0) {
  document.getElementById("generateSoal").innerHTML = `
  <strong>Kamu belum melakukan pengulangan</strong> <br><br>
  *refresh halaman jika kamu ingin melakukan pengulangan lagi
  `  
} else {
  document.getElementById("generateSoal").innerHTML = `
  Pengulangan yang sudah dilakukan sebanyak = <strong>${klik} kali</strong> <br><br>
  *refresh halaman jika kamu ingin melakukan pengulangan lagi
  `
}