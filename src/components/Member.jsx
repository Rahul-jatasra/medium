import React from "react";
import girlimage from "../../src/components/common/img/girl-img.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RightArrow } from "./common/Icon";

const Member = () => {
  return (
    <div>
      <div className="max-w-[1440px] w-full mx-auto px-4 xl:px-0 ">
        <p className=" font-Playfair text-black text-[25px] sm:text-[40px] leading-[32px] sm:leading-[46px] text-center font-medium pt-8 sm:pt-16">
          Why I'm a Medium Member...
        </p>
        <div className="flex max-md:flex-col max-md:items-center gap-10 lg:gap-20  justify-center mt-10 pb-10 sm:pb-14">
          <div className="flex gap-1 sm:gap-2 items-center">
            <div className=" rounded-[50%] ">
              {" "}
              <img
                src={girlimage}
                alt="girl image"
                className="rounded-[50%] w-[190px] sm:w-[220px] h-[190px] sm:h-[220px]"
              />
            </div>
            <div className="w-[60px] sm:w-[90px] h-[150px] sm:h-[200px] rounded-[50%] bg-[#f55081]  "></div>
            <div className="w-[20px] sm:w-[30px] h-[110px] sm:h-[160px] rounded-[50%] bg-[#36a243] "></div>
          </div>
          <div>
            <p className=" font-Roboto font-medium text-[21px] sm:text-[29px] leading-7 sm:leading-9 max-w-[500px] w-full text-black ">
              "I love Medium's membership -- it gives me access to the stories i
              love by the writers i love and it allows me to help support those
              writers financilly
            </p>
            <p className=" font-Roboto font-medium text-[20px] sm:text-[24px] leading-6 sm:leading-7 text-black mt-5">
              Kayt Molina
            </p>
            <div className=" mt-5 sm:mt-8 w-[25px] ml-16 ">
              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
