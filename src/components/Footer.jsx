import '../index.css'
import yidneLogo from "../assets/Yidne-Logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="gradient_bg w-full">
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center h-[24svh] ">
        <div className="flex justify-start  flex-1  ">
          <img src={yidneLogo} alt="Yidne Logo" className="w-28 lg:w-36" />
        </div>
        <ul className="hidden md:flex justify-center items-center flex-1 text-[#a5a5aa] gap-4">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "border-b-2 border-[#2d718b]" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={`${
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
              className={`${
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
              className={`${
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
              className={`${
                location.pathname === "/Contact"
                  ? "border-b-2 border-[#2d718b]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-1 jusify-center md:justify-end items-start text-xs md:text-sm -mt-6 md:mt-0 ">
          <p className="text-[#b4bdc2] ">Copyright &#169; 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;