import React from "react";
import { navbarlinks } from "./common/Helper";

const Sidebar = ({ navbar, setNavbar }) => {
  return (
    <>
      <div className="bg-[#4479FF] w-full h-screen overflow-hidden relative z-10 lg:hidden">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-10 p-6">
          {navbarlinks.map((item, index) => (
            <a
              key={index}
              className="text-white font-Roboto font-normal text-2xl hover:opacity-80 hover:underline duration-300 ease-in-out text-center"
              href={item.linkurl}>
              {item.link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
