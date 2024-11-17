import { useEffect, useState } from 'react';

export const useTimer = (secondsQuantity: number) => {
  const [expired, setExpired] = useState(false);
  const [remained, setRemained] = useState(`${secondsQuantity}`);
  const [seconds, setSeconds] = useState(secondsQuantity);
  const resetTimer = () => {
    setSeconds(secondsQuantity);
    setRemained(`${secondsQuantity}`);
    setExpired(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (seconds > 0) {
        if (seconds - 1 <= 0) {
          setExpired(true);
        }
        setRemained(`${seconds - 1}`);
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, secondsQuantity]);
  return { expired, resetTimer, remained };
};
