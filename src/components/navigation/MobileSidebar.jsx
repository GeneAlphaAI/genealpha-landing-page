import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Genetic Algorithm", href: "/", type: "external" },
  { name: "Model Breeding", href: "#breeding", type: "local" },
  { name: "Hive", href: "#hive", type: "local" },
  { name: "GA Token", href: "/token", type: "local" },
  { name: "Github", href: "https://github.com/yourrepo", type: "external" },
  { name: "Community", href: "https://github.com/yourrepo", type: "local" },
  { name: "Docs", href: "https://github.com/yourrepo", type: "external" },
];

const MobileSidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed top-[64px] left-0 h-[calc(100%-64px)] w-full z-40 bg-primary/80 backdrop-blur-lg p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } 1xl:hidden`}
    >
      <div className="flex flex-col gap-2">
        {navLinks.map(({ name, href, type }) => {
          const isActive = location.pathname === href;
          const linkClass = `px-3 py-2 rounded-lg transition text-sm ${
            isActive ? "bg-white/10 text-white" : "text-dull-white"
          }`;

          if (type === "local") {
            return (
              <a key={name} href={href} className={linkClass}>
                {name}
              </a>
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
    </div>
  );
};

export default MobileSidebar;
