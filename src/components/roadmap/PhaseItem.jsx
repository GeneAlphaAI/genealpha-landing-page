import React, { useEffect, useState } from "react";

const PhaseItem = ({ title, description, progress, status }) => {
  const isComplete = progress >= 100;
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    // Delay to trigger transition after mount
    const timeout = setTimeout(() => setAnimatedWidth(progress), 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="flex flex-col gap-1 items-start">
          <h3 className="text-white text-[18px] font-semibold">{title}</h3>
          <p className="text-sm text-low-opacity-text font-regular text-left">
            {description}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-4 items-center text-medium-opacity mb-2">
        {isComplete ? (
          <div className="flex items-center gap-1 text-xs font-jetbrains-mono font-regular">
            COMPLETED
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6.5" cy="7" r="6.5" fill="#47BF4B" />
              <path
                d="M3.41504 7.21842L5.11797 8.92138C5.31324 9.11664 5.62983 9.11664 5.82509 8.92137L9.6543 5.09197"
                stroke="#F9F9F9"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ) : (
          <div className="font-jetbrains-mono text-xs">{status}</div>
        )}
        <div className="text-right text-xs font-jetbrains-mono">
          {progress}%
        </div>
      </div>

      <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: `${animatedWidth}%`,
            background:
              "linear-gradient(90deg, #B4B4B4 0%, #FFF 49.52%, #949494 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PhaseItem;
