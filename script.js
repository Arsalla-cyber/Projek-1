let nama = 'samosi';
let usia = 10;

// let pacar = 1;




// let pacar = prompt('masukkan jumlah pacar anda : '
    
// )
// pacar = Number(pacar);


// let hasil;

// if(!isNaN (pacar)){
//     switch(true){
//         case pacar === 1:
//             pacar = 'punya 1 anda cukup setia'
//         break
//         case pacar > 1:
//             pacar = 'punya lebih'
//         break
//         default:
//             pacar = 'belum punya'
//         break
//     };
// } else{
//     hasil = "hasil gak valid"
// }
// alert(pacar);






// let tinggal = prompt('Tinggal dimana ? : ');
// alert(`nama saya adalah ${nama} usia saya ${usia} pacar saya ${pacar}tinggal di ${tinggal}`);


// let hope = prompt('mau jadi sukses ? : ').toLowerCase();

// if(hope == 'mau'){
//     hope = 'amin ya allah, sukses dunia akhirat';
// }else if (hope == 'gak'){
//     hope = 'berjuanglah untuk sukses yaa';
// }else{
//     hope = 'tolong isi jawabannya antara mau & gak mau';
// };
// alert(hope);


// let gaji = prompt('masukkan gaji yang anda inginkan');
// if (gaji != null){
//     alert(`'amin yaa allah dapat'${gaji} juta`)
// }else{
//     gaji = 'Belajar coding jangan malas malas';
// };











const text_awal = {};
        
function ubahText(id,text_baru){
    if(!text_awal[id]){
        text_awal[id]= document.getElementById(id).textContent;
    }
    document.getElementById(id).textContent = text_baru;
    

    function kembaliText(id){
        if(text_awal[id]){
            document.getElementById(id).textContent = text_awal[id];
        }
    }
    
}