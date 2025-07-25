import React from "react";
import ModelCard from "./ModelCard";
import WideModelCard from "./WideModelCard";
import {
  CardFiveDots,
  CardFourDots,
  CardOneDots,
  CardThreeDots,
  CardTwoDots,
  WideCardDots,
} from "./ModelSvg";

const ModelDesktop = () => {
  const customCards = [
    {
      title: "OFFSPRING",
      sideImage: CardOneDots,
      description:
        "Tuned descendant model, optimized for higher accuracy than baseline.",
    },
    {
      title: "OFFSPRING",
      sideImage: CardTwoDots,
      description:
        "Tuned descendant model, optimized for higher accuracy than baseline.",
    },
    {
      title: "OFFSPRING",
      sideImage: CardThreeDots,
      description:
        "Tuned descendant model, optimized for higher accuracy than baseline.",
    },
    {
      title: "ALPHA",
      sideImage: CardFourDots,
      description: "The crowned champion that bested the rest of the models.",
    },
    {
      title: "OFFSPRING",
      sideImage: CardFiveDots,
      description:
        "Tuned descendant model, optimized for higher accuracy than baseline.",
    },
  ];
  return (
    <div className="relative w-full scale-80 1xl:scale-100 max-w-5xl flex flex-col justify-center items-center">
      <div className="max-w-5xl gap-[36px] flex justify-between items-between">
        {[...Array(5)].map((_, idx) => (
          <ModelCard key={`default-${idx}`} />
        ))}
      </div>
      <div className="relative w-[837px] h-[37px] z-0">
        <svg
          width="837"
          height="37"
          viewBox="0 0 837 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M629.25 0V10.8213C629.25 13.9793 627.279 16.675 624.5 17.75H828.821C832.648 17.75 835.75 14.6479 835.75 10.8213V0H836.25V10.8213C836.25 14.924 832.924 18.25 828.821 18.25H426.179C422.352 18.25 419.25 21.3521 419.25 25.1787V36H418.75V25.1787C418.75 21.076 422.076 17.75 426.179 17.75H621.821C625.648 17.75 628.75 14.6479 628.75 10.8213V0H629.25Z"
            fill="#353536"
          />
          <path
            d="M209 0V10.8213C209 13.9793 210.971 16.675 213.75 17.75H7.42871C3.60211 17.75 0.5 14.6479 0.5 10.8213V0H0V10.8213C0 14.924 3.32596 18.25 7.42871 18.25H412.071C415.898 18.25 419 21.3521 419 25.1787V36H419.5V25.1787C419.5 21.076 416.174 17.75 412.071 17.75H216.429C212.602 17.75 209.5 14.6479 209.5 10.8213V0H209Z"
            fill="#353536"
          />
          <path
            d="M418.823 36.396C418.921 36.4936 419.079 36.4936 419.177 36.396L420.768 34.805C420.865 34.7073 420.865 34.549 420.768 34.4514C420.67 34.3538 420.512 34.3538 420.414 34.4514L419 35.8656L417.586 34.4514C417.488 34.3538 417.33 34.3538 417.232 34.4514C417.135 34.549 417.135 34.7073 417.232 34.805L418.823 36.396ZM419 0.325684H418.75V36.2192H419H419.25V0.325684H419Z"
            fill="#353536"
          />
        </svg>
      </div>
      <div className="w-full items-center justify-center flex flex-col">
        <WideModelCard
          title="METRIC INFLUENCE ANALYSIS"
          hoverDescription={
            "A clear breakdown of how each feature shapes the model’s output, spotlighting the strongest drivers and revealing hidden biases."
          }
        />
        <div className="relative w-[4px] h-[37px] z-0">
          <svg
            width="4"
            height="37"
            viewBox="0 0 4 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.82322 36.0703C1.92085 36.1679 2.07915 36.1679 2.17678 36.0703L3.76777 34.4793C3.8654 34.3816 3.8654 34.2234 3.76777 34.1257C3.67014 34.0281 3.51184 34.0281 3.41421 34.1257L2 35.5399L0.585786 34.1257C0.488155 34.0281 0.329864 34.0281 0.232233 34.1257C0.134602 34.2234 0.134602 34.3816 0.232233 34.4793L1.82322 36.0703ZM2 0H1.75V35.8935H2H2.25V0H2Z"
              fill="#353536"
            />
          </svg>
        </div>

        <WideModelCard
          title="WEIGHTED SCORING"
          hoverDescription={
            "A composite score that blends multiple performance metrics—each weighted by relevance—so you can rank models with a single, objective number."
          }
        />
        <div className="relative w-[4px] h-[37px] z-0">
          <svg
            width="4"
            height="37"
            viewBox="0 0 4 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.82322 36.0703C1.92085 36.1679 2.07915 36.1679 2.17678 36.0703L3.76777 34.4793C3.8654 34.3816 3.8654 34.2234 3.76777 34.1257C3.67014 34.0281 3.51184 34.0281 3.41421 34.1257L2 35.5399L0.585786 34.1257C0.488155 34.0281 0.329864 34.0281 0.232233 34.1257C0.134602 34.2234 0.134602 34.3816 0.232233 34.4793L1.82322 36.0703ZM2 0H1.75V35.8935H2H2.25V0H2Z"
              fill="#353536"
            />
          </svg>
        </div>

        <WideModelCard
          title="CROSSOVER & MUTATION"
          background={false}
          sideImage={WideCardDots}
          hoverDescription={
            "Genetic-style operations that blend top performers and inject targeted tweaks—generating fresh model variants primed to outperform their parents."
          }
        />
      </div>
      <div className="relative w-[837px] h-[37px] z-0">
        <svg
          width="840"
          height="37"
          viewBox="0 0 840 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M837.823 36.396C837.921 36.4936 838.079 36.4936 838.177 36.396L839.768 34.8052C839.865 34.7076 839.865 34.5493 839.768 34.4517C839.67 34.354 839.512 34.354 839.414 34.4517L838.25 35.6157V25.398C838.25 21.2952 834.924 17.9693 830.821 17.9693H428.179C424.352 17.9693 421.25 14.8672 421.25 11.0405V0.219257H420.75V11.0405C420.75 15.1433 424.076 18.4693 428.179 18.4693H623.821C627.648 18.4693 630.75 21.5714 630.75 25.398V35.6157L629.586 34.4517C629.488 34.354 629.33 34.354 629.233 34.4517C629.135 34.5493 629.135 34.7076 629.233 34.8052L630.823 36.396C630.921 36.4936 631.079 36.4936 631.177 36.396L632.768 34.8052C632.865 34.7076 632.865 34.5493 632.768 34.4517C632.67 34.354 632.512 34.354 632.414 34.4517L631.25 35.6157V25.398C631.25 22.2399 629.279 19.5442 626.5 18.4693H830.821C834.648 18.4693 837.75 21.5714 837.75 25.398V35.6157L836.586 34.4517C836.488 34.354 836.33 34.354 836.233 34.4517C836.135 34.5493 836.135 34.7076 836.233 34.8052L837.823 36.396Z"
            fill="#353536"
          />
          <path
            d="M2.42664 36.396C2.32901 36.4936 2.17075 36.4936 2.07312 36.396L0.4823 34.8052C0.384674 34.7076 0.384674 34.5493 0.4823 34.4517C0.579926 34.354 0.73819 34.354 0.835815 34.4517L1.99988 35.6157V25.398C1.99988 21.2952 5.32584 17.9693 9.42859 17.9693H414.071C417.898 17.9693 421 14.8672 421 11.0405V0.219257H421.5V11.0405C421.5 15.1433 418.174 18.4693 414.071 18.4693H218.429C214.602 18.4693 211.5 21.5714 211.5 25.398V35.6157L212.664 34.4517C212.762 34.354 212.92 34.354 213.017 34.4517C213.115 34.5493 213.115 34.7076 213.017 34.8052L211.427 36.396C211.329 36.4936 211.171 36.4936 211.073 36.396L209.482 34.8052C209.385 34.7076 209.385 34.5493 209.482 34.4517C209.58 34.354 209.738 34.354 209.836 34.4517L211 35.6157V25.398C211 22.2399 212.971 19.5442 215.75 18.4693H9.42859C5.60199 18.4693 2.49988 21.5714 2.49988 25.398V35.6157L3.66394 34.4517C3.76157 34.354 3.91983 34.354 4.01746 34.4517C4.11508 34.5493 4.11508 34.7076 4.01746 34.8052L2.42664 36.396Z"
            fill="#353536"
          />
          <path
            d="M421.177 36.0703C421.079 36.168 420.921 36.168 420.823 36.0703L419.232 34.4793C419.134 34.3817 419.134 34.2234 419.232 34.1258C419.33 34.0282 419.488 34.0282 419.586 34.1258L421 35.54L422.414 34.1258C422.512 34.0282 422.67 34.0282 422.768 34.1258C422.865 34.2234 422.865 34.3817 422.768 34.4793L421.177 36.0703ZM421 35.8936H420.75V6.48499e-05H421H421.25V35.8936H421Z"
            fill="#353536"
          />
        </svg>
      </div>

      <div className="max-w-5xl gap-[36px] flex justify-between items-between">
        {customCards.map((card, idx) => (
          <ModelCard
            key={`custom-${idx}`}
            title={card.title}
            sideImage={card.sideImage}
            hoverDescription={card?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelDesktop;
