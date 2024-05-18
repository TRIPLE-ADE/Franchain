import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex w-full items-center whitespace-nowrap text-white text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-neutral-700/70",
        primary: "bg-neutral-700",
        secondary: "bg-indigo-400 hover:bg-indigo-400/40",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
