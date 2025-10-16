import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import OngoingPage from "../pages/OngoingPage"

const RouterRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/ongoing" element={<OngoingPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouterRoot