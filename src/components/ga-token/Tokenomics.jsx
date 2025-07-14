import React from 'react'
import ModelCard from '../model/ModelCard'
import UtilityModelCard from '../model/UtilityModelCard';

function Tokenomics() {
  const tokenomics = [
    {
      title: "TOTAL SUPPLY",
      value: 10000000,
      description: "THE MAXIMUM AMOUNT OF $GA THAT CAN EVER EXIST.",
      highlight: false
    },
    {
      title: "MARKETING",
      value: 1000000,
      description: "TO CREATE EXPOSURE, AWARENESS AND PARTNERSHIPS.",
      highlight: false
    },
    {
      title: "$GA CONTRACT",
      value: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
      highlight: true
    },
    {
      title: "TRADE FEE",
      value: "5% | 5%",
      description: "A fee of 5% is applied on buy and sell.",
      highlight: true
    },
    {
      title: "TREASURY",
      value: 1000000,
      description: "TO HELP ONBOARD AND INCETIVIZE ADVISORY AND TALENT.",
      highlight: false
    },
    {
      title: "RESERVE",
      value: 1000000,
      description: "TO HELP SUSTAIN THE ECOSYSTEM DURING UNFORESEEN EVENTS.",
      highlight: false
    },
  ];
  return (
    <section className="pt-[150px] pb-[100px]">
      <div className="flex justify-center items-center">
        <h1 className="text-lg text-primary-text font-semibold text-left leading-[120%] max-w-[15ch]">
          The Tokenomics of GeneAlpha
        </h1>
        <p className="text-secondary-text text-md text-left leading-[120%] max-w-[40ch]">
          Model breeding fine-tunes each baseline model according to weighted
          performance, breeding new, more-accurate models.
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-3 justify-center items-start gap-[60px] max-w-[640px] mx-auto">
          {tokenomics.map((tokenomics, index) => (
            <UtilityModelCard key={index} fullWidth={true} title={tokenomics.title} tokenomicsStat={tokenomics.value} hoverDescription={tokenomics.description} type={tokenomics.highlight ? 2 : 1}  />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tokenomics