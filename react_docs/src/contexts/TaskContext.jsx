import { createContext, useContext, useReducer } from "react";

import tasksReducer from "../reducers/taskReducer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

const initialTasks = [
  { id: 1, text: "Do 100 push ups", isDone: false },
  { id: 2, text: "Make coffee", isDone: false },
  { id: 3, text: "Do 4 hours of focussed work", isDone: false },
];
