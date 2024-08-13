class Navbar extends HTMLElement {
    constructor() {
// Always call super first in constructor
      super();
    }

    connectedCallback() {
      const nav = document.createElement("nav");
      nav.innerHTML = `<nav class="navbar navbar-expand-lg -body-tertiary -navbar-light" style="background-color: #1e1a20;">
    <div class="container-fluid">
      <i class="bi bi-cart3"></i>
      <a class="navbar-brand" style="color: rgb(238, 223, 240); margin: 12px;" href="index.html"><h1 style="margin-left: 10px; margin-right: 10px;"><svg style="margin: 15px; height:30px; width:30px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-heart" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
      </svg>Trendy Threads</h1></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" style="color: rgb(238, 223, 240);" href="ofertas.html"><h4 style="margin-right: 10px; ">Ofertas</h4></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" style="color: rgb(238, 223, 240);" href="formulario.html"><h5><svg style=" height:30px; width:30px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
            </svg></h5></a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" style="color: rgb(238, 223, 240);"  href="carrinho.html" ><h5><svg style=" height:30px; width:30px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg></h5></a>
          </li>
        </ul>

        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: rgb(238, 223, 240);" style="font-size:30px">
                    Categorias
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="filtro_femininos.html">Femininos</a></li>
                    <li><a class="dropdown-item" href="#">Masculinos</a></li>
                    <li><a class="dropdown-item" href="#">Infantis</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Procure" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Procurar</button>
            </form>
        </nav>`;
      this.appendChild(nav);
    }

  }

customElements.define("nav-bar", Navbar);

class Card extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div style="display:flex;gap: 20px; margin: 50px;">
        <a href="produto.html" style="text-decoration: none;">
            <div class="card" style="width: 12rem; margin-bottom: 15px;">
            <img  style="height: 220px;" src="${this.getAttribute("src")}" class="card-img-top" alt="..." >
            <div class="card-body">
                <p class="card-text">${this.getAttribute("title")}<p style="font-weight: 700;">${this.getAttribute("price")}</p></p>
            </div>
            </div>
        </a>
        </div>
    `;
    this.appendChild(div);
}
}

customElements.define("card-item", Card);

async function loadProducts() {
    const response = await fetch("http://localhost:3000/produts");
    const products = await response.json();
    const container = document.getElementById("products-container");

    products.forEach((produts) => {
        const productCard = document.createElement("card-item");
        productCard.setAttribute("id", produts.id);
        productCard.setAttribute("title", produts.title);
        productCard.setAttribute("price", produts.price);
        productCard.setAttribute("src", produts.src);
        

        productCard.addEventListener("click", () => {
        // Redirecionar para a página de detalhes do produto
        window.location.href = `index.html?id=${products.id}`;
        });

        container.appendChild(productCard);
    });
}

loadProducts();