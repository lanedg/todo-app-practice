import { createDefaultProject } from "../projectModule/project";

export function retrieveProjectList() {
  if (localStorage.getItem("projectList") === null) {
    const projectList = [];
    projectList.push(createDefaultProject());
    return projectList;
  } else {
    const projectList = JSON.parse(localStorage.getItem("projectList"));
    return projectList;
  }
}

export function storeProjectList(projectList) {
  localStorage.setItem("projectList", JSON.stringify(projectList));
}
