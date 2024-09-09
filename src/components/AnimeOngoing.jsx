import { useContext } from "react";
import { GetAnimeContext } from "../Context/GetAnime";
import Loading from "./Loading";

const AnimeOngoing = () => {
  const { getAnimeOngoing, loading } = useContext(GetAnimeContext);


  if(loading){
    return <Loading/>
  }


  return (
    <div className="w-full lg:w-3/5 lg:mx-auto min-h-auto p-5">
        <h1 className="font-bold text-xl mb-5">Ongoing</h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
        {getAnimeOngoing.map((ongoing, index) => (
          <div key={index} className="w-full rounded-lg relative overflow-hidden  hover:scale-105 transition-transform duration-300">
            <div className="w-full  ">
              <img src={ongoing.poster} className="w-full object-cover" />
            </div>

            <div className="w-full h-full bg-black/40  absolute bottom-0 ">
              <div className="w-full h-full p-3 flex flex-col justify-between ">
                <p className="w-16 flex justify-center px-2 items-center  rounded-lg  bg-primary text-white ">Eps {ongoing.episode_count}</p>
                <h1 className="text-white font-semibold">{ongoing.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeOngoing;
