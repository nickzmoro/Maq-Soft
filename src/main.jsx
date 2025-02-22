import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/routes.jsx";
import { StrictMode } from "react";
import { GlobalStyle } from "./globalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
