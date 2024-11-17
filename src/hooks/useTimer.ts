import { useEffect, useState } from 'react';
import getTimeAsString from 'src/utils/getTimeAsString';

import getTimeFromSeconds from '../utils/getTimeFromSeconds';

export const useTimer = (secondsQuantity: number) => {
  const [expired, setExpired] = useState(false);
  const { hours, minutes, seconds } = getTimeFromSeconds(secondsQuantity);
  const [remained, setRemained] = useState(getTimeAsString(hours, minutes, seconds));
  const [secondsOfTimer, setSecondsOfTimer] = useState(secondsQuantity);
  const stopTimer = () => {
    setSecondsOfTimer(0);
  };
  const resetTimer = (secondsQuantity: number) => {
    setSecondsOfTimer(secondsQuantity);
    const { hours, minutes, seconds } = getTimeFromSeconds(secondsQuantity);
    setRemained(getTimeAsString(hours, minutes, seconds));
    setExpired(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (secondsOfTimer > 0) {
        if (secondsOfTimer - 1 <= 0) {
          setExpired(true);
        }
        const { hours, minutes, seconds } = getTimeFromSeconds(secondsOfTimer - 1);
        setRemained(getTimeAsString(hours, minutes, seconds));
        setSecondsOfTimer(secondsOfTimer - 1);
      }
    }, 1000);
  }, [secondsOfTimer, secondsQuantity]);
  return { expired, resetTimer, remained, stopTimer };
};
