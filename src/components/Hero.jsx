import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#4479ff] border-y-2 border-[#b6caf0]">
      <div className="max-w-[1440px] w-full mx-auto px-4 xl:px-0 py-[50px] sm:py-[100px] ">
        <p className="text-white text-center font-Playfair font-normal text-[32px] sm:text-[50px] md:text-[80px] lg:text-[90px] leading-9 sm:leading-[56px] md:leading-[86px] lg:leading-[96px] ">
          Fuel great thinking.{" "}
        </p>
        <p className=" font-Roboto font-medium text-[16px] sm:text-[24px] leading-5 sm:leading-7 text-center max-w-[440px] md:max-w-[620px] w-full mx-auto pt-5 sm:pt-10 text-white">
          Become a Medium member to enjoy unlimited access and directly support
          the writers you read most
        </p>
        <div className="flex justify-center mt-6 sm:mt-12 ">
          <button
            type="submit"
            className="px-5 sm:px-10 py-1 sm:py-2 rounded-full font-Roboto bg-white border-[2px] border-white text-black font-normal text-[16px] sm:text-[20px] hover:bg-transparent duration-300 ease-in-out hover:text-white  "
          >
            Get unlimited access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
