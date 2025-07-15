import React from "react";
import TokenIntro from "../components/ga-token/TokenIntro";
import TokenUtilities from "../components/ga-token/TokenUtilities";
import Tokenomics from "../components/ga-token/Tokenomics";
import JoinAlpha from "../components/ga-token/JoinAlpha";

const Token = () => {
  return <div>
    <TokenIntro/>
    <TokenUtilities/>
    <Tokenomics/>
    <JoinAlpha/>
  </div>;
};

export default Token;
