import { useContext, useEffect } from "react";
import AnimeOngoing from "../components/animeOngoing/AnimeOngoing";
import { AnimeContext } from "../context/AnimeProvider";

const Homepage = () => {
  
  const {getAnimeOngoing, setPage} = useContext(AnimeContext);
  const handleScroll = () => {
    // Cek apakah pengguna sudah mencapai bagian bawah halaman dan tidak sedang loading
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 ) {
      setPage(prevPage => prevPage + 1); // Naikkan page untuk fetch data baru
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-auto">
      <div className="w-full min-h-auto">
        <AnimeOngoing getAnimeOngoing={getAnimeOngoing} />
      </div>
    </div>
  )
}

export default Homepage;