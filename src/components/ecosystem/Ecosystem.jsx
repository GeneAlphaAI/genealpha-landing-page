import React from "react";

const techItems = [
  { name: "Alchemy", src: "/assets/ecosystem/Python.svg" },
  { name: "PyTorch", src: "/assets/ecosystem/Pytorch.svg" },
  { name: "CatBoost", src: "/assets/ecosystem/CatBoost.svg" },
  { name: "Pandas", src: "/assets/ecosystem/Pandas.svg" },
  { name: "TensorFlow", src: "/assets/ecosystem/TensorFlow.svg" },
  { name: "Docker", src: "/assets/ecosystem/Dockers.svg" },
  { name: "Alchemy", src: "/assets/ecosystem/Alchemy.svg" },
  { name: "PostgreSQL", src: "/assets/ecosystem/Postgres.svg" },
  { name: "MlFlow", src: "/assets/ecosystem/MlFlow.svg" },
  { name: "React", src: "/assets/ecosystem/Python.svg" },
];

const Ecosystem = () => {
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

      {/* Grid for Ecosystem logos */}
      <div className="grid grid-cols-2 md:grid-cols-5 mt-10 max-w-6xl">
        {techItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full w-auto object-contain"
            />
            {/* <p className="text-sm text-secondary-text">{item.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
