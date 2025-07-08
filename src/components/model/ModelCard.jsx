import React from "react";

const ModelCard = ({ title, hoverDescription, sideImage }) => {
  return (
    <div className="group relative border border-stroke-gray min-w-[174px] min-h-[228px] overflow-hidden bg-white/5 shadow-[inset_0_0_48px_0px_rgba(255,255,255,0.04)] hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.3)] rounded-[6px] p-4 transition-all duration-300 ease-in-out">
      <h1 className="text-sm uppercase text-dull-white font-jetbrains-mono text-left leading-[120%] max-w-[8ch]">
        {title || "Baseline Model"}
      </h1>

      <p className="max-w-[16ch] font-jetbrains-mono font-light text-xs uppercase mt-4 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        {hoverDescription ||
          "It's a model that is untuned and readily available in the market."}
      </p>

      <div className="absolute inset-0 flex z-[10] flex-col justify-center items-center pointer-events-none">
        <img
          src="/assets/model/CardOverlay.svg"
          alt="Card Overlay"
          className=""
        />
      </div>
      {sideImage && (
        <div className="absolute bottom-0 right-0 p-3 flex z-[10] flex-col justify-center items-center pointer-events-none">
          <img src={sideImage} alt="Dots" className="" />
        </div>
      )}
      {title == "ALPHA" && (
        <div className="absolute top-0 group-hover:opacity-100 opacity-0 transition-opacity ease-in-out right-0 flex z-[5] flex-col justify-center items-center pointer-events-none">
          <img src="/assets/model/BlueGlow.svg" alt="Glow" className="" />
        </div>
      )}
    </div>
  );
};

export default ModelCard;
