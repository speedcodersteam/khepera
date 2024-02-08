import React, { useState, useEffect } from 'react';

// Import the CSS file for styling
import './countdown.css';

// components
const Counter = ({ displayValue, label }) => (
  <div className="counter">
    <h2>{label}</h2>
    {displayValue}
  </div>
);

const Countdown = () => {
  const [timeDisplay, setTimeDisplay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const nextYear = new Date().getFullYear() + 1;
    const targetDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

    const generateTimeDisplay = () => {
      const rightJustNow = new Date().getTime();
      const runway = targetDate - rightJustNow;
      return {
        days: Math.floor(runway / (1000 * 60 * 60 * 24)),
        hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((runway % (1000 * 60)) / 1000)
      };
    };

    const intervalId = setInterval(() => {
      setTimeDisplay(generateTimeDisplay());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      <section>
        <header>
          <h1>Khepera</h1>
        </header>
        <div className="wrapper">
          <Counter displayValue={timeDisplay.days} label={"Days"} />
          <Counter displayValue={timeDisplay.hours} label={"Hours"} />
          <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
          <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
        </div>
      </section>
    </div>
  );
};

export default Countdown;
