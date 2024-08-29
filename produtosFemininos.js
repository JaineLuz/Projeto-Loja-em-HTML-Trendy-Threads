// Determina a categoria com base na URL da página
const url = new URL(window.location.href);
const page = url.pathname.split('/').pop(); // Obtém o nome da página

let category;

if (page === 'femininos.html') {
    category = 'Feminino';
} else if (page === 'masculinos.html') {
    category = 'Masculino';
} else if (page === 'unisex.html') {
    category = "Unisex"
} else {
    console.error('Categoria não reconhecida');
    category = ''; // Ou defina um valor padrão
}

// Função assíncrona para carregar produtos com base na categoria
async function loadProducts() {
    try {
        // Faz a requisição para obter produtos da categoria especificada
        const response = await fetch(`http://localhost:3000/products?category=${category}`);
        
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
            <div class="card" style="width: 12rem; margin-bottom: 15px;">
                <img style="height: 220px;" src="${product.src}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <p class="card-text">${product.title} <p style="font-weight: 700;">${product.price}</p></p>
                </div>
            </div>
            `;
        });

    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Carrega os produtos ao iniciar
loadProducts();
