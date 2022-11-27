let authorization=JSON.parse(localStorage.getItem("autorization"));
//localStorage.setItem("authorization", JSON.stringify(log));
if (authorization!=null && authorization!=false){
    //document.querySelector(".vhod").href="profil.html";
    document.querySelector(".vhod").href="pages/profil.html";
}

document.querySelector('.side-menu').addEventListener("click",
    function (event){
        if (document.querySelector('.side-menu').checked){
            document.body.style.overflow="hidden";
            document.querySelector('.ul_header').style.top='60px';
        }
        else{
            document.body.style.overflow="visible";
            document.querySelector('.ul_header').style.top='-200%';
        }

    });

document.querySelector('.kozl').addEventListener('mouseover', function (event){
    document.querySelector('.kozl').src='pages/img/kozl2.jpeg'
});
document.querySelector('.kozl').addEventListener('mouseout', function (event){
    document.querySelector('.kozl').src='pages/img/kozl.jpeg'
});
document.querySelector('.bc').addEventListener('mouseover', function (event){
    document.querySelector('.bc').src='pages/img/bc2.jpeg'
});
document.querySelector('.bc').addEventListener('mouseout', function (event){
    document.querySelector('.bc').src='pages/img/bc.png'
});

document.querySelector('.sb').addEventListener('mouseout', function (event){
    document.querySelector('.sb').src='pages/img/sb.jpeg'
});
document.querySelector('.sb').addEventListener('mouseover', function (event){
    document.querySelector('.sb').src='pages/img/sb2.jpeg'
});
document.querySelector('.sb').addEventListener('mouseout', function (event){
    document.querySelector('.sb').src='pages/img/sb.jpeg'
});
document.querySelector('.sb').addEventListener('mouseover', function (event){
    document.querySelector('.sb').src='pages/img/sb2.jpeg'
});

document.querySelector('.dl').addEventListener('mouseover', function (event){
    document.querySelector('.dl').src='pages/img/dl2.jpeg'
});
document.querySelector('.dl').addEventListener('mouseout', function (event){
    document.querySelector('.dl').src='pages/img/dl.jpeg'
});
document.querySelector('.yb').addEventListener('mouseover', function (event){
    document.querySelector('.yb').src='pages/img/yb2.jpeg'
});
document.querySelector('.yb').addEventListener('mouseout', function (event){
    document.querySelector('.yb').src='pages/img/yb.png'
});
document.querySelector('.ot').addEventListener('mouseover', function (event){
    document.querySelector('.ot').src='pages/img/ot2.jpeg'
});
document.querySelector('.ot').addEventListener('mouseout', function (event){
    document.querySelector('.ot').src='pages/img/ot.jpeg'
});
document.querySelector('.cont').onclick=function (){
    document.body.style.overflow="visible";
    document.querySelector('.ul_header').style.top='-200%'
    document.querySelector('.side-menu').checked=false;
}
