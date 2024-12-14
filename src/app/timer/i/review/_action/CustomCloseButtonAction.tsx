"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Close from "@/app/icons/review/close.svg";

export default function CustomCloseButtonAction() {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return <Image src={Close} alt="close" style={{ cursor: "pointer" }} onClick={onClickBack} />;
}
