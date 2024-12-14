import { tv } from "tailwind-variants";

export const layer = tv({
  base: ["relative", "flex", "justify-center", "min-h-[200px]"],
});

export const steamy = tv({
  base: ["absolute", "z-[1]"],
});

export const icon = tv({
  base: ["absolute", "top-[-20px]", "transform", "scale-150"],
});

export const fire = tv({
  base: ["absolute", "bottom-0", "z-[2]"],
});

export const action = tv({
  base: ["absolute", "top-[-80px]"],
});
