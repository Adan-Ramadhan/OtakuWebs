import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import DetailAnime from "./DetailAnime";

const Search = () => {
  const { fetchDetailAnime, searchSlug } = useContext(AnimeContext);
  const [detailAnime, setDetailAnime] = useState(null);

  const handleOnChange = (e) => {
    setDetailAnime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!detailAnime) {
      alert("masukan slug anime");
    }

    fetchDetailAnime(detailAnime);
  };

  console.log(searchSlug);

  return (
    <div className="w-full">
      <div className="w-96 mx-auto overflow-hidden rounded-md mb-10">
        <form onSubmit={handleSubmit} className="flex ">
          <input type="text" placeholder="search anime..." onChange={handleOnChange} className="border-2 w-full px-3" />
          <button type="submit" className="bg-black text-white font-semibold p-2">
            Search
          </button>
        </form>
      </div>
      {searchSlug ? (
        <div className="w-full xl:w-3/4 mx-auto">
          <DetailAnime detailAnime={searchSlug} />
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

export default Search;
