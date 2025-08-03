import { Project } from "./project";
import { storeProjectList } from "./localStorageHandler";

export function createNewProject(name, projectList) {
  const newProject = new Project(name);
  projectList.push(newProject);
  storeProjectList(projectList);
}
