import React from "react";

const Direction = () => {
  // discover tower
  const OneDiscover = () => <span className="mx-[1px]">Discover</span>;
  const TowerOfDiscover = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      const columns = [];
      for (let j = 1; j <= 2 * i - 1; j++) {
        columns.push(<OneDiscover key={`${i}-${j}`} />);
      }
      rows.push(<div key={i}>{columns}</div>);
    }
    return <div>{rows}</div>;
  };
  // explor tower
  const OneExplore = () => <span className="mx-[1px]">Explore</span>;
  const TowerOfExplore = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      const columns = [];
      for (let j = 1; j <= 2 * i - 1; j++) {
        columns.push(<OneExplore key={`${i}-${j}`} />);
      }
      rows.push(<div key={i}>{columns}</div>);
    }
    return <div>{rows}</div>;
  };
  return (
    <div className="bg-[#bcdeff] border-y-2 border-[#595c63]">
      <div className="max-w-[1440px] w-full mx-auto px-4 xl:px-0 relative overflow-hidden">
        <h1 className="pt-[50px] md:pt-[100px] text-black font-Playfair font-semibold text-[36px] sm:text-[60px] md:text-[90px] leading-[42px] sm:leading-[66px] md:leading-[96px] text-center">
          Take your mind <br /> in new direction
        </h1>
        <div className="flex justify-center mt-4 sm:mt-8 pb-[80px] md:pb-[165px] ">
          <button
            type="submit"
            className="px-5 sm:px-10 py-1 sm:py-2 rounded-full font-Roboto bg-black border-[2px] border-black text-white font-medium text-[16px] sm:text-[20px] hover:bg-transparent duration-300 ease-in-out hover:text-black  "
          >
            Get unlimited access
          </button>
        </div>
        <div className="font-Roboto font-medium text-[#2b323d] text-[18px] leading-5  text-center absolute top-[340px] left-[-850px] lg:left-[-710px] xl:left-[-609px] max-md:hidden ">
          {TowerOfDiscover()}
        </div>
        <div className="font-Roboto font-medium text-[#2b323d] text-[18px] leading-5  text-center absolute top-[340px] right-[-740px] lg:right-[-630px] xl:right-[-530px] max-md:hidden">
          {TowerOfExplore()}
        </div>
      </div>
    </div>
  );
};

export default Direction;
