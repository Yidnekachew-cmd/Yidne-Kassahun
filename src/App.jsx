import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('./contact');
  };

  const handleDownloadClick = () => {
    const resume = 'https://drive.google.com/file/d/1QgvkSTkEmd-LYfccSXNRb-3gaA2ZC-tr/view?usp=sharing';
    window.open(resume, '_blank');
  };

  const handleLinkedinIconClick = () => {
    const linkedin = 'https://www.linkedin.com/in/yidnekachew-kassahun/';
    window.open(linkedin, '_blank');
  };

  const handleGitHubIconClick = () => {
    
    const gitHub = 'https://github.com/Yidnekachew-cmd';
    window.open(gitHub, '_blank');
  };

  const handleEmailIconClick = () => {
    
    const email = 'mailto:yamiyekn@gmail.com';
    window.open(email, '_blank');
  };

  const handleClickMathGitHub = () => {
    const math = "https://github.com/Yidnekachew-cmd/GPT-3";
    window.open(math, "_blank");
  };
  const handleClickPopGitHub = () => {
    const pop = "https://github.com/Yidnekachew-cmd/Popuation-Index";
    window.open(pop, "_blank");
  };
  // const handleClickTodoGitHub = () => {

  //   const todo = 'https://github.com/Yidnekachew-cmd/math-magician';
  //   window.open(todo, '_blank');
  // };

  const handleClickMathLive = () => {
    const mathLive = "https://gpt-3-wnao.onrender.com/";
    window.open(mathLive, "_blank");
  };
  const handleClickPopLive = () => {
    
    const popLive = 'https://population-index.onrender.com/';
    window.open(popLive, '_blank');
  };

  // const handleClickTodoLive = () => {
    
  //   const todoLive = 'https://github.com/Yidnekachew-cmd/math-magician';
  //   window.open(todoLive, '_blank');
  // };
  

  return (
    <div className="w-full">
      <NavBar />
      <Routes>
        <Route 
        path="/" 
        element={<Home 
        handleClick={handleContactClick} 
        handleDownloadClick={handleDownloadClick} 
        handleLinkedinIconClick={handleLinkedinIconClick} 
        handleGitHubIconClick={handleGitHubIconClick} 
        handleEmailIconClick={handleEmailIconClick}
        handleClickMathGitHub={handleClickMathGitHub}
        handleClickPopGitHub={handleClickPopGitHub}
        handleClickMathLive={handleClickMathLive}
        handleClickPopLive={handleClickPopLive}
        />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route 
        path="/Projects" 
        element={<Projects
        handleClickMathGitHub={handleClickMathGitHub}
        handleClickPopGitHub={handleClickPopGitHub}
        handleClickMathLive={handleClickMathLive}
        handleClickPopLive={handleClickPopLive} 
        />} />
        <Route 
        path="/Contact" 
        element={<Contact 
        handleEmailIconClick={handleEmailIconClick} 
        handleLinkedinIconClick={handleLinkedinIconClick} 
        />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
