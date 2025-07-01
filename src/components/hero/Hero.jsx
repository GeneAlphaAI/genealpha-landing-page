import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className="w-full flex flex-col relative h-[130dvh] overflow-hidden items-center">
      <div className="w-full max-w-6xl mt-10 space-y-[25px] z-[2]">
        <h1 className="text-xl text-primary-text font-semibold text-left leading-[120%] max-w-[28ch]">
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
        <p className="text-secondary-text text-md max-w-[55ch]">
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
        src="/assets/hero/DAppSkew.webp"
        alt="Right Arrow - Docs"
        className=" top-70 right-0 left-60 bottom-0 absolute scale-110 z-[1]"
      />
      <div className="absolute bottom-0 left-0 right-0 h-100 z-[3]  pointer-events-none bg-gradient-to-t from-primary to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-150 z-[3] pointer-events-none bg-gradient-to-l from-primary to-transparent"></div>
    </div>
  );
};

export default Hero;
