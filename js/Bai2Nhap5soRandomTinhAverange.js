/**
 * Bai tap tinh Trung Binh 5 So
 * *Dau vao
 * -Tao 5 variable default cho 5 so
 * 
 * *Xu Ly
 *  - Tao Bien sum + 5 so lai
 *  - Tao Bien TrungBinh Cong + 5 so lai /5
 * *Dau Ra 
 * - in Total Sum & Averange
 */

const num1 = 30;
const num2 = 45;
const num3 = 10;
const num4 = 5;
const num5 = 25;

let tong = num1 + num2 + num3 + num4 + num5 ;
let trungBinh = tong / 5;

const totalSum = "Total Sum is: " + tong;
const totalAverange= "Total Averange is: " + trungBinh;

console.log(totalSum + " & " + totalAverange);
