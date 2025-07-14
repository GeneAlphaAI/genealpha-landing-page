import { motion } from "framer-motion";
import { wordFadeIn } from "../../utilities/Motion";

const sentence = [
  {
    type: "text",
    value: "Explore the Alpha that comes with the $GA token by GeneAlpha",
  }
];

const AnimatedHeadline = () => {
  return (
    <h1 className="text-xl text-primary-text font-semibold text-center leading-[120%] max-w-[28ch] mx-auto flex justify-center flex-wrap gap-x-1">
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
            <motion.img
              key={`image-${i}`}
              src={part.value}
              alt={part.alt}
              variants={wordFadeIn(i)}
              initial="hidden"
              animate="show"
              className="inline-block mt-2 h-[0.8em]"
            />
          );
        }
        return null;
      })}
    </h1>
  );
};

export default AnimatedHeadline;
