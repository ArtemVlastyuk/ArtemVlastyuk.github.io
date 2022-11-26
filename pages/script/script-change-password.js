document.querySelector('form').addEventListener("submit",pos)
function pos (event) {
        let error_password = document.querySelector(".error_password");
        if (error_password != null) {

            error_password.remove();
        }
        let error_password2 = document.querySelector(".error_password2");
        if (error_password != null) {

            error_password2.remove();
        }
        let np = document.querySelector(".new-password").value
        let np2 = document.querySelector(".new-password2").value
        console.log(np);
        console.log(np2)
        let flag = false;
        let flag2 = false;
        if (np != np2) {
            let footer = document.querySelector(".new-password2");
            let newElement = document.createElement('div');
            newElement.className = "error_password";
            newElement.innerHTML = '<p>Пароль не совпадает!</p>';
            flag2=false
            var timeout_id = setTimeout(function () {
                footer.after(newElement);
            }, 100);
            newElement.querySelector("p").style.marginTop = '-10px'
            newElement.querySelector("p").style.marginLeft = '5px'

            newElement.querySelector("p").style.textAlign = "left";
            newElement.querySelector("p").style.color = "red";
            //alert('kj[')
            event.preventDefault();
        }
        let op = document.querySelector(".old-password").value
        let bd = JSON.parse(localStorage.getItem("myKey"));

        for (let i = 0; i < bd.length; i++) {
            if (bd[i].password == op) {
                bd[i].password = np;
                localStorage.setItem("myKey", JSON.stringify(bd));

                flag = true
            }
        }
        if (!flag) {
            let footer = document.querySelector(".old-password");
            let
                newElement = document.createElement('div');
            newElement.className = "error_password2";
            newElement.innerHTML = '<p>Неверный пароль!</p>';
            var timeout_id = setTimeout(function () {
                footer.after(newElement);
            }, 100);
            newElement.querySelector("p").style.marginTop = '-10px'
            newElement.querySelector("p").style.marginLeft = '5px'

            newElement.querySelector("p").style.textAlign = "left";
            newElement.querySelector("p").style.color = "red";
            event.preventDefault();
        } else  if(!flag2){
            document.querySelector("form").removeEventListener("submit", pos)
        }


}