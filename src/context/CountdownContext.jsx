import { createContext, useState, useEffect } from 'react';

export const CountdownContext = createContext();

export function CountdownProvider({ children }) {
  const [countdownState, setCountdownState] = useState({
    isComplete: false,
    timeLeft: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  });

  useEffect(() => {
    let serverTimeOffset = 0;

    // Fetch server time once on mount
    const fetchServerTime = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        const data = await response.json();
        const serverTime = new Date(data.datetime).getTime();
        const localTime = new Date().getTime();
        serverTimeOffset = serverTime - localTime;
      } catch (error) {
        console.warn('Could not fetch server time, using local time:', error);
        serverTimeOffset = 0;
      }
    };

    fetchServerTime();

    const calculateTimeLeft = () => {
      const birthdayDate = new Date('2026-04-20T00:00:00').getTime();
      const currentDate = new Date().getTime() + serverTimeOffset;
      const difference = birthdayDate - currentDate;

      if (difference > 0) {
        setCountdownState({
          isComplete: false,
          timeLeft: {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          },
        });
      } else {
        setCountdownState((prev) => ({
          ...prev,
          isComplete: true,
        }));
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownContext.Provider value={countdownState}>
      {children}
    </CountdownContext.Provider>
  );
}
