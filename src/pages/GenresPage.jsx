import GenresList from "../component/GenresList";
import {AnimeContext} from "../context/AnimeProvider"
import { memo, useContext, useEffect } from "react";

const GenresPage = () => {

  const {genreList} = useContext(AnimeContext)



  return (
    <div className="w-full min-h-auto mt-14">
      <div className="w-full px-5 mb-5">
          <h1 className="font-bold text-2xl text-center mb-3 md:text-3xl xl:text-4xl">Discover Your  Anime Genres</h1>
          <p className="font-normal text-base xl:text-xl md:text-lg text-center tracking-wide">Discover anime's action, fantasy, romance, and slice-of-life charm.</p>
      </div>
      <GenresList genreList={genreList} />
    </div>
  );
};

export default GenresPage;
