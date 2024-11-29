import { createRoot } from "react-dom/client";
import Heading from "../components/Heading";
import { StrictMode } from "react";

export function initApp(container, text) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Heading text={text} />
    </StrictMode>
  );
}
