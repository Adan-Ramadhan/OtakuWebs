import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterRoot from "./routes/IndexRoutes";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterRoot />
  </StrictMode>
);
