import { Konversi } from './suhu.js';
import BMI from './bmi.js';


console.log('Soal 1');

const suhu = 64;
console.log(`Mengkonversi ${suhu} fahrenheit menjadi ${Konversi(suhu)} celcius. \n`);


console.log('Soal 2');

const tinggi = 171;

const berat = 60;

BMI(berat, tinggi);
