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
document.querySelector('.di').addEventListener('mouseover', function (event){
    document.querySelector('.di').src='pages/img/di2.jpg'
});
document.querySelector('.di').addEventListener('mouseout', function (event){
    document.querySelector('.di').src='pages/img/di.jpg'
});
document.querySelector('.depp').addEventListener('mouseover', function (event){
    document.querySelector('.depp').src='pages/img/depp.jpg'
});
document.querySelector('.depp').addEventListener('mouseout', function (event){
    document.querySelector('.depp').src='pages/img/depp2.jpg'
});
document.querySelector('.al').addEventListener('mouseover', function (event){
    document.querySelector('.al').src='pages/img/al2.jpg'
});
document.querySelector('.al').addEventListener('mouseout', function (event){
    document.querySelector('.al').src='pages/img/al.jpg'
});
document.querySelector('.pol').addEventListener('mouseover', function (event){
    document.querySelector('.pol').src='pages/img/pol.jpg'
});
document.querySelector('.pol').addEventListener('mouseout', function (event){
    document.querySelector('.pol').src='pages/img/pol2.jpeg'
});
document.querySelector('.pit').addEventListener('mouseover', function (event){
    document.querySelector('.pit').src='pages/img/pit2.jpg'
});
document.querySelector('.pit').addEventListener('mouseout', function (event){
    document.querySelector('.pit').src='pages/img/bred.jpg'
});
document.querySelector('.gosling').addEventListener('mouseover', function (event){
    document.querySelector('.gosling').src='pages/img/gosling.jpg'
});
document.querySelector('.gosling').addEventListener('mouseout', function (event){
    document.querySelector('.gosling').src='pages/img/gosling2.jpeg'
});
