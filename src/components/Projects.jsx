import PropTypes from "prop-types";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css'
import project1 from "../assets/GPT_3.png";
import project2 from "../assets/image.png";
import project3 from "../assets/netflix.png";

const Projects = ({
  // handleGitHubIconClick,
  handleClickMathGitHub,
  handleClickPopGitHub,
  handleClickMathLive,
  handleClickPopLive,
}) => {
  return (
    <div className="w-full  gradient_bg-3">
      <div className="flex flex-col justify-center  items-center w-[80%] mx-auto  h-auto py-10 lg:py-12">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Browse My Recent
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            Projects
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4" />
        </div>

        <div className="flex flex-col justify-center items-start md:flex-row md:flex-wrap md:items-center gap-6  lg:gap-8 mt-8 lg:mt-10 cursor-pointer ">
          <div className="rounded-lg md:w-[45%]  lg:w-[30%]     space-y-3 shadow-2xl  gradient_bg-2 ">
            <div className="flex justify-center items-start h-52  flex-1 ">
              <img
                src={project1}
                alt="Project 1"
                className="w-full p-4 rounded-t-3xl object-cover h-full  "
              />
            </div>
            <div className="flex flex-col items-center justify-center  pb-6 space-y-3 flex-1">
              <h2 className="text-center text-md font-bold lg:text-lg  text-[#cfcab9]">
                Modern UI/UX GPT-3
              </h2>
              <p className="text-justify mx-auto w-[80%]  text-[#A5ACB5]  text-sm lg:text-md pb-2 ">
                A website that is used as a showcase to demonstrate my skills
                and abilities in building responsive and interactive web
                applications using react.
              </p>
              <div className="flex gap-4 items-center justify-center">
                <button
                  className=" text-[#3c4a4e] gradient_bg-3 text-xs   hover:text-white  transition-colors duration-300 font-bold rounded-3xl px-3 py-1"
                  onClick={handleClickMathGitHub}
                >
                  Github
                </button>
                <button
                  className=" text-xs hover:text- text-[#3c4a4e] gradient_bg-3  hover:text-white  transition-colors duration-300  font-bold rounded-3xl px-3 py-1"
                  onClick={handleClickMathLive}
                >
                  See Live
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg md:w-[45%]  lg:w-[30%]     space-y-3 shadow-2xl  gradient_bg-2 ">
            <div className="flex justify-center items-start h-52  flex-1 ">
              <img
                src={project2}
                alt="Project 1"
                className="w-full p-4 rounded-t-3xl object-cover h-full  "
              />
            </div>
            <div className="flex flex-col items-center justify-center  pb-6 space-y-3 flex-1">
              <h2 className="text-center text-md font-bold lg:text-lg  text-[#cfcab9]">
                Reastaurant-App
              </h2>
              <p className="text-justify mx-auto w-[80%]  text-[#A5ACB5]  text-sm lg:text-md pb-2 ">
                A website that is used as a showcase to demonstrate my skills
                and abilities in building responsive and interactive web
                applications using react.
              </p>
              <div className="flex gap-4 items-center justify-center">
                <button
                  className="text-[#3c4a4e] gradient_bg-3 text-xs  transition-colors duration-300 hover:text-white font-bold rounded-3xl px-2 py-1"
                  onClick={handleClickMathGitHub}
                >
                  Github
                </button>
                <button
                  className="text-[#3c4a4e] gradient_bg-3 text-xs  transition-colors duration-300 hover:text-white font-bold rounded-3xl px-2 py-1"
                  onClick={handleClickMathLive}
                >
                  See Live
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg md:w-[45%]  lg:w-[30%]     space-y-3 shadow-2xl  gradient_bg-2 ">
            <div className="flex justify-center items-start h-52  flex-1 ">
              <img
                src={project1}
                alt="Project 1"
                className="w-full p-4 rounded-t-3xl object-cover h-full  "
              />
            </div>
            <div className="flex flex-col items-center justify-center  pb-6 space-y-3 flex-1">
              <h2 className="text-center text-md font-bold lg:text-lg  text-[#cfcab9]">
                Maths Magician
              </h2>
              <p className="text-justify mx-auto w-[80%]  text-[#A5ACB5]  text-sm lg:text-md pb-2 ">
                A website that is used as a showcase to demonstrate my skills
                and abilities in building responsive and interactive web
                applications using react.
              </p>
              <div className="flex gap-4 items-center justify-center">
                <button
                  className="text-[#3c4a4e] gradient_bg-3 text-xs  transition-colors duration-300 hover:text-white font-bold rounded-3xl px-2 py-1"
                  onClick={handleClickMathGitHub}
                >
                  Github
                </button>
                <button
                  className="text-[#3c4a4e] gradient_bg-3 text-xs  transition-colors duration-300 hover:text-[#d8ecf0] font-bold rounded-3xl px-2 py-1"
                  onClick={handleClickMathLive}
                >
                  See Live
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        // onClick={location.href='./#contact'}
      /> */}
      </div>
    </div>
  );
};

Projects.propTypes = {
  // handleGitHubIconClick: PropTypes.func.isRequired,
  handleClickMathGitHub: PropTypes.func.isRequired,
  handleClickPopGitHub: PropTypes.func.isRequired,
  handleClickMathLive: PropTypes.func.isRequired,
  handleClickPopLive: PropTypes.func.isRequired,
}
export default Projects