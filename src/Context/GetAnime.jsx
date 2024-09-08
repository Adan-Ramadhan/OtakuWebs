import { createContext, useState } from "react";
import { useEffect } from "react";

export const GetAnimeContext = createContext();

const GetAnime = ({ children }) => {

const [getAnimeOngoing, setGetAnimeOngoin] = useState([]);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await fetch("/api/home");
        if (!response.ok) {
          throw new Error("internet is not oke", response.statusText, response.status);
        }

        const data = await response.json();
        console.log(data.data);
        setGetAnimeOngoin(data.data.ongoing_anime)
      } catch (error) {
        console.error("error get anime", error);
      }
    };
    getAnime();
  }, []);

  return <GetAnimeContext.Provider value={{getAnimeOngoing}} >{children}</GetAnimeContext.Provider>;
};

export default GetAnime;
