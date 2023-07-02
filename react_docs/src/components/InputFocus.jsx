import { useRef } from "react";

export default function InputFocus() {
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
