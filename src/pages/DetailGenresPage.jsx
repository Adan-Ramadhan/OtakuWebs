import { memo, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailGenres from "../component/DetailGenres";
import { AnimeContext } from "../context/AnimeProvider";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const DetailGenresPage = () => {
  const {slug} = useParams();
  const query = useQuery();
  const page = query.get("page") || 1;  
  const {fetchDetailGenre, detailGenre} = useContext(AnimeContext);  

  useEffect( ()  => {
    fetchDetailGenre(slug, page);
  }, [slug, page])

  

  return(
    <div className="w-full min-h-auto mt-14"><DetailGenres detailGenre={detailGenre} /></div>
  )
}


export default memo(DetailGenresPage);