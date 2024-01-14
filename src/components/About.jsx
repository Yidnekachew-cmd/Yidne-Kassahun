import '../index.css';
import aboutPic from '../assets/profile-about.png'
import experiancePic from '../assets/experience.png'
import educationPic from '../assets/education.png'
// import arrow from '../assets/arrow.png'

const About = () => {
  return (
    <div className="w-full bg-gray-200">
        <div className="flex flex-col justify-center items-center  w-[95%] mx-auto  h-auto pt-[15svh] pb-[8vh] md:pt-[8svh] lg:pt-[15svh]  lg:pb-[12vh]">
      <p className="text-lg md:text-xl text-[#6a97d2]">Get To Know More</p>
      <h1 className="text-3xl md:text-5xl  font-bold">About Me</h1> 
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-x-8 space-y-8 md:space-y-0 mt-8">
        <div className="w-[40%]">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[40%] mx-auto">
          <div className="flex gap-4">
            <div className=" flex flex-col rounded-3xl w-[50%] px-6 py-6 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover shadow-2xl border-2 border-[#a3a3a3] ">
              <img
                src={experiancePic}
                alt="Experience icon"
                className="w-[25%] h-[20%] md:h-[25%]"
              />
              <div className="flex flex-col justify-center items-center pt-2">
              <h3 className="font-bold text-lg pb-1 md:text-xl">Experience</h3>
              <p className="text-sm md:text-lg text-center">1+ years Frontend Development</p>
              </div>
            </div>
            <div className="flex flex-col rounded-3xl w-[50%] px-6 py-6 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover shadow-2xl border-2 border-[#a3a3a3] ">
              <img
                src={educationPic}
                alt="Education icon"
                className="w-[25%] h-[20%] md:h-[25%]"
              />
              <div className="flex flex-col justify-center items-center pt-2">
              <h3 className="font-bold text-lg pb-1 md:text-xl">Education</h3>
              <p className="text-sm text-center md:text-lg">B.Sc. Bachelors Degree</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-justify text-lg md:text-xl pt-5">
            I am a highly motivated individual who has made the transition from mechanical engineering to software engineering. After completing my bachelor&apos;s degree in mechanical engineering, I made the decision to follow my passion for software engineering and enroll in Microverse, an online boot camp. Currently, I am a Front-End Developer and constantly strive to learn and improve my skills to become a Full-stack Developer. I am on the path to a successful career in software engineering and am open to new opportunities.
            </p>
          </div>
        </div>
      </div>
      {/* <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        // conClick={location.href='./#experience'}
      /> */}
    </div>
    </div>
  )
}

export default About