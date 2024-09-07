import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route  element={<Layout/>}>
          <Route path="/" element={<Homepage/> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
