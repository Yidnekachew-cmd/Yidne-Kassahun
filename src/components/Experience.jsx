import '../index.css'
import checkMark from '../assets/checkmark.png'
// import arrow from '../assets/arrow.png'


const Experience = () => {
  return (
    <div className="w-full bg-hero-bg bg-no-repeat bg-right-bottom bg-cover">
      <div className="w-[95%] md:w-[80%] flex flex-col justify-center items-center mx-auto   h-auto py-8 lg:py-12">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Explore My
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row  justify-center items-center  w-full mt-6 mx-auto gap-6 md:justify-start lg:mt-8">
          <div className="border border-[#a3a3a3] rounded-3xl p-6 shadow-2xl flex-1 md:h-[350px] w-[90%]  md:w-[40%] lg:h-[375px]">
            <h2 className="text-center text-lg  text-[#3c4a4e] font-bold pb-6">
              Frontend Development
            </h2>
            <div className=" flex flex-wrap flex-1 gap-8 items-start justify-around text-xs xl:text-md text-[#3c4a4e]">
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>TailWindCss</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>React.js</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Redux Tool Kit</h3>
                  <p>Experienced</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#a3a3a3]  rounded-3xl p-6 shadow-2xl  flex-1 md:h-[350px] w-[90%]  md:w-[40%] lg:h-[375px]">
            <h2 className="text-center text-lg md:texl-3xl text-[#3c4a4e] font-bold pb-6">
              Backend Development
            </h2>
            <div className="flex flex-wrap flex-1 gap-6 items-start justify-around text-sm xl:text-md text-[#3c4a4e]">
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>MongoDb</h3>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Node JS</h3>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Ruby</h3>
                  <p>Basic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#a3a3a3]  rounded-3xl p-6 shadow-2xl  flex-0 md:h-[375px] w-[90%] lg:flex-1 lg  md:w-[48%]">
            <h2 className="text-center text-lg md:texl-3xl text-[#3c4a4e] font-bold pb-6">
              Tools
            </h2>
            <div className="flex flex-wrap flex-1 gap-8 items-start justify-around text-sm xl:text-md text-[#3c4a4e]">
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Git</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>GitHub</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Rspec</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>JEST</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Chrom Dev Tools</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Vs Code</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>npm</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-start justify-center space-x-2 w-[40%]">
                <img src={checkMark} alt="Experience icon" className="w-4" />
                <div>
                  <h3>Postman</h3>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience