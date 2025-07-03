import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Github = () => {
  return (
    <div className="w-full flex items-center justify-center my-60  overflow-hidden">
      <div className="max-w-6xl w-full flex  border-1 border-stroke-gray relative bg-primary px-10 rounded-[15px] h-[435px]">
        <img
          src="/assets/github/Github.svg"
          alt="Github"
          className="max-w-[500px] w-full z-2"
        />
        <img
          src="/assets/github/CornerGlow.svg"
          className="absolute inset-0 top-0 left-0 z-1 rounded-l-[15px] "
          loading="lazy"
        />

        <div className="flex flex-col justify-center items-end ml-auto space-y-4">
          <h1 className="text-lg text-primary-text font-semibold text-right leading-[120%] max-w-[22ch]">
            See what team GeneAlpha is up-to through our GitHub
          </h1>
          <p className="text-secondary-text text-md text-right max-w-[30ch]">
            Track latest updates and development updates with your up-to-date
            GitHub.
          </p>
          <PrimaryButton defaultPadding="px-10 py-2">
            Visit GitHub
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Github;
