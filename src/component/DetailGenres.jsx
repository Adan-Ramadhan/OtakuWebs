import { Link } from "react-router-dom";

const DetailGenres = ({ detailGenre, slug }) => {
  if (!detailGenre) {
    return <div>Loading...</div>;
  }

  const data = detailGenre.anime;
  console.log(detailGenre.anime);
  console.log(slug);

  return (
    <>
      {data ? (
        <div className="w-full xl:w-3/4 mx-auto rounded-lg min-h-auto border p-5">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">Anime {slug}</h1>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 p-5 gap-3">
          {data.map((anime, index) => {
            return (
              <div key={index} className="rounded-lg border overflow-hidden">
                <img src={anime.poster} alt={anime.title} className="w-full" />
              
                <div className="px-2 py-3">
                  <Link to={`/anime/${anime.slug}`}>
                  <h1 className="font-semibold text-base hover:text-blue-300 mb-3">{anime.title}</h1>
                  </Link>
                  <p className="font-light text-xs md:text-sm pb-1 ">Total Episode {anime.episode_count}</p>
                  <p className="font-light text-xs md:text-sm pb-1">Rating: {anime.rating ? anime.rating : "-"}</p>
                  <p className="font-light text-xs md:text-sm pb-1">Studio: {anime.studio}</p>
                  <p className="font-light text-xs md:text-sm pb-1">Season: {anime.season}</p>
                
                  <div className="flex flex-wrap ">
                  <p className="font-light text-xs md:text-sm pr-1">Genres: </p>

                    {anime.genres.map((genre, index) => {
                      return(
                        <div key={index}>
                          <p className="font-semibold bg-slate-100 px-2.5 py-0.5  rounded-full text-xs">{genre.name}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailGenres;
