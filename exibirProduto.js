const url = new URL(window.location.href);

const params = new URLSearchParams(url.search);

const id = params.get('id');

async function loadProduct() {
    const response = await fetch(`http://localhost:3000/produts/${id}`);
    const product = await response.json();
    const container = document.getElementById("produto-container");

    container.innerHTML = `
    <h1>${product.title}</h1>
    `

    return product
}

loadProduct()