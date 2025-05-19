import "../index.css";
import aboutPic from "../assets/profile-about.png";
import experiancePic from "../assets/experience.png";
import educationPic from "../assets/education.png";
// import arrow from '../assets/arrow.png'

const About = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="flex flex-col justify-center items-center  w-[90%] mx-auto  h-auto py-10 lg:py-20 lg:w-[80%]">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Get To Know More
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            About Me
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4 lg:mt-6" />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row-reverse  justify-center items-center md:items-start w-full  md:gap-8 mt-8 lg:mt-16">
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
                    3 years in the tech indusrty
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
            <div className="bg-black bg-opacity-5 p-8 mt-6 md:mt-0 lg:mb-6 md:rounded-3xl space-y-2">
              <p className="text-justify text-md xl:text-lg  text-[#3c4a4e] ">
                I am a highly motivated professional who transitioned from
                mechanical engineering to software engineering, driven by a
                passion for technology and problem-solving. After earning my
                Bachelor&apos;s degree in Mechanical Engineering, I pursued my
                interest in software by enrolling in Microverse, a remote,
                full-time web development program.
              </p>
              <p className="text-justify text-md xl:text-lg  text-[#3c4a4e] ">
                Through hands-on experience in both front-end development and
                quality assurance, I discovered my passion for delivering
                reliable, high-quality software. Currently, I work as a Quality
                Assurance Engineer, where I apply my analytical mindset and
                attention to detail to ensure seamless user experiences and
                robust application performance.
              </p>
              <p className="text-justify text-md xl:text-lg  text-[#3c4a4e] ">
                I am continuously learning and growing in the QA field—with a
                long-term goal of becoming a versatile QA Automation Engineer.
                I&apos;m open to new opportunities where I can contribute, grow,
                and make an impact on product quality and team success.
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
};

export default About;
