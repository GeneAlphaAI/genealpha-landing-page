import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const NavMenu = ({ menus }) => {
  return (
    <>
      {menus.map(({ name, items }) => (
        <NavigationMenu.Item key={name}>
          <NavigationMenu.Trigger className="text-inactive-text px-6 py-2 hover:text-dull-white text-xs font-semibold">
            {name}
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute left-0 top-0 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <div className="grid grid-cols-2 gap-2 p-3 w-max min-w-[400px]">
              {items.map(
                ({ name, href, description, icon, disabled, badge }) => (
                  <a
                    key={name}
                    href={disabled ? undefined : href}
                    target={disabled ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    onClick={(e) => disabled && e.preventDefault()}
                    className={`flex items-start gap-2 px-3 py-2 rounded transition text-sm ${
                      disabled
                        ? " cursor-not-allowed"
                        : "hover:bg-white/5 cursor-pointer"
                    }`}
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={name}
                        className="size-[17px] mt-0.5 opacity-50 shrink-0"
                      />
                    )}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-dull-white text-sm font-semibold ${
                            disabled ? "text-inactive-text" : "text-dull-white "
                          }`}
                        >
                          {name}
                        </span>
                        {badge && (
                          <span className="bg-dark-gray/20 font-jetbrains-mono font-medium uppercase text-dull-gray text-xs px-3 py-0.5 rounded-[2px]">
                            {badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs mt-1 text-inactive-text max-w-[25ch]">
                        {description}
                      </span>
                    </div>
                  </a>
                )
              )}
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      ))}
    </>
  );
};

export default NavMenu;
