import { useContext, useState } from "react";
import { AnimeContext } from "../context/AnimeProvider";

const Pagination = ({paginationData}) => {


const {currentPage, lastPage, setCurrentPage, fetchOngoing} = useContext(AnimeContext);

const handleChangePage = (page) => {
  fetchOngoing(page)
  console.log(page)
}


  return(
    <div className="flex justify-center gap-x-5">
      <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>Preview</button>
      
      {/* {paginationData.last_visible_page.map((page, index) => (
      <p key={index}>{page}</p>
      ))} */}
      
      <p>{paginationData.last_visible_page}</p>
      <button onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === lastPage}>Next</button>
    </div>
  )
}
export default Pagination;