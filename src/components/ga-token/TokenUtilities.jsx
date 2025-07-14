import React from "react";
import UtilityCard from "./UtilityCard";

const TokenUtilities = () => {
  const utilities = [
    {
      icon: "/assets/token-utilities/access-hive.svg",
      title: "Access the Hive",
      description:
        "The Hive offers a very comprehensive GUI to showcase how each model is performing, all the relevant information is laid out clearly",
    },
    {
      icon: "/assets/token-utilities/train.svg",
      title: "Train with your own feature-set",
      description:
        "The Hive offers a very comprehensive GUI to showcase how each model is performing, all the relevant information is laid out clearly",
    },
    {
      icon: "/assets/token-utilities/breeding.svg",
      title: "Sneak into the breeding process",
      description:
        "The Hive offers a very comprehensive GUI to showcase how each model is performing, all the relevant information is laid out clearly",
    },
    {
      icon: "/assets/token-utilities/alpha.svg",
      title: "Get your hands on the Alpha",
      description:
        "The Hive offers a very comprehensive GUI to showcase how each model is performing, all the relevant information is laid out clearly",
    },
  ];
  return (
    <div className="w-full px-4 pt-30 pb-[150px] flex flex-col gap-[80px] justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <h1 className="text-md text-primary-text font-semibold text-center leading-[120%]">
          Explore important utilities that comes with the $GA token
        </h1>
        <p className="text-secondary-text text-sm text-center max-w-[60ch]">
          The outlined utilities are only tip of the icerberg, GeneAlpha is
          committed to increase perks and value of its token overtime.
        </p>
      </div>

      {/* mapping utilities */}
      <div className="grid grid-cols-2 gap-x-[120px] gap-y-[80px] max-w-[933px] w-full">
        {utilities.map((utility, index) => (
          <UtilityCard key={index} {...utility} />
        ))}
      </div>
    </div>
  );
};

export default TokenUtilities;