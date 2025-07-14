import React from "react";
import HiveCard from "./HiveCard";
import AnimatedHiveLogo from "../animations/AnimatedHiveLogo";

const Hive = () => {
  return (
    <section
      id="hive"
      className="w-full flex flex-col relative justify-center items-center space-y-10 px-5 2xl:px-0 py-30 overflow-x-hidden"
    >
      <div className="flex flex-col w-full lg:w-3xl items-center justify-center gap-3">
        <div className="flex w-full justify-center lg:justify-start">
          <AnimatedHiveLogo />
          <h1 className="text-title-md sm:text-lg text-primary-text font-semibold text-center leading-[120%] max-w-[15ch]">
            The Hive is where it all comes together
          </h1>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <p className="text-secondary-text text-sm sm:text-md leading-[120%] text-center lg:text-left max-w-[40ch]">
            Model breeding fine-tunes each baseline model according to weighted
            performance, breeding new, more-accurate models.
          </p>
        </div>
      </div>
      <img
        src="/assets/hive/DApp.png"
        alt="DApp PNG"
        className="w-full max-w-6xl mt-10"
      />
      <div className="w-full 2xl:w-6xl flex flex-col 1xl:flex-row  justify-evenly 1xl:border-b-1 1xl:border-stroke-gray  mb-0 items-center">
        <HiveCard image={"/assets/hive/Card1.png"} />
        <div className="block 1xl:hidden self-stretch h-[1px] border-b-1 py-5 mx-10 xs:mx-20 border-stroke-gray"></div>

        <div className="hidden 1xl:block self-stretch w-[1px] border-l-1 border-stroke-gray"></div>
        <HiveCard image={"/assets/hive/Card2.png"} />
      </div>
      <div className="block 1xl:hidden self-stretch h-[1px] border-b-1 py-5 mx-10 xs:mx-20 border-stroke-gray"></div>
    </section>
  );
};

export default Hive;
