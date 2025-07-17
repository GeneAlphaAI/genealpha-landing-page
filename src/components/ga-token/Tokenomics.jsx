import React from "react";
import ModelCard from "../model/ModelCard";
import UtilityModelCard from "../model/UtilityModelCard";

function Tokenomics() {
  const tokenomics = [
    {
      title: "TOTAL SUPPLY",
      value: 10000000,
      description: "THE MAXIMUM AMOUNT OF $GA THAT CAN EVER EXIST.",
      highlight: false,
    },
    {
      title: "MARKETING",
      value: 1000000,
      description: "TO CREATE EXPOSURE, AWARENESS AND PARTNERSHIPS.",
      highlight: false,
    },
    {
      title: "$GA CONTRACT",
      value: "0x5e6dd9a767894470e7e93e603c25f681a5adf1ae",
      highlight: true,
    },
    {
      title: "TRADE FEE",
      value: "5% | 5%",
      description: "A fee of 5% is applied on buy and sell.",
      highlight: true,
    },
    {
      title: "TREASURY",
      value: 1000000,
      description: "TO HELP ONBOARD AND INCETIVIZE ADVISORY AND TALENT.",
      highlight: false,
    },
    {
      title: "RESERVE",
      value: 2000000,
      description: "TO HELP SUSTAIN THE ECOSYSTEM DURING UNFORESEEN EVENTS.",
      highlight: false,
    },
  ];
  return (
    <section className="pt-[150px]">
      <div className="flex flex-col gap-3 lg:gap-[25px] lg:flex-row justify-center items-center px-3 md:px-5 lg:px-0">
        <h1 className="text-title-md sm:text-lg text-primary-text font-inter font-semibold text-center lg:text-left leading-[120%] max-w-[12ch]">
          The Tokenomics of GeneAlpha
        </h1>
        <p className="text-secondary-text text-sm sm:text-md text-center font-inter font-medium lg:text-left leading-[120%] max-w-[40ch]">
          Transparent, practical tokenomics fueling steady growth, exposure, and
          the evolution of Web3's premier prediction engine.
        </p>
      </div>

      <div className="mt-20 px-3 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 justify-center items-start gap-3 md:gap-[30px] lg:gap-[60px] max-w-[640px] mx-auto">
          {tokenomics.map((tokenomics, index) => (
            <UtilityModelCard
              key={index}
              fullWidth={true}
              title={tokenomics.title}
              tokenomicsStat={tokenomics.value}
              hoverDescription={tokenomics.description}
              type={tokenomics.highlight ? 2 : 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
