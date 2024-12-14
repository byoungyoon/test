"use client";

import { useRouter } from "next/navigation";
import { useSelect } from "@/state/useTranslate";

export default function CustomGroup() {
  const router = useRouter();
  const { setSelect, fire, make, name, tip, icon, time } = useSelect();

  const onClickButton = (key: "oven" | "pot" | "steamy") => () => {
    setSelect(name, icon, time, tip, key, fire);

    router.push("/timer/i");
  };

  const onClickFire = (key: "h" | "m" | "l") => () => {
    setSelect(name, icon, time, tip, make, key);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <button type="button" onClick={onClickButton("pot")}>
          냄비
        </button>
        <button type="button" onClick={onClickButton("steamy")}>
          찜
        </button>
        <button type="button" onClick={onClickButton("oven")}>
          전자레인지
        </button>
      </div>
      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <button type="button" onClick={onClickFire("h")}>
          불(강)
        </button>
        <button type="button" onClick={onClickFire("m")}>
          불(중)
        </button>
        <button type="button" onClick={onClickFire("l")}>
          불(하)
        </button>
      </div>
    </>
  );
}
