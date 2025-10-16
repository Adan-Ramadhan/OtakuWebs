import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import OngoingPage from "../pages/OngoingPage";
import CompletePage from "../pages/CompletePage";
import GenrePage from "../pages/GenrePage";

const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/ongoing" element={<OngoingPage />} />
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/genre" element={<GenrePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterRoot;
