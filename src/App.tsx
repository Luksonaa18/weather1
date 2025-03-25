import React, { useState, useEffect } from 'react';
import './App.scss';
import Time from './components/time/Time';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Fold from './components/fold/Fold';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkDayTime = () => {
      const currentHour = new Date().getHours();
      setIsDaytime(currentHour >= 6 && currentHour < 18);
    };


    checkDayTime();
    const timer = setInterval(checkDayTime, 60000); 

    return () => clearInterval(timer);
  }, []);

  const toggleFold = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`full-container ${isOpen ? 'fold-open' : ''} ${isDaytime ? 'daytime' : 'nighttime'}`}>
      <div className="content-wrapper">
        <div className="text-area">
          <p>
            "The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value."
          </p>
          <p>Ada Lovelace</p>
        </div>
        
        <div className="time-section">
          <Time isDaytime={isDaytime} />
          <button onClick={toggleFold}>
            {isOpen ? 'Less' : 'More'} 
            <IoIosArrowDropdownCircle 
              style={{ 
                marginLeft: '10px', 
                color: "#303030", 
                cursor: "pointer",
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }} 
            />
          </button>
        </div>
      </div>
      
      <Fold isOpen={isOpen} isDaytime={isDaytime} />
    </div>
  );
}

export default App;