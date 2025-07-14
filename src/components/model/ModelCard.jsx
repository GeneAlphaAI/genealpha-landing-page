import React from "react";
import { formatValue } from "../../utilities/helpers";

// Helper function to check if value is a token address
const isTokenAddress = (value) => {
  return typeof value === 'string' && value.startsWith('0x') && value.length === 42;
};

// Helper function to copy text to clipboard
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    // You could add a toast notification here if needed
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};


const ModelCard = ({ title, hoverDescription, sideImage, tokenomicsStat, type = 1, fullWidth = false }) => {
  return (
    <div
      className={`group relative border border-stroke-gray min-w-[174px] min-h-[228px] overflow-hidden ${
        type === 2
          ? "bg-transparent"
          : "bg-white/5 shadow-[inset_0_0_48px_0px_rgba(255,255,255,0.04)]"
      }  hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.2)] rounded-[6px] p-4 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex flex-col gap-[10px] ${
          tokenomicsStat ? "mb-[30px]" : ""
        }`}
      >
        <h1 className={`text-sm uppercase text-dull-white font-jetbrains-mono text-left leading-[120%] ${fullWidth ? "" : "max-w-[8ch]"}`}>
          {title || "Baseline Model"}
        </h1>
        {tokenomicsStat && (
          <p 
            className={`text-low-opacity-text text-xs font-inter font-light uppercase break-all leading-tight ${
              isTokenAddress(tokenomicsStat) ? 'cursor-pointer hover:text-white/60 transition-colors' : ''
            } ${
              type === 2
                ? ''
                : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'
            }`}
            onClick={() => isTokenAddress(tokenomicsStat) && copyToClipboard(tokenomicsStat)}
          >
            {formatValue(tokenomicsStat)}
          </p>
        )}
      </div>

      <p
        className={`max-w-[16ch] font-jetbrains-mono font-light text-xs uppercase mt-4 text-white/40 ${
          type === 2
            ? ''
            : 'opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'
        }`}
      >
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
