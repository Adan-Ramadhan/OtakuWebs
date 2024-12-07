import { createContext, useState } from "react";
import Loading from "../components/Loading";
export const DetailAnimeContext = createContext();

const DetailAnimeProvider = ({ children }) => {
  const [detailAnime, setDetailAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (slug) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/${slug}`);
      const data = await response.json();

      console.log(data);
      setDetailAnime(data);
    } catch (err) {
      console.log("Fail get data detail anime", err);
    } finally {
      setIsLoading(false);
    }
  };

  return <DetailAnimeContext.Provider value={{ fetchData, detailAnime, isLoading }}>{children}</DetailAnimeContext.Provider>;
};

export default DetailAnimeProvider;
