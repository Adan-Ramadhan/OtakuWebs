import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterRoot from "./routes/IndexRoutes";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterRoot />
    <Footer />
    <Analytics />
  </StrictMode>
);
