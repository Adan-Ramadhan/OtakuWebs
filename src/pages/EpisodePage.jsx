import { useContext, useEffect } from "react";
import { EpisodeContext } from "../context/EpisodeProvider";
import { useLocation } from "react-router-dom";
import Episode from "../components/episode/Episode";
import { DetailAnimeContext } from "../context/DetailAnimeProvider";
import Loading from "../components/Loading";
import DetailAnime from "../components/detailAnime/DetailAnime";

const EpisodePage = () => {
  const { fetchDataEpisode, episode } = useContext(EpisodeContext);
  // const {fetchData, detailAnime} = useContext(DetailAnimeContext);
  
  const location = useLocation();


if(!episode){
  return <Loading/>
}

useEffect(() => {
    // fetchData(location.pathname);
    fetchDataEpisode(location.pathname);
  }, []);

  return(
    <div className="w-full min-h-auto">
      <div className="w-full">
        <Episode episode={episode} />
        {/* <DetailAnime detailAnime={detailAnime} /> */}
      </div>
    </div>
  ) 
  
};

export default EpisodePage;
