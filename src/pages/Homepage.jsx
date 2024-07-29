import Headers from "../component/Headers";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import OngoingAnime from "../component/OngoingAnime";
import CompleteAnime from "../component/CompleteAnime";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full min-h-auto">

      <div className="w-full min-h-auto lg:min-h-96 flex flex-col items-center justify-center p-10 gap-y-5 ">
        <div className="w-full md:w-3/4 lg:w-1/2 text-left lg:text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold  tracking-wide mb-3">Enjoy Your Journey</h1>
          <p className="text-base font-semibold ">Start watching an anime without ads!, from the community, for the community, by the community.</p>
        </div>

        <div className="w-full md:w-3/4 lg:w-1/2 lg:px-20 flex xl:px-60  flex-col md:flex-row  items-center gap-2">
          <a href="#started" className="w-full flex items-center gap-x-2  text-base bg-blue-300 py-2 px-3 rounded-lg justify-center font-bold">Get Started <FaArrowRight /></a>
          <Link to={"/anime"} className="w-full flex items-center gap-x-2  text-base bg-gray-300 py-2 px-3 rounded-lg justify-center font-bold">Search Anime <IoIosSearch /></Link>
        </div>
      </div>
      
      <div className="w-full p-4"><OngoingAnime/></div>
      <div className="w-full p-4"><CompleteAnime/></div>
      <div>Footer</div>
    </div>
  );
};

export default Homepage;
