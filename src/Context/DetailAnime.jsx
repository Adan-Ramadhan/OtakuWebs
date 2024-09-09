import { createContext, useContext, useState } from "react";
import { GetAnimeContext } from "./GetAnime";
import { LoadingContext } from "./LoadingProvider";

export const DetailAnimeContext = createContext();

const DetailAnime = ({ children }) => {
  const [detailAnime, setDetailAnime] = useState([]);
  const {setLoading} = useContext(LoadingContext)

  const FetchDetailAnime = async (slug) => {
    const response = await fetch(`/api/anime/${slug}`);
    if (!response.ok) {
      throw new Error("internet is not oke");
    }

    const data = await response.json();
    setLoading(false);
    console.log(data.data);
    setDetailAnime(data.data);
  };

  return <DetailAnimeContext.Provider value={{ detailAnime, FetchDetailAnime }}>{children}</DetailAnimeContext.Provider>;
};

export default DetailAnime;
