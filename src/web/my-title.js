class MyTitle extends HTMLElement {
  static get observedAttributes() {
    return ["token"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`${name} updated to ${newValue}`);

    if (name === "token") {
      this._token = newValue;
      this.updateTitle();
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <h1>title</h1>
    `;

    console.log("Hello from Title");
  }

  updateTitle() {
    this.shadowRoot.querySelector("h1").textContent = `Token: ${this._token}`;
  }
}

customElements.define("my-title", MyTitle);
