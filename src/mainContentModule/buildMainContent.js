export function buildProjectViewContent(project) {}

function buildProjectContainer() {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  return projectContainer;
}

function buildProjectName(project, projectContainer) {
  const projectName = document.createElement("h2");
  projectName.classList.add("project-name");
  projectName.textContent = project.name;
  projectContainer.appendChild(projectName);
}

function buildIndividualTask(task, contentContainer) {
  const taskContainer = buildTaskContainer();
  contentContainer.appendChild(taskContainer);
  buildTaskCompletedButton(task, taskContainer);
  const taskInfoContainer = buildTaskInfoContainer();
  taskContainer.appendChild(taskInfoContainer);
  buildTaskDescription(task, taskInfoContainer);
  buildTaskDate(task, taskInfoContainer);
}

function buildTaskContainer() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  return taskContainer;
}

function buildTaskCompletedButton(task, taskContainer) {
  const completedButton = document.createElement("button");
  completedButton.classList.add("task-completed-button");
  taskContainer.appendChild(completedButton);
}

function buildTaskInfoContainer() {
  const taskInfoContainer = document.createElement("div");
  taskInfoContainer.classList.add("task-info-container");
  return taskInfoContainer;
}

function buildTaskDescription(task, taskInfoContainer) {
  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-description");
  taskDescription.textContent = task.description;
  taskInfoContainer.appendChild(taskDescription);
}

function buildTaskDate(task, taskInfoContainer) {
  const taskDate = document.createElement("p");
  taskDate.classList.add("task-date");
  taskDate.textContent = task.dateString;
}
