

//
const user = JSON.parse(localStorage.getItem("currentUser"));
const cardContainer = document.querySelector("#card-container");

const productsLS = JSON.parse(localStorage.getItem("products")) || [];

function renderizarProductos(products) {
    
    products.forEach(product, index => {
        cardContainer.innerHTML = ``;

        const card = document.createElement("article");
        card.classList.add("card");
        //!!!!! NO ME ANDA !!!!!
        card.innerHTML = 
        `<div class="card__header">
        <img src="${product.image}" alt="${product.name}" class="card__img">
        </div>
        <div class="card__body">
            <div class="card__title">
                ${product.name}
            </div>
            <div class="card__description">
            ${product.description}
            </div>
            <div class="card__more">
                <div class="card__date">
                    19/01/2023
                </div>
                <div class="card__price">
                $ ${product.price}
                </div>
            </div>
        </div>
        <div class="card__footer">
            <div class="card__btn-container">
                <button class="card__btn-compra" onclick="addToOrder(${index})" ${user ? "" : "disabled"}>
                    Comprar
                </button>
                <a class="card__btn-detalle" href="/pages/product-detail/product-detail.html?id=${index}">
                    Detalle
                </a>
            </div>
        </div>`

        cardContainer.appendChild(card)

    })
}

renderizarProductos(productsLS);