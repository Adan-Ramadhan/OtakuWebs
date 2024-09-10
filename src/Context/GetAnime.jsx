import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { LoadingContext } from "./LoadingProvider";

export const GetAnimeContext = createContext();

const GetAnime = ({ children }) => {

const [getAnimeOngoing, setGetAnimeOngoin] = useState([]);
const {setLoading} = useContext(LoadingContext);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await fetch("/api/home");
        if (!response.ok) {
          throw new Error("internet is not oke", response.statusText, response.status);
        }

        const data = await response.json();
        setLoading(false)
        setGetAnimeOngoin(data.data.ongoing_anime)
      } catch (error) {
        setLoading(false)
        console.error("error get anime", error);
      }
    };
    getAnime();
  }, []);

  return <GetAnimeContext.Provider value={{getAnimeOngoing}} >{children}</GetAnimeContext.Provider>;
};

export default GetAnime;
