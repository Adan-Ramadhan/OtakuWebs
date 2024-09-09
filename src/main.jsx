import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GetAnime from "./Context/GetAnime.jsx";
import DetailAnime from "./Context/DetailAnime.jsx";
import LoadingPovider from "./Context/LoadingProvider.jsx";
createRoot(document.getElementById("root")).render(
  <LoadingPovider>
    <DetailAnime>
      <GetAnime>
        <StrictMode>
          <App />
        </StrictMode>
      </GetAnime>
    </DetailAnime>
  </LoadingPovider>
);
