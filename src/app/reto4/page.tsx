'use client'

import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  function handleRestart(){
    setStartTime(Date.now());
    setNow(Date.now());
  }

  let secondsPassed = 0;
  let minutesPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div className='bg-white text-black'>
      <h1>Time passed {(secondsPassed/60).toFixed(0)}: {(secondsPassed % 60).toFixed(3)}</h1>
      <button  onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}
