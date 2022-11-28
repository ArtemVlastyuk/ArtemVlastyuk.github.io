
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

