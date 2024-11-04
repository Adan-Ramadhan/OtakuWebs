import { Link} from "react-router-dom";
import Loading from "../Loading";

const DetailAnime = ({ detailAnime }) => {
  
  if (!detailAnime.episodes) {
    return <Loading />;
  };


  return (
    <div className="w-full min-h-auto">
      <div className="w-full lg:w-2/3 mx-auto my-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3  gap-y-10 px-10 mb-10">
          <div className="w-72  mx-auto rounded-lg bg-red-400 overflow-hidden">
            <img src={detailAnime.gambar} alt={detailAnime.judul} className="w-full h-full object-cover" />
          </div>

          <div className="w-full border rounded-lg col-span-2">
            <ul>
              <li className="border-b py-2 px-3">{detailAnime.nama}</li>
              <li className="border-b py-2 px-3">{detailAnime.namaJapan}</li>
              <li className="border-b py-2 px-3">{detailAnime.skor}</li>
              <li className="border-b py-2 px-3">{detailAnime.produser}</li>
              <li className="border-b py-2 px-3">{detailAnime.tipe}</li>
              <li className="border-b py-2 px-3">{detailAnime.status}</li>
              <li className="border-b py-2 px-3">{detailAnime.totalEpisode}</li>
              <li className="border-b py-2 px-3">{detailAnime.durasi}</li>
              <li className="border-b py-2 px-3">{detailAnime.rilis}</li>
              <li className="border-b py-2 px-3">{detailAnime.studio}</li>
              <li className="border-b py-2 px-3">{detailAnime.genre}</li>
            </ul>
          </div>
        </div>

        <div className="w-full px-10">
          <ul className=" border rounded-lg ">
            <li className="bg-purple-700 text-center rounded-t-lg font-semibold text-white py-2">Semua Episode</li>
            {detailAnime.episodes.map((episode, index) => {
              if (episode.length < 1) {
                return <li className="border-b py-2 px-3">Episode tidak tersedia.</li>;
              }

              return (
                <Link key={index} to={`/episode/${episode.slug}`}>
                  <li className="border-b py-2 px-3 flex border bg-white hover:bg-slate-100 duration-300 ease-in-out transition-all justify-between items-center hover:scale-105">
                    Episode {episode.judul.match(/Episode\s+(\d+)/i)?.[1]} <span>{episode.tanggal}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
