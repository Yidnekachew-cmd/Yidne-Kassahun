import PropTypes from "prop-types";
import '../index.css'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'

const Contact = ({handleLinkedinIconClick, handleEmailIconClick}) => {
  return (
    <div className="w-full bg-hero-bg bg-cover bg-bottom  bg-no-repeat ">
      <div className="flex flex-col justify-center items-center w-[80%] mx-auto py-10 lg:py-16">
        <div className="text-center">
          <p className="text-sm lg:text-lg xl:text-xl text-[#456c75]">
            Get in Touch
          </p>
          <h1 className="text-xl lg:text-2xl xl:text-3xl  font-bold text-[#3c4a4e]">
            Contact Me
          </h1>
          <div className="border-b-[#456c75] border-4 w-10 mx-auto mt-4" />
          <p className="text-justify md:text-center mx-auto w-[80%]  text-[#456c75]  text-sm xl:text-lg mt-2 md:mt-4  mb-2  lg:pt-1 lg:w-[63%]">
            Whether you have an exciting project in mind or just want to say
            hello, I&apos;m always open to hearing from new people. Feel free to
            contact me using the betton below. I&apos;m excited to see how we
            can work together!
          </p>
        </div>
        <div className="flex flex-row items-center mx-auto md:justify-around justify-center gap-3  rounded-3xl  gradient_bg-3 w-[70%] mt-3 md:py-2 lg:w-[60%] lg:mt-8">
          <div className="flex gap-2 justify-center items-center  cursor-pointer">
            <img
              src={email}
              alt="Email icon"
              className="h-6 animate-pulse"
              onClick={handleEmailIconClick}
            />
            <p className="hidden md:block" onClick={handleEmailIconClick}>
              <a href="mailto:examplemail@gmail.com">Yamiyekn@gmail.com</a>
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center  cursor-pointer">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="h-5 animate-pulse"
              onClick={handleLinkedinIconClick}
            />
            <p className="hidden md:block" onClick={handleLinkedinIconClick}>
              LinkedIn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  handleLinkedinIconClick: PropTypes.func.isRequired,
  handleEmailIconClick: PropTypes.func.isRequired,
}

export default Contact