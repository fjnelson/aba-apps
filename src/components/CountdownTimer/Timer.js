import React, { useState, useRef } from 'react';
import "../../App.css";

function TimerApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 1);
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
      </div>
    </div>
  );
}

export default TimerApp;

