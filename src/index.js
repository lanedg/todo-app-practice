import "normalize.css";
import "./styles.css";

import * as StorageHandler from "./localStorage/localStorageHandler";
import { createNewProjectEventHandlers } from "./sidebarModule/newProjectEventHandlers";
import { createNewProject } from "./projectModule/newProject";
import { sidebarProjectListBuilder } from "./sidebarModule/sidebarManipulator";
import { createAddTaskEventHandlers } from "./sidebarModule/addTaskEventHandlers";
import { updateProjectChoices } from "./sidebarModule/projectChoiceUpdater";
import { addTodayEventHandler } from "./sidebarModule/addTodayEventHandler";
import { buildTodayView } from "./todayView/buildTodayView";

document.addEventListener("DOMContentLoaded", () => {
  const projectList = StorageHandler.retrieveProjectList();
  window.projectList = projectList;
  createNewProjectEventHandlers(projectList);
  updateProjectChoices(projectList);
  sidebarProjectListBuilder(projectList);
  createAddTaskEventHandlers(projectList);
  buildTodayView();
  addTodayEventHandler();
});
