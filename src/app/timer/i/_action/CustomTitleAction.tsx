"use client";

import CustomTitle from "@/app/timer/i/_component/CustomTitle";
import { useSelect } from "@/state/useTranslate";

export default function CustomTitleAction() {
  const { name } = useSelect();

  return <CustomTitle name={name} />;
}
