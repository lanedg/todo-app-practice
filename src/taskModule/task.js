import { format } from "date-fns";

class Task {
  constructor(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
    this.dateString = format(this.dueDate, "MMMM dd");
    this.id = crypto.randomUUID();
  }
}

function switchTaskCompletionStatus(task) {
  if (task.completed === false) {
    task.completed = true;
  } else {
    task.completed = false;
  }
}

export { Task, switchTaskCompletionStatus };
