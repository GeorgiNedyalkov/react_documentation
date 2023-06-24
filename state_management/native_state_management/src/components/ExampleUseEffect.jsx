import { useState, useEffect } from "react";

export default function ExampleUseEffect() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectName = (name) => {
    fetch(`/${name}.json`)
      .then((res) => res.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div className="bg-slate-950 h-screen text-white p-5">
      <div className="flex gap-2">
        {names.map((name) => (
          <button
            onClick={() => onSelectName(name)}
            key={name}
            className="bg-white text-black p-2 rounded w-32 "
          >
            {name}
          </button>
        ))}
      </div>
      <div>Selected name details: {JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}
