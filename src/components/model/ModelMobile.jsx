import React from "react";
import ModelCard from "./ModelCard";
import WideModelCard from "./WideModelCard";

const ModelMobile = () => {
  const customCards = [
    {
      title: "OFFSPRING",
      sideImage: "/assets/model/ModelDots3.svg",
      description:
        "Tuned descendant model, optimized for higher accuracy than baseline.",
    },
    {
      title: "ALPHA",
      sideImage: "/assets/model/ModelDots4.svg",
      description: "The crowned champion that bested the rest of the models.",
    },
    {
      title: "OFFSPRING",
      sideImage: "/assets/model/ModelDots5.svg",
      description:
        "Tuned descendant model, optimized for higher accuracy than baseline.",
    },
  ];
  return (
    <div className="relative w-full scale-78 xs:scale-100 sm:max-w-xl flex flex-col justify-center items-center">
      <div className="max-w-5xl gap-[26px] flex justify-between items-between">
        {[...Array(3)].map((_, idx) => (
          <ModelCard
            key={`default-${idx}`}
            className="w-[139px] h-[182px] sm:w-[174px] sm:h-[228px]"
          />
        ))}
      </div>
      <div className="relative w-[320px] xs:w-[424px] h-[37px] z-0">
        <svg
          width="100%"
          height="37"
          viewBox="0 0 424 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M420.25 0V10.8213C420.25 14.924 416.924 18.25 412.821 18.25H217.179C213.352 18.25 210.25 21.3521 210.25 25.1787V36H209.75V25.1787C209.75 21.076 213.076 17.75 217.179 17.75H412.821C416.648 17.75 419.75 14.6479 419.75 10.8213V0H420.25Z"
            fill="#353536"
          />
          <path
            d="M0 0V10.8213C0 14.924 3.32595 18.25 7.42871 18.25H203.071C206.898 18.25 210 21.3521 210 25.1787V36H210.5V25.1787C210.5 21.076 207.174 17.75 203.071 17.75H7.42871C3.6021 17.75 0.5 14.6479 0.5 10.8213V0H0Z"
            fill="#353536"
          />
          <path
            d="M209.823 36.3959C209.921 36.4936 210.079 36.4936 210.177 36.3959L211.768 34.805C211.865 34.7073 211.865 34.549 211.768 34.4514C211.67 34.3538 211.512 34.3538 211.414 34.4514L210 35.8656L208.586 34.4514C208.488 34.3538 208.33 34.3538 208.232 34.4514C208.135 34.549 208.135 34.7073 208.232 34.805L209.823 36.3959ZM210 0.325684H209.75V36.2192H210H210.25V0.325684H210Z"
            fill="#353536"
          />
        </svg>
      </div>
      <div className="w-full items-center justify-center flex flex-col">
        <WideModelCard title="METRIC INFLUENCE ANALYSIS" />
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

        <WideModelCard title="WEIGHTED SCORING" />
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
          sideImage={"/assets/model/WideModelDots.svg"}
        />
      </div>
      <div className="relative w-[320px] xs:w-[424px] h-[37px] z-0">
        <svg
          width="100%"
          height="37"
          viewBox="0 0 424 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M421.823 36.396C421.921 36.4936 422.079 36.4936 422.177 36.396L423.768 34.8052C423.865 34.7076 423.865 34.5493 423.768 34.4517C423.67 34.354 423.512 34.354 423.414 34.4517L422.25 35.6157V25.398C422.25 21.2952 418.924 17.9693 414.821 17.9693H219.179C215.352 17.9693 212.25 14.8672 212.25 11.0405V0.219257H211.75V11.0405C211.75 15.1433 215.076 18.4693 219.179 18.4693H414.821C418.648 18.4693 421.75 21.5714 421.75 25.398V35.6157L420.586 34.4517C420.488 34.354 420.33 34.354 420.233 34.4517C420.135 34.5493 420.135 34.7076 420.233 34.8052L421.823 36.396Z"
            fill="#353536"
          />
          <path
            d="M2.42664 36.396C2.329 36.4936 2.17075 36.4936 2.07312 36.396L0.4823 34.8052C0.384669 34.7076 0.384669 34.5493 0.4823 34.4517C0.579931 34.354 0.738184 34.354 0.835815 34.4517L1.99988 35.6157V25.398C1.99988 21.2952 5.32583 17.9693 9.42859 17.9693H205.071C208.898 17.9693 212 14.8672 212 11.0405V0.219257H212.5V11.0405C212.5 15.1433 209.174 18.4693 205.071 18.4693H9.42859C5.60197 18.4693 2.49988 21.5714 2.49988 25.398V35.6157L3.66394 34.4517C3.76157 34.354 3.91982 34.354 4.01746 34.4517C4.11509 34.5493 4.11509 34.7076 4.01746 34.8052L2.42664 36.396Z"
            fill="#353536"
          />
          <path
            d="M212.177 36.0703C212.079 36.168 211.921 36.168 211.823 36.0703L210.232 34.4793C210.134 34.3817 210.134 34.2234 210.232 34.1258C210.33 34.0282 210.488 34.0282 210.586 34.1258L212 35.54L213.414 34.1258C213.512 34.0282 213.67 34.0282 213.768 34.1258C213.865 34.2234 213.865 34.3817 213.768 34.4793L212.177 36.0703ZM212 35.8936H211.75V6.55651e-05H212H212.25V35.8936H212Z"
            fill="#353536"
          />
        </svg>
      </div>

      <div className="max-w-5xl h-max gap-[26px] flex justify-between items-between">
        {customCards.map((card, idx) => (
          <ModelCard
            key={`custom-${idx}`}
            title={card.title}
            sideImage={card.sideImage}
            className="w-[139px] h-[182px] sm:w-[174px] sm:h-[228px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ModelMobile;
