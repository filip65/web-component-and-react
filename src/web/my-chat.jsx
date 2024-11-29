import { createRoot } from "react-dom/client";
import Chat from "../components/Chat";

class WebChat extends HTMLElement {
  static get observedAttributes() {
    return ["token"];
  }

  constructor() {
    super();
    this._root = null;
    this._component = null;
    this.attachShadow({ mode: "open" });
  }

  get token() {
    return this.getAttribute("token");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name) {
    if (name === "token") {
      this.update();
    }
  }

  render() {
    const mountPoint = document.createElement("div");
    this.shadowRoot.appendChild(mountPoint);
    this._root = createRoot(mountPoint);
    this._component = <Chat token={this.token} />;
    this._root.render(this._component);
  }

  update() {
    if (this._root && this._component) {
      this._component = <Chat token={this.token} />;
      this._root.render(this._component);
    }
  }
}

customElements.define("my-chat", WebChat);
