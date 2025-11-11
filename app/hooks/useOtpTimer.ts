import { useEffect, useRef, useState } from 'react';

export default function useOtpTimer(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (secondsLeft === 0) return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [secondsLeft]);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSecondsLeft(initialSeconds);
  };

  return { secondsLeft, resetTimer };
}
