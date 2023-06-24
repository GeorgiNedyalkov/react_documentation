import { useState } from "react";

export default function NameList() {
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

function NamesList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME": {
          return {
            ...state,
            name: action.payload,
          };
        }
        case "ADD_NAME": {
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
        }
      }
    },
    {
      names: ["Jack", "Jill", "Jane"],
      name: "",
    }
  );

  return (
    <div>
      <ul className="text-white">
        {state.names.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </ul>
      <input
        className="p-2 font-bold text-sky-950"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "SET_NAME", payload: e.target.value });
        }}
        type="text"
      />
      <button
        onClick={() => dispatch({ type: "ADD_NAME" })}
        className="m-2 p-2 border rounded w-32 bg-slate-400 font-bold text-slate-950  hover:bg-slate-500"
      >
        Add Name
      </button>
    </div>
  );
}
