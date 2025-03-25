import React, { useState, useEffect } from 'react';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
interface TimeProps {
  isDaytime: boolean;
}

const Time: React.FC<TimeProps> = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) return 'GOOD MORNING';
    if (hour >= 12 && hour < 17) return 'GOOD AFTERNOON';
    if (hour >= 17 && hour < 21) return 'GOOD EVENING';
    return 'GOOD NIGHT';
  };
  const getGreeting1 = () => {
    const hour = time.getHours();
    if (hour >= 5 && hour < 12) return <IoSunny style={{color:"white"}}/>;
    if (hour >= 12 && hour < 17) return <FaMoon style={{color:"white"}}/>;
    if (hour >= 17 && hour < 21) return <FaMoon style={{color:"white"}}/>;
    return <FaMoon style={{color:"white"}}/>;
  };

  return (
    <div className="clock">
      <div className="top-part">
       <div>{getGreeting1()}</div>
        <span style={{color:"white"}}>{getGreeting()}</span>
      </div>
      <div className="bottom">
        <h1>{formatTime(time)}</h1>
        <span style={{color:"white"}}>IN LONDON, UK</span>
      </div>
    </div>
  );
};

export default Time;