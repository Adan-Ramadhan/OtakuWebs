import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Underconstruction from "./components/Underconstruction";

function App() {
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Underconstruction/> } />
        <Route  element={<Layout/>}>
          <Route path="/moe" element={<Homepage/> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
