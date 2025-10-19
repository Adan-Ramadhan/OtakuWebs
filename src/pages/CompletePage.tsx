import { useEffect, useState } from "react";
import api from "../service/api";
import { Link } from "react-router-dom";
import SkeletonComp from "../components/SkeletonComp";

type completeType = {
  judul: string;
  gambar: string;
  slug: string;
};

const CompletePage = () => {
  const [isComplete, setIsComplete] = useState<completeType[]>([]);
  const [isPage, setIsPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchAnime() {
      setLoading(true);
      try {
        const data = await api.getAllAnime("complete", isPage);

        setIsComplete(data);
      } catch (error) {
        console.error("Error fetching complete:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAnime();
  }, [isPage]);

  return (
    <div className="w-full min-h-auto">
      <div className="w-full md:w-3/4 mt-10 xl:w-1/2 md:mx-auto p-3">
        <div className="w-full text-center mb-10">
          <h1 className="font-bold text-2xl">Complete Anime</h1>
          <p className="text-slate-500 text-sm">
            You can re-watch your fav anime in here, we have many to your view.
          </p>
        </div>
        {loading ? (
          <SkeletonComp count={4} />
        ) : (
          <div className="mb-5 flex flex-wrap  justify-center gap-5">
            {isComplete.map((complete, i) => (
              <Link key={i} to={`/detail/${complete.slug}`}>
                <div className="w-48 border border-slate-200 h-full hover:shadow-lg transition-all duration-500 ease-in-out rounded-lg overflow-hidden ">
                  <img
                    src={complete.gambar}
                    alt={complete.judul}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <p className="text-sm font-semibold p-3">{complete.judul}</p>
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
            {isPage}...{isComplete.length}
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

export default CompletePage;
