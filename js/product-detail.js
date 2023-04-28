const params = window.location.search;

console.log(params)
//const index = params.split("id=")[1].split("&")[0];

//Metodo recomendado para obtener queryParams es usando URLSearchParams
const paramsUrl = new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl)

console.log(paramsEntries);

const indice = paramsEntries.id;

const products = JSON.parse(localStorage.getItem("products"));

const product = products[indice];

document.body.innerHTML = `<p>${JSON.stringify(product)}</p>
<img src="${product.image}">`
