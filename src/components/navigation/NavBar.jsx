import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import AnimatedLogo from "../animations/AnimatedLogo";

const navLinks = [
  { name: "Genetic Algorithm", href: "/", type: "external" },
  { name: "Model Breeding", href: "#breeding", type: "external" },
  { name: "Hive", href: "#hive", type: "local" },
  { name: "GA Token", href: "/token", type: "local" },
  { name: "Github", href: "https://github.com/yourrepo", type: "external" },
  { name: "Community", href: "https://github.com/yourrepo", type: "local" },
  { name: "Docs", href: "https://github.com/yourrepo", type: "external" },
];

const NavBar = ({ isDrawerOpen, onHamburgerClick, onCloseDrawer }) => {
  return (
    <div className="sticky top-0 z-50 bg-primary/30 flex items-center justify-center backdrop-blur-lg border-b-[0.5px] border-white/10 px-5 p-4 w-full">
      <div className="flex flex-row max-w-6xl items-center space-x-6 w-full relative justify-between gap-12">
        <div className="scale-[1.1]">
          <AnimatedLogo />
        </div>

        {/* Middle Links — visible only on lg and above */}
        <div className="hidden 1xl:flex gap-13">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-inactive-text hover:text-dull-white delay-50 transition-color text-xs font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Launch Hive button — visible only on lg */}
          <PrimaryButton textSize="text-sm" className="">
            Launch Hive
          </PrimaryButton>

          {/* Hamburger — visible on mobile only */}
          <button
            onClick={isDrawerOpen ? onCloseDrawer : onHamburgerClick}
            className="block 1xl:hidden relative w-6 h-6 focus:outline-none"
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute left-0 top-1/2 w-5 h-[1px] bg-white transition-all duration-300 ease-in-out ${
                isDrawerOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-5 h-[1px] bg-white transition-opacity duration-300 ${
                isDrawerOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-5 h-[1px] bg-white transition-all duration-300 ease-in-out ${
                isDrawerOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
