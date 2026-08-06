function cekLogin(){


let login =
localStorage.getItem("login");



if(login !== "true"){

window.location.href =
"login.html";

}


}



function logout(){


localStorage.removeItem(
"login"
);


window.location.href =
"login.html";


}