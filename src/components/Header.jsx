import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full min-h-auto shadow">
      <div className="w-full xl:w-2/3 mx-auto  flex items-center justify-between p-5">
        <div>
          <Link to="/">
          <h1 className="text-xl font-bold">Otaku Webs</h1>
          </Link>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
