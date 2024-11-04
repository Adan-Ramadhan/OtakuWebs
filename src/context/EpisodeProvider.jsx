import { createContext, useState } from "react"

export const EpisodeContext = createContext(); 

const EpisodeProvider = ({children}) => {
  
const [episode, setEpisode] = useState([]);

  const fetchDataEpisode = async (slug) => {

    

    try{
      const response = await fetch(`/api/${slug}`);
      const data = await response.json();
      if(!response.ok){
        throw new Error("internet is not oke" )
      };
      console.log(data);
      setEpisode(data);
    }catch(err){
      console.log("gagal fetch data episode", err)
    }
  }
  
  
  return(
    <EpisodeContext.Provider value={{fetchDataEpisode, episode}}>{children}</EpisodeContext.Provider>
  )
}

export default EpisodeProvider;