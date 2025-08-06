import { Project } from "./project";
import { storeProjectList } from "../localStorage/localStorageHandler";

export function createNewProject(name) {
  const newProject = new Project(name);
  projectList.push(newProject);
  storeProjectList(projectList);
}
