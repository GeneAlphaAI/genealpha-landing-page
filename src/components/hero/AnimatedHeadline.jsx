import { motion } from "framer-motion";
import { wordFadeIn } from "../../utilities/Motion";
import AnimatedLogo from "../animations/AnimatedLogo";

const sentence = [
  { type: "text", value: "Gene" },
  {
    type: "image",
    value: "/assets/brand/GeneAlphaLogo.svg",
    alt: "GeneAlpha logo",
  },
  {
    type: "text",
    value:
      "lpha is building the first Web3 prediction infrastructure that evolves using Genetic Algorithms",
  },
];

const smallHeadline = "The Prediction Model That Evolves Itself";

const AnimatedHeadline = () => {
  return (
    <div>
      {/* Main Headline - Visible on md and up */}
      <h1 className="hidden sm:flex justify-center text-xl text-primary-text font-semibold text-center leading-[120%] max-w-[28ch] flex-wrap gap-x-1">
        {sentence.map((part, i) => {
          if (part.type === "text") {
            return part.value.split(" ").map((word, j) => (
              <motion.span
                key={`word-${i}-${j}`}
                variants={wordFadeIn(i + j, 0.09)}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ));
          } else if (part.type === "image") {
            return (
              <motion.div
                key={`image-${i}`}
                src={part.value}
                alt={part.alt}
                variants={wordFadeIn(i)}
                initial="hidden"
                animate="show"
                className="h-max mt-[14.5px] mr-1 scale-[1.4]"
              >
                <AnimatedLogo />
              </motion.div>
            );
          }
          return null;
        })}
      </h1>

      {/* Small Headline - Visible on mobile only */}
      <h2 className="block sm:hidden text-xl text-primary-text font-semibold text-center leading-[120%]">
        {smallHeadline.split(" ").map((word, i) => (
          <motion.span
            key={`small-word-${i}`}
            variants={wordFadeIn(i, 0.09)}
            initial="hidden"
            animate="show"
            className="inline-block mr-3"
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

export default AnimatedHeadline;
