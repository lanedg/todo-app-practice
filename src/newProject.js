import { Project } from "./project";

export function createNewProject(name, projectList) {
  const newProject = new Project(name);
  projectList.push(newProject);
}
