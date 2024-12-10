'use client';

import { useEffect, useState } from 'react';

export default function CustomTImer() {
  const [timer, setTimer] = useState(0);

  const onCommand = (command: string) => () => {
    if (!window.TimerRequestChannel) return;

    window.TimerRequestChannel.postMessage(command);
  };

  useEffect(() => {
    window.updateTimer = (remainingTime: number) => {
      setTimer(remainingTime);
    };
  }, []);

  return (
    <div>
      <div>{timer} 남음</div>
      <button type="button" onClick={onCommand('start:10')}>
        ０:10 타이머
      </button>
      <button type="button" onClick={onCommand('start:170')}>
        2:50 타이머
      </button>
      <button type="button" onClick={onCommand('pause')}>
        pause
      </button>
      <button type="button" onClick={onCommand('resume')}>
        resume
      </button>
      <button type="button" onClick={onCommand('reset:100')}>
        reset (1:40)
      </button>
    </div>
  );
}
