import React, { useState } from "react";
import Tabs from "../components/roadmap/Tabs";
import IncentivePhase from "../components/roadmap/IncentivePhase";
import AdoptionPhase from "../components/roadmap/AdoptionPhase";
import IgnitionPhase from "../components/roadmap/IgnitionPhase";
import AccuracyPhase from "../components/roadmap/AccuracyPhase";
import ComingSoon from "../components/roadmap/ComingSoon";

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Ignition Phase", component: <IgnitionPhase /> },
    { label: "Accuracy Phase", component: <ComingSoon /> },
    { label: "Incentives Phase", component: <ComingSoon /> },
    { label: "Adoption Phase", component: <ComingSoon /> },
  ];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-5 pt-20 px-5 relative">
      <img
        src="/assets/gradients/RoadmapGlow.svg"
        className="w-full h-full absolute top-[0] right-0 z-0 opacity-70 "
        loading="lazy"
      />
      <div className="w-full flex flex-col justify-center items-center space-y-4 z-10">
        <h1 className="text-title-md sm:text-lg text-primary-text font-semibold text-center leading-[120%]">
          Roadmap
        </h1>
        <p className="text-secondary-text text-sm sm:text-md text-center max-w-[60ch]">
          Track GeneAlpha’s progress through our transparent roadmap.
        </p>
      </div>
      <div className="w-full max-w-3xl bg-white/5 rounded-[25px] backdrop-blur-sm border-[0.5px] border-stroke-gray flex flex-col items-center justify-center mt-10 space-y-[25px] p-[20px] lg:py-[40px] lg:px-[50px] z-[4]">
        {/* Desktop Tabs */}
        <div className="hidden sm:flex w-full justify-center">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {/* Mobile Switcher */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <button
            onClick={handlePrev}
            className="text-white/70 text-xl px-3 py-1 rounded hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-white text-sm font-medium text-center">
            {tabs[activeTab].label}
          </span>
          <button
            onClick={handleNext}
            className="text-white/70 text-xl px-3 py-1 rounded hover:text-white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Active Component */}
        <div className="w-full text-white text-center text-md min-h-[100px]">
          {tabs[activeTab].component}
        </div>

        {/* Disclaimer */}
        <div className="border-t-[0.5px] border-white/5 w-full text-[10px] text-white/20 font-regular pt-4">
          <p>
            <b>Disclaimer:</b> This roadmap is for information only and may
            change without notice. It is not financial, investment, legal, or
            tax advice, nor a binding promise from GeneAlpha. $GA tokens confer
            only the on-chain rights encoded in their smart contracts; they are
            not equity, dividends, or voting shares. Participation involves
            technological, regulatory, and market risks, including contract bugs
            and token volatility. Do your own research and consult professionals
            before engaging. GeneAlpha accepts no liability for losses arising
            from reliance on this roadmap.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
