import { Link } from "react-router-dom";

const EpisodeList = ({ detailAnime }) => {
  if (!detailAnime.episode_lists) {
    return <div>Loading..</div>;
  }

  if(!detailAnime.slug && !detailAnime.episode_lists.length){
    return <div>Loading..</div>;
  }

  return (
    <>
      {detailAnime ? (
        <div className="flex flex-col gap-3 mb-10">
          {detailAnime && detailAnime.episode_lists.map((episode, index) => {
            return (
              <Link key={index} to={`/anime/${detailAnime.slug}/episodes/${index + 1}`}>
                <div key={index} className="border rounded-lg p-2 bg-white hover:bg-slate-100">
                  <span className="font-semibold text-base">{episode.episode}</span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EpisodeList;
