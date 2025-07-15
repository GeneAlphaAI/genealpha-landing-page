import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import AnimatedLogo from "../animations/AnimatedLogo";

const navLinks = [
  { name: "Genetic Algorithm", href: "#product", type: "local" },
  { name: "Model Breeding", href: "#breeding", type: "local" },
  { name: "Hive", href: "#hive", type: "local" },
  { name: "GA Token", href: "/token", type: "local" },
  { name: "Github", href: "#github", type: "local" },
  { name: "Community", href: "https://github.com/yourrepo", type: "external" },
  { name: "Docs", href: "https://github.com/yourrepo", type: "external" },
];

const NavBar = ({ isDrawerOpen, onHamburgerClick, onCloseDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLocalLinkClick = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    onCloseDrawer?.();
  };

  return (
    <div className="sticky top-0 z-50 bg-primary/30 flex items-center justify-center backdrop-blur-lg border-b-[0.5px] border-white/10 px-5 p-4 w-full">
      <div className="flex flex-row max-w-6xl items-center space-x-6 w-full relative justify-between gap-12">
        <div className="scale-[1.1]">
          <AnimatedLogo />
        </div>

        <div className="hidden 1xl:flex gap-13">
          {navLinks.map(({ name, href, type }) => {
            const linkClass =
              "text-inactive-text hover:text-dull-white delay-50 cursor-pointer transition-color text-xs font-semibold";

            if (type === "local") {
              return (
                <button
                  key={name}
                  className={linkClass}
                  onClick={() => handleLocalLinkClick(href)}
                >
                  {name}
                </button>
              );
            }

            return (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton textSize="text-sm">Launch Hive</PrimaryButton>

          <button
            onClick={isDrawerOpen ? onCloseDrawer : onHamburgerClick}
            className="block 1xl:hidden relative cursor-pointer w-6 h-6 focus:outline-none"
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          >
            {/* Hamburger Lines */}
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
