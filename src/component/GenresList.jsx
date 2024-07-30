import { memo, useContext, useEffect } from "react";
import {AnimeContext} from "../context/AnimeProvider"
import { Link } from "react-router-dom";

const GenresList = ({genreList}) => {


if(!genreList){
  return <div>Loading...</div>
}
  return(
    <div className="w-full">
      {genreList ? (
        <div className="w-full xl:w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 p-5  " >
          {genreList.map((genre, index) => {
            return(
              <Link key={index} to={`/genres/${genre.name}?page=1 `}>
              <div  className="border rounded-lg py-6 bg-white  transition-all duration-300 hover:shadow">
                <p className="text-center xl:text-lg font-bold tracking-wide">{genre.name}</p>
              </div>
              </Link>
            )
          }) }
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default memo(GenresList);