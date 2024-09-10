import { createContext, useState } from "react"

export const EpisodeListContext = createContext()

const EpisodeList = ({children}) => {
  
  const [episodeList, setEpisodeList] = useState([])

  const fetchEpisodeList = async (slug) => {
    try{
      const response = await fetch(`/api/anime/${slug}/episodes`);
      if(!response.ok){
        throw new Error("internet is not oke")
      };
      const data = await response.json();
      console.log(data)
      setEpisodeList(data.data);
    }catch(error){
      console.error("response failed:", error)
    }
  }

  return <EpisodeListContext.Provider value={{fetchEpisodeList, episodeList}}>{children}</EpisodeListContext.Provider>
}

export default EpisodeList;