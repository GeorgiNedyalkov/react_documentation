import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null || now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <div className="mb-2">Seconds passed: {secondsPassed.toFixed(3)}</div>
      <button
        onClick={handleStart}
        className="p-1 w-24 border bg-slate-950 text-white"
      >
        Start
      </button>

      <button
        onClick={handleStop}
        className="p-1 w-24 border bg-slate-950 text-white"
      >
        Stop
      </button>
    </>
  );
}
