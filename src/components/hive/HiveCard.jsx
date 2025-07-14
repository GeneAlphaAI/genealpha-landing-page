import React from "react";

const HiveCard = ({ title, subtitle, image }) => {
  return (
    <div className="1xl:w-max flex flex-col justify-center items-center px-5 py-8">
      <div className=" flex flex-col justify-start space-y-2">
        <h1 className="text-[18px] text-primary-text font-semibold text-left leading-[120%]">
          {title || "Model performance tracked clearly"}
        </h1>
        <p className="text-secondary-text text-sm text-left max-w-[50ch]">
          {subtitle ||
            "The Hive offers a very comprehensive GUI to showcase how each model is performing, all the relevant information is laid out clearly"}
        </p>
        <img
          src={image}
          alt="DApp PNG"
          className="w-full 1xl:max-w-[350px] 2xl:max-w-[500px] mt-10"
        />
      </div>
    </div>
  );
};

export default HiveCard;
