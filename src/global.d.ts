export {};

declare global {
  interface Window {
    TimerRequestChannel?: {
      postMessage: (message: string) => void;
    };
    updateTimer?: (remainingTime: number) => void;
  }
}
