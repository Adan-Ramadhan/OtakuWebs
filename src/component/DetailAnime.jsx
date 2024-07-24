import Genres from "../component/Genres";
import EpisodeList from "../component/EpisodeList";

const DetailAnime = ({ detailAnime }) => {
  return (
    <>
      {detailAnime ? (
          <>
            <div className="mb-5">
              <h1 className="font-bold text-2xl">{detailAnime.title}</h1>
            </div>

            <div className="flex flex-col md:flex-row mb-10 gap-y-5">
              <div className="basis-1/2 xl:basis-1/4 mx-auto md:mx-0">
                <img src={detailAnime.poster} className="w-90 h-96 rounded-lg overflow-hidden " />
              </div>

              <div className="basis-1/2 xl:basis-3/4 ">
                <p className="text-base font-medium border-b pb-2">{detailAnime.synopsis ? detailAnime.synopsis : "Sinopsis belum ada."}</p>

                <p className="font-semibold text-base mb-1">
                  Rating: <span className="font-semibold bg-slate-100 px-2.5 py-0.5  rounded-full text-sm">{detailAnime.rating ? detailAnime.rating : "none"}</span>
                </p>

                <p className="font-semibold text-base mb-1">
                  Type: <span className="font-semibold bg-slate-100 px-2.5 py-0.5  rounded-full text-sm">{detailAnime.type ? detailAnime.type : "none"}</span>
                </p>

                <p className="font-semibold text-base mb-1">
                  Status: <span className="font-semibold bg-slate-100 px-2.5 py-0.5  rounded-full text-sm">{detailAnime.status ? detailAnime.status : "none"}</span>
                </p>
                <Genres detailAnime={detailAnime} />
              </div>
            </div>
              <EpisodeList detailAnime={detailAnime} />
          </>

      ) : (
        ""
      )}
    </>
  );
};

export default DetailAnime;
