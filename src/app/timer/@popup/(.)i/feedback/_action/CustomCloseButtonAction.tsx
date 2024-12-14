"use client";

import { useRouter } from "next/navigation";
import CustomCloseButton from "@/app/timer/@popup/(.)i/feedback/_component/CustomCloseButton";

export default function CustomCloseButtonAction() {
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return <CustomCloseButton onClick={onClickClose}>취소</CustomCloseButton>;
}
