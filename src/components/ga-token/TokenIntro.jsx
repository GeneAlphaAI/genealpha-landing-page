import React from "react";
import { motion } from "framer-motion";
import { wordFadeIn } from "../../utilities/Motion";
import AnimatedHeadline from "./AnimatedHeadline";
import AnimatedTokenSVG from "./AnimatedTokenSVG";

function TokenIntro() {

  return (
    <div className="w-full flex flex-col relative overflow-hidden items-center">
      <div className="w-full max-w-6xl mt-10 space-y-[25px] z-[2]">
        <AnimatedHeadline />
        <motion.p
          variants={wordFadeIn(1.5, 1)}
          initial="hidden"
          animate="show"
          className="text-secondary-text text-md max-w-[48ch] mx-auto text-center"
        >
          From getting access to the Hive, to training machine learning models
          using your own feature-set, everything is done using the GA and GA
          token alone.
        </motion.p>

        <AnimatedTokenSVG />
      </div>
    </div>
  );
}

export default TokenIntro;
