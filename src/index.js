import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

import App from "./App";
import { MailProvider } from "./context/MailContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <MailProvider>
        <App />
      </MailProvider>
    </Router>
  </StrictMode>
);
