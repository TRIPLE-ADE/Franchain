import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "@/constant/data.ts";
import { MenuItem } from "@/types/collapsible";
import CollapsibleMenuItem from "./custom/CollapsibleMenuItem";
import { Button } from "./ui/button";

const Sidebar: React.FC = () => {
  const [openMenuItem, setOpenMenuItem] = useState<number | null>(null);
  const { pathname } = useLocation();

  // Handle menu item click to toggle the open state of the collapsible menu item.
  const handleMenuItemClick = (index: number) => {
    setOpenMenuItem((prevOpenMenuItem) =>
      prevOpenMenuItem === index ? null : index
    );
  };

  return (
    <div className="w-[289px] py-[60px] top-0 h-full bg-neutral-900 text-white fixed flex flex-col overflow-y-auto side-scrollbar -left-full sm:left-0">
      <Link to="/" className="text-[40px] font-bold pb-[60px] pl-[30px]">
        Franchain
      </Link>
      <ul className="flex flex-col gap-2 mb-10">
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
                onClick={() => handleMenuItemClick(index)}
                variant={pathname === menuItem.path ? "primary" : "default"}
              >
                <Link to={menuItem.path!}>{menuItem.label}</Link>
              </Button>
            </li>
          )
        )}
      </ul>
      <Link to="/">Settings</Link>
    </div>
  );
};

export default Sidebar;
