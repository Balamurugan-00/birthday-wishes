import { useState, useEffect } from 'react';
import './CountdownPage.css';
import FloatingEmojis from '../components/FloatingEmojis';

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [revealed, setRevealed] = useState(false);
  const [crackers, setCrackers] = useState([]);

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
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setRevealed(true);
        // Trigger crackers animation on countdown end
        triggerCrackers();
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerCrackers = () => {
    // Create multiple crackers
    const newCrackers = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setCrackers(newCrackers);

    // Keep re-triggering crackers
    const interval = setInterval(() => {
      const moreCrackers = Array.from({ length: 30 }, (_, i) => ({
        id: Math.random(),
        left: Math.random() * 100,
        delay: 0,
        duration: 2 + Math.random() * 1,
      }));
      setCrackers(moreCrackers);
    }, 1500);

    return () => clearInterval(interval);
  };

  const Cracker = ({ left, delay, duration }) => (
    <div
      className="cracker"
      style={{
        left: `${left}%`,
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
      }}
    >
      <div className="cracker-particle" />
      <div className="cracker-particle" />
      <div className="cracker-particle" />
    </div>
  );

  const TimeBox = ({ value, label }) => (
    <div className="time-box">
      <div className="time-value">{String(value).padStart(2, '0')}</div>
      <div className="time-label">{label}</div>
    </div>
  );

  return (
    <>
      <FloatingEmojis />
      {revealed && <div className="crackers-container">{crackers.map((c) => <Cracker key={c.id} left={c.left} delay={c.delay} duration={c.duration} />)}</div>}
      <div className="countdown-container">
      {!revealed ? (
        <>
          <div className="page-header">
            <h1 className="page-title">Countdown to Magic</h1>
            <p className="page-subtitle">April 20, 2026</p>
          </div>

          <div className="countdown-content">
            <div className="countdown-timer">
              <TimeBox value={timeLeft.days} label="Days" />
              <div className="separator">:</div>
              <TimeBox value={timeLeft.hours} label="Hours" />
              <div className="separator">:</div>
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <div className="separator">:</div>
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="countdown-message">
              <p>Something special is coming your way</p>
              <p className="sub-message">Stay tuned for an unforgettable surprise</p>
            </div>
          </div>
        </>
      ) : (
        <div className="page-header">
          <h1 className="page-title">Happy Birthday</h1>
          <h2 className="reveal-name">Priyadharshini</h2>
          <p className="reveal-subname">enn aval</p>
          <p className="reveal-message">It's your special day, my love</p>
          <p className="reveal-submessage">Explore all the surprises prepared for you</p>
        </div>
      )}
      </div>
    </>
  );
}
