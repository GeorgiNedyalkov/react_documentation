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
