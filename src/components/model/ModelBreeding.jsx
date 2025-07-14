import React from "react";
import ModelDesktop from "./ModelDesktop";
import ModelMobile from "./ModelMobile";

const ModelBreeding = () => {
  return (
    <section
      id="breeding"
      className="w-full flex flex-col h-max px-5 md:px-0 justify-center items-center space-y-0 1xl:space-y-10 1xl:space-y-10 py-30 relative z-10"
    >
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center">
        <h1 className="text-title-md sm:text-lg  text-primary-text font-semibold text-center leading-[120%] max-w-[15ch]">
          Set the breeding ground for Alpha
        </h1>
        <p className="text-secondary-text text-sm sm:text-md text-center lg:text-left leading-[120%] max-w-[40ch]">
          Model breeding fine-tunes each baseline model according to weighted
          performance, breeding new, more-accurate models.
        </p>
      </div>
      <div className="hidden lg:block">
        <ModelDesktop />
      </div>
      <div className="block lg:hidden">
        <ModelMobile />
      </div>
    </section>
  );
};

export default ModelBreeding;
