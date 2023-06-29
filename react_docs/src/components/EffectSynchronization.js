import { useState, useEffect } from "react";

export default function EffectSyncronization() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "unmount the component" : "mount the component"}
      </button>

      {show && <hr />}
      {show && <Playground />}
    </>
  );
}

function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }
    console.log("🔵 Schedule " + text + " log");

    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log("🟡 Schedule " + text + " log");
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </label>

      <h1>{text}</h1>
    </>
  );
}
