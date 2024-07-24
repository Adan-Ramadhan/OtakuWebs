import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ParentComponent from "./pages/Test";
import DetailAnimePage from "./pages/DetailAnimePage";
import WatchAnimePage from "./pages/WatchAnimePage";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/anime/:slug" element={<DetailAnimePage />}/>
          <Route path="/anime/:slug/episodes/:episodes" element={<WatchAnimePage/>} />
          <Route path="/test" element={<ParentComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
