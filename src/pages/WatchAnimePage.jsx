import { memo, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimeContext } from "../context/AnimeProvider";
import DetailEpisode from "../component/DetailEpisode";
import DownloadAnime from "../component/DownloadAnime";

const WatchAnimePage = () => {
  const { fetchWatchAnime, watchAnime } = useContext(AnimeContext);
  const { slug, episodes } = useParams();

  useEffect(() => {
    if ((slug, episodes)) {
      fetchWatchAnime(slug, episodes);
    }
  }, [slug, fetchWatchAnime]);

  if (!watchAnime) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {watchAnime ? (
        <div className="w-full min-h-auto p-5">
          <div className="w-full xl:w-3/4 mx-auto border overflow-hidden rounded-lg p-5">
            <DetailEpisode watchAnime={watchAnime} />
            <DownloadAnime watchAnime={watchAnime.download_urls}/>
          </div>
        </div>
      ) : (
        "Not Found"
      )}
    </>
  );
};

export default memo(WatchAnimePage);
