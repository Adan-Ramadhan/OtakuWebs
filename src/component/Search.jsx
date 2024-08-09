import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../context/AnimeProvider";

const Search = () => {
  const { fetchDetailAnime } = useContext(AnimeContext);
  const [detailAnime, setDetailAnime] = useState(null);

  console.log(detailAnime);
  const handleInputChange = (e) => {
    setDetailAnime(e.target.value);
  };

  useEffect(() => {
    if (!detailAnime) {
       <div>Not Found</div>;
    } else {
      if (detailAnime.length > 2) {
        fetchDetailAnime(detailAnime);
      } else {
       setDetailAnime([])
      }
    }
  }, [detailAnime]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!detailAnime) {
      alert("masukan slug anime");
    }

    fetchDetailAnime(detailAnime);
  };

  return (
    <div className="w-full ">
      <div className="w-full overflow-hidden mb-14">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input type="text" placeholder="search anime..." onChange={handleInputChange} className="border-2 w-full p-1 rounded-md" />
          <button type="submit" className="bg-black text-white font-semibold p-2 sm:px-4 rounded-md">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
