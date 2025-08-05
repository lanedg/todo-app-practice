import { addProjectHeaderEventListener } from "./projectHeaderEventListener";

export function sidebarProjectListBuilder(projectList) {
  const sidebarProjectListContainer = document.getElementById(
    "project-list-container"
  );
  sidebarProjectListContainer.innerHTML = "";
  projectList.forEach((project) => {
    const projectContainer = buildProjectContainer(
      project,
      sidebarProjectListContainer
    );
    buildProjectHeader(project, projectContainer);
    buildProjectTasks(project, projectContainer);
  });
}

function buildProjectContainer(project, projectListContainer) {
  const container = document.createElement("div");
  container.classList.add("sidebar-project-container");
  container.setAttribute("data-projectId", project.id);
  projectListContainer.appendChild(container);
  return container;
}

function buildProjectHeader(project, projectContainer) {
  const projectHeader = document.createElement("button");
  projectHeader.classList.add("sidebar-project-button");
  projectHeader.setAttribute("data-projectId", project.id);
  projectHeader.textContent = project.name;
  addProjectHeaderEventListener(projectHeader, project);
  projectContainer.appendChild(projectHeader);
}

function buildProjectTasks(project, projectContainer) {
  project.taskList.forEach((task) => {
    buildIndividualTask(task, projectContainer);
  });
}

function buildIndividualTask(task, projectContainer) {
  const taskButton = document.createElement("button");
  taskButton.classList.add("sidebar-task-button");
  taskButton.setAttribute("data-taskId", task.id);
  taskButton.setAttribute("data-projectId", projectContainer.dataset.projectId);
  taskButton.textContent = task.description;
  projectContainer.appendChild(taskButton);
}
