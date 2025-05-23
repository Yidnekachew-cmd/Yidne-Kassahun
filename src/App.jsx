import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import FrontendProjects from "./components/FrontendProjects";
import QAProjects from "./components/QAProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/FrontendProjects" element={<FrontendProjects />} />
        <Route path="/QAProjects" element={<QAProjects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
