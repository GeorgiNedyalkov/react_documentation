import { useReducer } from "react";

import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

import tasksReducer from "../../reducers/taskReducer";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "add_task",
      id: nextId++,
      text: text,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete_task",
      id: taskId,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "edit_task",
      task: task,
    });
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

let nextId = 4;

const initialTasks = [
  { id: 1, text: "Do 100 push ups", isDone: false },
  { id: 2, text: "Make coffee", isDone: false },
  { id: 3, text: "Do 4 hours of focussed work", isDone: false },
];
