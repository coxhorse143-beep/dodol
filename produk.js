const form = document.getElementById("formProduk");


if(form){


form.addEventListener(
"submit",
function(e){


e.preventDefault();



let data = {


id: Date.now(),

nama:
document.getElementById("nama").value,


kategori:
document.getElementById("kategori").value,


harga:
Number(
document.getElementById("harga").value
),


stok:
Number(
document.getElementById("stok").value
),


gambar:
document.getElementById("gambar").value,


deskripsi:
document.getElementById("deskripsi").value


};



tambahProduk(data);



alert(
"Produk berhasil ditambahkan!"
);



form.reset();


}

);


}