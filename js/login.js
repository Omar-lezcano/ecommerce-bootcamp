//1-a Guardo el formulario en una variable
const loginForm = document.getElementById("LoginForm");

// 1- Obtener los datos del formulario
loginForm.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    console.dir(loginForm);

    const { emailInput, password } = loginForm.elements;

    // console.log(emailInput.value, password.value)
    // 2- Checkear datos ingresados con los usuarios que tengo
    // 2-a Obtener los usuarios almacenados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((usr) => {
        if(usr.email === emailInput.value) {
            return true;
        }
        return false;
    }) // { name, password, email, }

    if(!user || user.password != password.value) {  //si no existe el usuario
        alert("Los datos ingresados no son correctos");
        return; //para que corte 
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login correcto")//va a guardar los datos de usuario en LS

});
    
    //a- Email que me ingreso lo tiene algun usuario de mi array
    //b- Password deberian ser las mismas
// 3- Vamos a guardar en el localStorage un registro que va a ser currentUser - user

//function logout
//1- Borramos el registro del localStorage