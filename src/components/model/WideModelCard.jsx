import React from "react";

const WideModelCard = ({ title, sideImage, background = true }) => {
  return (
    <div
      className={`group relative border border-stroke-gray max-w-5xl w-full min-h-[110px] overflow-hidden ${
        background
          ? "bg-white/5 shadow-[inset_0_0_48px_0px_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }  rounded-[6px] p-4 transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-sm uppercase text-dull-white font-jetbrains-mono text-left leading-[120%] max-w-[20ch]">
        {title || "Baseline Model"}
      </h1>

      <div className="absolute inset-0 flex z-[10] flex-col justify-center items-center pointer-events-none">
        <img
          src={
            background
              ? "/assets/model/WideOverlay.svg"
              : "/assets/model/WideOverlay2.svg"
          }
          alt="Card Overlay"
          className=""
        />
      </div>
      {sideImage && (
        <div className="absolute bottom-0 right-0 p-3 flex z-[10] flex-col justify-center items-center pointer-events-none">
          <img src={sideImage} alt="Dots" className="" />
        </div>
      )}
    </div>
  );
};

export default WideModelCard;
