import React from "react";
import UtilityCard from "./UtilityCard";

const TokenUtilities = () => {
  const utilities = [
    {
      icon: "/assets/token-utilities/access-hive.svg",
      title: "Access the Hive",
      description:
        "The Hive's rich dashboard lets you inspect metrics, compare versions, and follow every model's journey in one clear interface.",
    },
    {
      icon: "/assets/token-utilities/train.svg",
      title: "Train with your own feature-set",
      description:
        "Upload custom data and launch bespoke training runs; feature tuning and hyper-search craft variants aligned perfectly with your use-case.",
    },
    {
      icon: "/assets/token-utilities/breeding.svg",
      title: "Sneak into breeding process",
      description:
        "Observe crossover and mutation cycles in real time, vote on tweaks, and watch fresh offspring emerge to challenge existing champions.",
    },
    {
      icon: "/assets/token-utilities/alpha.svg",
      title: "Get your hands on the Alpha",
      description:
        "Observe crossover and mutation cycles in real time, vote on tweaks, and watch fresh offspring emerge to challenge existing champions.",
    },
  ];
  return (
    <div className="w-full px-4 pt-[200px] pb-[150px] flex flex-col gap-[80px] justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <h1 className="text-md text-dull-white font-medium text-center leading-[120%] font-inter">
          Explore important utilities that comes with the $GA token
        </h1>
        <p className="text-low-opacity-text text-sm text-center max-w-[50ch] font-inter font-medium">
          The outlined utilities are only tip of the icerberg, GeneAlpha is
          committed to increase perks and value of its token overtime.
        </p>
      </div>

      {/* mapping utilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-[120px] gap-y-8 lg:gap-y-[80px] max-w-[933px] w-full  px-3">
        {utilities.map((utility, index) => (
          <UtilityCard key={index} {...utility} />
        ))}
      </div>
    </div>
  );
};

export default TokenUtilities;