import "../index.css";
import yidneLogo from "../assets/Yidne-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setToggleMenu(false);
  };

  const handleLinkClick = () => {
    closeMenu(); // Close mobile menu if applicable
    setOpen(false); // Close dropdown
  };
  return (
    <footer className="gradient_bg w-full">
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center h-[24svh] ">
        <div className="flex justify-start  flex-1  ">
          <img src={yidneLogo} alt="Yidne Logo" className="w-28 lg:w-36" />
        </div>
        <ul className="hidden md:flex justify-center items-center flex-1 gap-4">
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
          {/* <li>
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
          </li> */}
          <li className="relative group">
            <button
              onClick={() => setOpen(!open)} // Toggle dropdown on click
              onMouseEnter={() => setOpen(true)} // Optional: open on hover
              className={`hover:text-[#cfcab9] text-[#a5a5aa] ${
                location.pathname === "/Projects"
                  ? "border-b-2 border-[#2d718b]"
                  : ""
              }`}
            >
              Projects ▾
            </button>

            {open && (
              <ul
                className="absolute left-0 mt-2 gradient_bg border border-gray-700 rounded-md shadow-lg z-50 w-48"
                onMouseLeave={() => setOpen(false)} // Close when mouse leaves the dropdown area
              >
                <li>
                  <Link
                    to="/QAProjects"
                    onClick={handleLinkClick}
                    className={`block px-4 py-2 hover:bg-[#2d718b] hover:text-white text-[#a5a5aa] ${
                      location.pathname === "/QAProjects"
                        ? "bg-[#2d718b] text-white"
                        : ""
                    }`}
                  >
                    QA Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/frontendProjects"
                    onClick={handleLinkClick}
                    className={`block px-4 py-2 hover:bg-[#2d718b] hover:text-white text-[#a5a5aa] ${
                      location.pathname === "/frontendProjects"
                        ? "bg-[#2d718b] text-white"
                        : ""
                    }`}
                  >
                    Frontend Projects
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/Contact"
              className={` hover:text-[#cfcab9] text-[#a5a5aa] ${
                location.pathname === "/Contact"
                  ? "border-b-2 border-[#2d718b]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-1 jusify-center md:justify-end items-start text-xs md:text-sm -mt-6 md:mt-0 md:mr-8 ">
          <p className="text-[#b4bdc2] ">Copyright &#169; 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
