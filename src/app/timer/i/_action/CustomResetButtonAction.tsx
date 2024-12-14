"use client";

import Reset from "@/app/icons/timer/reset.svg";
import CustomResetButton from "@/app/timer/i/_component/CustomResetButton";
import { useSelect, useTimer } from "@/state/useTranslate";

export default function CustomResetButtonAction() {
  const { time } = useSelect();
  const { setStatus, setTime: setCurrTime } = useTimer();

  const onClickReset = () => {
    setStatus("pause");
    setCurrTime(time);
  };

  return (
    <CustomResetButton onClick={onClickReset}>
      <Reset />
    </CustomResetButton>
  );
}
