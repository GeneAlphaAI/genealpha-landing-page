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
        "Claim priority access to the reigning Alpha model, deploy its signals before anyone else, and stay ahead with continual upgrades.",
    },
  ];
  return (
    <div className="w-full px-4 pt-[200px] pb-[150px] flex flex-col gap-[80px] justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <h1 className="text-md text-dull-white font-medium text-center leading-[120%] font-inter">
          Explore key utilities that come with the $GA token
        </h1>
        <p className="text-low-opacity-text text-sm text-center max-w-[50ch] font-inter font-medium">
          These utilities are just the tip of the iceberg, GeneAlpha will keep
          adding perks and boosting token value over time.
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