const url = new URL(window.location.href);

const params = new URLSearchParams(url.search);

const id = params.get('id');

async function loadProduct() {
    const response = await fetch(`http://localhost:3000/produts/${id}`);
    const product = await response.json();
    const container = document.getElementById("produto-container");

    container.innerHTML = `
    <div class="container">
              <div class="product">
                  <img style="height: 250px; width: 500px; margin: 10px;" src="${product.src}" alt="Produto">
                  <div class="product-info" style="margin: 20px;">
                  <h1>${product.title}</h1>
                      <div style="margin: 50px;">
                          <h4 style="font-weight: 700;">Descrição do Produto: </h4>
                          <h5>${product.description}</h5>
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
                      <p style="margin: 20px; font-weight: 700; font-size: larger;">${product.price}</p>
                      <button class="btn btn-success" style="background-color: green; margin: 20px;">Adicionar ao Carrinho</button>
                      <a href="carrinho.html"><button class="btn btn-success" style="background-color: green; margin: 20px;">Comprar Agora</button></a>
                  </div>
              </div>
          </div>
    
    `

    return product
}

loadProduct()