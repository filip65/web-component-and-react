import { createRoot } from "react-dom/client";
import Heading from "../components/Heading"; // Make sure the path is correct

class MyHeadingWrapper extends HTMLElement {
  static get observedAttributes() {
    return ["text"];
  }

  constructor() {
    super();
    this._root = null;
    this._component = null;
    this.attachShadow({ mode: "open" });
  }

  get text() {
    return this.getAttribute("text") || "0";
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name) {
    if (name === "text") {
      console.log("text changed: ", this.text);
      this.update();
    }
  }

  render() {
    const mountPoint = document.createElement("div");

    this.shadowRoot.appendChild(mountPoint);

    this._root = createRoot(mountPoint);
    this._component = <Heading text={this.text} />;
    this._root.render(this._component);
  }

  update() {
    if (this._root && this._component) {
      console.log("updating");
      this._component = <Heading text={this.text} />;
      this._root.render(this._component);
    }
  }
}

customElements.define("my-heading", MyHeadingWrapper);
