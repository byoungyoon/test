"use client";

import { useRouter } from "next/navigation";
import CustomResultButton from "@/app/timer/@popup/(.)i/end/_component/CustomResultButton";

export default function CustomResultButtonAction() {
  const router = useRouter();

  const onClickResult = () => {
    router.replace("/timer/i/feedback");
  };

  return <CustomResultButton onClick={onClickResult}>확인</CustomResultButton>;
}
