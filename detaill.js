let id =
localStorage.getItem(
"produkDetail"
);



let data =
produk.find(
(item)=>item.id==id
);



if(data){


document.querySelector(".main-image")
.src=data.gambar;



document.querySelector(".info h1")
.innerHTML=data.nama;



document.querySelector(".price h2")
.innerHTML=
"Rp "+data.harga.toLocaleString();



document.querySelector(".description p")
.innerHTML=data.deskripsi;


}