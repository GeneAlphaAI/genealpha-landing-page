import React from "react";
import HiveCard from "./HiveCard";

const Hive = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10 my-30">
      <div className="flex flex-col w-3xl items-center justify-center gap-3">
        <div className="flex w-full justify-left">
          <img
            src="/assets/hive/HiveLogo.svg"
            alt="Hive Logo"
            className="h-[73px]"
          />

          <h1 className="text-lg text-primary-text font-semibold text-center leading-[120%] max-w-[15ch]">
            The Hive is where it all comes together
          </h1>
        </div>
        <div className="flex w-full justify-end">
          <p className="text-secondary-text text-md text-left leading-[120%] max-w-[40ch]">
            Model breeding fine-tunes each baseline model according to weighted
            performance, breeding new, more-accurate models.
          </p>
        </div>
      </div>
      <img
        src="/assets/hive/DApp.png"
        alt="DApp PNG"
        className="max-w-6xl mt-10"
      />
      <div className="w-6xl flex border-b-1 justify-evenly mb-0 items-center border-stroke-gray">
        <HiveCard image={"/assets/hive/Card1.png"} />
        <div className="self-stretch w-[1px] border-l-1 border-stroke-gray"></div>
        <HiveCard image={"/assets/hive/Card2.png"} />
      </div>
      <div className="w-6xl flex justify-evenly items-center">
        <HiveCard image={"/assets/hive/Card1.png"} />
        <div className="self-stretch w-[1px] border-l-1 border-stroke-gray"></div>
        <HiveCard image={"/assets/hive/Card2.png"} />
      </div>
    </div>
  );
};

export default Hive;
