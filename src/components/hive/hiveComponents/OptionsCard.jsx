import React, { useState } from "react";

const OPTIONS = [
  { symbol: "FET", name: "(Artificial Superintelligence Alliance)" },
  { symbol: "VIRTUAL", name: "(Virtuals Protocol)" },
  { symbol: "ETH", name: "(Ethereum)" },
  { symbol: "PYTH", name: "(Pyth Network)" },
  { symbol: "SAND", name: "(The Sandbox)" },
  { symbol: "SOL", name: "(Solana)" },
];

const OptionsCard = () => {
  const [selected, setSelected] = useState("ETH");

  return (
    <div className="bg-white/2 border-1 space-y-3 border-stroke-gray md:w-[500px] mt-3 2xl:min-w-[450px] min-w-[350px] 2xl:max-w-[450px] w-full h-[350px] rounded-[10px] py-4 flex flex-col">
      <div className="flex items-center mx-8">
        <h2 className="text-[16px] font-medium text-dull-white max-w-[25ch] sm:max-w-[35ch] truncate">
          Showing Predictions: <b>ETH</b> (Ethereum)
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {OPTIONS.map((option) => (
          <button
            key={option.symbol}
            className={`flex items-center gap-2 px-3  py-2 text-[16px] transition-all w-full duration-250 ease-in-out   ${
              selected === option.symbol
                ? "text-dull-white"
                : "text-dull-white hover:bg-dull-gray/8 rounded-sm active:scale-[0.97]"
            } `}
          >
            <div className="w-[14px] h-[14px] flex items-center justify-center">
              {selected === option.symbol && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.9619L3.32701 6.56188C3.40072 6.64424 3.52938 6.64621 3.60629 6.56683C5.67998 4.42658 6.88592 3.18194 9 1"
                    stroke="#D4CD44"
                    strokeWidth="1.52"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
            <span className="max-w-[25ch] sm:max-w-[35ch] truncate font-medium inline-flex">
              <b>{option.symbol}</b>&nbsp;{option.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsCard;
