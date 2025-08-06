import { storeProjectList } from "../localStorage/localStorageHandler";

//TODO: when deleting project reset main content back to today view

export function addProjectDeleteEventListener(projectDeleteButton, project) {
  projectDeleteButton.addEventListener("click", (e) => {
    const projectIndex = projectList.indexOf(project);
    if (projectIndex !== -1) {
      projectList.splice(projectIndex, 1);
    }
    storeProjectList(projectList);
    const projectToDelete = document.querySelector(
      `div[data-projectid="${project.id}"]`
    );
    projectToDelete.remove();
  });
}
