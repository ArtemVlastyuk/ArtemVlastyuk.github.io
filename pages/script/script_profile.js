let log=JSON.parse(localStorage.getItem("info"));

if (log.name!=null){
    document.querySelector(".name").value=log.name
}
if (log.lastname!=null){

    document.querySelector(".lastname").value=log.lastname;

}if (log.patronymic==null){
    document.querySelector(".patronymic").value="";
}
else{
    document.querySelector(".patronymic").value=log.patronymic;
}
if (log.email!=null){


    document.querySelector(".email").value=log.email;
}

if (log.tel!=null){

    document.querySelector(".tel").value=log.tel;
}

document.querySelector(".exit").onclick=function (){
    document.body.style.overflow = 'hidden';
    document.querySelector(".back").style.display="block";
    document.querySelector(".yes").onclick=function (){
        document.querySelector(".back").style.display="none";
        localStorage.setItem("autorization",JSON.stringify(false));
        localStorage.setItem("info",JSON.stringify(''))
        window.location.href = "../PR1.html";
        document.body.style.overflow = 'visible';
    }

    document.querySelector(".no").onclick=function (){
        document.querySelector(".back").style.display="none";
        document.body.style.overflow = 'auto';
    }
    document.querySelector(".back").addEventListener('click', e => { // при клике в любом месте окна браузера
        const modal = e.target // находим элемент, на котором был клик
        if (!modal.closest('.modal-div')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
            document.querySelector(".back").style.display="none";
            document.body.style.overflow = 'auto';
// то закрываем окно навигации, удаляя активный класс
        }
    })

    // localStorage.setItem("autorization",JSON.stringify(false));
    // localStorage.setItem("info",JSON.stringify(''))


}

let check=0;
document.querySelector('.side-menu').addEventListener("click",
    function (event){
        if(check==0){
            document.body.style.overflow="hidden";
            check=1;
        }
        else{
            document.body.style.overflow="visible";
            check=0;
        }
});
document.querySelector("form").addEventListener("submit",function (event){

    let email=document.querySelector(".email").value

    let tel=document.querySelector(".tel").value

    let name=document.querySelector(".name").value

    let lastname=document.querySelector(".lastname").value

    let patronymic=document.querySelector(".patronymic").value

    let log=JSON.parse(localStorage.getItem("info"));
    let emailOld=log.email;
    log.tel=tel;
    log.name=name;
    log.email=email;
    log.lastname=lastname;
    log.patronymic=patronymic;
    localStorage.setItem("info",JSON.stringify(log));
    let bd=JSON.parse(localStorage.getItem("myKey"));

    for(let i=0;i<bd.length;i++){
        if (bd[i].email == emailOld) {
            bd[i]=log;
        }
    }
    localStorage.setItem("myKey",JSON.stringify(bd));



})
