import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as styles from "@/app/timer/i/_action/customTimerAction.css";
import CustomTimer from "@/app/timer/i/_component/CustomTimer";
import CustomTimerAside from "@/app/timer/i/_component/CustomTimerAside";
import { useSelect, useTimer } from "@/state/useTranslate";

export default function CustomWebviewTimerAction() {
  const router = useRouter();

  const { time } = useSelect();
  const { status, setStatus, time: currTime, setTime: setCurrTime } = useTimer();

  const onCommand = (command: string) => () => {
    if (!window.TimerRequestChannel) return;

    window.TimerRequestChannel.postMessage(command);
  };

  useEffect(() => {
    if (status === "pause") onCommand("pause");
  }, [status]);

  useEffect(() => {
    onCommand(`start:${time}`);
    onCommand("pause");
  }, [time]);

  useEffect(() => {
    window.updateTimer = (remainingTime: number) => {
      setCurrTime(remainingTime);
      if (remainingTime === 0) {
        setStatus("pause");
        setCurrTime(time);
        router.push("/timer/i/end");
        onCommand(`reset:${time}`);
        onCommand("pause");
      }
    };
  }, []);

  return (
    <div className={styles.layer()}>
      <CustomTimer time={currTime} />
      {status === "pause" && currTime !== 0 && currTime !== time && <CustomTimerAside />}
    </div>
  );
}
