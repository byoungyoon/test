import { tv } from "tailwind-variants";

export const layer = tv({
  base: ["flex", "justify-between", "items-center", "w-full"],
});

export const group = tv({
  base: ["flex", "gap-[10px]", "items-center"],
});

export const icon = tv({
  base: ["text-[28px]"],
});

export const text = tv({
  base: ["font-semibold", "text-[14px]"],
});
