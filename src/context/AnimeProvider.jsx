import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [getAnimeOngoing, setGetAnimeOngoing] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNum) => {
    try {
      const response = await fetch(`/api/anime?type=ongoing&page=${pageNum}`);
      if (!response.ok) {
        throw new Error("Response tidak okay bro");
      }

      const data = await response.json();
      console.log(data);
      setGetAnimeOngoing((prevData) => [...prevData, ...data]);
    } catch (err) {
      console.log("Fail get data from API", err);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  return <AnimeContext.Provider value={{ getAnimeOngoing, setPage }}>{children}</AnimeContext.Provider>;
};

export default AnimeProvider;
