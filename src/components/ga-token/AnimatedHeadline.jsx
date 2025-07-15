import { motion } from "framer-motion";
import { wordFadeIn } from "../../utilities/Motion";

const sentence = [
  {
    type: "text",
    value: "Introducing $GA, the powerful GeneAlpha token that supercharges the ecosystem.",
  },
];

const AnimatedHeadline = ({className="text-xl"}) => {
  return (
    <h1 className={` text-primary-text font-semibold text-center leading-[120%] max-w-[28ch] mx-auto flex justify-center flex-wrap gap-x-1 ${className}`}>
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
