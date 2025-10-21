import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

type menusType = {
  title: string;
  url: string;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const menus: menusType[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "OnGoing",
      url: "/ongoing",
    },
    {
      title: "Complete",
      url: "/complete",
    },
    {
      title: "Genre",
      url: "/genre",
    },
    {
      title: "Schedule",
      url: "/schedule",
    },
  ];

  function handleOpenSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full bg-white">
      {/* Mobile Header */}
      <div className="w-full p-3 flex items-center md:hidden justify-between">
        <div className="overflow-hidden w-16">
          <a href="/">
            {/* <h1 className="font-semibold text-2xl">Otaku Webs</h1> */}
            <img src={"./asset/otakuwebs.png"} className="w-full object-cover" />
          </a>
        </div>
        <div>
          <button onClick={handleOpenSidebar} className="text-2xl">
            <RxHamburgerMenu />
          </button>
        </div>
        <nav
          className={`${isOpen ? " left-0" : "-left-64"
            } fixed top-0 w-64 bg-white shadow-lg transition-all z-10 ease-in-out duration-500 h-full p-3`}
        >
          <ul className="w-full ">
            <li className="mb-10 overflow-hidden w-20 ">
              <img src={"./asset/otakuwebs.png"} className="w-full object-center" />
            </li>
            {menus.map((menu, i) => (
              <li
                key={i}
                className="text-lg mb-3 font-semibold text-slate-700 hover:text-orange-500 active:text-orange-700"
              >
                <a href={menu.url}>{menu.title}</a>
              </li>
            ))}
            <li className="w-full">
              <a href={"/search"} className="w-full border-2 hover:text-white transition-all ease-in-out duration-300 text-sm md:text-lg border-orange-500 font-bold hover:bg-orange-500 bg-white rounded-full px-4 py-1">Explore</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dekstop Header */}
      <div className="w-full xl:w-3/4 lg:mx-auto p-3 md:flex hidden items-center justify-between">
        <div className="overflow-hidden w-20">
          <a href="/">
            {/* <h1 className="font-semibold text-2xl">Otaku Webs</h1> */}
            <img src={"./asset/otakuwebs.png"} className="w-full object-cover" />
          </a>
        </div>
        <nav>
          <ul className="flex  justify-start gap-x-3 ">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="font-semibold text-sm transition-all duration-300 ease-in-out text-slate-700 hover:text-orange-500 active:text-orange-700"
              >
                <a href={menu.url}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <form className="border rounded-lg border-slate-500 flex items-center gap-x-2 py-1 px-2">
          <FaSearch />
          <input
            type="search"
            placeholder="search title..."
            className=" focus:outline-none focus:ring-0"
          />
        </form> */}
      </div>
    </header>
  );
};

export default Header;
