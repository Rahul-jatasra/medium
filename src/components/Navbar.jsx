import React, { useState } from "react";
import { navbarlinks } from "./common/Helper";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [navbar, setNavbar] = useState("");
  return (
    <div className="bg-[#4479FF]">
      <div className="max-w-[1440px] w-full mx-auto 2xl:px-0 px-4 relative">
        <div className="sm:py-3 py-1 flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <div className="flex items-center gap-[1px]">
              <div className="bg-white w-7 h-7 rounded-full max-sm:hidden"></div>
              <div className="bg-white w-3 h-5 rounded-full"></div>
              <div className="bg-white w-1 h-4 rounded-full"></div>
            </div>
            <h1 className="text-white font-Playfair font-bold sm:text-3xl text-xl leading-[50px]">
              Medium
            </h1>
          </div>
          <div className="flex gap-5 items-center max-md:hidden">
            {navbarlinks.map((item, index) => (
              <a
                key={index}
                className="text-white font-Roboto font-normal text-xl opacity-80 hover:opacity-100 hover:underline duration-300 ease-in-out max-lg:hidden"
                href={item.linkurl}
              >
                {item.link}
              </a>
            ))}
            <button
              type="submit"
              className="px-7 py-2 rounded-full font-Roboto bg-black border-[2px] border-black text-white font-normal text-lg hover:bg-transparent duration-300 ease-in-out"
            >
              Get unlimited access
            </button>
          </div>
          <div
            className={`flex flex-col  cursor-pointer lg:hidden z-20 ${
              navbar ? "gap-[-12px]" : "gap-2"
            }`}
            onClick={() => setNavbar(!navbar)}
          >
            <div
              className={`w-7 h-[3px] duration-300 bg-white ${
                navbar ? " -rotate-45 translate-y-[3px]" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-[3px] duration-300 bg-white ${
                navbar ? " rotate-45" : ""
              }`}
            ></div>
            <div
              className={` h-[3px] duration-300 bg-white ${
                navbar ? "w-0" : "w-7"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 w-full ${
          navbar ? "left-0" : "left-[-110%]"
        }`}
      >
        <Sidebar navbar={navbar} Sidebar={Sidebar} />
      </div>
    </div>
  );
};

export default Navbar;
