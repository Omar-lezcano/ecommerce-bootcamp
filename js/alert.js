if(true) {
    function showAlert(text, type = "success") {
        // * Vamos a hacer nuestro alert custom !!!!
        // Crea un elemento HTML Node
        const alertDialog = document.createElement("div");
        // Añade una clase
        alertDialog.classList.add("alert-dialog");
        alertDialog.innerText = text;
    
        document.body.appendChild(alertDialog);
    
        if(type === "error") {
            alertDialog.style.background = "red";
        }
        if(type === "warning") {
            alertDialog.style.background = "orangered";
        }
        //Para demorar su aparición luego de haber creado lineas anteriores con document.createElement
        setTimeout(() => alertDialog.classList.add("show"), 10)
        
    
        // document.querySelector("footer").appendChild(alertDialog);
    
        setTimeout(() => {
            alertDialog.classList.remove("show");
    
            setTimeout(() => {
                alertDialog.remove();
            }, 1000)
            // alertDialog.classList.add("hidden") //Conviene destruirlo
            // window.location.href = "/pages/login/login.html"
        }, 3000)
    }
    
}

