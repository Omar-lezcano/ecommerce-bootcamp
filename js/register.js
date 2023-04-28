//1- Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector("#registerForm");
    //b- Obtener boton de submit
const registerBtn = document.getElementById("registerSubmit");
//2- Vamos a escuchar el evento directamente en JS
registerForm.addEventListener("submit", (evt) => {
    console.log("Submit evt")

    //a- preventDefault
    evt.preventDefault();
    //b- Tomar los datos y armar el objeto usuario
    const el = evt.target.elements;

    //d- Verificar que los datos ingresados de password y password2 son exactamente igual
    if(el.password.value !== el.password2.value) {
        showAlert(`El password no coincide`, "warning"); //reemplazar sweetalert 
        return;
    }
    
    //c- Verificar si hay en el localStorage algun usuario guardado ya con ese email

        //I- Obtener los usuarios guardados en el localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExist = checkIfUserExist(users, el.email.value)
    // Existe: retorno y muestro un alert
    if(userExist) {
        showAlert("El email ya se encuentra registrado", "error") //Ver si dejo
        return;
    }

        //no existe: sigo con mi sintaxis normalmente

    const user = {
        fullName: el.fullName.value,
        age: el.age.value,
        password: el.password.value,
        email: el.email.value,
        gender: el.gender.value,
        role: "USER_ROLE"
    }

    //e- Insertar en mi array de usuarios el nuevo user(lista de usuarios)
    users.push(user)

    //e- Guardarlo en el localStorage
    localStorage.setItem("users", JSON.stringify(users) )//users ahora tiene un usuario más

    //f- Limpiamos el formulario, podemos llevar al usuario a la pagina de login
        //a- Resetear el formulario
            //registerForm.reset();
    showAlert("Se agrego usuario correctamente!!", "success");
    
});

function checkIfUserExist(users, emailToSearch) {
     //** 3 versiones
    //II- Recorrer el array con un forEach

    // //?================ Solucion 3
    const indexOfUser = users.findIndex(usuario => {
        if(usuario.email === emailToSearch) {
            //solamente trabaja dentro del findIndex
            return true
        }
    })

    if(indexOfUser >= 0) {
        console.warn(`El usuario ya existe findIndex`);

        //! retorno de mi función
        return true;
    };

    return false;

    // let userEmailExist = false;
    //!============= Solucion 1
    // users.forEach(usuario => {
    //     if(usuario.email === el.email.value) {
    //         userEmailExist = true;
    //     }
    // })
    // if(userEmailExist) {
    //     console.warn(`El usuario ya existe`)
    //     return;
    //     // userEmailExist = true;
    // }

    //*============== Solucion 2
    // const userExist = users.find(user => {
    //     if(user.email === el.email.value) {
    //         return true;
    //     }

    //     return false;//no es necesario ya que si no lo defino se hace un return undefined(false)
    // })

    // if(userExist) {
    //     console.warn(`El usuario ya existe`);
    //     return;
    // };

    
}

