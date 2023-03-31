/* 
Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
 - Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
 - Lakukan FOR LOOP pada Javascript. 
*/

let user = ""
for (let i = 1; i <= 100; i++) {
    user += `User ke - ${i} <br>`
}
document.getElementById("generateSoal").innerHTML = user

    
