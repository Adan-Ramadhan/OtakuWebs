import { useContext } from "react";
import { GetAnimeContext } from "../Context/GetAnime";
import Loading from "./Loading";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LoadingContext } from "../Context/LoadingProvider";

const AnimeOngoing = () => {
  const { getAnimeOngoing } = useContext(GetAnimeContext);
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full lg:w-3/5 lg:mx-auto min-h-auto p-5">
      <h1 className="font-bold text-xl mb-5">Ongoing</h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
        {getAnimeOngoing.map((ongoing, index) => (
          <Link key={index} to={`/anime/${ongoing.slug}`}>
            <div  className="w-full rounded-lg relative overflow-hidden  hover:scale-105 transition-transform duration-300">
              <div className="w-full  ">
                <img src={ongoing.poster} className="w-full object-cover" alt={ongoing.title} />
              </div>

              <div className="w-full h-full bg-black/40  absolute bottom-0 ">
                <div className="w-full h-full p-2 flex flex-col justify-between ">
                  <div className="flex items-center justify-between">
                    <p className=" flex items-center gap-x-1 rounded-lg  bg-primary px-2 font-semibold text-sm text-white ">
                      <FaStar /> {ongoing.release_day}
                    </p>
                    <p className="   rounded-lg  bg-primary px-2 font-semibold text-sm text-white ">Eps {ongoing.current_episode.replace(/\D/g, "")}</p>
                  </div>
                  <h1 className="text-white font-semibold">{ongoing.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeOngoing;
