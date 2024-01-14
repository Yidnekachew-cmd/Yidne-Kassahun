import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="w-full shadow-2xl bg-white fixed z-10">
    <nav className="flex justify-between items-center  w-[90%] text-lg h-20 py-4 mx-auto">
      <div className="flex items-center space-x-2">

        <h2 className="rounded-full bg-[#A53DFF] text-center pt-2 text-xl font-bold text-white w-12 h-12">YK</h2>
        
        <h2 className="font-bold  text-xl md:text-2xl w-[40%]">
          Yidne
        </h2>
      </div>
      <div className="md:hidden">
              <button
                onClick={handleMenuClick}
                className="text-black focus:outline-none "
              >
                {showMenu ? (
                  <FaTimes
                    size={30}
                    className="z-20 fixed top-[3%] left-[87%]"
                  />
                ) : (
                  <FaBars size={30} className=" fixed top-[3%] left-[87%]" />
                )}
              </button>
            </div>
      <ul className={`${showMenu
                  ? "flex flex-col  font-nokia-bold h-screen bg-[#a3a3a3] items-center justify-center space-y-8 overflow-auto bg-opacity-90 font-bold text-3xl w-full z-10 top-0 left-0 transform -translate-x-100 transition-transform ease-in-out duration-200  md:flex fixed"
                  : "hidden text-lg md:flex md:space-x-3 justify-center items-center"
              }`}>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 ${location.pathname === '/' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 ${location.pathname === '/About' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/About" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 ${location.pathname === '/Experience' ? 'border-b-4 border-blue-500' : ''}`} to="/Experience" onClick={closeMenu}>Experience</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 ${location.pathname === '/Projects' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/Projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link className={`hover:bg-[#8731B8] transition-colors duration-300 font-bold text-white px-4 py-3 rounded-3xl bg-[#A53DFF] ${location.pathname === '/Contact' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/Contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
