import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import AllOngoingAnime from "../component/AllOngoingAnime";

const OngoingAnimePage = () => {

const { allOngoingAnime, fetchOngoing, currentPage, setCurrentPage, lastPage,} = useContext(AnimeContext);
const pages = [];

useEffect(() => {
  fetchOngoing();
}, [])

if(!allOngoingAnime){
  return <div>Loading...</div>
}

const paginationData = {currentPage, setCurrentPage, lastPage, pages}

  return(
    <div>
      <AllOngoingAnime paginationData={paginationData} allOngoingAnime={allOngoingAnime}/>
    </div>
  )
}

export default OngoingAnimePage;