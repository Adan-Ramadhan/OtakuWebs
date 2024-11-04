import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return(
    <div className="w-full min-h-auto">
      <div className="w-full">
        <Header/>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Layout;