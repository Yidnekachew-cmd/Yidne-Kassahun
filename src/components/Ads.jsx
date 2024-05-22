import PropTypes from "prop-types";

const Ads = ({handleClick}) => {
  return (
    <div className="w-full flex justify-center items-center gradient_bg  h-auto py-[8svh]">
      <div className="w-[90%] lg:w-[50%]  mx-auto flex flex-col justify-center items-start space-y-3">
        <h2 className="text-center w-full text-[#cfcab9] font-bold text-3xl md:text-4xl">
          Do you have Project Idia?
        </h2>
        <h2 className="text-center w-full text-[#cfcab9] font-bold text-3xl md:text-4xl pb-2">
          Let&apos;s discuss your project!
        </h2>
        <p className="text-center mx-auto w-[90%] md:w-[80%] text-[#A5ACB5]  text-xl pb-4">
          Whether you have an exciting project in mind or just want to say
          hello, I&apos;m always open to hearing from new people. Feel free to
          contact me using the betton below. I&apos;m excited to see how we can
          work together!
        </p>
        <button
          className="self-center text-[#cfcab9] gradient_bg-2 font-bold rounded-xl cursor-pointer px-4 py-3 hover:bg-[#8731B8] transition-colors duration-300"
          onClick={handleClick}
        >
          Let&apos;s work Together
        </button>
      </div>
    </div>
  );
}

Ads.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
export default Ads