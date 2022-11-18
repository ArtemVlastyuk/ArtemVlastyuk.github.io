"use strict"
let reg=document.querySelector(".login .login_text p");
reg.onclick=function () {
    let form=document.querySelector(".login");
    form.style.display="none";
    let form_reg=document.querySelector(".loginR");
    form_reg.style.display="block";
}
let form_reg=document.querySelector(".loginR .login_text p")
form_reg.onclick=function () {
    let form=document.querySelector(".loginR");
    form.style.display="none";
    let form_reg=document.querySelector(".login");
    form_reg.style.display="block";
}