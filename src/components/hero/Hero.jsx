import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-xl mt-10 space-y-4">
        <h1 className="text-lg text-primary-text font-semibold text-left leading-[120%] max-w-[28ch]">
          <span className="whitespace-nowrap">
            Gene
            <img
              src="/assets/brand/GeneAlphaLogo.svg"
              alt="A"
              className="inline-block mb-2 h-[0.75em] mx-1"
            />
            lpha
          </span>{" "}
          is building the first Web3 prediction model that evolves itself using
          Genetic Algorithms
        </h1>
        <p className="text-secondary-text text-md max-w-[60ch]">
          Model Zoo based prediction system using more than 15 baseline models
          to breed the strongest prediction model to date using Genetic
          Algorithms.
        </p>
        <div className="flex items-center gap-10">
          <PrimaryButton defaultPadding="px-10 py-2">
            Get Involved
          </PrimaryButton>
          <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <p>Read Docs</p>
            <img
              src="/assets/hero/RightArrow.svg"
              alt="Right Arrow - Docs"
              className=""
            />
          </button>
        </div>
      </div>
      <img
        src="/assets/hero/DApp.png"
        alt="Right Arrow - Docs"
        className="-my-[140px] -mr-[20px]"
      />
    </div>
  );
};

export default Hero;
