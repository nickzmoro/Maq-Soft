import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/routes.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
