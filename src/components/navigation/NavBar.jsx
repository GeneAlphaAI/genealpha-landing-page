import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const navLinks = [
  { name: "Genetic Algorithm", href: "/" },
  { name: "Model Breeding", href: "/explore" },
  { name: "Hive", href: "/launch" },
  { name: "GA Token", href: "/dashboard" },
  { name: "Github", href: "/dashboard" },
  { name: "Community", href: "/dashboard" },
  { name: "Docs", href: "/dashboard" },
];

const NavBar = () => {
  return (
    <div className="p-4 w-full relative border-b-1 border-white/10 flex justify-center items-center">
      <div className="flex flex-row max-w-6xl items-center space-x-6 w-full relative justify-between gap-12">
        <img
          src="/assets/brand/GeneAlphaLogo.svg"
          alt="GeneAlpha Logo"
          className="h-[24px]"
        />
        <div className="flex gap-13">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-inactive-text hover:text-white/40 transition-color text-xs font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>
        <PrimaryButton textSize="sm:text-xs" className="">
          Launch Hive
        </PrimaryButton>
      </div>
    </div>
  );
};

export default NavBar;
