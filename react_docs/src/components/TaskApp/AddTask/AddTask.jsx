import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <div className="mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border mr-2 pl-1"
        type="text"
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
        className="border w-20 dark:bg-white dark:text-black bg-black text-white"
      >
        Add
      </button>
    </div>
  );
}
