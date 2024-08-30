let params = new URLSearchParams(document.location.search);
const id = params.get('id');  // Obter o ID do produto dos parâmetros da URL

async function loadProduct() {
    const response = await getData(id);

    // Preencher os elementos HTML com os dados do produto
    document.getElementById('title').innerHTML = response.title;
    document.getElementById('price').innerHTML = `Valor: R$ ${response.price}`;
    document.getElementById('description').innerHTML = response.description;
    document.getElementById('src').src = response.image;

    // Adicionar o evento de clique para adicionar ao carrinho
    document.getElementById('add-to-cart').addEventListener('click', () => {
        addToCart(response);
    });
}

// Função para buscar dados do produto pela ID na API
async function getData(id) {
    try {
        const res = await fetch(`http://localhost:3000/produts/${id}`);  // Certifique-se que a rota esteja correta
        const json = await res.json();
        return json;
    } catch (erro) {
        console.error("Erro ao buscar os dados do produto:", erro);
    }
}

// Função para adicionar o produto ao carrinho
function addToCart(product) {
    // Obter o carrinho existente no localStorage (ou criar um novo array se não existir)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Adicionar o produto ao carrinho
    cart.push(product);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirecionar para a página do carrinho (ou exibir uma mensagem de sucesso)
    alert("Produto adicionado ao carrinho com sucesso!");
}

// Chamar a função para carregar o produto na página
loadProduct();

function loadCart() {
    // Recuperar o carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Selecionar o container onde os produtos serão exibidos
    const container = document.getElementById('cart-container');

    // Exibir cada item do carrinho
    cart.forEach((produt) => {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${produt.src}" alt="${produt.title}" style="width: 100px;">
                <h2>${produt.title}</h2>
                <p>${produt.price}</p>
            </div>
        `;
    });

    if(cart.length === 0) {
        container.innerHTML = "<p>O carrinho está vazio.</p>";
    }
}

// Chamar a função para carregar o carrinho na página
loadCart();




// Função assíncrona para obter dados do produto
async function getData(id) {
  try {
    const res = await fetch(`http://localhost:3000/produts/${id}`); // Certifique-se de que a rota esteja correta
    const json = await res.json();
    return json;
  } catch (erro) {
    console.log(erro);
  }
}
