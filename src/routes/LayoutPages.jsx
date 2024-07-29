import { Outlet } from "react-router-dom"
import Headers from "../component/Headers"

const LayoutPages = ({isActive, setIsActive}) => {
  return(
    <div>
      <Headers isActive={isActive} setIsActive={setIsActive} />
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default LayoutPages