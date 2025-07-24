import React from "react";
import PhaseItem from "./PhaseItem";
const phaseItems = [
  {
    title: "The Hive",
    description:
      "Our decentralized hub where the GeneAlpha community can train, breed, deploy, utilize, and sell their machine-learning models, an ongoing mission with no finish line.",
    progress: 79,
    status: "INTEGRATING MODEL TRAINING PIPELINES",
  },
  {
    title: "Live inference on the Hive",
    description:
      "Spin up and deploy a few machine-learning models on a limited dataset as a proof of concept, the focus here is proving the pipeline, not perfect accuracy.",
    progress: 100,
  },
  {
    title: "Model training pipeline",
    description:
      "Build a no-code training pipeline for both the GeneAlpha community and our in-house team, and assemble the initial datasets to power it.",
    progress: 60,
    status: "CREATING MODEL-SPECIFIC DATASETS",
  },
  {
    title: "Genetic algorithm injection",
    description:
      "Choose a compatible genetic algorithm and integrate it into a few hand-picked models to prove the pipeline works.",
    progress: 10,
    status: "ALGORITHM SELECTION AND PLANNING",
  },
];
const IgnitionPhase = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {" "}
      {phaseItems.map((item, idx) => (
        <PhaseItem
          key={idx}
          title={item.title}
          description={item.description}
          progress={item.progress}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default IgnitionPhase;
