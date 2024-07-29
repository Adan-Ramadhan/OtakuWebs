import { useContext } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import { Link } from "react-router-dom";

const OngoingAnime = () => {
  const { onGoingAnime } = useContext(AnimeContext);
  console.log(onGoingAnime);
  return (
    <div className="w-full lg:w-3/4 mx-auto p-5 rounded-lg mb-4 border shadow">
      <div className="w-full mb-4">
        <h1 id="started" className="text-center font-bold text-2xl lg:text-3xl">
          On Going Anime
        </h1>
      </div>

      <div className="w-full mb-7  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 lg:gap-5 gap-2">
        {onGoingAnime.map((element, index) => {
          return (
            <div key={index} className="w-full shadow rounded-lg  flex flex-col overflow-hidden">
              <div>
                <img src={element.poster} className="w-full min-h-auto object-cover" />
              </div>

              <div className="p-2">
                <Link to={`/anime/${element.slug}`}>
                  <h1 className="font-semibold text-base hover:text-blue-300">{element.title}</h1>
                </Link>
                <div className="pt-3">
                  <p className="font-light text-xs md:text-sm">Release Day: {element.release_day}</p>
                  <p className="font-light text-xs md:text-sm">Release Date: {element.newest_release_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-center">
        <Link to={"/ongoing-anime/1"}>
          <p className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold rounded text-white px-4 py-2">See More</p>
        </Link>
      </div>
    </div>
  );
};

export default OngoingAnime;
