function buildProjectViewHeader(project) {
  const header = document.querySelector(".overview-header");
  header.textContent = project.name;
}

function buildProjectViewTasks(project) {
  const contentContainer = document.getElementById("content");
  project.taskList.forEach((task) => {});
}

function buildIndividualProjectViewTask(task, contentContainer) {}

function buildTaskContainer() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  return taskContainer;
}
