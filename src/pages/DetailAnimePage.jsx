import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DetailAnimeContext } from "../context/DetailAnimeProvider";
import DetailAnime from "../components/detailAnime/DetailAnime";

const DetailAnimePage = () => {

const location = useLocation();
const {fetchData, detailAnime} = useContext(DetailAnimeContext);

useEffect(() => {
  fetchData(location.pathname);
}, []);

console.log(location);
  return (
    <div className="w-full min-h-auto">
      <div className="w-full">
        <DetailAnime detailAnime={detailAnime} /> 
      </div>
    </div>
  )
}

export default DetailAnimePage;