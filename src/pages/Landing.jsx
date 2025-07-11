import React from "react";
import Hero from "../components/hero/Hero";
import Ecosystem from "../components/ecosystem/Ecosystem";
import ProductVideo from "../components/ecosystem/ProductVideo";
import ModelBreeding from "../components/model/ModelBreeding";
import Github from "../components/github/Github";
import Hive from "../components/hive/Hive";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Ecosystem />
      <ProductVideo />
      <ModelBreeding />
      <Hive />
      <Github />
    </div>
  );
};

export default Landing;
