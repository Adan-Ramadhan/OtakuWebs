import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Navbar";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Headers = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);


  const handleIsOpenNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="w-full min-h-auto flex flex-row justify-between shadow p-3 items-center">
      <div className="w-full xl:w-3/4 flex justify-between items-center mx-auto">
        <div className="w-full ">
          <button onClick={handleIsOpenNavbar} className="block md:hidden">
            <RxHamburgerMenu />
          </button>
          <Navbar handleIsOpenNavbar={handleIsOpenNavbar} isNavbarOpen={isNavbarOpen} />
        </div>

        <div className="w-full flex justify-end gap-x-3">
          <a href="instagram.com/adaan_ramadhan" target="_black">
            <FaInstagram />
          </a>
          <a href="github.com/Adan-Ramadhan" target="_black">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headers;
