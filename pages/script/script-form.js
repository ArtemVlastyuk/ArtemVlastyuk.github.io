
document.querySelector(".exit").onclick=function (){
    document.body.style.overflow = 'hidden';
    document.querySelector(".back").style.display="block";
    document.querySelector(".yes").onclick=function (){
        document.querySelector(".back").style.display="none";
        localStorage.setItem("autorization",JSON.stringify(false));
        localStorage.setItem("info",JSON.stringify(''))
        window.location.href = "../PR1.html";
        document.body.style.overflow = 'auto';
    }

    document.querySelector(".no").onclick=function (){
        document.querySelector(".back").style.display="none";
        document.body.style.overflow = 'auto';
    }
    document.querySelector(".back").addEventListener('click', e => {
        const modal = e.target
        if (!modal.closest('.modal-div')) {
            document.querySelector(".back").style.display="none";
            document.body.style.overflow = 'auto';

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
