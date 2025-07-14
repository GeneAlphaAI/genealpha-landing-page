import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Token from "./pages/Token";
import MobileSidebar from "./components/navigation/MobileSidebar";

function App() {
  const [count, setCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleHamburgerClick = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const location = useLocation();
  return (
    <div className="font-inter bg-primary scroll-smooth text-white min-h-screen">
      <NavBar
        isDrawerOpen={isDrawerOpen}
        onHamburgerClick={handleHamburgerClick}
        onCloseDrawer={handleCloseDrawer}
      />
      <MobileSidebar isOpen={isDrawerOpen} />
      {/* <img
        src="/assets/gradients/MiddleGlow.svg"
        className="w-full h-[150dvh] absolute top-[1500px] right-20 z-0 opacity-40 "
        loading="lazy"
      />
      <img
        src="/assets/gradients/MiddleGlow.svg"
        className="w-full h-full absolute top-[3500px] -right-300 z-0 opacity-40 "
        loading="lazy"
      />
      <img
        src="/assets/gradients/HiveGlow.svg"
        className="w-full h-[150dvh] absolute top-[4000px] -right-100 z-0 opacity-40 "
        loading="lazy"
      /> */}
      <div className=" z-1">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/token" element={<Token />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
