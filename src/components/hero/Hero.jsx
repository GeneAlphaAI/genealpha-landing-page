import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import AnimatedHeadline from "./AnimatedHeadline";
import { motion } from "framer-motion";
import { fadeVariant, wordFadeIn } from "../../utilities/Motion";
const Hero = () => {
  return (
    <div className="w-full flex flex-col relative h-[120dvh] xs:h-[130dvh] overflow-hidden items-center">
      <div className="w-full max-w-6xl mt-10 space-y-[25px] px-5 1xl:px-0 z-[4]">
        <AnimatedHeadline />
        <motion.p
          variants={wordFadeIn(1.5, 1)}
          initial="hidden"
          animate="show"
          className="text-secondary-text text-center sm:text-left text-md max-w-[55ch]"
        >
          Model Zoo based prediction system using more than 15 baseline models
          to breed the strongest prediction model to date using Genetic
          Algorithms.
        </motion.p>
        <motion.div
          variants={wordFadeIn(2, 1)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10"
        >
          <PrimaryButton defaultPadding="px-10 py-2">
            Get Involved
          </PrimaryButton>
          <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <p>Read Docs</p>
            <img
              src="/assets/hero/RightArrow.svg"
              alt="Right Arrow - Docs"
              className=""
            />
          </button>
        </motion.div>
      </div>
      <motion.img
        variants={fadeVariant({
          direction: "down",
          delay: 2.5,
          duration: 0.7,
        })}
        initial="hidden"
        animate="show"
        src="/assets/hero/DAppSkew.webp"
        alt="Right Arrow - Docs"
        className="absolute top-100 md:top-70 transform translate-x-[380px] sm:translate-x-[200px] w-full max-w-[2420px] min-w-[1200px] z-[1]"
      />
      <div className="absolute bottom-0 left-0 right-0 h-100 z-[3]  pointer-events-none bg-gradient-to-t from-primary to-transparent"></div>
      <div className="hidden sm:absolute top-0 right-0 h-full w-150 z-[3] pointer-events-none bg-gradient-to-l from-primary to-transparent"></div>
    </div>
  );
};

export default Hero;
