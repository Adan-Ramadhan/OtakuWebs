import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import OngoingPage from "../pages/OngoingPage";
import CompletePage from "../pages/CompletePage";
import GenrePage from "../pages/GenrePage";
import DetailPage from "../pages/DetailPage";
import NotFound from "../components/NotFound";
import ListAnimeFiltredPage from "../pages/ListAnimeFiltredPage";
import SchedulePage from "../pages/SchedulePage";
import StreamPage from "../pages/StreamPage";
import SearchPage from "../pages/SearchPage";

const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/ongoing" element={<OngoingPage />} />
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/detail/:slug" element={<DetailPage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/anime/:slug" element={<ListAnimeFiltredPage />} />
        <Route path="/episode/:slug" element={<StreamPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterRoot;
