const tabel = document.getElementById("dataProduk");


function tampilProduk(data = produk){


tabel.innerHTML="";


data.forEach((item,index)=>{


tabel.innerHTML += `


<tr>


<td>

<img src="${item.gambar}">

</td>


<td>

${item.nama}

</td>


<td>

${item.kategori}

</td>


<td>

Rp ${item.harga.toLocaleString()}

</td>


<td>

${item.stok}

</td>


<td>

<span class="aktif">

Aktif

</span>

</td>


<td>


<button 
class="detail"
onclick="detailData(${item.id})">

<i class="fa fa-eye"></i>

</button>



<button 
class="edit"
onclick="editData(${item.id})">

<i class="fa fa-pen"></i>

</button>



<button 
class="hapus"
onclick="hapusData(${item.id})">

<i class="fa fa-trash"></i>

</button>


</td>


</tr>


`;


});


}



function hapusData(id){


let yakin = confirm(
"Hapus produk ini?"
);


if(yakin){


hapusProduk(id);


tampilProduk();


}


}




// SEARCH


const search =
document.querySelector(".toolbar input");



if(search){


search.addEventListener(
"keyup",
function(){


let keyword =
this.value.toLowerCase();



let hasil =
produk.filter(item=>

item.nama
.toLowerCase()
.includes(keyword)

);



tampilProduk(hasil);


});


}




tampilProduk();
function editData(id){


let data =
produk.find(item=>item.id==id);



let nama =
prompt(
"Nama Barang",
data.nama
);



let harga =
prompt(
"Harga Barang",
data.harga
);



let stok =
prompt(
"Stok Barang",
data.stok
);



let update = {


id:data.id,

nama:nama,

kategori:data.kategori,

harga:Number(harga),

stok:Number(stok),

gambar:data.gambar,

deskripsi:data.deskripsi


};



updateProduk(
id,
update
);



alert(
"Produk berhasil diubah"
);



tampilProduk();


}
function detailData(id){


localStorage.setItem(
"produkDetail",
id
);



window.location.href=
"detail.html";


}