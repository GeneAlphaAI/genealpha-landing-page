import React from "react";

const FrameSelector = ({ frames, selectedFrame, onChange }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xs text-inactive-text uppercase font-jetbrains-mono">
        Frame
      </h3>
      <div className="flex gap-3 flex-wrap">
        {Object.keys(frames).map((label) => (
          <button
            key={label}
            // onClick={() => onChange(label)}
            className={`text-xs py-1 rounded-full uppercase hover:text-dull-white transition-all delay-100 ease-in-out font-jetbrains-mono ${
              selectedFrame === label ? "text-dull-white" : "text-dull-gray"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;
