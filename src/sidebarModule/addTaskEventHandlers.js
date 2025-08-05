import { addTask } from "../projectModule/project";
import { storeProjectList } from "../localStorage/localStorageHandler";
import { sidebarProjectListBuilder } from "./sidebarManipulator";
import { updateMainContentAfterAddTask } from "./updateMainContent";

export function createAddTaskEventHandlers(projectList) {
  const addTaskButton = document.getElementById("add-task");
  const addTaskDialog = document.getElementById("add-task-dialog");
  const addTaskForm = document.getElementById("add-task-form");
  const taskDescriptionInput = document.getElementById("task-description");
  const taskDueDateInput = document.getElementById("task-due-date");
  const taskCancelButton = document.getElementById("add-task-cancel");
  const taskSubmitButton = document.getElementById("add-task-submit");

  addTaskButton.addEventListener("click", (e) => {
    addTaskDialog.showModal();
  });

  taskCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTaskDialog.close();
    addTaskForm.reset();
  });

  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("projectSelection"));
    const projectId = data.get("projectSelection");
    const description = data.get("taskDescription");
    const dueDate = data.get("taskDueDate");

    const project = projectList.find((project) => project.id === projectId);
    addTask(description, dueDate, project);
    updateMainContentAfterAddTask(project);
    addTaskDialog.close();
    addTaskForm.reset();
    storeProjectList(projectList);
    sidebarProjectListBuilder(projectList);
  });
}
