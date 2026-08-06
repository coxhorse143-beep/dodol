// DATABASE PRODUK

let produk = JSON.parse(localStorage.getItem("produk")) || [

{
id:1,
nama:"Headset Gaming RGB",
kategori:"Elektronik",
harga:450000,
stok:20,
gambar:"https://picsum.photos/300?1",
deskripsi:"Headset gaming suara jernih dengan RGB"
},

{
id:2,
nama:"Keyboard Mechanical",
kategori:"Elektronik",
harga:750000,
stok:15,
gambar:"https://picsum.photos/300?2",
deskripsi:"Keyboard mechanical untuk gaming"
}

];


// SIMPAN DATA

function simpanProduk(){

localStorage.setItem(
"produk",
JSON.stringify(produk)
);

}


// TAMBAH PRODUK

function tambahProduk(data){

produk.push(data);

simpanProduk();

}


// HAPUS PRODUK

function hapusProduk(id){

produk = produk.filter(
(item)=>item.id != id
);

simpanProduk();

}


// UPDATE PRODUK

function updateProduk(id,data){

let index = produk.findIndex(
(item)=>item.id == id
);


produk[index]=data;

simpanProduk();

}