import { useContext, useEffect } from "react";
import { AnimeContext } from "../context/AnimeProvider";

const Pagination = ({paginationData}) => {
  const { currentPage, setCurrentPage, lastPage, fetchOngoing } = useContext(AnimeContext);
  // const pages = [];

  console.log(paginationData.pages)

  const handlePageChange = (page) => {
    if (page < 1 || page > paginationData.lastPage) return;
    paginationData.setCurrentPage(page);
  };
  for (let i = 1; i <= paginationData.lastPage; i++) {
    paginationData.pages.push(i);
  }


  return (
    <div className="flex justify-center my-4">
      <button disabled={paginationData.currentPage === 1} onClick={() => handlePageChange(paginationData.currentPage - 1)} className="px-4 py-2 mx-1 text-white bg-gray-500 rounded disabled:bg-gray-300">
        Previous
      </button>
      {paginationData.pages.map((page) => {
        console.log(page);
        return (
          <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 mx-1 rounded ${page === paginationData.currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>
            {page}
          </button>
        );
      })}
      <button disabled={paginationData.currentPage === paginationData.lastPage} onClick={() => handlePageChange(paginationData.currentPage + 1)} className="px-4 py-2 mx-1 text-white bg-gray-500 rounded disabled:bg-gray-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
