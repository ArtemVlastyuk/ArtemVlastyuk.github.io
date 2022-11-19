"use strict"
let login=["Таня"];

let reg=document.querySelector(".login .login_text p");
reg.onclick=function () {
    let form=document.querySelector(".login");
    form.style.display="none";
    let inputs=document.querySelectorAll(".login input");
    for (var i=0;i<inputs.length;i++){
        inputs[i].required=false;
    }
    let inputs_reg=document.querySelectorAll(".loginR input");
    for (var i=0;i<inputs.length;i++){
        inputs_reg[i].required=true;
    }

    let form_reg=document.querySelector(".loginR");
    form_reg.style.display="block";
}
let form_reg=document.querySelector(".loginR .login_text p")
form_reg.onclick=function () {
    let inputs=document.querySelectorAll(".login input");
    for (var i=0;i<inputs.length;i++){
        inputs[i].required=true;
    }
    let inputs_reg=document.querySelectorAll(".loginR input");
    for (var i=0;i<inputs.length;i++){
        inputs_reg[i].required=false;
    }
    let form=document.querySelector(".loginR");
    form.style.display="none";
    let form_reg=document.querySelector(".login");
    form_reg.style.display="block";
}

let button=document.querySelector(".loginR .reg_button");
button.onclick=function (){
    let name=document.querySelector(".loginR .name").value;
    console.log(name);
    alert(name);
    let lastname=document.querySelector(".lastname").value;
    console.log(lastname);
    alert(lastname);
    let email=document.querySelector(".email_reg").value;
    console.log(email);
    alert(email);
    let password=document.querySelector(".password_reg").value;
    console.log(password);
    alert(password);
    let log=JSON.parse(localStorage.getItem("myKey"));
    if(log==null){
        log=login;
    }
    log.push((email+" "+password));
    localStorage.setItem("myKey",JSON.stringify(log));
    console.log(login);
   

}
let button_log=document.querySelector(".login .login_button");
button_log.onclick=function (){
    let email=document.querySelector(".login .login_input").value;
    let password=document.querySelector(".login .password").value;
    //alert(email+" "+password);
    let log=JSON.parse(localStorage.getItem("myKey"));
    if(log==null){
        log=login;
    }
    //alert(log);
    for (let i=0;i<log.length;i++){
        //alert(email+password);
        //alert(log[i]);
        if((email+" "+password)==log[i]){
            alert("Вход выполненен");
        }
    }
}
let log=JSON.parse(localStorage.getItem("myKey"));
if(log==null){
    log=login;
}
alert(log);

