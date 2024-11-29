import { createRoot } from "react-dom/client";
import Heading from "../components/Heading";

class MyHeadingWrapper extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const mountPoint = document.createElement("div");

    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(<Heading />);
  }
}

customElements.define("test-web", MyHeadingWrapper);
