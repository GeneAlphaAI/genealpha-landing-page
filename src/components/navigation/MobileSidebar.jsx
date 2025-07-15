import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Genetic Algorithm", href: "#product", type: "local" },
  { name: "Model Breeding", href: "#breeding", type: "local" },
  { name: "Hive", href: "#hive", type: "local" },
  { name: "GA Token", href: "/token", type: "local" },
  { name: "Github", href: "#github", type: "local" },
  { name: "Community", href: "https://github.com/yourrepo", type: "external" },
  { name: "Docs", href: "https://github.com/yourrepo", type: "external" },
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href, type) => {
    if (type === "local") {
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
    } else {
      window.open(href, "_blank");
    }
    onClose();
  };

  return (
    <div
      className={`fixed top-[60px] left-0 h-[calc(100%-60px)] w-full z-40 bg-primary/80 backdrop-blur-lg p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } 1xl:hidden`}
    >
      <div className="flex flex-col gap-2">
        {navLinks.map(({ name, href, type }) => {
          const isActive = location.pathname === href;
          const linkClass = `px-3 py-2 rounded-lg cursor-pointer transition text-sm ${
            isActive ? "bg-white/10 text-white" : "text-dull-white"
          }`;

          return (
            <button
              key={name}
              className={linkClass + " text-left"}
              onClick={() => handleLinkClick(href, type)}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSidebar;
