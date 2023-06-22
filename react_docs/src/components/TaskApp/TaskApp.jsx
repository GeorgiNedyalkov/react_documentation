import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

import TasksProvider from "../../contexts/TaskContext";

export default function TaskApp() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Prague itinery</h1>
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
