import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const URL = "https://api.otakudesu.natee.my.id/api";
  const [onGoingAnime, setOnGoingAnime] = useState([]);
  const [completeAnime, setCompleteAnime] = useState([]);
  const [detailAnime, setDetailAnime] = useState([]);
  const [watchAnime, setWatchAnime] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [detailGenre, setDetailGenre] = useState([]);


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

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(`${URL}/genre `);

      if (response.ok) {
        const data = await response.json();
        setGenreList(data.data);
      }
    };
    fetchGenres();
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

    if (response.ok) {
      const data = await response.json();
      setWatchAnime(data.data);
      console.log(data.data);
    }
  }, []);

  const fetchDetailGenre = useCallback(async (slug, page) => {
    const response = await fetch(`${URL}/genre/${slug}?page=${page}  `);

    if (response.ok) {
      const data = await response.json();
      setDetailGenre(data.data);
      console.log(data.data);
    }
  }, []);


  return <AnimeContext.Provider value={{ onGoingAnime, completeAnime, detailAnime, fetchDetailAnime, fetchWatchAnime, watchAnime, genreList, fetchDetailGenre, detailGenre }}>{children}</AnimeContext.Provider>;
};

export default AnimeProvider;
