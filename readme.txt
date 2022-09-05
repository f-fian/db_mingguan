urutan logic aplikasi

1. Employee sign up
2. Setelah sign up employee login. Untuk login password akan dicocokan dengan hash password di database
3. Apabila login berhasil maka employee akan mendapatkan token (hasil token masih di hardcode tidak dimasukan ke cookie atau semacamnya)
4. Untuk mendapatkan akses ke URL end point, maka harus digunakan token yang sudah di dapatkan sebelumnya

Untuk logic masalah sign up dan login employee ada di folder route/employee
Untuk logic masalah menu_list ada di folder route/menu
Untuk logic masalah input orderbaru ada di folder route/transaction