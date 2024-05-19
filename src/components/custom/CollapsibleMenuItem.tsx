import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CollapsibleMenuItemProps } from "@/types/collapsible";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CollapsibleMenuItem: React.FC<CollapsibleMenuItemProps> = ({
  isOpen,
  onToggle,
  label,
  children,
}) => {
  return (
    <li className="mt-auto">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger
          className="text-base font-light flex items-center gap-3"
          asChild
        >
          <Button className="justify-between">
            {label}
            <ChevronDownIcon
              className={cn(
                "h-6 w-6 transition-transform transform",
                isOpen && "rotate-180",
              )}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="relative ml-3 pb-2">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};

export default CollapsibleMenuItem;
