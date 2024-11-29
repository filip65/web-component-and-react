class Counter extends HTMLElement {
  constructor() {
    super();

    this._count = 0;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <div>
        Current count: <span class="counter-number">0</span>
        <button class="counter-increase">Increase!</button>
      </div>
    `;

    const countNode = this.shadowRoot.querySelector(".counter-number");

    this.shadowRoot
      .querySelector(".counter-increase")
      .addEventListener("click", this.increaseCount.bind(this));
  }

  increaseCount() {
    this._count++;
    this.shadowRoot.querySelector(".counter-number").innerText = this._count;
  }
}

customElements.define("my-counter", Counter);
