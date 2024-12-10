'use client';

import { useEffect, useState } from 'react';

export default function CustomTImer() {
  const [timer, setTimer] = useState(0);

  const onTimer = (seconds: number) => () => {
    if (!window.TimerRequestChannel) return;

    window.TimerRequestChannel.postMessage(seconds.toString());
  };

  useEffect(() => {
    if (!window.updateTimer) return;

    window.updateTimer = (remainingTime: number) => {
      setTimer(remainingTime);
    };
  }, []);

  return (
    <div>
      <div>{timer} 남음</div>
      <button type="button" onClick={onTimer(60 + 40)}>
        1:40 타이머
      </button>
      <button type="button" onClick={onTimer(2 * 60 + 50)}>
        2:50 타이머
      </button>
    </div>
  );
}
