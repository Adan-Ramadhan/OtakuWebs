import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import OngoingPage from "../pages/Ongoinpage";

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/ongoing" element={<OngoingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;
