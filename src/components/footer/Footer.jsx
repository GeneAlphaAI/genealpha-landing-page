import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: "/assets/footer/Telegram.svg",
      href: "https://discord.gg/yourserver",
    },
    {
      icon: "/assets/footer/X.svg",
      href: "https://twitter.com/yourprofile",
    },
    {
      icon: "/assets/footer/Github.svg",
      href: "https://github.com/yourrepo",
    },
  ];

  const sitemapLinks = [
    { name: "Home", href: "/" },
    { name: "GA Token", href: "/explore" },
    { name: "Genetic Algorithm", href: "/launch" },
    { name: "Model Breeding", href: "/dashboard" },
  ];

  const resourceLinks = [
    { name: "Hive", href: "/docs" },
    { name: "Github", href: "https://github.com/yourrepo" },
    { name: "Whitepaper", href: "/community" },
    { name: "FAQ", href: "/community" },
  ];

  const connectLinks = [
    { name: "Contact us", href: "https://t.me/yourchannel" },
    { name: "Telegram", href: "https://twitter.com/yourprofile" },
    { name: "X (Twitter)", href: "https://twitter.com/yourprofile" },
    { name: "Github", href: "https://discord.gg/yourserver" },
  ];

  return (
    <div className="w-full h-[436px] border-t-[0.5px] border-stroke-gray items-center justify-center flex mt-30">
      <div className="w-6xl flex  h-full py-30 flex-col">
        <div className="flex w-full items-start justify-between">
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
                  className="hover:opacity-70 transition-opacity"
                >
                  <img src={link.icon} alt="social" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Sitemap, Resources, Connect */}
          <div className="flex flex-col w-full md:flex-row justify-between max-w-[600px] mr-20">
            {/* Sitemap */}
            <div>
              <h4 className="text-xs font-semibold text-dull-white mb-8">
                Sitemap
              </h4>
              <ul className="flex flex-col gap-2">
                {sitemapLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs text-inactive-text hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold text-dull-white mb-8">
                Resources
              </h4>
              <ul className="flex flex-col gap-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs text-inactive-text hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-semibold text-dull-white mb-8">
                Connect
              </h4>
              <ul className="flex flex-col gap-2">
                {connectLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-xs text-inactive-text hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between text-xs items-center h-[36px] mt-10">
          <span className="text-dark-gray">
            All rights reserved © {new Date().getFullYear()} GeneAlpha
          </span>

          <div className="flex gap-6 text-dark-gray">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/cookies" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="bg-white/10 flex text-xs items-center jusitfy-start rounded-[5px]">
            <div className="size-[26px]">
              <img
                src="/assets/footer/StatusGreen.svg"
                alt="Status"
                className=""
              />
            </div>

            <span className="text-[#B2B2B2] mr-2">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
