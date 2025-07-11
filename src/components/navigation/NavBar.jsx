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

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-primary/30 flex items-center justify-center backdrop-blur-lg border-b-[0.5px] border-white/10 p-4 w-full">
      <div className="flex flex-row max-w-6xl items-center space-x-6 w-full relative justify-between gap-12">
        <div className="scale-[1.1]">
          <AnimatedLogo />
        </div>

        <div className="flex gap-13">
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
        <PrimaryButton textSize="text-sm" className="">
          Launch Hive
        </PrimaryButton>
      </div>
    </div>
  );
};

export default NavBar;
