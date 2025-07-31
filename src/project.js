import { Task } from "./task.js";

class Project {
  constructor(projectName) {
    this.name = projectName;
    this.taskList = [];
  }

  addTask(description, dueDate) {
    this.taskList.push(new Task(description, dueDate));
  }
}
