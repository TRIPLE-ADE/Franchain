import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "@/constant/data.ts";
import { MenuItem } from "@/types/collapsible";
import CollapsibleMenuItem from "./custom/CollapsibleMenuItem";
import { Button } from "./ui/button";

/**
 * Sidebar component that displays a collapsible menu with menu items and a settings button.
 */
const Sidebar: React.FC = () => {
  const [openMenuItem, setOpenMenuItem] = useState<number | null>(null);
  const { pathname } = useLocation();

  /**
   * Handles the click event of a menu item to toggle the open state of the collapsible menu item.
   * @param index - The index of the menu item.
   */
  const handleMenuItemClick = (index: number) => {
    setOpenMenuItem((prevOpenMenuItem) =>
      prevOpenMenuItem === index ? null : index,
    );
  };

  return (
    <div className="w-[289px] py-[60px] top-0 h-full bg-neutral-900 text-white fixed flex flex-col overflow-y-auto side-scrollbar -left-full sm:left-0">
      <Link to="/" className="text-[40px] font-bold pb-[60px] pl-[30px]">
        Franchain
      </Link>
      <ul className="flex flex-col gap-[10px] mb-10">
        {/* Render menu items */}
        {menuItems.map((menuItem: MenuItem, index: number) =>
          menuItem.submenu ? (
            // Render collapsible menu item if it has a submenu
            <CollapsibleMenuItem
              key={index}
              {...menuItem}
              onToggle={() => handleMenuItemClick(index)}
              isOpen={index === openMenuItem}
              pathname={pathname}
            />
          ) : (
            // Render menu item if it does not have a submenu
            <li key={index}>
              <Button
                variant={pathname === menuItem.path ? "primary" : "default"}
                className="justify-between"
              >
                <Link to={menuItem.path!}>{menuItem.label}</Link>
                <span className="py-[5px] px-2.5 bg-white rounded text-sm text-black font-normal">
                  1/6
                </span>
              </Button>
            </li>
          ),
        )}
      </ul>
      <Button
        asChild
        className="mt-auto"
        variant={pathname === "/settings" ? "primary" : "default"}
      >
        <Link to="/settings">Settings</Link>
      </Button>
    </div>
  );
};

export default Sidebar;
