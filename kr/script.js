"use strict"
let login=[{
    name:"Admin",
    lastname:"Admin",
    email:"Admin",
    password:"Admin"
}];

let reg=document.querySelector(".login .login_text p");
reg.onclick=function () {

    let form=document.querySelector(".login");
    form.style.display="none";
    // let inputs=document.querySelectorAll(".login input");
    // for (var i=0;i<inputs.length;i++){
    //     inputs[i].required=false;
    // }
    let inputs_reg=document.querySelectorAll(".loginR input");
    for (var i=0;i<inputs_reg.length;i++){
        inputs_reg[i].required=true;
    }

    let form_reg=document.querySelector(".loginR");
    form_reg.style.display="block";
}
let form_reg=document.querySelector(".loginR .login_text p");
form_reg.onclick=function () {
    let inputs=document.querySelectorAll(".login input");
    for (var i=0;i<inputs.length;i++){
        inputs[i].required=true;
    }

    // let inputs_reg=document.querySelectorAll(".loginR input");
    // for (var i=0;i<inputs_reg.length;i++){
    //     inputs_reg[i].required=false;
    // }
    let form=document.querySelector(".loginR");
    form.style.display="none";
    let form_reg=document.querySelector(".login");
    form_reg.style.display="block";
}

let button=document.querySelector(".loginR form");
let error=false;
document.querySelector(".loginR .email_reg").addEventListener("input", function (event){
    let error_login=document.querySelector(".email_error");
    if (error_login!=null){
        error_login.remove();
    }
    let error_password=document.querySelector(".error_password");
    if (error_password!=null){
        error_password.remove();
    }
    error=false;
    let email=document.querySelector(".loginR .email_reg").value;
    let log=JSON.parse(localStorage.getItem("myKey"));
    for (let i=0;i<log.length;i++){
        if(email==log[i].email){
            error=true;
            let email_input=document.querySelector(".loginR .email_reg");
            let newElement=document.createElement('div');
            newElement.className="email_error";
            newElement.innerHTML='<p>Такой логин существует</p>';

            var timeout_id = setTimeout(function(){
                email_input.after(newElement);
            }, 100);
            newElement.querySelector("p").style.textAlign="left";
            newElement.querySelector("p").style.color="red";
            button.addEventListener("submit", pos);
            break;
        }
        if(!error){
            button.removeEventListener("submit",pos);
        }


    }

});
function pos(event) {
    event.preventDefault();
};

button.addEventListener("submit",function (event){
    let name=document.querySelector(".loginR .name").value;
    let lastname=document.querySelector(".lastname").value;
    let email=document.querySelector(".email_reg").value;

    if (!error) {
        let password = document.querySelector(".password_reg").value;

        if (log == null) {
            log = login;
        }
        let s = {
            name: name,
            lastname: lastname,
            email: email,
            password: password
        }
        log.push(s);
        //log.push(email+" "+password);
        localStorage.setItem("myKey", JSON.stringify(log));

    }
});

let button_log=document.querySelector(".login form");
button_log.addEventListener("submit",function (event){
    let email=document.querySelector(".login .login_input").value;
    let password=document.querySelector(".login .password").value;

    let error_login=document.querySelector(".error_login");
    if (error_login!=null){
        error_login.remove();
    }
    let error_password=document.querySelector(".error_password");
    if (error_password!=null){

        error_password.remove();
    }

    let log=JSON.parse(localStorage.getItem("myKey"));
    if(log==null){
        log=login;
    }

    let check=false;
    for (let i=0;i<log.length;i++){
        //alert(email+password);
        //alert(log[i]);

        if(email===log[i].email){

            if(password==log[i].password){
                alert("Добро пожаловать, "+log[i].name+"!");
                return;
            }
            else{
                check=true;
                let footer=document.querySelector(".login .password");
                let newElement=document.createElement('div');
                newElement.className="error_password";
                newElement.innerHTML='<p>Невернный пароль!</p>';

                var timeout_id = setTimeout(function(){
                    footer.after(newElement);
                }, 100);
                newElement.querySelector("p").style.textAlign="left";
                newElement.querySelector("p").style.color="red";
                //alert("Неверный пароль!");
                event.preventDefault();
                break;
            }


        }
    }
    if(!check) {
        let footer = document.querySelector(".login .login_input");
        let newElement = document.createElement('div');
        newElement.className="error_login";
        newElement.innerHTML = '<p>Невернный логин!</p>';
        var timeout_id = setTimeout(function(){
            footer.after(newElement);
        }, 100);

        newElement.querySelector("p").style.textAlign = "left";
        newElement.querySelector("p").style.color = "red";
        event.preventDefault();
    }
});

let log=JSON.parse(localStorage.getItem("myKey"));
let log1=login;
log1=log;
localStorage.setItem("myKey",JSON.stringify(log1));
//alert(log);

