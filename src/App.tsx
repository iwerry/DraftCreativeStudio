import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicePage from "./ServicePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:serviceId" element={<ServicePage />} />
    </Routes>
  );
}
