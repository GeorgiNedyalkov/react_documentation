import { useState } from "react";
import { useTasksDispatch } from "../../../contexts/TaskContext";

let nextId = 4;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

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
          dispatch({
            type: "add_task",
            id: nextId++,
            text: text,
          });
        }}
        className="border w-20 dark:bg-white dark:text-black bg-black text-white"
      >
        Add
      </button>
    </div>
  );
}
