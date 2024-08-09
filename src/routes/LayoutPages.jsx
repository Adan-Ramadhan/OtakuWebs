import { Outlet } from "react-router-dom"
import Headers from "../component/Headers"
import Footer from "../component/Footer"
const LayoutPages = ({isActive, setIsActive}) => {
  return(
    <div>
      <Headers isActive={isActive} setIsActive={setIsActive} />
      <div>
        {<Outlet/>}
      </div>
      <Footer/>
    </div>
  )
}

export default LayoutPages