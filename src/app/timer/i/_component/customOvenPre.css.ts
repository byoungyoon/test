import { tv } from "tailwind-variants";

export const layer = tv({
  base: ["relative", "flex", "items-center", "justify-center"],
});

export const action = tv({
  base: ["absolute", "left-[-90px]", "bottom-[-60px]"],
});

export const icon = tv({
  base: ["absolute", "right-[130px]"],
});
