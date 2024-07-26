import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = ({ handleIsOpenNavbar, isNavbarOpen }) => {
  return (
    <div className={`${isNavbarOpen ? "translate-x-0 transition-all duration-300" : "-translate-x-full transition-all duration-300 md:translate-x-0"} absolute md:static md:w-full min-h-full w-1/2 shadow md:shadow-none top-0 left-0 `}>
      <div className="flex md:hidden p-2 justify-end">
        <button onClick={handleIsOpenNavbar}>
          <RxCross2 />
        </button>
      </div>

      <nav>
        <ul className="flex justify-center items-center flex-col md:flex-row md:justify-evenly">
          <li className="text-sm font-semibold tracking-wide text-slate-400 md:text-slate-700 md:hover:text-slate-400 hover:text-slate-700"><Link to="/">Home</Link></li>
          <li className="text-sm font-semibold tracking-wide text-slate-400 md:text-slate-700 md:hover:text-slate-400 hover:text-slate-700"><Link to="/anime">Anime</Link></li>
          <li className="text-sm font-semibold tracking-wide text-slate-400 md:text-slate-700 md:hover:text-slate-400 hover:text-slate-700"><Link to="/genres">Genre</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
