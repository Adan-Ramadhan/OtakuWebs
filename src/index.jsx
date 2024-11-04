import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AnimeProvider from "./context/AnimeProvider";
import Main from "./Main";
import DetailAnimeProvider from "./context/DetailAnimeProvider";
import EpisodeProvider from "./context/EpisodeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EpisodeProvider>
      <DetailAnimeProvider>
        <AnimeProvider>
          <Main />
        </AnimeProvider>
      </DetailAnimeProvider>
    </EpisodeProvider>
  </StrictMode>
);
