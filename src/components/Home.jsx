import PropTypes from "prop-types";
import '../index.css';
import profileImg from '../assets/Profile-picture.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Ads from './Ads';

const Home = ({
  handleClick, 
  handleDownloadClick, 
  handleLinkedinIconClick, 
  handleGitHubIconClick, 
  handleEmailIconClick,
  handleClickMathGitHub,
  handleClickPopGitHub,
  handleClickMathLive,
  handleClickPopLive,
}) => {
  

  return (
    <>
    <div className="w-full bg-hero-bg bg-no-repeat bg-contain  lg:bg-center lg:bg-cover">
      <div className="flex flex-col md:flex-row w-[80%] mx-auto justify-center items-center md:space-x-4 space-y-8 h-auto md:h-[64svh] pt-[20svh] pb-[8vh] md:pt-0 lg:h-[96svh] lg:pb-[4svh] lg:pt-[20svh]">
        <div className="w-[80%] md:w-[40%]">
          <img className="rounded-full w-full" src={profileImg} alt="Yidne profile picture" />
        </div>
        <div className="flex flex-col items-center justify-center lg:w-[40%] space-y-1 md:space-y-4">
      <p className="text-center text-lg md:text-xl font-bold text-[#A5ACB5] ">Hello, I&apos;m</p>
      <h1 className="text-3xl md:text-5xl text-center font-bold ">Yidne Kassahun</h1>
      <p className="text-xl md:text-3xl font-bold text-[#A5ACB5] ">Frontend Developer</p>
      <div className="flex justify-center items-center gap-4 cursor-pointer text-sm md:text-xl py-2">
        <button
          className="bg-[#A53DFF] text-white font-bold rounded-3xl px-4 py-3 hover:bg-[#8731B8] transition-colors duration-300 "
          onClick={handleDownloadClick}
        >
          Download CV
        </button>
        <button
          className="bg-[#A53DFF] text-white font-bold rounded-3xl px-4 py-3 hover:bg-[#8731B8] transition-colors duration-300 "
          onClick={handleClick}
        >
          Contact Info
        </button>
      </div>
      <div className="flex justify-center items-center mt-2 gap-3 cursor-pointer">
        <img
          src={linkedin}
          alt="My LinkedIn profile"
          className="h-10 animate-pulse"
          onClick={handleLinkedinIconClick}
        />
        <img
          src={github}
          alt="My GitHub profile"
          className="h-10 animate-pulse"
          onClick={handleGitHubIconClick}
        />
      </div>
    </div>
      </div>
    </div>
    <About />
    <Experience />
    <Ads handleClick={handleClick}/>
    <Projects
    handleClickMathGitHub={handleClickMathGitHub}
    handleClickPopGitHub={handleClickPopGitHub}
    handleClickMathLive={handleClickMathLive}
    handleClickPopLive={handleClickPopLive}

     />
    <Contact handleLinkedinIconClick={handleLinkedinIconClick} handleEmailIconClick={handleEmailIconClick} />
    </>
  )
}

Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleDownloadClick: PropTypes.func.isRequired,
  handleLinkedinIconClick: PropTypes.func.isRequired,
  handleGitHubIconClick: PropTypes.func.isRequired,
  handleEmailIconClick: PropTypes.func.isRequired,
  handleClickMathGitHub: PropTypes.func.isRequired,
  handleClickPopGitHub: PropTypes.func.isRequired,
  handleClickMathLive: PropTypes.func.isRequired,
  handleClickPopLive: PropTypes.func.isRequired, 
}

export default Home