import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
  "flex w-full items-center whitespace-nowrap text-white text-base font-normal transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-neutral-700/70",
        primary: "bg-neutral-700 border-l border-l-4 border-l-indigo-400",
        secondary: "bg-indigo-400 hover:bg-indigo-400/40",
      },
      size: {
        default: "px-[30px] py-[15px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
