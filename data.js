const nama = "yusuf arico";
let usia = 15;

let biodata = document.getElementById('biodata');
console.log(biodata);

// ---------------------Conditional 1---------------------
// function generateBiodata() {
//     if(usia == 30) {
//         // Kondisi pertama
//         console.log('anda cukup dewasa');
//     } else {
//         // Jika KONDISI tidak terpenuhi
//         console.log('anda belum dewasa');
//     } 
// }

// ---------------------Conditional 2---------------------
// function generateBiodata() {
//     if (usia > 10 && usia < 20) {
//         // Kondisi pertama
//         console.log('anda lagi remaja');
//     } 
//     else if (usia > 20 && usia <30) {
//         console.log('anda mulai dewasa');
//     } 
//     else if (usia > 30) {
//         console.log('tua brooo');
//     } 
//     else if (usia > 0 && usia < 10) {
//         console.log('masih bocil');
//     } 
//     else {
//         // Jika KONDISI tidak terpenuhi
//         console.log('cie umur 30');
//     } 
// }

// ---------------------Conditional 3 (use Return)---------------------
// function generateBiodata() {
//     let generasi;

//     if (usia > 10 && usia < 20) {
//         // Kondisi pertama
//         generasi = "generasi remaja";
//     } 
//     else if (usia > 20 && usia <30) {
//         generasi = 'generasi mulai dewasa';
//     } 
//     else if (usia >= 30) {
//         generasi = 'generasi tua brooo';
//     } 
//     else if (usia > 0 && usia < 10) {
//         generasi = 'generasi masih bocil';
//     } 
//     else {
//         // Jika KONDISI tidak terpenuhi
//         generasi = 'generasi apanii?';
//     }
    
//     return console.log('generasi saya adalah', generasi);
// }

// ---------------------Conditional 4 (use Return to apply in html)---------------------
function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 20) {
        // Kondisi pertama
        generasi = "generasi remaja";
    } 
    else if (usia > 20 && usia <30) {
        generasi = 'generasi mulai dewasa';
    } 
    else if (usia >= 30) {
        generasi = 'generasi tua brooo';
    } 
    else if (usia > 0 && usia < 10) {
        generasi = 'generasi masih bocil';
    } 
    else {
        // Jika KONDISI tidak terpenuhi
        generasi = 'generasi apanii?';
    }
    
    // return biodata = generasi;
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();