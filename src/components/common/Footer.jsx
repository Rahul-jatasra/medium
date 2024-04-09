import React from "react";
import { footerlinks } from "./Helper";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto 2xl:px-0 px-4">
        <div className="flex gap-4 flex-wrap justify-center sm:justify-between items-center py-2  sm:py-4">
          <h1 className="text-black sm:text-3xl text-xl font-Playfair font-medium">
            Medium
          </h1>
          <p className="text-black font-Roboto font-normal text-xl">
            Every idea needs a medium
          </p>
          <div className="flex gap-8 items-center">
            {footerlinks.map((item, index) => (
              <a
                className="text-base font-Roboto underline opacity-65 hover:opacity-100"
                key={index}
                href={item.linkurl}
              >
                {item.linkname}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
