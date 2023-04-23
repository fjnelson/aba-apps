import React, { useState, useRef } from 'react';
import '../../App.css';

function CountDown() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (time === 0) {
      setTime(60);
    }
  
    setIsRunning(true);
  
    if (time >= 60) {
      const remainingSeconds = time % 60;
      const remainingMinutes = Math.floor(time / 60);
      setTime(remainingSeconds + remainingMinutes * 60);
    }
  
    intervalRef.current = setInterval(() => {
      setTime((time) => {
        if (time > 0) {
          return time - 1;
        } else {
          setIsRunning(false);
          clearInterval(intervalRef.current);
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const clearTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const addTime = (amount) => {
    setTime((time) => time + amount);
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timer-app">
      <h1 className='timer-size'>{formatTime(time)}</h1>
      <div className="timer-buttons">
        {!isRunning ? (
          <button type="button" class="btn btn-primary btn-lg" onClick={startTimer}>Start</button>
        ) : (
          <button type="button" class="btn btn-primary btn-lg" onClick={stopTimer}>Stop</button>
        )}
        <button type="button" class="btn btn-primary btn-lg" onClick={clearTimer} style={{marginLeft: '10px'}}>Clear</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => addTime(15)} style={{marginLeft: '10px'}}>+15 sec</button>
<button type="button" class="btn btn-primary btn-lg" onClick={() => addTime(30)} style={{marginLeft: '10px'}}>+30 sec</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => addTime(60)} style={{marginLeft: '10px'}}>+1 min</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => addTime(600)} style={{marginLeft: '10px'}}>+10 min</button>
      </div>
    </div>
  );
}

export default CountDown;