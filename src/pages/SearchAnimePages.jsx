import { useContext } from "react";
import Search from "../component/Search";
import { AnimeContext } from "../context/AnimeProvider";
import DetailAnime from "../component/DetailAnime";
const SearchAnimePage = () => {

  const {searchSlug} = useContext(AnimeContext);
  console.log(searchSlug);

  return (
    <div className="w-full min-h-auto mt-14">
      <div className="w-full sm:w-4/5  md:w-3/4 lg:w-3/4 lg:px-20 xl:w-1/2 text-left sm:text-center px-10 mx-auto  mb-10">
        <h1 className="font-bold text-3xl mb-3 md:text-3xl xl:text-4xl">Discover Your Anime Journey</h1>
        <p className="font-normal xl:px-20 text-base xl:text-xl md:text-lg tracking-wide">
          Start your anime search in action, fantasy, romance, and slice-of-life genres, exploring excitement, enchantment, warmth, and charm from your heart's choice!
        </p>

        <div className="mt-7 w-full xl:px-32 ">
          <Search />
        </div>
      </div>
      
      {searchSlug ? (
        <div className="w-full xl:w-3/4 mx-auto px-10">
          <DetailAnime detailAnime={searchSlug} />
        </div>
      ) : (
        <div className="w-full text-center font-semibold">Not Found</div>
      )}
    </div>
  );
};

export default SearchAnimePage;
