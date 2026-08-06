let tempat =
document.getElementById(
"listKeranjang"
);



function tampilKeranjang(){


tempat.innerHTML="";



keranjang.forEach(item=>{


tempat.innerHTML += `


<div>


<img width="100"
src="${item.gambar}">


<h3>
${item.nama}
</h3>


<p>
Jumlah : ${item.jumlah}
</p>


<p>
Rp ${(item.harga*item.jumlah)
.toLocaleString()}
</p>


</div>


`;


});


}



tampilKeranjang();