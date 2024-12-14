"use client";

import CustomTitle from "@/app/timer/@popup/(.)i/end/_component/CustomTitle";
import { useSelect } from "@/state/useTranslate";

export default function CustomTitleAction() {
  const { name } = useSelect();

  const localName = `${name} 조리 완료!`;

  return <CustomTitle title={localName} />;
}
