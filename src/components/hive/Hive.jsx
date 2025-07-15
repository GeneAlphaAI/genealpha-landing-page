import React from "react";
import HiveCard from "./HiveCard";
import AnimatedHiveLogo from "../animations/AnimatedHiveLogo";
import ModelCard from "./hiveComponents/ModelCard";
import OptionsCard from "./hiveComponents/OptionsCard";

const Hive = () => {
  return (
    <section
      id="hive"
      className="w-full flex flex-col relative justify-center items-center space-y-10 px-5 2xl:px-0 py-30 overflow-x-hidden"
    >
      <div className="flex flex-col w-full lg:w-3xl items-center justify-center gap-3">
        <div className="flex w-full justify-center lg:justify-start">
          <AnimatedHiveLogo />
          <h1 className="text-title-md sm:text-lg text-primary-text font-semibold text-center lg:text-left leading-[120%] max-w-[18ch]">
            Welcome to the Hive, where we swarm as one.
          </h1>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <p className="text-secondary-text text-sm sm:text-md leading-[120%] text-center lg:text-left max-w-[40ch]">
            Dive into Web3’s most advanced prediction architecture, and shape
            its future with your contributions.
          </p>
        </div>
      </div>
      <img
        src="/assets/hive/DApp.png"
        alt="DApp PNG"
        className="w-full max-w-6xl mt-10"
      />
      <div className="w-full xl:w-6xl flex flex-col 1xl:flex-row justify-between 1xl:border-b-[0.5px] 1xl:border-stroke-gray  mb-0 items-center">
        <HiveCard
          title={"Model performance tracked clearly"}
          subtitle={
            "Track each model individually with Hive. We track every baseline and its variants to deliver the most accurate asset predictions."
          }
        >
          {" "}
          <ModelCard
            title={"LightGBM"}
            description={
              "Lightning-fast gradient boosting trees, handling categorical features and large datasets effortlessly well."
            }
          />
        </HiveCard>
        <div className="block 1xl:hidden self-stretch h-[0.5px] mb-10 border-b-1 py-5 mx-5 xs:mx-20 border-stroke-gray"></div>

        <div className="hidden 1xl:block self-stretch w-[0.5px]  border-l-1 mr-15 border-stroke-gray"></div>
        <HiveCard
          title={"Track predictions for every asset."}
          subtitle={
            "GeneAlpha analyzes everything from micro-caps to large-caps, leveraging tailored feature sets to deliver precise, data-driven forecasts."
          }
        >
          <OptionsCard />
        </HiveCard>
      </div>
      <div className="block 1xl:hidden self-stretch h-[0.5px] border-b-1 py-5 mx-5 xs:mx-20 border-stroke-gray"></div>
      <div className="w-full mt-10 2xl:w-6xl flex flex-col justify-start space-y-2">
        <h1 className="text-[18px] text-primary-text font-semibold text-left leading-[120%]">
          Insights that you can see, insights that you can act on
        </h1>
        <p className="text-secondary-text text-sm text-left max-w-[50ch]">
          The Hive offers a very comprehensive GUI to showcase how each model is
          performing, all the relevant information is laid out clearly
        </p>
        <div className="relative w-full flex ">
          <img
            src="/assets/hive/image.png"
            alt="DApp PNG"
            className="w-full max-w-6xl mt-10"
          />

          {/* Right gradient */}
          <div className="absolute w-full top-0 h-20 bg-gradient-to-b from-primary via-primary/90 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hive;
