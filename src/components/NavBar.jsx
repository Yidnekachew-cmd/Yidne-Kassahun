import { useState } from "react";
import yidneLogo from "../assets/Yidne-Logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    // <div className="w-full shadow-2xl bg-white fixed z-10">
    //   <nav className="flex justify-between items-center  w-[90%] text-lg h-20 py-4 mx-auto">
    //     <div className="flex items-center space-x-2">
    //       <h2 className="font-bold text-[#A53DFF] text-xl md:text-2xl w-[40%]">
    //         Yidne
    //       </h2>
    //     </div>
    //     <div className="md:hidden">
    //       <button
    //         onClick={handleMenuClick}
    //         className="text-black focus:outline-none "
    //       >
    //         {showMenu ? (
    //           <FaTimes size={30} className="z-20 fixed top-[3%] left-[87%]" />
    //         ) : (
    //           <FaBars size={30} className=" fixed top-[3%] left-[87%]" />
    //         )}
    //       </button>
    //     </div>
    //     <ul
    //       className={`${
    //         showMenu
    //           ? "flex flex-col  font-nokia-bold h-screen bg-[#a3a3a3] items-center justify-center space-y-8 overflow-auto bg-opacity-90 font-bold text-3xl w-full z-10 top-0 left-0 transform -translate-x-100 transition-transform ease-in-out duration-200  md:flex fixed"
    //           : "hidden text-lg md:flex md:space-x-3 justify-center items-center"
    //       }`}
    //     >
    //       <li>
    //         <Link
    //           className={`hover:text-[#A53DFF] transition-colors duration-300 ${
    //             location.pathname === "/" ? "border-b-4 border-[#A53DFF]" : ""
    //           }`}
    //           to="/"
    //           onClick={closeMenu}
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={`hover:text-[#A53DFF] transition-colors duration-300 ${
    //             location.pathname === "/About"
    //               ? "border-b-4 border-[#A53DFF]"
    //               : ""
    //           }`}
    //           to="/About"
    //           onClick={closeMenu}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={`hover:text-[#A53DFF] transition-colors duration-300 ${
    //             location.pathname === "/Experience"
    //               ? "border-b-4 border-blue-500"
    //               : ""
    //           }`}
    //           to="/Experience"
    //           onClick={closeMenu}
    //         >
    //           Experience
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={`hover:text-[#A53DFF] transition-colors duration-300 ${
    //             location.pathname === "/Projects"
    //               ? "border-b-4 border-[#A53DFF]"
    //               : ""
    //           }`}
    //           to="/Projects"
    //           onClick={closeMenu}
    //         >
    //           Projects
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={`hover:bg-[#8731B8] transition-colors duration-300 font-bold text-white px-4 py-3 rounded-3xl bg-[#A53DFF] ${
    //             location.pathname === "/Contact"
    //               ? "border-b-4 border-[#A53DFF]"
    //               : ""
    //           }`}
    //           to="/Contact"
    //           onClick={closeMenu}
    //         >
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <nav
      className={` gradient_bg w-full ${
        toggleMenu ? "h-[100vh] fixed top-0 bottom-0 z-30 " : ""
      } `}
    >
      <div className="block md:hidden w-[100%] ">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center flex-1  ">
            <img src={yidneLogo} alt="Yidne Logo" className="w-24" />
          </div>
          <div className="flex flex-1 justify-end items-start -mt-2 pr-3 cursor-pointer">
            {toggleMenu ? (
              <RiCloseLine
                color="#cfcab9"
                size={24}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#cfcab9"
                size={24}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>
        {toggleMenu && (
          <div className=" md:hidden">
            <ul className="flex flex-col justify-center items-center flex-1 gap-4 text-md slide-bottom">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                    location.pathname === "/"
                      ? "border-b-2 border-[#2d718b]"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  onClick={closeMenu}
                  className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                    location.pathname === "/About"
                      ? "border-b-2 border-[#2d718b]"
                      : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Experience"
                  onClick={closeMenu}
                  className={`hover:text-[#cfcab9] text-[#a5a5aa] ${
                    location.pathname === "/Experience"
                      ? "border-b-2 border-[#2d718b] "
                      : ""
                  }`}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  onClick={closeMenu}
                  className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                    location.pathname === "/Projects"
                      ? "border-b-2 border-[#2d718b]"
                      : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  onClick={closeMenu}
                  className={`hover:text-[#cfcab9] text-[#a5a5aa] ${
                    location.pathname === "/Contact"
                      ? "border-b-2 border-[#2d718b]"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:flex  md:justify-between ">
        <div className="flex justify-start  flex-1 w-[20%] pl-12">
          <img src={yidneLogo} alt="Yidne Logo" className="w-28" />
        </div>
        <ul className="flex justify-center items-center flex-1  gap-4">
          <li>
            <Link
              to="/"
              className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                location.pathname === "/" ? "border-b-2 border-[#2d718b]" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                location.pathname === "/About"
                  ? "border-b-2 border-[#2d718b]"
                  : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Experience"
              className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                location.pathname === "/Experience"
                  ? "border-b-2 border-[#2d718b] "
                  : ""
              }`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                location.pathname === "/Projects"
                  ? "border-b-2 border-[#2d718b]"
                  : ""
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
        <div className="flex justify-end items-center flex-1 pr-16 ">
          <Link
            to="/Contact"
            className="text-[#cfcab9] gradient_bg-2 py-1 px-4 rounded-full shadow-2xl border border-gray-400 border-opacity-65"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
