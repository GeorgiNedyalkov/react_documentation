import { useContext, useState } from "react";
import {
  TasksContext,
  TasksDispatchContext,
} from "../../../contexts/TaskContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  const taskList = tasks.map((task) => (
    <li key={task.id}>
      <Task task={task} />
    </li>
  ));
  return <ul>{taskList}</ul>;
}

function Task({ task }) {
  const dispatch = useContext(TasksDispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="border  dark:bg-black dark:text-white text-black bg-white w-52"
          type="text"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed_task",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button
          onClick={(e) => setIsEditing(false)}
          className="border w-20 dark:bg-white dark:text-black bg-black text-white"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p className="w-52">{task.text}</p>
        <button
          onClick={(e) => setIsEditing(true)}
          className="border w-20 dark:bg-white dark:text-black bg-black text-white w-50"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        defaultChecked={task.isDone}
        onChange={(e) => {
          dispatch({
            type: "changed_task",
            task: {
              ...task,
              isDone: task.isDone,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() =>
          dispatch({
            type: "delete_task",
            id: task.id,
          })
        }
        className="border w-20 dark:bg-white dark:text-black bg-black text-white"
      >
        Delete
      </button>
    </div>
  );
}
