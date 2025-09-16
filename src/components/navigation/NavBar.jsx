import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import AnimatedLogo from "../animations/AnimatedLogo";
import NavMenu from "./NavMenu";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const navLinks = [
  { name: "Genetic Algorithm", href: "#product", type: "local" },
  { name: "Model Breeding", href: "#breeding", type: "local" },
  { name: "Hive", href: "#hive", type: "local" },
  { name: "GA Token", href: "/token", type: "route" }, // changed type here
  { name: "Github", href: "#github", type: "local" },
];
const menus = [
  {
    name: "Community",
    type: "menu",
    items: [
      {
        name: "Join our Telegram",
        href: "https://t.me/GeneAlphaAI",
        description:
          "Join our vibrant community to share ideas, have fun, and chat about Web3.",
        icon: "/assets/footer/Telegram.svg",
      },
      {
        name: "Follow us on X",
        href: "https://x.com/GeneAlphaAI",
        description:
          "Follow us on X for the latest updates on GeneAlpha and its development.",
        icon: "/assets/footer/X.svg",
      },

      {
        name: "Sneak into our Github",
        href: "https://github.com/GeneAlphaAI",
        description:
          "Explore our open-source codebase and help advance the GeneAlpha ecosystem.",
        icon: "/assets/footer/Github.svg",
      },
      {
        name: "Join Discord",
        href: "https://discord.gg/yourinvite",
        description:
          "Our Discord is geared toward developers and machine learning enthusiasts.",
        icon: "/assets/footer/Telegram.svg",
        disabled: true,
        badge: "Soon",
      },
    ],
  },
  {
    name: "Docs",
    type: "menu",
    items: [
      {
        name: "Whitepaper",
        href: "https://whitepaper.genealpha.ai",
        description:
          "Discover why and how we are building the GeneAlpha ecosystem.",
        icon: "/assets/menu/Whitepaper.svg",
      },
      {
        name: "Yellow Paper",
        href: "https://yourdomain.com/devguide",
        disabled: true,
        description:
          "Created for technical contributors who wish to join hands and scale with us.",
        icon: "/assets/menu/YellowPaper.svg",
        badge: "Soon",
      },
    ],
  },
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
    <div className="sticky top-0 z-50 bg-primary/30 backdrop-blur-lg border-b border-white/10 px-5 py-4 w-full">
      <div className="flex max-w-6xl mx-auto items-center justify-between w-full">
        {/* Logo */}
        <Link to={"/"} className="scale-[1.1]">
          <AnimatedLogo />
        </Link>

        {/* Links + NavMenu */}
        <div className="hidden 1xl:flex items-start gap-6 relative">
          <NavigationMenu.Root className="relative flex">
            <NavigationMenu.List className="flex items-center gap-2 relative">
              {/* Static Links */}
              {navLinks.map(({ name, href, type }) => (
                <NavigationMenu.Item key={name}>
                  <NavigationMenu.Link asChild>
                    {type === "local" ? (
                      <button
                        className="text-inactive-text px-6 hover:text-dull-white cursor-pointer py-2 text-xs font-semibold"
                        onClick={() => handleLocalLinkClick(href)}
                      >
                        {name}
                      </button>
                    ) : (
                      <Link
                        to={href}
                        className="text-inactive-text px-6 hover:text-dull-white cursor-pointer py-2 text-xs font-semibold"
                      >
                        {name}
                      </Link>
                    )}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}

              {/* Dropdown Menus */}
              <NavMenu menus={menus} />
            </NavigationMenu.List>

            {/* Viewport */}
            <NavigationMenu.Viewport className="absolute top-full -right-30 z-50 rounded-[10px] border border-stroke-gray bg-[#0F1010] shadow-lg h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] transition-[width,height] duration-300 data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut" />
          </NavigationMenu.Root>
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <PrimaryButton
            onClick={() => {
              window.open("https://hive.genealpha.ai/", "_blank");
            }}
            textSize="text-sm"
          >
            <div className="flex items-center gap-2">
              <img src="/assets/brand/HiveBlack.svg" />
              <h3>Launch Hive</h3>
            </div>
          </PrimaryButton>

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
