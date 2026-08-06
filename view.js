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