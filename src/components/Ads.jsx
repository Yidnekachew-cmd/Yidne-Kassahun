import { Link } from "react-router-dom";
const Ads = () => {
  return (
    <div className="w-full flex justify-center items-center gradient_bg  h-auto py-10 lg:py-16">
      <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col justify-center items-start space-y-3">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-8 lg:mb-6">
          <h2 className="text-center w-full text-[#cfcab9] font-bold text-xl lg:text-3xl mb-6 lg:text-right lg:text-[#A5ACB5] lg:w-[58%]">
            Do you have Project Idia? Let&apos;s discuss your project!
          </h2>

          <p className="text-justify mx-auto w-[80%]  text-[#A5ACB5]  text-sm xl:text-lg pb-4 lg:text-left  lg:pt-1 lg:w-[63%]">
            Whether you have an exciting project in mind or just want to say
            hello, I&apos;m always open to hearing from new people. Feel free to
            contact me using the betton below. I&apos;m excited to see how we
            can work together!
          </p>
        </div>
        <Link
          to="/Contact"
          className="self-center text-[#cfcab9] gradient_bg-2 font-bold rounded-xl cursor-pointer px-4 py-3 hover:bg-[#8731B8] transition-colors duration-300"
        >
          Let&apos;s work Together
        </Link>
      </div>
    </div>
  );
};

export default Ads;
