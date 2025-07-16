// components/ModelCard.jsx
import React, { useState, useEffect } from "react";
import FrameSelector from "./FrameSelector";
import FrameProgress from "./FrameProgress";
import ModelInfo from "./ModelInfo";

const FRAMES = {
  "1 Hour": 3600 * 1000,
  "4 Hours": 4 * 3600 * 1000,
  "24 Hours": 24 * 3600 * 1000,
  "7 Days": 7 * 24 * 3600 * 1000,
  "1 Month": 30 * 24 * 3600 * 1000,
};

const ModelCard = ({ title, description, badge }) => {
  const [frame, setFrame] = useState("1 Hour");
  const total = FRAMES["1 Hour"];
  const [startTime, setStartTime] = useState(() => Date.now() - total * 0.5);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(FRAMES[frame]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const remaining = total - elapsed;

      if (remaining <= 0) {
        setProgress(100);
        setTimeLeft(0);
        clearInterval(interval); // stop the timer
      } else {
        setProgress((elapsed / total) * 100);
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [frame, startTime]);

  const handleFrameChange = (newFrame) => {
    setFrame(newFrame);
    setStartTime(Date.now());
  };
  const width = window.innerWidth;

  return (
    <div className="bg-white/2 border-1 space-y-3 border-stroke-gray mt-3 md:w-[500px] 2xl:min-w-[450px] min-w-[350px] 2xl:max-w-[450px] w-full h-[350px] rounded-[10px] px-6 py-4 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h2 className="text-md font-medium">{title}</h2>
          <div className="bg-white/4 text-inactive-text px-4 font-medium font-jetbrains-mono text-xs uppercase flex items-center justify-center rounded-[5px] h-max p-1">
            {badge || "Baseline"}
          </div>
        </div>
        <p className="text-dull-white text-sm font-medium">{description}</p>
      </div>
      <div className="space-y-4 w-full ">
        <FrameSelector
          frames={FRAMES}
          selectedFrame={frame}
          onChange={handleFrameChange}
        />

        <FrameProgress progress={progress} timeLeft={timeLeft} />
        <div className="flex justify-between">
          {" "}
          <ModelInfo
            title={window.innerWidth < 600 ? "Predicted" : "Predicted Price"}
            value={`$2657.36`}
          />
          <ModelInfo
            title={"Error"}
            value={`0.31%`}
            valueClassName="text-sm md:text-[20px]"
          />
          <ModelInfo
            title={window.innerWidth < 600 ? "Current" : "Current Price"}
            value={`$2645.50`}
            infoClassName="items-end"
          />
        </div>
        <div className="flex gap-5 md:gap-10">
          <ModelInfo
            title={"MAE"}
            value={`2.40%`}
            valueClassName="text-sm md:text-md"
          />
          <ModelInfo
            title={"RMSE"}
            value={`2.90%`}
            valueClassName="text-sm md:text-md"
          />
          <ModelInfo
            title={"MAPE"}
            value={`0.39%`}
            valueClassName="text-sm md:text-md"
          />
          <ModelInfo
            title={"DA"}
            value={`80%`}
            valueClassName="text-sm md:text-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
