import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Genetic Algorithm", href: "#product", type: "local" },
  { name: "Model Breeding", href: "#breeding", type: "local" },
  { name: "Hive", href: "#hive", type: "local" },
  { name: "GA Token", href: "/token", type: "route" }, // changed to "route"
  { name: "Github", href: "#github", type: "local" },
  {
    name: "Whitepaper",
    href: "https://whitepaper.genealpha.ai",
    type: "external",
  },
];

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/yourgroup",
    icon: "/assets/footer/Telegram.svg",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/yourhandle",
    icon: "/assets/footer/X.svg",
  },
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href, type) => {
    if (type === "local") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (type === "route") {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        {navLinks.map(({ name, href, type }) => (
          <button
            key={name}
            className="px-3 py-2 rounded-lg text-left cursor-pointer transition text-sm text-dull-white hover:bg-white/10"
            onClick={() => handleLinkClick(href, type)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="border-t border-white/10 mt-4 pt-4 flex flex-col gap-2">
        <h3 className="text-sm text-inactive-text px-3 font-medium">Social</h3>
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-left cursor-pointer transition text-sm text-dull-white hover:bg-white/10"
            onClick={onClose}
          >
            <img src={icon} alt={name} className="w-4 h-4 opacity-80" />
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;
