import React from "react";
import ModelCard from "./hiveComponents/ModelCard";

const HiveCard = ({ title, subtitle, image, children, className }) => {
  return (
    <div
      className={`w-full md:w-max xl:w-full flex flex-col justify-center items-center ${className} py-8`}
    >
      <div className="w-full flex flex-col justify-start space-y-2">
        <h1 className="text-[18px] text-primary-text font-semibold text-left leading-[120%]">
          {title || "Model performance tracked clearly"}
        </h1>
        <p className="text-secondary-text text-sm text-left max-w-[45ch]">
          {subtitle ||
            "The Hive offers a very comprehensive GUI to showcase how each model is performing, all the relevant information is laid out clearly"}
        </p>
        <div className="relative w-full flex ">
          {children}

          {/* Right gradient */}
          <div className="absolute right-0 top-0 h-full w-40 md:w-100  bg-gradient-to-l from-primary via-primary/90 to-transparent pointer-events-none" />

          {/* Bottom gradient */}
          <div className="absolute left-0 bottom-0 w-full h-30 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default HiveCard;
