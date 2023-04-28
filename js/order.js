const badgeHTML = document.getElementById("cart-count");
let order = {
    products: [
        { 
            productName: "XBOX", //name del producto es igual a un productName
            cantidad: 2,
            price: 1000
        },
        {
            productName: "Switch",
            cantidad: 1,
            price: 200000
        },
        {
            productName: "PSOne",
            cantidad: 3,
            price: 300000
        }
    ],
    user: "email@gmail.com",
    total: 300000,
};

function actualizarBadge() {
    badgeHTML.innerText = order.products.reduce((acc, producto) => {
        return acc += producto.cantidad;
    }, 0)
};

actualizarBadge();

//? Agregar elemento
function addToOrder(indice) {
    //Buscar el producto por indice dentro de mi localStorage
    //Tener la posibilidad de que cuando aprieten el boton comprar se añada el elemento al array dentro order.products
        //ANTES DE HACER UN PUSH    
    //Deberia checkear buscando con un find con un findIndex deberia checkear si el producto ya se encuentra
        // Si ya se encuentra, incremento dentro de ese producto su cantidad++
        // Sino hago un push de ese elemento
    //Incrementar el total
    //Volver a guardar en el sessionStorage
}


//? Eliminar elemento
    //Pintamos en el boton de mi orden el index de el array order.products y lo eliminamos.Splice
    // Guardar el precio del producto por la cantidad y restarselo al total
    // Actualizar el sessionStorage con el nuevo valor

//? Listar orden
    //Pintar los elementos en una nueva pagina