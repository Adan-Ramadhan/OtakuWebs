import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../service/api";
import SkeletonComp from "../components/SkeletonComp";
import type { genresType } from "../types/genresType";

const ListAnimeFiltredPage = () => {
  const params = useParams();

  const slug = params.slug;

  const [isGenres, setIsGenres] = useState<genresType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPage, setIsPage] = useState<number>(1);
const [isError, setIsError] = useState<string | null>(null)



  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await api.getAnimeGenre(slug);
        setIsGenres(data);
        console.log("ini respon datanya hehe:", data);
      } catch (error) {
        console.log("Fail to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-auto">
      <div className="w-full md:w-3/4 xl:w-1/2 md:mx-auto mt-10 p-3">
        <div className="w-full text-center mb-10">
          <h1 className="font-bold text-2xl">{slug?.toUpperCase()}</h1>
          <p className="text-slate-500 text-sm">
            Choose your fav anime with genre you like.
          </p>
        </div>
        {isLoading ? (
          <SkeletonComp count={4} />
        ) : (
          <div className="mb-5 flex flex-wrap  justify-center gap-5">
            {isGenres.map((genre, i) => (
              <Link key={i} to={`/detail/${genre.slug}`}>
                <div className="w-48 border border-slate-200 h-full hover:shadow-lg transition-all duration-500 ease-in-out rounded-lg overflow-hidden ">
                  <img
                    src={genre.gambar}
                    alt={genre.judul}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <p className="text-sm font-semibold p-3">{genre.judul}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6 gap-4">
          <button
            disabled={isPage === 1}
            onClick={() => setIsPage((prev) => prev - 1)}
            className="bg-orange-500 text-white  px-4 py-1 text-sm rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span>
            {isPage}...{isGenres.length}
          </span>

          <button
            onClick={() => setIsPage((prev) => prev + 1)}
            className="bg-orange-500 text-white  px-4 py-1 text-sm rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListAnimeFiltredPage;
