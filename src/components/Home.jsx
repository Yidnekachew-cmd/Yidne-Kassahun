import { Link } from "react-router-dom";
import "../index.css";
import profileImg from "../assets/Profile-picture.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Ads from "./Ads";

const resume =
  "https://drive.google.com/file/d/17yU3pQLwV8gQFxGpKglT1Ia1hXLZIjUs/view?usp=sharing";

const Home = () => {
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
          <div className="flex flex-1 flex-col items-center justify-center mt-6  lg:items-start">
            <div className=" text-center mb-5  lg:space-y-1 lg:mb-8 lg:text-left xl:space-y-2 xl:mb-10">
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
              <a
                className="text-[#cfcab9] gradient_bg-2  font-bold rounded-3xl px-4 py-2 hover:bg-[#8731B8] transition-colors duration-300 "
                href={resume}
                rel="noopener noreferrer"
                target="_blank"
              >
                Download CV
              </a>
              <Link
                to="/Contact"
                className="text-[#cfcab9] gradient_bg-2  font-bold rounded-3xl px-4 py-2 hover:bg-[#8731B8] transition-colors duration-300 "
              >
                Contact Info
              </Link>
            </div>
            <div className="flex justify-center items-center mt-2 gap-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/yidnekachew-kassahun/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="My LinkedIn profile"
                  className="h-7 xl:h-9 animate-pulse text-[#3c4a4e] "
                  // onClick={handleLinkedinIconClick}
                />
              </a>
              <a
                href="https://github.com/Yidnekachew-cmd"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={github}
                  alt="My GitHub profile"
                  className="h-7 xl:h-9 animate-pulse text-[#3c4a4e]"
                  // onClick={handleGitHubIconClick}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Ads />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
