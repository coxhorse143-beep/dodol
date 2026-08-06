// ======================================
// LOGIN ADMIN
// ======================================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");

// ==========================
// SHOW / HIDE PASSWORD
// ==========================

togglePassword.addEventListener("click", function () {

    if(password.type === "password"){

        password.type = "text";

        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type = "password";

        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

// ==========================
// LOGIN
// ==========================

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value.trim();

    const pass =
    password.value.trim();

    // Username & Password Demo
    if(username === "admin" && pass === "admin123"){

        alert("Login Berhasil!");

        window.location.href = "dashboard.html";

    }else{

        alert("Username atau Password salah!");

    }

});
function login(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(
username=="admin" &&
password=="admin123"
){


localStorage.setItem(
"login",
"true"
);



window.location.href=
"dashboard.html";



}else{


alert(
"Username atau password salah"
);


}


}