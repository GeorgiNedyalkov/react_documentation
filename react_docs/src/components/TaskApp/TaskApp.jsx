import { useReducer } from "react";

import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

import { TasksContext, TasksDispatchContext } from "../../contexts/TaskContext";
import tasksReducer from "../../reducers/taskReducer";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Prague itinery</h1>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <AddTask />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </div>
  );
}

const initialTasks = [
  { id: 1, text: "Do 100 push ups", isDone: false },
  { id: 2, text: "Make coffee", isDone: false },
  { id: 3, text: "Do 4 hours of focussed work", isDone: false },
];
