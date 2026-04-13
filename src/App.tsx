import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./Home";
import ServicePage from "./ServicePage";
import SobrePage from "./SobrePage";
import ProjetosPage from "./ProjetosPage";
import FloatingWidgets from "./FloatingWidgets";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/:serviceId" element={<ServicePage />} />
        </Routes>
      </AnimatePresence>
      <FloatingWidgets />
    </>
  );
}
