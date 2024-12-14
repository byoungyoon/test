import { tv } from "tailwind-variants";

export const section = tv({
  base: ["flex", "flex-col", "items-center", "h-full"],
});

export const hgroup = tv({
  base: ["min-h-[60px]", "flex", "items-center", "justify-center", "relative", "w-full"],
});

export const backLayer = tv({
  base: ["absolute", "left-[16px]"],
});

export const tipLayer = tv({
  base: ["min-h-[50px]"],
});

export const timerLayer = tv({
  base: ["mt-[33px]"],
});

export const makeLayer = tv({
  base: ["grow", "mt-[58px]"],
});

export const buttonLayer = tv({
  base: ["flex", "gap-[12px]", "my-[20px]"],
});
