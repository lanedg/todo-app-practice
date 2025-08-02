import { createDefaultProject } from "./project";

export function retrieveProjectList() {
  if (localStorage.getItem("projectList") === null) {
    const projectList = [];
    projectList.push(createDefaultProject());
  } else {
    const projectList = JSON.parse(localStorage.getItem("projectList"));
    return projectList;
  }
}

export function storeProjectList(projectList) {
  localStorage.setItem("projectList", JSON.stringify(projectList));
}
