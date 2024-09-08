// Determina a categoria com base na URL da página
const url = new URL(window.location.href);
const page = url.pathname.split('/').pop(); // Obtém o nome da página

let category;

if (page === 'femininos.html') {
    category = 'Feminino';
} else if (page === 'masculinos.html') {
    category = 'Masculino';
} else if (page === 'unisex.html') {
    category = 'Unisex';
} else {
    console.error('Categoria não reconhecida');
    category = ''; // Ou defina um valor padrão
}

// Função assíncrona para carregar produtos com base na categoria
async function loadProducts() {
    if (!category) {
        console.error('Categoria inválida. Não foi possível carregar os produtos.');
        return;
    }

    try {
        // Faz a requisição para obter produtos da categoria especificada
        const response = await fetch(`http://localhost:3000/products/${category}`);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Produtos não encontrados');
        }

        const products = await response.json(); // Converte a resposta em JSON
        const container = document.getElementById("products-container");

        // Limpa o conteúdo do contêiner
        container.innerHTML = '';

        // Adiciona cada produto ao contêiner
        products.forEach(product => {
            container.innerHTML += `
            <product-card id="${product.id}" src="${product.src}" title="${product.title}" price="${product.price}"></product-card>
            `;
        });

    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Carrega os produtos ao iniciar
loadProducts();

// Definindo o custom element
class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.innerHTML = `
            <div style="display:flex;gap: 20px; margin: 50px;">
            <a href="produto.html?id=${this.getAttribute("id")}" style="text-decoration: none;">
                <div class="card" style="width: 12rem; margin-bottom: 15px;">
                <img  style="height: 220px;" src="${this.getAttribute("src")}" class="card-img-top" alt="..." >
                <div class="card-body">
                    <p class="card-text">${this.getAttribute("title")}<p style="font-weight: 700;">R$ ${this.getAttribute("price")}</p></p>
                </div>
                </div>
            </a>
            </div>
        `;
        this.appendChild(div);
    }
}

customElements.define("product-card", ProductCard);
