import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footers from "../components/Footers";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-red-400">
      <div className="w-full h-full ">
        <Headers />
        
        <div>{<Outlet />}</div>

        <div className="absolute bottom-0 left-0 w-full">
          <Footers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
