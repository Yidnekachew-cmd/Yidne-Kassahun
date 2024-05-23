import "../index.css";
import checkMark from "../assets/checkmark.png";
import experienceDatas from "./experienceDatas";

const Experience = () => {
  return (
    <div className="w-full  gradient_bg-3">
      <div className="w-[95%] md:w-[80%] flex flex-col justify-center items-center mx-auto   h-auto py-10 lg:py-20">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Explore My
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            Experience
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4 lg:mt-6" />
        </div>
        <div className="flex flex-wrap flex-col md:flex-row  justify-center items-center  w-full mt-8 mx-auto gap-8  lg:mt-16">
          {experienceDatas.map((item) => (
            <div
              key={item.id}
              className={` rounded-3xl p-6 shadow-2xl flex-1]  ${
                item.id % 2 === 0
                  ? "gradient_bg-3 text-[#3c4a4e] flex-1 md:h-[375px] w-[90%]  md:w-[40%]"
                  : "gradient_bg-2 text-[#cfcab9] flex-0 md:h-[375px] w-[90%] lg:flex-1 lg  md:w-[48%]"
              }`}
            >
              <h2 className="text-center text-lg   font-bold pb-6">
                {item.title}
              </h2>
              <div className=" flex flex-wrap flex-1 gap-8 items-start justify-around text-xs xl:text-md w-full ">
                {item.experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-center space-x-2 w-[40%]"
                  >
                    <img
                      src={checkMark}
                      alt="Experience icon"
                      className="w-4"
                    />
                    <div>
                      <h3>{experience.title}</h3>
                      <p>{experience.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
