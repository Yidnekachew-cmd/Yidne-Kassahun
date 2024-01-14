import '../index.css'
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
  return (
    <footer className="bg-[#132238] w-full">
    <div className="w-[80%] mx-auto flex justify-between items-center h-[24svh] ">
    <div className="flex items-center space-x-2">

<h2 className="rounded-full bg-[#A53DFF] text-center pt-2 text-xl font-bold text-white w-12 h-12">YK</h2>

<h2 className="font-bold text-white  text-lg md:text-2xl w-[40%]">
  Yidne
</h2>
</div>
<ul className="hidden  lg:space-x-3 lg:flex  ">
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 text-white  ${location.pathname === '/' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/">Home</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 text-white  ${location.pathname === '/About' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/About">About</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 text-white  ${location.pathname === '/Experience' ? 'border-b-4 border-blue-500' : ''}`} to="/Experience">Experience</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 text-white  ${location.pathname === '/Projects' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/Projects">Projects</Link>
        </li>
        <li>
          <Link className={`hover:text-[#A53DFF] transition-colors duration-300 text-white  ${location.pathname === '/Contact' ? 'border-b-4 border-[#A53DFF]' : ''}`} to="/Contact">Contact</Link>
        </li>
      </ul>
    <p className="text-white">Copyright &#169; 2024.</p>
  </div>
  </footer>
  )
}

export default Footer;