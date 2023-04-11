import React, { useState, useEffect } from 'react';

function CountdownTimer({ seconds, onTimerEnd }) {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearTimeout(timer);
      onTimerEnd();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [countdown, onTimerEnd]);

  const minutes = Math.floor(countdown / 60);
  const secondsLeft = countdown % 60;

  return (
    <div>
      {minutes}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
    </div>
  );
}

export default CountdownTimer;
