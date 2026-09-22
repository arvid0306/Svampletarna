const userKalle = "Kalle";
const pwdKalle = "qwe123";

let user;
let pwd;
let info;

function init(){
    user = document.getElementById("user");
    pwd = document.getElementById("pwd");
    info = document.getElementById("info-log-in");

    const formLogIn = document.getElementById("inloggning-form");
    formLogIn.addEventListener("submit", e=>{
        e.preventDefault();
        logIn();
    })
}

window.onload = init;

function logIn(){
    if(user.value === userKalle){
        console.log("rätt user");

        if(pwd.value === pwdKalle){
            console.log("rätt pwd");


            return;
        }
        else{
            console.log("fel pwd");

            return;
        }
    }
    else{
        console.log("fel user");

        return;
    }
}