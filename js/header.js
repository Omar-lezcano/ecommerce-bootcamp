const signIn = document.getElementById("sing-in");
const navbarList = document.getElementById("navbar-list")

function renderHeaderLinks() {
    
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser) {
        signIn.innerHTML = `<div onclick="logout()" class="navbar__nav-link">Logout</div>` //cuando le hagan click llamo a la funcion logout
        //console.log("test")
        if(currentUser.role === "ADMIN_ROLE") {
            const adminProductLink = createLinkElement("admin-product", "Admin Product");
            const adminUserLink = createLinkElement("admin-user", "Admin Users", "li");

            navbarList.appendChild(adminProductLink)
            navbarList.appendChild(adminUserLink)
        }

    } else {
        const link = createLinkElement("login", "Login")
        // const link = document.createElement("a");
        // link.classList.add("navbar__nav-link");
        // link.href = "/pages/login/login.html";
        //link.setAttribute("target", "_blank")
        // link.innerText = "Login" 
        signIn.replaceChildren(link)
        // signIn.innerHTML = `<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>`
    }
}

function createListItemElement(path, text) {
    const listItem = document.createElement("li");
    listItem.classList.add("navbar__nav-item")
    //Le asigno un atributo id para luego removerlo en el logout
    listItem.setAttribute("id", path)
    link = createLinkElement(path, text);

    listItem.appendChild(link)
    return listItem;
}


function createLinkElement(path, text) {
    //let li;
    const link = document.createElement("a");
    link.classList.add("navbar__nav-link");
    link.href = `/pages/${path}/${path}.html`;
    link.innerText = text;
    // if (type) {
    //     li = document.createElement(type)
    //     li.appendChild(link)
    // }
    return link;
    // return type ? li : link;
}

function logout() {
    const currentUser = JSON.parse( localStorage.getItem("currentUser"));
    //localStorage.removeItem("currentUser");
    if(currentUser.role === "ADMIN_ROLE") {
        document.getElementById("admin-product").remove()
        document.getElementById("admin-user").remove();
        // document.getElementById("admin-product").remove();
    }

    localStorage.removeItem("currentUser");
    localStorage.removeItem("order")

    renderHeaderLinks();

}

renderHeaderLinks();