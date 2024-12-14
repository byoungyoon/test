import { tv } from "tailwind-variants";

export const section = tv({
  base: [
    "w-[300px]",
    "min-h-[418px]",
    "h-auto",
    "bg-[#FBF8F2]",
    "rounded-[18px]",
    "flex",
    "items-center",
    "flex-col",
    "overflow-hidden",
  ],
});

export const imageLayer = tv({
  base: ["bg-[#F3EDE4]", "w-full", "flex", "items-center", "justify-center", "h-[183px]"],
});

export const contentLayer = tv({
  base: ["px-[28px]"],
});

export const titleLayer = tv({
  base: ["mt-[30px]", "mb-[12px]"],
});

export const buttonLayer = tv({
  base: ["flex", "items-center", "w-[112px]", "mt-[20px]", "mb-[20px]"],
});
