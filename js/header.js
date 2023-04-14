const signIn = document.getElementById("sing-in");

function renderHeaderLinks() {
    
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser) {
        signIn.innerHTML = `<div onclick="logout()" class="navbar__nav-link">Logout</div>` //cuando le hagan click llamo a la funcion logout
        //console.log("test")
    } else {
        const link = document.createElement("a");

        link.classList.add("navbar__nav-link");

        link.href = "/pages/login/login.html";
        link.setAttribute("target", "_blank")

        link.innerText = "Login" 

        signIn.replaceChildren(link)

    }
    // signIn.innerHTML = `<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>`
}

function logout() {
    localStorage.removeItem("currentUser");
    renderHeaderLinks();
}

renderHeaderLinks();