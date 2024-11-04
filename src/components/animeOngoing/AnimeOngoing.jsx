import { Link } from "react-router-dom";

const AnimeOngoing = ({ getAnimeOngoing }) => {
  return (
    <div className="w-full min-h-auto">
      <div className="w-full xl:w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
        {getAnimeOngoing.map((anime, index) => (
          <Link key={index} to={`/anime/${anime.slug}`}>
          <div  className="w-72 md:w-full mx-auto overflow-hidden rounded-lg relative">
            <div className="w-full ">
              <img src={anime.gambar} alt={anime.judul} className="w-full object-cover" />
            </div>

            <div className="w-full flex px-2 py-5 items-center justify-between absolute top-0 bg-gradient-to-b from-black to-transparent">
              <p className="text-white font-semibold bg-purple-700 px-3 rounded-md">{anime.rate[1]}</p>
              <p className="text-white font-semibold bg-purple-700 px-3 rounded-md">{anime.eps[1]}</p>
            </div>

            <div className="w-full flex items-center justify-between absolute bottom-0 px-2 py-5  bg-gradient-to-t from-black  to-transparent ">
              <h1 className="text-white font-semibold">{anime.judul}</h1>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeOngoing;
