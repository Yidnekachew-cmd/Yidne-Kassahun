import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center w-[89%] md:w-[95%] text-lg py-4 mx-auto">
      <div className="flex items-center space-x-2">
        
        <h2 className="font-bold  text-lg md:text-2xl w-[40%]">
          Yidne
        </h2>
      </div>
      <ul className="hidden  md:space-x-3 md:flex  ">
        <li>
          <Link className={`hover:text-[#005DB2] ${location.pathname === '/' ? 'border-b-4 border-blue-500' : ''}`} to="/">Home</Link>
        </li>
        <li>
          <Link className={`hover:text-[#005DB2] ${location.pathname === '/About' ? 'border-b-4 border-blue-500' : ''}`} to="/About">About</Link>
        </li>
        <li>
          <Link className={`hover:text-[#005DB2] ${location.pathname === '/Experience' ? 'border-b-4 border-blue-500' : ''}`} to="/Experience">Experience</Link>
        </li>
        <li>
          <Link className={`hover:text-[#005DB2] ${location.pathname === '/Projects' ? 'border-b-4 border-blue-500' : ''}`} to="/Projects">Projects</Link>
        </li>
        <li>
          <Link className={`hover:text-[#005DB2] ${location.pathname === '/Contact' ? 'border-b-4 border-blue-500' : ''}`} to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
