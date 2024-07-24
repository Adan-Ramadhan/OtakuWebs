import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const URL = "https://api.otakudesu.natee.my.id/api";
  const [onGoingAnime, setOnGoingAnime] = useState([]);
  const [completeAnime, setCompleteAnime] = useState([]);
  const [detailAnime, setDetailAnime] = useState([]);
  const [watchAnime, setWatchAnime] = useState([]);
  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch(`${URL}/home`);
      if (response.ok) {
        const data = await response.json();
        setOnGoingAnime(data.data.ongoing_anime);
        setCompleteAnime(data.data.complete_anime);
      }
    };
    fetchAnime();
  }, []);

  const fetchDetailAnime = useCallback(async (slug) => {
    const response = await fetch(`${URL}/anime/${slug}`);
    
    if (response.ok) {
      const data = await response.json();
      setDetailAnime(data.data);
    }
  }, []);
  
  
  const fetchWatchAnime = useCallback(async (slug, episodes) => {
    const response = await fetch(`${URL}/anime/${slug}/episodes/${episodes} `);
    
    if(response.ok){
      const data = await response.json()
      setWatchAnime(data.data);
      console.log(data.data);
    }

  }, [])


  return <AnimeContext.Provider value={{ onGoingAnime, completeAnime, detailAnime, fetchDetailAnime, fetchWatchAnime, watchAnime }}>{children}</AnimeContext.Provider>;
};

export default AnimeProvider;
