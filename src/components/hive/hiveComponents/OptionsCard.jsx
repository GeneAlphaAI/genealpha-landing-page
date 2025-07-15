import React, { useState, useRef, useEffect } from "react";

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
  const [hovered, setHovered] = useState(null);
  const [tickY, setTickY] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const activeSymbol = hovered || selected;
  const delayRef = useRef(null);

  // Update tick position on active change
  useEffect(() => {
    const index = OPTIONS.findIndex((opt) => opt.symbol === activeSymbol);
    const el = itemRefs.current[index];
    if (el && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      setTickY(elTop - containerTop + el.offsetHeight / 2 - 7); // center tick
    }
  }, [activeSymbol]);

  const handleMouseLeave = () => {
    delayRef.current = setTimeout(() => {
      setHovered(null);
    }, 150); // adjust delay here
  };

  const handleMouseEnter = (symbol) => {
    if (delayRef.current) clearTimeout(delayRef.current);
    setHovered(symbol);
  };

  return (
    <div className="bg-white/2 border-1 space-y-3 border-stroke-gray md:w-[500px] mt-3 2xl:min-w-[450px] min-w-[350px] 2xl:max-w-[450px] w-full h-[350px] rounded-[10px] py-4 flex flex-col">
      <div className="flex items-center mx-9">
        <h2 className="text-[16px] font-medium text-dull-white max-w-[25ch] sm:max-w-[35ch] truncate">
          Showing Predictions: <b>{selected}</b>{" "}
          {OPTIONS.find((o) => o.symbol === selected)?.name}
        </h2>
      </div>
      <div className="flex flex-col gap-1 relative px-3" ref={containerRef}>
        {/* Animated Tick */}
        <div
          className="absolute left-0 flex items-center ml-3 justify-center transition-transform duration-400 ease-in-out"
          style={{ transform: `translateY(${tickY}px)` }}
        >
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
        </div>

        {/* Option Buttons */}
        {OPTIONS.map((option, idx) => (
          <button
            key={option.symbol}
            ref={(el) => (itemRefs.current[idx] = el)}
            className={`flex items-center gap-2 pl-6 pr-3 py-2 text-[16px] transition-all w-full duration-250 ease-in-out ${
              selected === option.symbol
                ? "text-dull-white"
                : "text-dull-white rounded-sm active:scale-[0.97]"
            }`}
            // onClick={() => setSelected(option.symbol)}
            onMouseEnter={() => handleMouseEnter(option.symbol)}
            onMouseLeave={handleMouseLeave}
          >
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
