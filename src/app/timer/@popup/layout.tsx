import { ReactNode } from "react";
import CustomInitAnimate from "@/app/timer/@popup/_component/CustomInitAnimate";

type Props = {
  children: ReactNode;
};

export default function TimerPopupLayout({ children }: Props) {
  return <CustomInitAnimate>{children}</CustomInitAnimate>;
}
