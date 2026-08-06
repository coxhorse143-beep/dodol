let area =
document.getElementById(
"checkoutProduk"
);


let totalElement =
document.getElementById(
"totalHarga"
);



let ongkir = 15000;

let diskon = 50000;



function tampilCheckout(){


let total = 0;



area.innerHTML="";



keranjang.forEach(item=>{


let harga =
item.harga * item.jumlah;



total += harga;



area.innerHTML += `


<div class="product">


<img width="100"
src="${item.gambar}">


<div>

<h3>
${item.nama}
</h3>


<p>
Jumlah : ${item.jumlah}
</p>


<b>
Rp ${harga.toLocaleString()}
</b>


</div>


</div>


`;



});



let pembayaran =
total + ongkir - diskon;



totalElement.innerHTML =

"Rp "+
pembayaran.toLocaleString();



}



tampilCheckout();