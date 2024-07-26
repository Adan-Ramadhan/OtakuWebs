import { Link } from "react-router-dom";

const Genres = ({ detailAnime }) => {
  if (!detailAnime.genres) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {detailAnime ? (
        <div className="flex flex-row flex-wrap gap-2 items-center">
          <p className="font-semibold text-base">Genres: </p>
          {detailAnime.genres.map((genre, index) => {
            return (
              <div key={index}>
                <p className="font-semibold bg-slate-100 px-2.5 py-0.5  rounded-full text-sm"><Link to={`/genres/${genre.name}?page=1`} >{genre.name}</Link></p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Genres;
