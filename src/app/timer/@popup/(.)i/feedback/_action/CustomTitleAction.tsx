"use client";

import CustomTitle from "@/app/timer/@popup/(.)i/feedback/_component/CustomTitle";
import { useSelect } from "@/state/useTranslate";

export default function CustomTitleAction() {
  const name = useSelect((state) => state.name);

  return <CustomTitle name={name} />;
}
