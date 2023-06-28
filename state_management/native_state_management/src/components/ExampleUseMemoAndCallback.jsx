import { useState, useMemo, useCallback } from "react";

export function SortedList({ list, sortFunc }) {
  const sortedList = useMemo(() => {
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
}

export default function ExampleUseMemoAndCallback() {
  const [numbers] = useState([10, 20, 30]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const countTotal = count1 + count2;

  const [names] = useState(["John", "Paul", "Georgi", "Ringo"]);

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <div className="h-screen p-4 bg-slate-950 text-white text-xl">
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button
        className="bg-white text-black rounded m-2 p-2"
        onClick={() => setCount1(count1 + 1)}
      >
        Count 1: {count1}
      </button>
      <button
        className="bg-white text-black rounded m-2 p-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Count 2: {count2}
      </button>
      <div>Count total: {countTotal}</div>
    </div>
  );
}
