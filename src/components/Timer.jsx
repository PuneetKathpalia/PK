import React, { useState, useEffect } from 'react';

const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      <span>Time Left: {timeLeft}s</span>
    </div>
  );
};

export default Timer;
