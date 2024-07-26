import Search from "../component/Search";

const SearchAnimePage = () => {
  return(
    <div className="w-full min-h-auto mt-14">
      <div className="w-full mx-auto px-5 mb-5">
          <h1 className="font-bold text-2xl text-center mb-3 md:text-3xl xl:text-4xl">Discover Your Anime Journey</h1>
          <p className="font-normal xl:mx-96 text-base xl:text-xl md:text-lg text-center tracking-wide">Start your anime search in action, fantasy, romance, and slice-of-life genres, exploring excitement, enchantment, warmth, and charm from your heart's choice!</p>
      </div>
      <Search/>
    </div>
  )
}

export default SearchAnimePage;