import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./layouts/Layout";
import DetailAnimePage from "./pages/DetailAnimePage";
import EpisodePage from "./pages/EpisodePage";

const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/anime/:slug" element={<DetailAnimePage />} />
            <Route path="/episode/:slug" element={<EpisodePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default Main;