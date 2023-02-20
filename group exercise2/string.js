let firstName = "Hels";
let lastName = "Sky";
let age = 25;

// Menggabungkan string untuk membuat kalimat
let introduction = "Hallo, nama saya " + firstName + " " + lastName + " dan umur saya " + age + " tahun.";
console.log(introduction);

// Menemukan panjang string pengantar
let lengthOfIntroduction = introduction.length;
console.log("Panjang perkenalan: " + lengthOfIntroduction);


// Mengakses setiap kata dalam string pengantar
let wordsInIntroduction = introduction.split(" ");
console.log("Kata pengantar: " + wordsInIntroduction);


// Mengganti kata dalam string pengantar
let updatedIntroduction = introduction.replace("Sky", "Sam");
console.log("Pengantar yang diperbarui: " + updatedIntroduction);