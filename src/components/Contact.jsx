import PropTypes from "prop-types";
import '../index.css'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'

const Contact = ({handleLinkedinIconClick, handleEmailIconClick}) => {
  return (
    <div className="w-full bg-gray-200 bg-hero-bg bg-no-repeat bg-right-bottom md:bg-center bg-cover">
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto   h-[82svh] py-[4svh]">
      <p className="text-lg md:text-xl mb-2 text-[#A5ACB5]">Get in Touch</p>
      <h1 className="text-3xl md:text-5xl font-bold pb-10 md:pb-8">Contact Me</h1>
      <div className="flex flex-col md:flex-row md:items-center mx-auto md:justify-around justify-center  rounded-3xl items-start border-2 border-[#a3a3a3] w-[90%] md:w-[80%] lg:w-[50%] p-4 space-y-4 md:space-y-0">
        <div className="flex justify-around items-center gap-3 cursor-pointer">
          <img
            src={email}
            alt="Email icon"
            className="h-12 animate-pulse"
            onClick={handleEmailIconClick}
          />
          <p><a href="mailto:examplemail@gmail.com">Yamiyekn@gmail.com</a></p>
        </div>
        <div className="flex justify-around items-center gap-3 cursor-pointer" >
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="h-10 animate-pulse"
            onClick={handleLinkedinIconClick}
          />
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
    </div>
  )
}

Contact.propTypes = {
  handleLinkedinIconClick: PropTypes.func.isRequired,
  handleEmailIconClick: PropTypes.func.isRequired,
}

export default Contact