import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="m-5 w-52 h-32 rounded flex flex-col items-center bg-slate-200 text-black">
      <button
        className="m-2 p-2 border rounded w-32 bg-slate-400 font-bold text-slate-950  hover:bg-slate-500"
        onClick={addOne}
      >
        Add One
      </button>
      <div className="text-4xl font-bold">{count}</div>
    </div>
  );
}
