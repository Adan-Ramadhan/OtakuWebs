import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [getAnimeOngoing, setGetAnimeOngoing] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/anime?type=ongoing&page=${page}`);
      if (!response.ok) {
        throw new Error("Response failed", response.status);
      }
      const data = await response.json();

      if(page >= data.length){
        setHasMore(false);
      }

      setGetAnimeOngoing((prevData) => [...prevData, ...data]);
    } catch (err) {
      console.log("Fail get data from API", err);
    } finally {
      setIsLoading(false);
    }
  };

  return <AnimeContext.Provider value={{ getAnimeOngoing, setPage, page, fetchData, isLoading, hasMore }}>{children}</AnimeContext.Provider>;
};

export default AnimeProvider;
