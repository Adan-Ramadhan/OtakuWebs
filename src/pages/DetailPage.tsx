import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import type { detailAnimeType } from "../types/detailType";
import Loading from "../components/Loading";

// type detailAnimeType = {
//     slug:
// }

const DetailPage = () => {
  const params = useParams();

  const slug = params.slug;

  const [isDetailAnime, setIsDetailAnime] = useState<detailAnimeType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDetailAnime() {
      try {
        setIsError(null);
        setIsLoading(true);
        const data = await api.getDetailAnime(slug);
        setIsDetailAnime(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setIsError(error.message);
        }

        console.log("Fail to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDetailAnime();
  }, []);

  console.log("detail animeh", isDetailAnime);
  if (isLoading) return <Loading />;
  if (!isDetailAnime) return <p>No Anime Found</p>;
  if (isError) return <p className="text-red-500">⚠️ {isError}</p>;

  function Episode() {
    return (
      <div>
        <h1 className="font-semibold text-lg mb-3 md:text-xl">Episode</h1>
        {isDetailAnime?.episode.map((episod, i) => (
          <div key={i}>
            <ul>
              <li>
                <p>{episod?.judul}</p>
                <p>{episod?.tanggal}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full mt-10 p-3">
        <div className="w-full sm:w-3/4 lg:w-1/2 sm:mx-auto flex flex-col md:flex-row md:gap-x-5 mb-5 items-center">
          <div className="w-64 md:w-72 lg:w-80 relative rounded-xl border mb-3 border-slate-300 overflow-hidden">
            <img src={isDetailAnime?.gambar} className="w-full object-cover" />
          </div>

          <div className="w-full">
            <h3 className="font-semibold text-lg mb-3 md:text-xl">
              {isDetailAnime?.judul}
            </h3>
            <ul className="text-xs lg:text-sm text-slate-500 border rounded-sm ">
              <li className="border-b p-2">{isDetailAnime?.rilis}</li>
              <li className="border-b p-2">{isDetailAnime?.skor}</li>
              <li className="border-b p-2">{isDetailAnime?.durasi}</li>
              <li className="border-b p-2">{isDetailAnime?.genre}</li>
              <li className="border-b p-2">{isDetailAnime?.status}</li>
              <li className="border-b p-2">{isDetailAnime?.studio}</li>
              <li className="border-b p-2">{isDetailAnime?.produser}</li>
              <li className=" p-2">{isDetailAnime?.tipe}</li>
            </ul>
          </div>
        </div>

        {/* <div>{Episode()}</div> */}
      </div>
    </div>
  );
};

export default DetailPage;
