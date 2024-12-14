"use client";

import { useRouter } from "next/navigation";
import CustomResultButton from "@/app/timer/@popup/(.)i/feedback/_component/CustomResultButton";

export default function CustomResultButtonAction() {
  const router = useRouter();

  const onClickResult = () => {
    router.back();
  };

  return <CustomResultButton onClick={onClickResult}>확인</CustomResultButton>;
}
