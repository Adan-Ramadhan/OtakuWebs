import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const AllOngoingAnime = ({ allOngoingAnime }) => {
  if (!allOngoingAnime || !allOngoingAnime.paginationData || !allOngoingAnime.ongoingAnimeData) {
    return <div>Loading...</div>;
  }

  console.log(allOngoingAnime.paginationData);
  const animeItems = allOngoingAnime.ongoingAnimeData;
  const paginationData = allOngoingAnime.paginationData;

  return (
    <div className="w-full lg:w-3/4 mx-auto p-5 rounded-lg my-10 border shadow">
      <div className="w-full mb-4">
        <h1 className="text-center font-bold text-2xl lg:text-3xl">On Going Anime</h1>
      </div>

      <div className="w-full mb-7  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 lg:gap-5 gap-2">
        {animeItems.map((anime, index) => {
          return (
            <div key={index} className="w-full shadow rounded-lg  flex flex-col overflow-hidden">
              <div>
                <img src={anime.poster} className="w-full min-h-auto object-cover" />
              </div>

              <div className="p-2">
                <Link to={`/anime/${anime.slug}`}>
                  <h1 className="font-semibold text-base hover:text-blue-300">{anime.title}</h1>
                </Link>
                <div className="pt-3">
                  <p className="font-light text-xs md:text-sm">Total Episode: {anime.current_episode}</p>
                  <p className="font-light text-xs md:text-sm">Release Day: {anime.release_day}</p>
                  <p className="font-light text-xs md:text-sm">Release Date: {anime.newest_release_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination paginationData={paginationData}/>
    </div>
  );
};

export default AllOngoingAnime;
