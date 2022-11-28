let authorization=JSON.parse(localStorage.getItem("autorization"));
//localStorage.setItem("authorization", JSON.stringify(log));
if (authorization!=null && authorization!=false){
    //document.querySelector(".vhod").href="profil.html";
    document.querySelectorAll(".vhod")[0].href="pages/profil.html";
    document.querySelectorAll(".vhod")[1].href="pages/profil.html";
}
