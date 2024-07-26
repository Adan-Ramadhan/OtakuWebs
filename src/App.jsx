import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ParentComponent from "./pages/Test";
import DetailAnimePage from "./pages/DetailAnimePage";
import WatchAnimePage from "./pages/WatchAnimePage";
import GenresPage from "./pages/GenresPage";
import LayoutPages from "./routes/LayoutPages";
import DetailGenresPage from "./pages/DetailGenresPage";
import SearchAnimePage from "./pages/SearchAnimePages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutPages />}>
            <Route index element={<Homepage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/anime" element={<SearchAnimePage />} />
            <Route path="/anime/:slug" element={<DetailAnimePage />} />
            <Route path="/genres/:slug" element={<DetailGenresPage />} />
            <Route path="/anime/:slug/episodes/:episodes" element={<WatchAnimePage />} />
            <Route path="/test" element={<ParentComponent />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
