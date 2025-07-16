import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import AnimatedCards from "./AnimatedCards";
import BlurText from "../animations/BlurText";
import { motion } from "framer-motion";
import { fadeVariant } from "../../utilities/Motion";

const Github = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="github"
      ref={sectionRef}
      className="w-full flex items-center px-5 1xl:px-0 justify-center py-30 overflow-hidden"
    >
      <motion.div
        variants={fadeVariant({
          direction: "down",
          delay: 0.1,
          duration: 0.7,
        })}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        className="max-w-6xl w-full flex flex-col px-3 overflow-hidden pb-6 md:py-0 md:flex-row border-1 border-stroke-gray relative bg-primary px-10 rounded-[15px]  md:max-h-[435px]"
      >
        <div className="max-w-[500px]">
          <AnimatedCards shouldAnimate={hasAnimated} />
        </div>

        <img
          src="/assets/github/CornerGlow.svg"
          className="absolute inset-0 top-0 left-0 z-1 h-full rounded-l-[15px]"
          loading="lazy"
        />
        <div className="flex flex-col justify-center items-end ml-auto space-y-4">
          <BlurText
            text="See what team GeneAlpha is up-to through our GitHub"
            className="text-title-md sm:text-lg  text-primary-text font-semibold justify-end leading-[120%] max-w-[22ch]"
            delay={250}
            animateBy="words"
            direction="bottom"
            stepDuration={0.35}
            staggerType="overlap"
          />
          <p className="text-secondary-text text-sm sm:text-md text-right max-w-[30ch]">
            Track latest updates and development updates with your up-to-date
            GitHub.
          </p>
          <PrimaryButton
            defaultPadding="px-10 py-2 z-1"
            onClick={() => {
              window.open("https://github.com/GeneAlphaAI", "_blank");
            }}
          >
            Visit GitHub
          </PrimaryButton>
        </div>
      </motion.div>
    </section>
  );
};

export default Github;
