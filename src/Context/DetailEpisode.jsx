import { createContext, useState } from "react";

export const DetailEpisodeContext = createContext();

const DetailEpisode = ({ children }) => {
  const [detailEpisode, setDetailEpisode] = useState([]);

  const fetchDetailEpisode = async (slug, episode) => {
    try{

      const response = await fetch(`/api/anime/${slug}/episodes/${episode}`)
      if (!response.ok) {
      throw new Error("internet is not oke");
    }
    
    const data = await response.json();
    console.log(data)
  }catch(error){
    console.error("Failed to fetch episode details:", error);
  }
  };

  return <DetailEpisodeContext.Provider value={{fetchDetailEpisode, detailEpisode}}>{children}</DetailEpisodeContext.Provider>
};

export default DetailEpisode;
