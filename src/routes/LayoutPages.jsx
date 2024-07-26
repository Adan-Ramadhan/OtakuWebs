import { Outlet } from "react-router-dom"
import Headers from "../component/Headers"

const LayoutPages = () => {
  return(
    <div>
      <Headers/>
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default LayoutPages