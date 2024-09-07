import { createContext } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

 
export const GetAnimeContext = createContext();

const GetAnime = ({children}) => {
  

  return <GetAnimeContext.Provider>{children}</GetAnimeContext.Provider>

}

export default GetAnime;