import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Footer = () => {
  const socialLinks = [
    {
      icon: "/assets/footer/Telegram.svg",
      href: "https://t.me/GeneAlphaAI",
    },
    {
      icon: "/assets/footer/X.svg",
      href: "https://x.com/GeneAlphaAI",
    },
    {
      icon: "/assets/footer/Github.svg",
      href: "https://github.com/GeneAlphaAI",
    },
  ];

  const sitemapLinks = [
    { name: "Home", href: "/" },
    { name: "GA Token", href: "/token" },
    { name: "Genetic Algorithm", href: "#product" },
    { name: "Model Breeding", href: "#breeding" },
  ];

  const resourceLinks = [
    { name: "Hive", href: "https://hive.genealpha.ai/" },
    { name: "Github", href: "https://github.com/GeneAlphaAI" },
    { name: "Whitepaper", href: "https://whitepaper.genealpha.ai" },
    // { name: "FAQ", href: "/community" },
  ];

  const connectLinks = [
    // { name: "Contact us", href: "https://t.me/yourchannel" },
    { name: "Telegram", href: "https://t.me/GeneAlphaAI" },
    { name: "X (Twitter)", href: "https://x.com/GeneAlphaAI" },
    { name: "Github", href: "https://github.com/GeneAlphaAI" },
  ];

  return (
    <div className="w-full h-max md:h-[436px] border-t-[0.5px] border-stroke-gray items-center px-5 1xl:px-0 justify-center flex mt-30">
      <div className="w-6xl flex h-full py-10 md:py-30 flex-col">
        <div className="flex gap-10 flex-col 1xl:flex-row  w-full items-start justify-between">
          {/* Left: Logo and description */}
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <img
                src="/assets/brand/GeneAlphaLogo-2.svg"
                alt="Genealpha Logo"
                className="max-w-[151px]"
              />
              <p className="text-xs max-w-[40ch] font-regular text-inactive-text ">
                Building the breeding ground for sharp and focused prediction
                models using genetic algorithms.
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-60 delay-50 transition-opacity"
                >
                  <img src={link.icon} alt="social" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Sitemap, Resources, Connect */}
          <div className="flex flex-wrap w-full md:flex-row justify-between w-auto gap-10 1xl:max-w-[600px] 1xl:mr-20">
            {/* Sitemap */}
            <div className="flex flex-col">
              <h4 className="text-xs font-semibold text-dull-white mb-8">
                Sitemap
              </h4>
              <ul className="flex flex-col gap-2">
                {sitemapLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs text-inactive-text hover:text-dull-white delay-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col">
              <h4 className="text-xs font-semibold text-dull-white mb-8">
                Resources
              </h4>
              <ul className="flex flex-col gap-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs text-inactive-text hover:text-dull-white delay-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col">
              <h4 className="text-xs font-semibold text-dull-white mb-8">
                Connect
              </h4>
              <ul className="flex flex-col gap-2">
                {connectLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs text-inactive-text hover:text-dull-white delay-50 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:flex justify-between text-xs items-center h-[36px] mt-10 pb-5">
          <span className="text-dark-gray">
            All rights reserved © {new Date().getFullYear()} GeneAlpha
          </span>

          <div className="flex gap-6 text-dark-gray">
            <a href="/privacy" className="hover:text-dull-white delay-50">
              Privacy Policy
            </a>
            <a href="/cookies" className="hover:text-dull-white delay-50">
              Cookie Policy
            </a>
            <a href="/terms" className="hover:text-dull-white delay-50">
              Terms of Service
            </a>
          </div>
          <div className="bg-white/5 px-2 flex text-xs items-center justify-start rounded-[5px]">
            <motion.div
              className="size-[26px]"
              animate={{
                opacity: [1, 0.4, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/assets/footer/StatusGreen.svg"
                alt="Status"
                className="w-full h-full"
              />
            </motion.div>
            <span className="text-[#B2B2B2] mr-2">All systems operational</span>
          </div>
        </div>
        <div className="w-full gap-5 flex flex-col md:hidden justify-between text-xs items-center h-[36px] mt-10 pb-5">
          <div className="bg-white/5 px-2 flex text-xs items-center justify-start rounded-[5px]">
            <motion.div
              className="size-[26px]"
              animate={{
                opacity: [1, 0.4, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/assets/footer/StatusGreen.svg"
                alt="Status"
                className="w-full h-full"
              />
            </motion.div>
            <span className="text-[#B2B2B2] mr-2">All systems operational</span>
          </div>
          <div className="flex gap-6 text-dark-gray">
            <Link
              to={"/privacy"}
              href="/privacy"
              className="hover:text-dull-white delay-50"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/cookies"}
              href="/cookies"
              className="hover:text-dull-white delay-50"
            >
              Cookie Policy
            </Link>
            <Link to={"/terms"} className="hover:text-dull-white delay-50">
              Terms of Service
            </Link>
          </div>

          <span className="text-dark-gray pb-5">
            All rights reserved © {new Date().getFullYear()} GeneAlpha
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
