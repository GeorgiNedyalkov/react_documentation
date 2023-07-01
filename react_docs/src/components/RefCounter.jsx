import { useRef } from "react";

export default function RefCounter() {
  const ref = useRef(0);

  function increment() {
    ref.current = ref.current + 1;
    alert(ref.current);
  }

  return (
    <>
      <button
        onClick={increment}
        className="border p-1 w-32 font-semibold text-white bg-slate-950"
      >
        Increment
      </button>
      <div>{ref.current}</div>
    </>
  );
}
