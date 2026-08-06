// DATABASE TRANSAKSI

let transaksi =
JSON.parse(
localStorage.getItem("transaksi")
) || [];




// PROSES BAYAR

function bayar(){


if(keranjang.length==0){

alert(
"Keranjang masih kosong"
);

return;

}



let total = 0;


keranjang.forEach(item=>{


total += item.harga * item.jumlah;


});



let data = {


id:Date.now(),


tanggal:
new Date()
.toLocaleDateString(),


produk:keranjang,


total:
total + 15000 - 50000,


status:
"Selesai"


};




transaksi.push(data);



localStorage.setItem(

"transaksi",

JSON.stringify(transaksi)

);




// kosongkan keranjang


localStorage.removeItem(
"keranjang"
);



alert(
"Pembayaran berhasil!"
);



window.location.href=
"index.html";


}