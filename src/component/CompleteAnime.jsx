import { useContext } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import { Link } from "react-router-dom";

const CompleteAnime = () => {
  const { completeAnime } = useContext(AnimeContext);

  return (
    <div className="w-full lg:w-3/4 mx-auto p-5 rounded-lg mb-4 border shadow">
      <div className="w-full mb-4">
        <h1 className="text-center font-bold text-2xl lg:text-3xl">Complete Anime</h1>
      </div>

      <div className="w-full    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 lg:gap-5 gap-2">
        {completeAnime.map((element, index) => {
          return (
            <div key={index} className="w-full shadow rounded-lg  flex flex-col overflow-hidden">
              <div>
                <img src={element.poster} className="w-full min-h-auto object-cover" />
              </div>

              <div className="p-2">
                <Link to={`/anime/${element.slug}`}>
                  <h1 className="font-semibold text-base hover:text-blue-300">{element.title}</h1>
                </Link>

                <div className="pt-3  flex flex-col gap-y-1">
                  <p className="font-light text-xs md:text-sm ">Total Episode {element.episode_count}</p>
                  <p className="font-light text-xs md:text-sm">Rating: {element.rating}</p>
                  <p className="font-light text-xs md:text-sm">Last Realese Date: {element.last_release_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompleteAnime;
