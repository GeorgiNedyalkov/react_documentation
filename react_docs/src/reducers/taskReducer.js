export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add_task": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          isDone: false,
        },
      ];
    }
    case "delete_task": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "changed_task": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const initialTasks = [
  { id: 1, text: "Do 100 push ups", isDone: false },
  { id: 2, text: "Make coffee", isDone: false },
  { id: 3, text: "Do 4 hours of focussed work", isDone: false },
];
