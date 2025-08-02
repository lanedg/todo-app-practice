import { Task } from "./task.js";

class Project {
  constructor(projectName) {
    this.name = projectName;
    this.taskList = [];
    this.id = crypto.randomUUID();
  }
}

function addTask(description, dueDate, project) {
  project.taskList.push(new Task(description, dueDate));
}

function createDefaultProject() {
  return new Project("Default");
}

export { Project, addTask, createDefaultProject };
