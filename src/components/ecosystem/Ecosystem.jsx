import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techItems = [
  {
    name: "Python",
    src: "/assets/ecosystem/Python.svg",
    altSrc: "/assets/ecosystem/Python-alt.svg",
    description:
      "Python, an easy-to-read programming language, pulls market data, breeds and scores models, then saves the best predictor for real-time use.",
  },
  {
    name: "Alchemy",
    src: "/assets/ecosystem/Alchemy.svg",
    altSrc: "/assets/ecosystem/Alchemy-alt.svg",
    description:
      "Alchemy provides powerful APIs and infrastructure to interact with Ethereum and other blockchain networks reliably and at scale.",
  },
  {
    name: "PyTorch",
    src: "/assets/ecosystem/Pytorch.svg",
    altSrc: "/assets/ecosystem/Pytorch-alt.svg",
    description:
      "PyTorch, a flexible deep learning library, enables rapid model development, experimentation, and deployment in production environments.",
  },
  {
    name: "CatBoost",
    src: "/assets/ecosystem/CatBoost.svg",
    altSrc: "/assets/ecosystem/CatBoost-alt.svg",
    description:
      "CatBoost is a gradient boosting framework that excels at handling categorical features without preprocessing, boosting model accuracy.",
  },
  {
    name: "Pandas",
    src: "/assets/ecosystem/Pandas.svg",
    altSrc: "/assets/ecosystem/Pandas-alt.svg",
    description:
      "Pandas simplifies data manipulation and analysis by offering powerful data structures like DataFrames for handling tabular data.",
  },
  {
    name: "TensorFlow",
    src: "/assets/ecosystem/TensorFlow.svg",
    altSrc: "/assets/ecosystem/TensorFlow-alt.svg",
    description:
      "TensorFlow allows scalable machine learning workflows, from building neural networks to deploying models in production on any platform.",
  },
  {
    name: "Docker",
    src: "/assets/ecosystem/Docker.svg",
    altSrc: "/assets/ecosystem/Docker-alt.svg",
    description:
      "Docker packages applications into lightweight containers, ensuring consistent environments across development, testing, and production.",
  },
  {
    name: "PostgreSQL",
    src: "/assets/ecosystem/Postgres.svg",
    altSrc: "/assets/ecosystem/Postgres-alt.svg",
    description:
      "PostgreSQL is a robust open-source relational database that supports advanced querying, scalability, and strong data integrity features.",
  },
  {
    name: "MlFlow",
    src: "/assets/ecosystem/MlFlow.svg",
    altSrc: "/assets/ecosystem/MlFlow-alt.svg",
    description:
      "MLflow manages the entire machine learning lifecycle: tracking experiments, packaging code, and deploying models seamlessly.",
  },
  {
    name: "React",
    src: "/assets/ecosystem/Python.svg",
    altSrc: "/assets/ecosystem/Python-alt.svg",
    description:
      "React is a JavaScript library for creating dynamic user interfaces, making web apps fast, interactive, and component-based.",
  },
];

const Ecosystem = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="w-full px-4 py-30 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <h1 className="text-md text-primary-text font-semibold text-center leading-[120%]">
          Discover what is powering the GeneAlpha ecosystem.
        </h1>
        <p className="text-secondary-text text-sm text-center max-w-[60ch]">
          Out of hundreds of different things we use to make it happen, here are
          some of the more important ones.
        </p>
      </div>

      <div
        className="relative mt-10 max-w-6xl w-full"
        onMouseLeave={() => setHoveredItem(null)}
      >
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              onMouseEnter={() => setHoveredItem(item)}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              key={hoveredItem.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary/20 backdrop-blur-md z-10 gap-6 flex flex-row items-center justify-center pointer-events-none"
            >
              <motion.div
                src={hoveredItem.src}
                alt={hoveredItem.name}
                // className="size-[180px] border-2 border-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.3 }}
                className="flex h-[90px] w-[180px] items-center text-center"
                // onMouseEnter={() => setHoveredItem(item)}
              >
                <img
                  src={hoveredItem.altSrc}
                  alt={hoveredItem.name}
                  className="h-full w-full w-auto object-contain"
                />
              </motion.div>
              <div className="flex flex-col gap-2">
                <motion.h5
                  className="text-inactive-text text-sm font-semibold"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut", delay: 0.3 }}
                >
                  {hoveredItem.name}
                </motion.h5>
                <motion.p
                  className="text-dull-white text-sm max-w-[50ch]"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
                >
                  {hoveredItem.description}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Ecosystem;
