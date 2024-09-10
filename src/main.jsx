import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GetAnime from "./Context/GetAnime.jsx";
import DetailAnime from "./Context/DetailAnime.jsx";
import LoadingPovider from "./Context/LoadingProvider.jsx";
import DetailEpisode from "./Context/DetailEpisode.jsx";
import EpisodeList from "./Context/EpisodeList.jsx";
createRoot(document.getElementById("root")).render(
  <EpisodeList>
    <DetailEpisode>
      <LoadingPovider>
        <DetailAnime>
          <GetAnime>
            <StrictMode>
              <App />
            </StrictMode>
          </GetAnime>
        </DetailAnime>
      </LoadingPovider>
    </DetailEpisode>
  </EpisodeList>
);
