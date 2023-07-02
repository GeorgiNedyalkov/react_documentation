import { useRef } from "react";

export default function App() {
  return <div className="m-10"></div>;
}

function InputFocus() {
  const myRef = useRef(null);

  function handleFocus() {
    myRef.current.focus();
  }

  return (
    <>
      <input ref={myRef} type="text" placeholder="Hi" />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
