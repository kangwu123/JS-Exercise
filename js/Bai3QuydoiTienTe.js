/**
 * Bai tap Exchange Currency $ -> VND
 * *Dau vao
 * - Nhap so tien USD dollar
 * - Ti gia usd ->VND
 * *Xu Ly
 * Gia VNd = giá $ * ty Gia $ & VND
 * Dinh gia Format so tien VND
 * *Dau Ra 
 * - in Ra gia tien VND sau khi quy doi USD & nguoc Lai
 */

// Nhập số USD
const usd = 10; // Bạn có thể thay đổi số này

// Tỷ giá USD -> VND
const rate =  263500;

// Tính số tiền VND
const vnd = usd * rate;

// Định dạng số tiền VND
const formattedVnd = new Intl.NumberFormat('vi-VN').format(vnd);

// In ra kết quả
console.log(usd + " USD = " + formattedVnd + " VND");
