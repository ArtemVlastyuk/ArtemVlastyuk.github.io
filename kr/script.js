let authorization=JSON.parse(localStorage.getItem("autorization"));
//localStorage.setItem("authorization", JSON.stringify(log));
if (authorization!=null && authorization!=false){

    document.querySelector(".vhod").href="#";
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