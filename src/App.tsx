import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicePage from "./ServicePage";
import SobrePage from "./SobrePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/:serviceId" element={<ServicePage />} />
    </Routes>
  );
}
