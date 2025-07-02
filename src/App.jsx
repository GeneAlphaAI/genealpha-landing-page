import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import Ecosystem from "./components/ecosystem/Ecosystem";
import ProductVideo from "./components/ecosystem/ProductVideo";
import ModelBreeding from "./components/model/ModelBreeding";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-inter bg-primary text-white min-h-screen">
      <NavBar />
      <img
        src="/assets/gradients/MiddleGlow.svg"
        className="w-full h-[150dvh] absolute top-60 top-[1500px] right-20 z-0 opacity-40 "
        loading="lazy"
      />

      <Hero />
      <Ecosystem />
      <ProductVideo />
      <ModelBreeding />
    </div>
  );
}

export default App;
