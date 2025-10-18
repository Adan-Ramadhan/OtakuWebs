import { useEffect, useState } from "react";
import api from "../service/api";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

type genresType = {
  judul: string;
  slug: string;
};

const GenrePage = () => {
  const [isGenres, setIsGenres] = useState<genresType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchGenre() {
      setIsLoading(true);
      try {
        const data = await api.getGenre();

        setIsGenres(data);
      } catch (error) {
        console.error("Error fetching genre:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenre();
}, []);

console.log("genre", isGenres);
  return (
    <div className="w-full min-h-auto">
      <div className="w-full md:w-3/4 mx-auto lg:w-1/2 p-3">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex  flex-wrap gap-5">
            {isGenres.map((genre, i) => (
              <Link to={`/anime/${genre.slug}`} key={i} className="cursor-pointer hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-500 border border-slate-400 p-2 rounded">
                <p>{genre.judul}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenrePage;
