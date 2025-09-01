/**
 * Tinh Tong 2 Ky So
 * Gia su n la so n=72; 7 + 2 = 9
 * 
 * *Dau Vao
 *  - Tao n gan gia tri
 *  - Tao total =0 
 * *Xu Ly 
 * -  Tao bien hang chuc = n/10
 * -  Lam tron Math.Float(Hang Chuc) => update hangchuc
 * -  Tao bien don vi = n%10
 * - Total  = Hang Chuc+ Hang Donvi
 * - Tao result gan thong bao
 * *Dau ra
 *  -in result 
 */

const n = 89;
let total = 0;

const hangChuc = Math.floor(n/10);

let hangDonVi = n % 10;
total = hangChuc + hangDonVi;

const result ="Total 2 Number : " + total;
console.log(result);





