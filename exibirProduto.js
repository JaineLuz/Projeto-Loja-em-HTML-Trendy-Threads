//EXIBIR PRODUTOS
const url = new URL(window.location.href);

const params = new URLSearchParams(url.search);

const id = params.get('id');

async function loadProduct() {
    const response = await fetch(`http://localhost:3000/produts/${id}`);
    const product = await response.json();
    const container = document.getElementById("produto-container");

    console.log(product);

    const produtos = Array.isArray(product) ? product[0] : product;
    console.log(produtos);

    container.innerHTML = `
    <div class="container">
              <div class="product">
                  <img id="image" style="height: 250px; width: 500px; margin: 10px;" src="${product.src}" alt="Produto">
                  <div class="product-info" style="margin: 20px;">
                  <h1 id="product-title">${product.title}</h1>
                      <div style="margin: 50px;">
                          <h4 style="font-weight: 700;">Descrição do Produto: </h4>
                          <h5 id="description">${product.description}</h5>
                          <h5>- Disponível nos Tamanhos: P, M, G, GG e XG;</h5>
                          <h5>- Tecido: 75% algodão / 25% poliéster</h5>
                          <h5>- Detalhes da Estampa: Alta durabilidade;</h5>
                          <br/>
                          <h5 style="margin-left: 80px;">Cor:</h5>
                          <button style="border: none; background-color:rgb(236, 222, 238);">
                              <svg xmlns="http://www.w3.org/2000/svg" style="background-color: rgb(207, 126, 231);" class="rounded-circle" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                              </svg>
                          </button>
                          <button style="border: none; background-color:rgb(236, 222, 238);">
                              <svg xmlns="http://www.w3.org/2000/svg" style="background-color: rgb(17, 10, 19);" class="rounded-circle" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                              </svg>
                          </button>
                      </div>
                      <p id="price" style="margin: 20px; font-weight: 700; font-size: larger;">R$ ${product.price},00</p>
                      <button id="add-to-cart" class="btn btn-success" style="background-color: green; margin: 20px;">Adicionar ao Carrinho</button>
                  </div>
              </div>
          </div>
    
    `
    document.getElementById('product-title').innerHTML = product.title;
    document.getElementById('price').innerHTML = `Valor: R$ ${product.price}`;
    document.getElementById('description').innerHTML = product.description;
    document.getElementById('image').src = product.src;

    document.getElementById('add-to-cart').addEventListener('click', () => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const produtoExistente = carrinho.find(item => item.id == id);

        if (!produtoExistente) {
            carrinho.push({ id: id, quantidade: 1});
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }
        
        document.location.href = 'carrinho.html?id=' + id;
    });

    return product;
}
  
loadProduct()

//EXIBIR NO CARRINHO

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function renderCarrinho() {
    const produtosContainer = document.getElementById('produtos');
    produtosContainer.innerHTML = ""; // Limpar o container existente

    // Adicionar cada item do carrinho ao DOM
    for (let item of carrinho) {
        getData(item.id, item.quantidade);
    }
}

function getData(id, quantidade) {
    fetch(`http://localhost:3000/produts/${id}`)
        .then(response => response.json())
        .then(data => renderizar(data, quantidade));
}

function renderizar(product, quantidade) {
    // Cria a linha do produto
    const produtoRow = document.createElement('tr');

    produtoRow.innerHTML = `
        <td>
            <figure class="media">
                <div class="img-wrap"><img src="${product.src}" style="height: 125px; width: 100px; margin: 10px;" class="img-thumbnail img-sm"></div>
                <figcaption class="media-body">
                    <h6 class="title text-truncate">${product.title}</h6>
                </figcaption>
            </figure>
        </td>
        <td>
            <input type="number" value="${quantidade}" min="1" max="10" class="form-control" onchange="atualizarQuantidade(${product.id}, this.value)">
        </td>
        <td>
            <div class="price-wrap">
                <var class="price">R$ ${product.price.toFixed(2)}</var> <!-- Preço Unitário -->
            </div>
        </td>
        <td>
            <div class="price-wrap">
                <var class="price">R$ ${(product.price * quantidade).toFixed(2)}</var> <!-- Total -->
            </div>
        </td>
        <td class="text-right">
            <button class="btn btn-outline-danger" style="padding:0px"; "width:20px" onclick="remover(${product.id})">× Remover</button>
        </td>
    `;

    // Adiciona a linha ao container de produtos
    document.getElementById('produtos').appendChild(produtoRow);
}


function atualizarQuantidade(id, novaQuantidade) {
    carrinho = carrinho.map(item => {
        if (item.id == id) {
            item.quantidade = Number(novaQuantidade);
        }
        return item;
    });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderCarrinho();  // Re-renderizar o carrinho para atualizar os preços
}


function remover(id) {
    carrinho = carrinho.filter(item => item.id != id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderCarrinho();  // Re-renderizar o carrinho após a remoção
}

// Inicializar a renderização do carrinho
renderCarrinho();
