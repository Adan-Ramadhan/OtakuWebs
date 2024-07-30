import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import AllOngoingAnime from "../component/AllOngoingAnime";
import { useParams } from "react-router-dom";

const OngoingAnimePage = () => {

const { allOngoingAnime, fetchOngoing, currentPage, setCurrentPage, lastPage,} = useContext(AnimeContext);

const {page} = useParams();

useEffect(() => {
  fetchOngoing(page);
}, [])

if(!allOngoingAnime){
  return <div>Loading...</div>
}


  return(
    <div>
      <AllOngoingAnime allOngoingAnime={allOngoingAnime}/>
    </div>
  )
}

export default OngoingAnimePage;