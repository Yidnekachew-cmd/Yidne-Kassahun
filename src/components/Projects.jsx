import PropTypes from "prop-types";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css'
import project1 from '../assets/MathMag.png'
import project2 from '../assets/PopIndex.png'
import project3 from '../assets/netflix.png'

const Projects = ({
  // handleGitHubIconClick,
  handleClickMathGitHub,
  handleClickPopGitHub,
  handleClickMathLive,
  handleClickPopLive,
}) => {
  return (
    <div className="w-full bg-hero-bg bg-no-repeat bg-bottom bg-cover">
    <div className="flex flex-col justify-center  items-center w-[80%] mx-auto  h-auto pt-[15svh] pb-[8vh] md:pt-[8svh] lg:pt-[15svh] lg:pb-[12vh]">
      <p className="text-lg md:text-xl mb-2 text-[#A5ACB5]">Browse My Recent</p>
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Projects</h1>
      <div className="">
        <div className="flex flex-col justify-center items-start lg:flex-row md:items-center gap-10 lg:gap-8 mt-8">
        {/* <Carousel showThumbs={true} showStatus={false} showIndicators={false} showArrows={true} centerMode> */}
          <div className="rounded-3xl lg:w-[32%] h-auto px-6 md:pt-6 lg:pt-0  border-2 border-[#a3a3a3] space-y-3 shadow-2xl pb-12 bg-[fafafa]">
            <div className="flex justify-center h-64">
              <img
                src={project1}
                alt="Project 1"
                className="w-auto h-full object-contain rounded-3xl "
              />
            </div>
            <h2 className="text-center text-3xl font-bold pb-2">Maths Magician</h2>
            <div className="flex gap-4 items-center justify-center">
              <button
                className="bg-white text-xl text-[#A53DFF] border-2 border-[#A53DFF] hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white font-bold rounded-3xl px-5 py-3"
                onClick={handleClickMathGitHub}
              >
                Github
              </button>
              <button
               className="bg-white text-xl text-[#A53DFF] border-2 border-[#A53DFF] hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white font-bold rounded-3xl px-5 py-3"
                onClick={handleClickMathLive}
              >
                See Live
              </button>
            </div>
          </div>
          <div className="rounded-3xl lg:w-[32%] h-auto px-6 md:pt-6 lg:pt-0   border-2 border-[#a3a3a3] space-y-3 shadow-2xl pb-12 bg-[fafafa]">
            <div className="flex justify-center h-64">
              <img
                src={project2}
                alt="Project 2"
                className="w-auto h-full object-contain rounded-3xl pb-4"
              />
            </div>
            <h2 className="text-center text-3xl font-bold pb-2">Population Index</h2>
            <div className="flex gap-4 items-center justify-center">
              <button
                className="bg-white text-xl text-[#A53DFF] border-2 border-[#A53DFF] hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white font-bold rounded-3xl px-5 py-3"
                onClick={handleClickPopGitHub}
              >
                Github
              </button>
              <button
                className="bg-white text-xl text-[#A53DFF] border-2 border-[#A53DFF] hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white font-bold rounded-3xl px-5 py-3"
                onClick={handleClickPopLive}
              >
                See Live
              </button>
            </div>
          </div>
          <div className="rounded-3xl lg:w-[32%] h-auto px-6 md:pt-6 lg:pt-0 border-2 border-[#a3a3a3] space-y-3 shadow-2xl pb-12 bg-[fafafa]">
            <div className="flex justify-center h-64">
              <img
                src={project3}
                alt="Project 3"
                className="w-auto h-full object-contain rounded-3xl pb-4"
              />
            </div>
            <h2 className="text-center text-3xl font-bold pb-2">Netflix Clone</h2>
            <div className="flex gap-4 items-center justify-center">
              <button
                className="bg-white text-xl text-[#A53DFF] border-2 border-[#A53DFF] hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white font-bold rounded-3xl px-5 py-3"
                // onClick={handleGitHubIconClick}
              >
                Github
              </button>
              <button
                className="bg-white text-xl text-[#A53DFF] border-2 border-[#A53DFF] hover:bg-[#A53DFF] transition-colors duration-300 hover:text-white  font-bold rounded-3xl px-5 py-3"
                // onClick={handleClickMathLive}
              >
                See Live
              </button>
            </div>
          </div>
          {/* </Carousel> */}
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
  )
}

Projects.propTypes = {
  // handleGitHubIconClick: PropTypes.func.isRequired,
  handleClickMathGitHub: PropTypes.func.isRequired,
  handleClickPopGitHub: PropTypes.func.isRequired,
  handleClickMathLive: PropTypes.func.isRequired,
  handleClickPopLive: PropTypes.func.isRequired,
}
export default Projects