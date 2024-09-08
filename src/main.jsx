import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GetAnime from "./Context/GetAnime.jsx";

createRoot(document.getElementById("root")).render(
  <GetAnime>
    <StrictMode>
      <App />
    </StrictMode>
  </GetAnime>
);
