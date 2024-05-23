import "../index.css";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div className="w-full  gradient_bg-3">
      <div className="flex flex-col justify-center  items-center w-[80%] mx-auto  h-auto py-10 lg:py-20">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Browse My Recent
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            Projects
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4 lg:mt-6" />
        </div>

        <div className="flex flex-col justify-center items-start md:flex-row md:flex-wrap md:items-center gap-8  lg:gap-8 mt-8 lg:mt-16 cursor-pointer ">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-lg md:w-[45%]  lg:w-[30%]     space-y-3 shadow-2xl  gradient_bg-2 "
            >
              <div className="flex justify-center items-start h-52  flex-1 ">
                <img
                  src={project.image}
                  alt="Project 1"
                  className="w-full p-4 rounded-t-3xl object-cover h-full  "
                />
              </div>
              <div className="flex flex-col items-center justify-center  pb-6 space-y-3 flex-1">
                <h2 className="text-center text-md font-bold lg:text-lg  text-[#cfcab9]">
                  {project.title}
                </h2>
                <p className="text-justify mx-auto w-[80%]  text-[#A5ACB5]  text-sm lg:text-md pb-2 ">
                  {project.description}
                </p>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    className=" text-[#3c4a4e] gradient_bg-3 text-xs   hover:text-white  transition-colors duration-300 font-bold rounded-3xl px-3 py-1"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className=" text-xs hover:text- text-[#3c4a4e] gradient_bg-3  hover:text-white  transition-colors duration-300  font-bold rounded-3xl px-3 py-1 "
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Live
                  </a>
                </div>
              </div>
            </div>
          ))}
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

export default Projects;
