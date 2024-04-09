import React from "react";

const Story = () => {
  // m tower
  const OneM = () => <span className=" mx-[2px] sm:mx-[3px] xl:mx-1">M</span>;
  const TowerOfM = () => {
    const rows = [];
    for (let i = 1; i <= 13; i++) {
      const columns = [];
      for (let j = 1; j <= 2 * i - 1; j++) {
        columns.push(<OneM key={`${i}-${j}`} />);
      }
      rows.push(<div key={i}>{columns}</div>);
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="bg-[#4479ff] ">
      <div className="max-w-[1440px] w-full mx-auto px-4 xl:px-0 py-5 md:py-20 ">
        <div className=" flex max-lg:flex-col ">
          <div className="w-full lg:w-[50%] py-10 px-2 xl:px-10 max-lg:border-b-2 lg:border-r-2 border-[#b6caf0] ">
            <p className=" font-Roboto font-normal text-[24px] sm:text-[40px] leading-8 sm:leading-[46px]  text-white max-w-[475px] w-full">
              Get unlimited access to every story.
            </p>
            <div className=" font-Roboto text-white text-[12px] sm:text-[16px] leading-5 py-5">
              MMMMMMMMMMMMMMM &nbsp;MMMMMM &nbsp;MMMM &nbsp;M <br />
              MMMMMMMMMMMMMMM MMMMMM MMMMM M M <br />
              MMMMMMMMMMMMMM MMMMMMM MMMMMM
              <br /> MMMMMMMMMMMMMMMM MMMMMMM MMM M M <br />
              MMMMMMMMMMMMMMMMMMMM MMMMMM M M <br />
              MMMMMMMMMMMMMM MMMMMMMMM <br />
              MMMMMMMMMMM M MMMMMMMMMMM <br /> MMMMMMMMMMMMMMMMM MMMMMM <br />
              MMMMMMMMMMMMMM MMMMMMMMM <br /> MMMMMMMMM MMMMMMMMMMMMM <br />
              MMMMMMMMMMMM MMMMMMM <br /> MMMMMMMMMMMMMM MMMMM <br />
              MMMMMM MMMMMMMMMM
            </div>
            <p className=" font-Roboto font-normal text-[16px] sm:text-[21px] leading-5 sm:leading-7 text-white ">
              Read any article in our entire library across all your devices -
              with no paywalls, story limits or ads
            </p>
          </div>
          <div className="w-full lg:w-[50%] py-10  px-2 xl:px-10   ">
            <p className=" font-Roboto font-normal text-[24px] sm:text-[40px] leading-8 sm:leading-[46px] text-white max-w-[475px] w-full">
              Support the voices you want to hear more from
            </p>
            <div className="font-Roboto font-medium text-white text-[8px] sm:text-base leading-5 py-5 text-center">
              {TowerOfM()}
            </div>
            <p className=" font-Roboto font-normal text-[16px] sm:text-[21px] leading-5 sm:leading-7 text-white ">
              A portion of your membership will directly support the writers and
              thinkers you read the most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
