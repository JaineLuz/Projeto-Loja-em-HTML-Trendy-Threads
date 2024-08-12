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
            <img  style="height: 220px;" src="${src})}" class="card-img-top" alt="..." >
            <div class="card-body">
              <p class="card-text">${title}<p style="font-weight: 700;">${price}</p></p>
            </div>
          </div>
        </a>
      </div>
      `;
      this.appendChild(div);
    }
  }

  customElements.define("card-item", Card);
