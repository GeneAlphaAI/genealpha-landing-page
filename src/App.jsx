import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-inter bg-primary text-white min-h-screen">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
