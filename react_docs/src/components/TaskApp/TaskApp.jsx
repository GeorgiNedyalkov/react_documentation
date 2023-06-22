import { useState } from "react";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([...tasks, { id: nextId++, text: text, isDone: false }]);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Prague itinery</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
    </div>
  );
}

function AddTask({ onAddTask }) {
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

function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  const taskList = tasks.map((task) => (
    <li key={task.id}>
      <Task
        task={task}
        onDeleteTask={onDeleteTask}
        onChangeTask={onChangeTask}
      />
    </li>
  ));
  return <ul>{taskList}</ul>;
}

function Task({ task, onDeleteTask, onChangeTask }) {
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
            onChangeTask({
              ...task,
              text: e.target.value,
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
        onChange={(e) => onChangeTask({ ...task, isDone: e.target.checked })}
      />
      {taskContent}
      <button
        onClick={() => onDeleteTask(task.id)}
        className="border w-20 dark:bg-white dark:text-black bg-black text-white"
      >
        Delete
      </button>
    </div>
  );
}

let nextId = 4;

const initialTasks = [
  { id: 1, text: "Do 100 push ups", isDone: false },
  { id: 2, text: "Make coffee", isDone: false },
  { id: 3, text: "Do 4 hours of focussed work", isDone: false },
];
