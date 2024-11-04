import { useContext, useEffect } from "react";
import { EpisodeContext } from "../context/EpisodeProvider";
import { useLocation } from "react-router-dom";
import Episode from "../components/episode/Episode";

const EpisodePage = () => {
  const { fetchDataEpisode, episode } = useContext(EpisodeContext);
  const location = useLocation();
  
  useEffect(() => {
    fetchDataEpisode(location.pathname);
  }, []);

  return(
    <div className="w-full min-h-auto">
      <div className="w-full">
        <Episode episode={episode} />
      </div>
    </div>
  ) 
  
};

export default EpisodePage;
