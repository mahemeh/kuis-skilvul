# Exercise-Loop
Berikut adalah beberapa soal terkait looping dan pengkondisian

# Soal - 1
```
    *Soal 1*
    Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
    - Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
    - Lakukan FOR LOOP pada Javascript.
```
```js
    *Jawab :*
    let user = ""
    for (let i = 1; i <= 100; i++) {
        user += `User ke - ${i} <br>`
        # hasil loopingan akan di tampung di variabel user
    }
    document.getElementById("generateSoal").innerHTML = user
    # menampilkan isi dari variabel user di halaman HTML
```
### Penjelasan
    - pertama membuat variabel penampung untuk menampung data hasil loopingan kita
    - kemudian melakukan pengulangan dengan for loop
    - logikanya seperti ini 
        ```
            - Lakukan pengulangan dari nilai awal 1.
            - disetiap pengulangan, nilai akan di tambahkan ke dalam variabel tampung.
            - kemudian berhenti looping jika nilai sudah sama dengan 100 dan menampilkannya di halaman HTML
            - sekarang value variabel penampung yang sebelumnya string kosong akan menjadi seperti ini
            "User ke - 1"
        ```
       *note: penambahan sintaks ``<br>`` ditambahkan agar di html membentuk baris*

# Soal - 2
```
    Lakukan pengulangan menggunakan FOR LOOP untuk:
    - penambahan nilai sebanyak 10 kali.
    - Nilai awal = 0
    - Pengulangan = 10 kali
    - Nilai awal ditambah 2 setiap pengulangan
    - Tampilkan hasil penambahan pada setiap pengulangan
```
```js
    *Jawab :*
    let pengulangan = 0
    let hasil = ""
    for (let i = 0; i < 10; i++) {
        # lakukan penambahan agar mendapat nilai awalan untuk pengulangan ke 1
        pengulangan++
        hasil += `pengulangan ke - ${pengulangan}<br> ${i} + 2 = ${i+2} <br>`
    }
    document.getElementById("generateSoal").innerHTML = hasil
```
### Penjelasan
    - pertama membuat 2 variabel untuk menampung nilai, (pengulangan) untuk jumlah pengulangan dan (hasil) untuk menampung hasil looping yang akan ditampilkan di halaman HTML
    - lakukan pengulangan for loop dengan logika seperti ini:
         ```
            - lakukan pengulangan dengan ***nilai awalan 0***
            - disetiap pengulangan, variabel *pengulangan* akan bertambah satu (increment)
            - lalu lakukan penambahan di variabel *hasil* dengan value ***nilai + 2*** ( 0 + 2 *gambarannya seperti ini dan akan bertambah nilai 0 nya disetiap pengulangan*)
            - sekarang value variabel *hasil* yang sebelumnya string kosong akan menjadi seperti ini 
            "pengulangan ke - 1 <br> 0 + 2 = 2 <br>"
        ```
        *note: penambahan sintaks `<br>` ditambahkan agar di html membentuk baris*

# Soal - 3
```
    Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
    - Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
    - Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
```
```js
    *Jawab :*
    let pengulangan = 0;
    let hasil = ""
    for (let i = 0; i < 20; i++) {
        # lakukan penambahan agar mendapat nilai awalan untuk pengulangan ke 1
        pengulangan++
        # Cek apakah nilai adalah Genap atau Ganjil
        if (i % 2 == 0) {
            hasil += `<strong>Pengulangan ke - ${pengulangan}</strong><br> 
            angka ${i} adalah angka <strong>Genap</strong> <br><br>`
        } else {
            hasil += `<strong>Pengulangan ke - ${pengulangan}</strong><br>
            angka ${i} adalah angka <strong>Ganjil</strong> <br><br>`
        }
    }
    document.getElementById("generateSoal").innerHTML = hasil
```
### Penjelasan
    - pertama membuat 2 variabel untuk menampung nilai (pengulangan) untuk jumlah pengulangan dan (hasil) untuk menampung nilai hasil looping yang akan ditampilkan di halaman HTML
    - lakukan pengulangan for loop dengan logika seperti ini:
      ```
         - lakukan pengulangan dengan ***nilai awalan 0***
         - disetiap pengulangan, variabel *pengulangan* akan bertambah satu (increment)
         - lalu lakukan pengkondisian jika hasil bagi nilai dengan 2 adalah 0 maka akan ditampilkan sebagai Genap selain itu ditampilkan sebagai Ganjil
      ```
    
# Soal - 4
```
    Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
    - Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
    - Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
    - Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan yang sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
```
```js
    *Jawab :*
    let klik = 0
    while (confirm("Apakah anda mau mengulang")) { 
        klik ++ 
    }
    if (klik == 0) {
        document.getElementById("generateSoal").innerHTML = `
        <strong>Kamu belum melakukan pengulangan</strong> <br><br>
        *refresh halaman jika kamu ingin melakukan pengulangan lagi`  
    } 
    else {
        document.getElementById("generateSoal").innerHTML = `
        Pengulangan yang sudah dilakukan sebanyak = <strong>${klik} kali</strong> <br><br>
        *refresh halaman jika kamu ingin melakukan pengulangan lagi`
    }
```
### Penjelasan
    - pertama membuat variabel bernama klik dengan nilai 0
    - lakukan pengulangan while loop dengan logika seperti ini:
      ```
        - selama user menjalankan program dan mengklik tombol OK pada confirm window, maka nilai klik akan bertambah satu ()increment
        - jika user mengklik CANCEL pada confirm window maka akan menjalankan kondisi selanjutnya
        - di pengkondisian jika nilai klik masih 0 akan menampilkan *Kamu belum melakukan pengulangan* selain itu maka akan menampilkan hasil dari nilai klik
      ```
    (*note: While loop akan berjalan jika kondisi nya masih belum tercapai, dan jika sudah tercapai maka while akan berhenti melooping dan selesai atau melanjutkan program*)

# Soal - 5
```
    Buat sebuah program kuis.
    - Tampilkan prompt() untuk meminta inputan dari user,
    - Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
    - Lakukan pengecekan apakah jawaban dari user sudah benar,
    - Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
    - Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
```
```js
    while (prompt(`JAWAB KUIS BERIKUT :
        Sebutkan kepanjangan dari nama IB (Impact Byte)?
        `).toUpperCase() !== "IMPACT BYTE") {} 
    alert("Selamat jawaban kamu benar")
```
### Penjelasan
   ```
      - Menggunakan While loop yang kondisinya adalah
      - jika user tidak mengisi inputan prompt atau salah mengisi prompt maka nilai dari While loop akan menjadi true dan akan terus melakukan pengulangan sampai menghasilkan nilai false
      - selama user menjalankan program dan mengisi prompt window dengan benar dan sesuai maka akan menampilkan sebuah aler yang bertuliskan "Selamat jawaban kamu benar"
   ```
    (*note: While loop akan berjalan jika kondisi nya masih belum tercapai, dan jika sudah tercapai maka while akan berhenti melooping dan selesai atau melanjutkan program*)
