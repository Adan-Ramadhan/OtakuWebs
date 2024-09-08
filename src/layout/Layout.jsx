import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footers from "../components/Footers";

const Layout = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-full ">
        <Headers />
        
        <div className="overflow-auto">{<Outlet />}</div>

        <div className="sticky bottom-0 left-0 w-full">
          <Footers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
