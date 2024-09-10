import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailAnimeContext } from "../Context/DetailAnime";
import Loading from "../components/Loading";
import { GetAnimeContext } from "../Context/GetAnime";
import { LoadingContext } from "../Context/LoadingProvider";
import { DetailEpisodeContext } from "../Context/DetailEpisode";
import { EpisodeListContext } from "../Context/EpisodeList";

const DetailAnimePage = () => {
  const { slug } = useParams();

  const { FetchDetailAnime, detailAnime } = useContext(DetailAnimeContext);
  const { fetchEpisodeList, episodeList } = useContext(EpisodeListContext);

  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    FetchDetailAnime(slug).finally(() => {
      setLoading(false);
    });
    fetchEpisodeList(slug);
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-auto">
      <div className="w-full lg:w-3/5 lg:mx-auto">
        <div className="flex flex-col p-5 md:flex-row items-center md:items-start gap-5 justify-center">
          <div className="w-64 md:w-[400px] rounded-lg overflow-hidden mb-5">
            <img src={detailAnime.poster} className="w-full object-cover" />
          </div>

          <div className="w-full ">
            <ul className=" border rounded-lg text-base">
              <li className="border-b p-2">Judul: {detailAnime.title}</li>
              <li className="border-b p-2">Japanese: {detailAnime.japanese_title}</li>
              <li className="border-b p-2">Skor: {detailAnime.rating}</li>
              <li className="border-b p-2">Produser: {detailAnime.produser}</li>
              <li className="border-b p-2">Type: {detailAnime.type}</li>
              <li className="border-b p-2">Status: {detailAnime.status}</li>
              <li className="border-b p-2">Total Episode: {detailAnime.episode_count}</li>
              <li className="border-b p-2">Durasi: {detailAnime.duration}</li>
              <li className="border-b p-2">Tanggal Rilis: {detailAnime.release_date}</li>
              <li className="border-b p-2">Studio: {detailAnime.studio}</li>
              <li className="border-b p-2">
                Genres:
                {detailAnime.genres?.map((genre, index) => (
                  <span key={index} className="border-b p-2">
                    {genre.name},
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full p-5">
          <ul className="rounded-lg text-sm ">
            <li className="border-b p-2 text-center rounded-t-lg text-white text-lg font-semibold bg-primary">Semua Episode</li>
            {episodeList.map((episode, index) => (
              <Link key={index} to={`/anime/${slug}/episodes/${episode.episode.replace(/\D/g, "")}`}>
                <li className="border p-2 hover:scale-105 transition-all duration-300 bg-white hover:bg-gray-100">Episode {episode.episode.replace(/\D/g, "")}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailAnimePage;
