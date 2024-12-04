import { useContext, useEffect } from "react";
import AnimeOngoing from "../components/animeOngoing/AnimeOngoing";
import { AnimeContext } from "../context/AnimeProvider";
import Loading from "../components/Loading"
const Homepage = () => {
  const { getAnimeOngoing, setPage, page, fetchData, isLoading, hasMore } = useContext(AnimeContext);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    // Cek apakah pengguna sudah mencapai bagian bawah halaman dan tidak sedang loading
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isLoading && hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
console.log(hasMore)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // clean up
  }, [isLoading]);

  return (
    <div className="w-full min-h-auto">
      <div className="w-full min-h-auto">
        <AnimeOngoing getAnimeOngoing={getAnimeOngoing} />
      {isLoading && <Loading/>}
      {!hasMore && <p className="text-center py-5">Yeeey habis...</p>}

      </div>
    </div>
  );
};

export default Homepage;
