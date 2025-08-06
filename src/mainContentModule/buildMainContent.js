import { addTaskCompletedEventListener } from "./taskCompletedEventListener";
import deleteIcon from "../assets/deleteSVG.svg";
import { addTaskDeleteEventListener } from "./taskDeleteEventListener";
import { addProjectDeleteEventListener } from "./projectDeleteEventListener";
import { getDatesToday } from "../todayView/todayDateArray";
import {
  taskCompletedState,
  taskUncompletedState,
} from "./taskCompletedEventListener";

export function buildProjectViewContent(project) {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  project.taskList.forEach((task) => {
    buildIndividualTask(task, project, contentContainer);
  });
}

export function buildTodayViewContent() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
  const todayProjectList = getDatesToday();
  todayProjectList.forEach((project) => {
    const projectContainer = buildProjectContainer();
    contentContainer.appendChild(projectContainer);
    buildProjectName(project, projectContainer);
    project.taskList.forEach((task) => {
      buildTodayViewTask(task, project, contentContainer);
    });
  });
}

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

export function buildProjectDeleteButton(project, projectContainer) {
  const projectDeleteButton = document.createElement("button");
  projectDeleteButton.classList.add("project-delete");
  const deleteSVG = document.createElement("img");
  deleteSVG.src = deleteIcon;
  deleteSVG.alt = "";
  projectDeleteButton.appendChild(deleteSVG);
  const deleteText = document.createTextNode("Delete Project?");
  projectDeleteButton.appendChild(deleteText);
  projectContainer.appendChild(projectDeleteButton);
  addProjectDeleteEventListener(projectDeleteButton, project);
}

function buildIndividualTask(task, project, contentContainer) {
  const taskContainer = buildTaskContainer();
  contentContainer.appendChild(taskContainer);
  buildTaskCompletedButton(task, taskContainer);
  const taskInfoContainer = buildTaskInfoContainer();
  taskContainer.appendChild(taskInfoContainer);
  buildTaskDescription(task, taskInfoContainer);
  buildTaskDate(task, taskInfoContainer);
  buildTaskDeleteButton(task, project, taskContainer);
}

function buildTodayViewTask(task, project, contentContainer) {
  const taskContainer = buildTaskContainer();
  contentContainer.appendChild(taskContainer);
  buildTodayViewTaskCompleteButton(task, project, taskContainer);
  const taskInfoContainer = buildTaskInfoContainer();
  taskContainer.appendChild(taskInfoContainer);
  buildTaskDescription(task, taskInfoContainer);
  buildTaskDate(task, taskInfoContainer);
  buildTodayViewTaskDeleteButton(task, project, taskContainer);
}

function buildTaskContainer() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  return taskContainer;
}

function buildTaskCompletedButton(task, taskContainer) {
  const completedButton = document.createElement("button");
  completedButton.classList.add("task-completed-button");
  addTaskCompletedEventListener(completedButton, task, taskContainer);
  taskContainer.appendChild(completedButton);
  if (task.completed === true) {
    taskCompletedState(taskContainer, completedButton);
  } else {
    taskUncompletedState(taskContainer, completedButton);
  }
}

function buildTodayViewTaskCompleteButton(task, project, taskContainer) {
  const trueProject = findTrueProject(project);
  const trueTask = findTrueTask(task, trueProject);
  const completedButton = document.createElement("button");
  completedButton.classList.add("task-completed-button");
  addTaskCompletedEventListener(completedButton, trueTask, taskContainer);
  taskContainer.appendChild(completedButton);
}

function buildTodayViewTaskDeleteButton(task, project, taskContainer) {
  const trueProject = findTrueProject(project);
  const trueTask = findTrueTask(task, trueProject);
  buildTaskDeleteButton(trueTask, trueProject, taskContainer);
}

function findTrueProject(project) {
  const trueProject = projectList.find((proj) => proj.id === project.id);
  return trueProject;
}

function findTrueTask(task, trueProject) {
  const trueTask = trueProject.taskList.find((tsk) => tsk.id === task.id);
  return trueTask;
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
  taskInfoContainer.appendChild(taskDate);
}

function buildTaskDeleteButton(task, project, taskContainer) {
  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.classList.add("task-delete");
  const deleteSVG = document.createElement("img");
  deleteSVG.src = deleteIcon;
  deleteSVG.alt = "Delete";
  taskDeleteButton.appendChild(deleteSVG);
  taskContainer.appendChild(taskDeleteButton);
  addTaskDeleteEventListener(taskDeleteButton, task, project, taskContainer);
}
