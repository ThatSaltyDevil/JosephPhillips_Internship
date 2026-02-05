import React, { useEffect, useState } from "react";

const CountdownTimer = ({ expiryDate }) => {
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimer = () => {
      const now = Date.now();
      const expiryTimestamp = new Date(expiryDate).getTime();
      const diff = expiryTimestamp ? expiryTimestamp - now : 0;

      if (diff > 0) {
        setTimer({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimer({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimer();
    const interval = setInterval(calculateTimer, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  return (
    <div className="de_countdown">
      <span className="timer__Hours">{timer.hours}h </span>
      <span className="timer__Minutes">
        {timer.minutes.toString().padStart(2, "0")}m{" "}
      </span>
      <span className="timer__Seconds">
        {timer.seconds.toString().padStart(2, "0")}s
      </span>
    </div>
  );
};

export default CountdownTimer;
