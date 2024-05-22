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
    <div>
      <div className="w-full bg-hero-bg bg-contain bg-bottom  md:bg-cover bg-no-repeat  ">
        <div className="flex flex-col md:flex-row-reverse lg:flex-row w-[80%] mx-auto justify-center items-center py-10 md:py-16 lg:gap-12 xl:gap-16 lg:py-20 xl:py-28">
          <div className="w-[60%]  flex-1 flex items-center justify-center  lg:justify-end">
            <img
              className="rounded-full md:rounded-lg  w-full md:w-[80%] lg:w-[70%]"
              src={profileImg}
              alt="Yidne profile picture"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center mt-4  lg:items-start">
            <div className=" text-center mb-3  lg:space-y-1 lg:mb-8 lg:text-left xl:space-y-2 xl:mb-10">
              <p className=" text-md lg:text-lg xl:text-2xl font-bold text-[#869199] ">
                Hello, I&apos;m
              </p>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bold text-[#3c4a4e] ">
                Yidne Kassahun
              </h1>
              <p className="text-md lg:text-lg xl:text-2xl font-bold text-[#869199] ">
                Frontend Developer
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 cursor-pointer text-xs mb-1 lg:mb-2  xl:text-sm xl:mb-3">
              <button
                className="text-[#cfcab9] gradient_bg-2  font-bold rounded-3xl px-4 py-2 hover:bg-[#8731B8] transition-colors duration-300 "
                onClick={handleDownloadClick}
              >
                Download CV
              </button>
              <button
                className="text-[#cfcab9] gradient_bg-2  font-bold rounded-3xl px-4 py-2 hover:bg-[#8731B8] transition-colors duration-300 "
                onClick={handleClick}
              >
                Contact Info
              </button>
            </div>
            <div className="flex justify-center items-center mt-2 gap-3 cursor-pointer">
              <img
                src={linkedin}
                alt="My LinkedIn profile"
                className="h-7 xl:h-9 animate-pulse text-[#3c4a4e] "
                onClick={handleLinkedinIconClick}
              />
              <img
                src={github}
                alt="My GitHub profile"
                className="h-7 xl:h-9 animate-pulse text-[#3c4a4e]"
                onClick={handleGitHubIconClick}
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Ads handleClick={handleClick} />
      <Projects
        handleClickMathGitHub={handleClickMathGitHub}
        handleClickPopGitHub={handleClickPopGitHub}
        handleClickMathLive={handleClickMathLive}
        handleClickPopLive={handleClickPopLive}
      />
      <Contact
        handleLinkedinIconClick={handleLinkedinIconClick}
        handleEmailIconClick={handleEmailIconClick}
      />
    </div>
  );
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