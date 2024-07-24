import { useParams } from "react-router-dom";
import { useContext, useEffect, memo } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import DetailAnime from "../component/DetailAnime";
import RecommendAnime from "../component/RecommendAnime";

const DetailAnimePage = () => {
  const { slug } = useParams();
  const { detailAnime, fetchDetailAnime } = useContext(AnimeContext);

  useEffect(() => {
    if (slug && fetchDetailAnime) {
      fetchDetailAnime(slug);
    }
  }, [slug, fetchDetailAnime]);

  if (!detailAnime) {
    return <h1>Loading...</h1>;
  };
  

  return (
    <div className="w-full min-h-auto p-5">
      <div className="w-full xl:w-3/4 mx-auto border rounded-lg p-5">
        <DetailAnime detailAnime={detailAnime} />
        <RecommendAnime detailAnime={detailAnime} />
      </div>
    </div>
  );
};

export default memo(DetailAnimePage);
