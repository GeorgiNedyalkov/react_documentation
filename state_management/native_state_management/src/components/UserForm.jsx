function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      first: "",
      last: "",
      name: "",
      names: ["GO", "GOOO", "GADGET"],
    }
  );

  return (
    <div>
      <input
        className="p-2 mr-2 font-bold text-sky-950"
        value={state.first}
        placeholder="first name"
        onChange={(e) => dispatch({ first: e.target.value })}
        type="text"
      />
      <input
        className="p-2 font-bold text-sky-950"
        value={state.last}
        placeholder="last name"
        onChange={(e) => dispatch({ last: e.target.value })}
        type="text"
      />
      <p className="text-white">{state.first}</p>
      <p className="text-white">{state.last}</p>
      {state.names.map((name, idx) => (
        <p className="text-white" key={idx}>
          {name}
        </p>
      ))}

      <input
        className="p-2 font-bold text-sky-950"
        value={state.name}
        placeholder="name"
        onChange={(e) => dispatch({ name: e.target.value })}
        type="text"
      />
      <button
        onClick={() =>
          dispatch({ names: [...state.names, state.name], name: "" })
        }
        className="m-2 p-2 border rounded w-32 bg-slate-400 font-bold text-slate-950  hover:bg-slate-500"
      >
        Add name
      </button>
    </div>
  );
}

export default function AdvancedUserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_FIRST":
          return { ...state, first: action.payload };

        case "SET_LAST":
          return { ...state, last: action.payload };
      }
    },
    {
      first: "",
      last: "",
    }
  );

  return (
    <div>
      <input
        className="p-2 mr-2 font-bold text-sky-950"
        value={state.first}
        placeholder="first name"
        onChange={(e) =>
          dispatch({ type: "SET_FIRST", payload: e.target.value })
        }
        type="text"
      />
      <input
        className="p-2 font-bold text-sky-950"
        value={state.last}
        placeholder="last name"
        onChange={(e) =>
          dispatch({ type: "SET_LAST", payload: e.target.value })
        }
        type="text"
      />
      <p className="text-white">{state.first}</p>
      <p className="text-white">{state.last}</p>
    </div>
  );
}
