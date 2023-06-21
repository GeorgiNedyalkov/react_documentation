import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementCount = () => {
    setCount(count + 1);
  };

  const onDecrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-slate-800 rounded p-4">
      <h2 className="text-sky-500 font-bold text-2xl">Counter</h2>
      <button
        onClick={onIncrementCount}
        className="text-white flex justify-center items-center font-bold border-slate-500 border-2 w-32 rounded bg-slate-400"
      >
        Increment
      </button>
      <button
        onClick={onDecrementCount}
        className="text-white flex justify-center items-center font-bold border-slate-500 border-2 w-32 rounded bg-slate-400"
      >
        Decrement
      </button>
      <p className="text-4xl font-bold text-sky-500">{count}</p>
    </div>
  );
};

export default Counter;
