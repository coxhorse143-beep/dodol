let area =
document.getElementById(
"produkContainer"
);



function tampilHome(data=produk){


area.innerHTML="";



data.forEach(item=>{


area.innerHTML += `


<div class="card">


<img src="${item.gambar}">


<h3>

${item.nama}

</h3>


<p class="harga">

Rp ${item.harga.toLocaleString()}

</p>



<p>

⭐ ⭐ ⭐ ⭐ ⭐

</p>



<button onclick="lihat(${item.id})">

Lihat Detail

</button>


</div>


`;



});


}



function lihat(id){


localStorage.setItem(
"produkDetail",
id
);



location.href=
"detail.html";


}




// SEARCH

document
.getElementById("searchProduk")
.addEventListener(
"keyup",
function(){


let hasil =
produk.filter(item=>

item.nama
.toLowerCase()
.includes(
this.value.toLowerCase()
)

);



tampilHome(hasil);


});





// FILTER

document
.getElementById("filter")
.addEventListener(
"change",
function(){


if(this.value=="all"){

tampilHome();

return;

}



let hasil =
produk.filter(item=>

item.kategori==
this.value

);



tampilHome(hasil);


});




tampilHome();