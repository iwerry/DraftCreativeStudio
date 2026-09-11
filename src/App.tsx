import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./Home";
import ServicesPage from "./ServicesPage";
import InvestigativeJournalismPage from "./InvestigativeJournalismPage";
import ProjetosPage from "./ProjetosPage";
import FloatingWidgets from "./FloatingWidgets";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/investigative-journalism" element={<InvestigativeJournalismPage />} />
          <Route path="/osint" element={<Navigate to="/investigative-journalism" replace />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/projects" element={<ProjetosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <FloatingWidgets />
    </>
  );
}
