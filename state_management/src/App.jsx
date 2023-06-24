import { useAutoFocus } from "./hooks/useAutoFocus";

export default function App() {
  const inputRef = useAutoFocus();

  return (
    <div className="bg-slate-950 h-screen text-white p-5">
      <input className="text-black" type="text" ref={inputRef} />
    </div>
  );
}
