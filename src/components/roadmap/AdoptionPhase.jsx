import React from "react";

const AdoptionPhase = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[500px]">
      <svg
        width="56"
        height="55"
        viewBox="0 0 56 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.3123 53.8541V48.125L49.7707 36.6666V12.6041H15.3957V16.0416L6.229 33.2291H13.104V37.8125H19.979L13.104 43.5416L15.3957 49.2708H22.2707V53.8541H38.3123Z"
          fill="white"
          fill-opacity="0.1"
        />
        <path
          d="M17.6875 12.6042V6.87504L22.2708 4.58337L26.8542 6.87504V3.43754L32.5833 1.14587L38.3125 3.43754V6.87504L42.8958 4.58337L47.4792 6.87504V12.6042"
          stroke="#BABABD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.271 21.7709V24.0625"
          stroke="#BABABD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38.3123 53.8541V48.125L49.7707 36.6666V12.6041H15.3957V16.0416L6.229 33.2291H13.104V37.8125H19.979L13.104 43.5416L15.3957 49.2708H22.2707V53.8541"
          stroke="#BABABD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36.021 21.7709H40.6043V27.5L37.1668 32.0834"
          stroke="#BABABD"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-dull-white font-medium text-[18px]">
          Still on the drawing board, Alpha.
        </h1>
        <p className="text-low-opacity-text text-sm max-w-[33ch] text-center">
          Once we’ve mapped this phase, we will drop the details on our official
          channels.
        </p>
      </div>
    </div>
  );
};

export default AdoptionPhase;
