import { useContext } from "react";
import { AnimeContext } from "../context/AnimeProvider";

const DetailEpisode = ({ watchAnime }) => {
  const { detailAnime } = useContext(AnimeContext);

  if (!watchAnime && !detailAnime.episode_lists) {
    return <div>Loading...</div>;
  }


  return (
    <>
      {watchAnime ? (
        <div className="w-full min-h-auto">
          <div className="mb-5 ">
            <h1 className="font-bold text-2xl">{watchAnime.episode}</h1>
          </div>

          <div className="mb-5">
            <iframe src={watchAnime.stream_url} className="w-full h-60 md:h-96 xl:h-[700px] rounded-lg"></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailEpisode;
