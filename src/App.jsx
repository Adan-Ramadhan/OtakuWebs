import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Underconstruction from "./components/Underconstruction";
import NotFound from "./components/NotFound";
import DetailAnimePage from "./pages/DetailAnimePage";

function App() {
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Underconstruction/> } />
        <Route  element={<Layout/>}>
          <Route path="/*" element={<NotFound/> } />
          <Route path="/moe" element={<Homepage/> } />
          <Route path="/anime/:slug" element={<DetailAnimePage/> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
