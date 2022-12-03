document.querySelector('.cont').onclick=function (){
    document.body.style.overflow="visible";
    document.querySelector('.ul_header').style.top='-200%'
    document.querySelector('.side-menu').checked=false;
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