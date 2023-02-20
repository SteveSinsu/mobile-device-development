function BMI(berat, tinggi) {
    const nilai = (berat / (tinggi * tinggi)) * 10000;

    let kategori = null;
    if(nilai < 18.5) {
        kategori = 'Kurus';
    } else if(nilai >= 18.5 && nilai <= 24.9) {
        kategori = 'Berat Normal';
    } else if (nilai >= 25 && nilai <=29.9) {
        kategori = 'Kegemukan';
    } else {
        kategori = 'Obesitas';
    }

    console.log(`Nilai = ${nilai}`);
    console.log(`Kategori = ${kategori}`);
}

export default BMI;
