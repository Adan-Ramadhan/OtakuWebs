import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ handleIsOpenNavbar, isNavbarOpen }) => {

  const location = useLocation()


  return (
    <div className={`${isNavbarOpen ? "translate-x-0 transition-all duration-300" : "-translate-x-full transition-all duration-300 md:translate-x-0"} absolute md:static md:w-full h-full bg-white w-1/2 shadow md:shadow-none top-0 left-0 `}>
      <div className="flex md:hidden p-2 justify-end">
        <button onClick={handleIsOpenNavbar}>
          <RxCross2 />
        </button>
      </div>

      <nav className="w-full ">
        <ul className="flex justify-start gap-5 bg-white items-center flex-col md:flex-row ">
          <li className={`text-sm font-semibold  tracking-wide ${location.pathname === "/" ? "text-slate-300 " : "text-slate-700"}  hover:text-slate-500`}><Link to={"/"}>Home</Link></li>
          
          <li className={`text-sm font-semibold  tracking-wide ${location.pathname === "/anime" ? "text-slate-300 " : "text-slate-700"} hover:text-slate-500 `}><Link to={"/anime"}  >Anime</Link></li>
          
          <li className={`text-sm font-semibold  tracking-wide ${location.pathname === "/genres" ? "text-slate-300 " : "text-slate-700"} hover:text-slate-500 `}><Link to={"/genres"} >Genre</Link></li>
        </ul>
      </nav>

      
    </div>
  );
};

export default Navbar;
