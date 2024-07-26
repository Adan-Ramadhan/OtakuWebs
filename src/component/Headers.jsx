import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Navbar";

const Headers = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleIsOpenNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="w-full min-h-auto flex flex-row justify-between shadow p-3 items-center">
      <div className="w-full ">
        <button onClick={handleIsOpenNavbar} className="block md:hidden">
          <RxHamburgerMenu />
        </button>
        <Navbar handleIsOpenNavbar={handleIsOpenNavbar} isNavbarOpen={isNavbarOpen} />
      </div>


      <div className="w-full ">sosmed</div>
    </div>
  );
};

export default Headers;
