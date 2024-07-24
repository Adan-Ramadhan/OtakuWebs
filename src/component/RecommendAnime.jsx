import { Link } from "react-router-dom";

const RecommendAnime = ({ detailAnime }) => {
  if (!detailAnime.recommendations) {
    return <div>Loading...</div>;
  }


  return (
    <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-5 mb-5">
      {detailAnime.recommendations
        ? detailAnime.recommendations.map((recommend, index) => {
            return(
            <div key={index} className="w-60  shadow rounded-lg mx-auto md:mx-0 flex flex-col overflow-hidden">
              <img src={recommend.poster} className="w-90 h-96  rounded-lg overflow-hidden" />
              <div className="p-5">
                <Link to={`/anime/${recommend.slug}`}>
                <h1 className="font-semibold text-base hover:text-blue-300">{recommend.title}</h1>
                </Link>
              </div>
            </div>
            )
          })
        : ""}
    </div>
  );
};

export default RecommendAnime;