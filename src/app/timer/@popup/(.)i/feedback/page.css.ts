import { tv } from "tailwind-variants";

export const section = tv({
  base: [
    "w-[300px]",
    "min-h-[418px]",
    "h-auto",
    "bg-[#FBF8F2]",
    "rounded-[18px]",
    "flex",
    "justify-center",
    "items-center",
    "flex-col",
  ],
});

export const itemLayer = tv({
  base: ["mt-[38px]", "mb-[65px]", "w-full", "relative"],
});

export const buttonLayer = tv({
  base: ["w-full", "flex", "gap-[12px]", "justify-center", "px-[24px]"],
});
