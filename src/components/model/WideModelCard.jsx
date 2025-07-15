import React from "react";

const WideModelCard = ({
  title,
  sideImage,
  hoverDescription,
  background = true,
}) => {
  return (
    <div
      className={`group relative border border-stroke-gray w-full min-h-[110px] hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.2)] overflow-hidden ${
        background
          ? "bg-white/5 shadow-[inset_0_0_48px_0px_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }  rounded-[6px] p-4 transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-sm uppercase text-dull-white font-jetbrains-mono text-left leading-[120%] max-w-[20ch]">
        {title || "Baseline Model"}
      </h1>
      <p className="max-w-[35ch] lg:max-w-[80ch] font-jetbrains-mono font-light text-xs uppercase mt-4 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        {hoverDescription ||
          "It's a model that is untuned and readily available in the market."}
      </p>

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
        <div className="absolute bottom-0 w-[180px] lg:w-max right-0 p-3 flex z-[10] flex-col justify-center items-center pointer-events-none">
          <img src={sideImage} alt="Dots" className="" />
        </div>
      )}
    </div>
  );
};

export default WideModelCard;
