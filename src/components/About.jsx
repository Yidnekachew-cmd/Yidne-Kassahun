import '../index.css';
import aboutPic from '../assets/profile-about.png'
import experiancePic from '../assets/experience.png'
import educationPic from '../assets/education.png'
// import arrow from '../assets/arrow.png'

const About = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="flex flex-col justify-center items-center  w-[90%] mx-auto  h-auto py-10 lg:py-12 lg:w-[80%]">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Get To Know More
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            About Me
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4" />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row-reverse  justify-center items-center md:items-start w-full mt-6 md:gap-8 md:mt-8 lg:mt-10">
          <div className="flex flex-col-reverse items-center flex-1">
            <div className="hidden md:flex lg:hidden justify-center items-center">
              <div className=" flex flex-1 flex-col rounded-3xl w-[50%] h-32 p-4 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover shadow-2xl border border-[#a3a3a3] mr-3">
                <img
                  src={experiancePic}
                  alt="Experience icon"
                  className="w-4  "
                />
                <div className="flex flex-col justify-center items-center pt-2">
                  <h3 className="font-bold text-md pb-1 lg:text-lg text-[#3c4a4e]">
                    Experience
                  </h3>
                  <p className="text-xs  text-justify text-[#3c4a4e]">
                    1+ years Frontend Development
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-3xl w-[50%] h-32 p-4 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover shadow-2xl border border-[#a3a3a3] ">
                <img src={educationPic} alt="Education icon" className="w-4 " />
                <div className="flex flex-col justify-center items-center pt-2">
                  <h3 className="font-bold text-md pb-1 lg:text-lg text-[#3c4a4e]">
                    Education
                  </h3>
                  <p className="text-xs text-left text-[#3c4a4e]">
                    B.Sc. Bachelors Degree
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[90%]  flex flex-1 mb-6 ">
              <img
                src={aboutPic}
                alt="Profile picture"
                className="rounded-3xl w-full  object-cover"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col lg:flex-col-reverse  w-[90%] md:w-[40%] mx-auto">
            <div className="flex md:hidden lg:flex justify-center items-center">
              <div className=" flex flex-1 flex-col rounded-3xl w-[50%] h-32 xl:h-44 p-4 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover shadow-2xl border border-[#a3a3a3] mr-3 lg:mr-6">
                <img
                  src={experiancePic}
                  alt="Experience icon"
                  className="w-4  lg:w-6"
                />
                <div className="flex flex-col justify-center items-center pt-2">
                  <h3 className="font-bold text-md pb-1 lg:text-lg xl:text-xl text-[#3c4a4e]">
                    Experience
                  </h3>
                  <p className="text-xs lg:text-md xl:text-lg xl:text-center text-justify text-[#3c4a4e]">
                    1+ years Frontend Development
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-3xl w-[50%] h-32 xl:h-44 p-4 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover shadow-2xl border border-[#a3a3a3] ">
                <img
                  src={educationPic}
                  alt="Education icon"
                  className="w-4 lg:w-6"
                />
                <div className="flex flex-col justify-center items-center pt-2">
                  <h3 className="font-bold text-md pb-1 lg:text-lg xl:text-xl text-[#3c4a4e]">
                    Education
                  </h3>
                  <p className="text-xs lg:text-md xl:text-lg text-left text-[#3c4a4e]">
                    B.Sc. Bachelors Degree
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 p-8 mt-6 md:mt-0 lg:mb-6 md:rounded-3xl">
              <p className="text-justify text-md xl:text-lg  text-[#3c4a4e] ">
                I am a highly motivated individual who has made the transition
                from mechanical engineering to software engineering. After
                completing my bachelor&apos;s degree in mechanical engineering,
                I made the decision to follow my passion for software
                engineering and enroll in Microverse, an online boot camp.
                Currently, I am a Front-End Developer and constantly strive to
                learn and improve my skills to become a Full-stack Developer. I
                am on the path to a successful career in software engineering
                and am open to new opportunities.
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
  );
}

export default About