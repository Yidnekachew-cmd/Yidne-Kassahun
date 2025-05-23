import { useState } from "react";
import "../index.css";
import projectsData from "./qaProjectData";

const ITEMS_PER_PAGE = 3;

const QAProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const currentProjects = projectsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

  const renderPagination = () => {
    return (
      <div className="flex items-center justify-end mt-10 gap-2 md:self-end">
        {/* Prev */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-300 text-[#2d718b]"
          }`}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          if (totalPages > 5 && page > 3 && page < totalPages) {
            if (page === 4) {
              return (
                <span key="ellipsis" className="px-2 text-gray-400">
                  ...
                </span>
              );
            }
            return null;
          }

          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                currentPage === page
                  ? "bg-[#2d718b] text-white"
                  : "bg-gray-100 hover:bg-gray-300 text-[#2d718b]"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-300 text-[#2d718b]"
          }`}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="w-full gradient_bg-3">
      <div className="flex flex-col justify-center items-center w-[80%] mx-auto py-10 lg:py-20">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Browse My Recent
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#3c4a4e]">
            QA Projects
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4 lg:mt-6" />
        </div>

        {/* Project Cards */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-start gap-8 mt-8 lg:mt-16 w-full">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg md:w-[45%] lg:w-[30%] space-y-3 shadow-2xl gradient_bg-2 lg:flex lg:flex-1 lg:h-[500px] transform transition duration-500 hover:scale-105 cursor-pointer "
            >
              <div className="flex flex-col items-center justify-center py-6 space-y-3 flex-1">
                <h2 className="w-[80%] mx-auto text-md font-bold lg:text-lg text-[#cfcab9]">
                  {project.title}
                </h2>

                <p className="text-justify mx-auto w-[80%] text-[#d6dce2] text-sm lg:text-md pb-2">
                  {project.description}
                </p>

                <p className="text-justify mx-auto w-[80%] text-[#f7f1de] text-sm lg:text-md pb-2">
                  Key Contributions:
                </p>

                <ul className="list-disc list-inside text-justify mx-auto w-[80%] text-[#d6dce2] text-sm lg:text-md pb-2">
                  {project.contributions.map((point, idx) => (
                    <li key={idx} className="pb-1 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="flex gap-4 items-center justify-center list-none w-full flex-wrap">
                  {project.tools.map((tool, idx) => (
                    <li
                      key={idx}
                      className="text-[#3c4a4e] gradient_bg-3 text-xs rounded-3xl px-3 py-1"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {renderPagination()}
      </div>
    </div>
  );
};

export default QAProjects;
