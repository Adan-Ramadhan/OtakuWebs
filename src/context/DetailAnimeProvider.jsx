import { createContext, useState } from "react";
import Loading from "../components/Loading";
export const DetailAnimeContext = createContext();

const DetailAnimeProvider = ({ children }) => {
  const [detailAnime, setDetailAnime] = useState([]);

  const fetchData = async (slug) => {
    try {
      console.log(slug);
      const response = await fetch(`/api/${slug}`);
      const data = await response.json();

      if (data.length < 1) {
        return <Loading />;
      }

      console.log(data);
      setDetailAnime(data);
    } catch (err) {
      console.log("Fail get data detail anime", err);
    }
  };

  return <DetailAnimeContext.Provider value={{ fetchData, detailAnime }}>{children}</DetailAnimeContext.Provider>;
};

export default DetailAnimeProvider;
