// DATA KERANJANG

let keranjang =
JSON.parse(
localStorage.getItem("keranjang")
) || [];




// TAMBAH KERANJANG

function tambahKeranjang(){


let id =
localStorage.getItem(
"produkDetail"
);



let produkCart =
produk.find(
(item)=>item.id==id
);



let cek =
keranjang.find(
(item)=>item.id==id
);



if(cek){


cek.jumlah += 1;


}else{


keranjang.push({

id:produkCart.id,

nama:produkCart.nama,

harga:produkCart.harga,

gambar:produkCart.gambar,

jumlah:1

});


}



localStorage.setItem(

"keranjang",

JSON.stringify(keranjang)

);



alert(
"Produk masuk keranjang"
);


}
function updateJumlahCart(){


let jumlah =
0;


keranjang.forEach(item=>{


jumlah += item.jumlah;


});



let tampil =
document.getElementById(
"jumlahCart"
);



if(tampil){

tampil.innerHTML =
jumlah;

}


}



updateJumlahCart();