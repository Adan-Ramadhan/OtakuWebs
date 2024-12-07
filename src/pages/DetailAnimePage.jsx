import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DetailAnimeContext } from "../context/DetailAnimeProvider";
import DetailAnime from "../components/detailAnime/DetailAnime";
import Loading from "../components/Loading";

const DetailAnimePage = () => {
  const location = useLocation();
  const { fetchData, detailAnime, isLoading } = useContext(DetailAnimeContext);

  useEffect(() => {
    fetchData(location.pathname);
  }, []);

  return (
    <div className="w-full min-h-auto">
      <div className="w-full">{detailAnime ? <DetailAnime detailAnime={detailAnime} isLoading={isLoading} /> : <p className="text-center py-5">Data Gagal dimuat, mohon refresh browser</p>}</div>
    </div>
  );
};

export default DetailAnimePage;
