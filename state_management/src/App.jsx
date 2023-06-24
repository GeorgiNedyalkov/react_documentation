import { useState } from "react";

export default function App() {
  return (
    <div className="h-screen p-4 bg-slate-950 text-white">
      <h1 className="text-3xl text-center font-bold">React State Management</h1>
      <NameList />
    </div>
  );
}

function NameList() {
  const [names, setNames] = useState(["Plamen", "Sonya", "Nikalas", "Georgi"]);
  const [name, setName] = useState(() => "Jack");

  function onAddName() {
    setNames([...names, name]);
    setName("");
  }

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        className="p-2 font-bold text-sky-950"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button
        onClick={onAddName}
        className="m-2 p-2 border rounded w-32 bg-slate-400 font-bold text-slate-950  hover:bg-slate-500"
      >
        Add name
      </button>
    </div>
  );
}
