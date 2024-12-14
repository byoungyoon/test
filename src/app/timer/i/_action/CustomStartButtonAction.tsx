"use client";

import Pause from "@/app/icons/timer/pause.svg";
import Play from "@/app/icons/timer/play.svg";
import CustomStartButton from "@/app/timer/i/_component/CustomStartButton";
import { useTimer } from "@/state/useTranslate";

export default function CustomStartButtonAction() {
  const { status, setStatus } = useTimer();

  const onClickStart = () => {
    if (status === "play") {
      setStatus("pause");
    } else {
      setStatus("play");
    }
  };

  return (
    <CustomStartButton onClick={onClickStart}>{status === "play" ? <Pause /> : <Play />}</CustomStartButton>
  );
}
