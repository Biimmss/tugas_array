const Mobil =[{
    namaMobil: 'Mercedes Benz',
    type: 'Sedan',
    tahun: '1990',
},
{
    namaMobil: 'Bmw',
    type: 'Sedan',
    tahun: '1994',
},
{
    namaMobil: 'Lexus',
    type: 'Sedan',
    tahun: '2005',
},];

let namaMobil = prompt("Masukkan Nama Mobil", "");

const dataMobil = Mobil.filter((mobil) => mobil.namaMobil === namaMobil); 

console.log(dataMobil);