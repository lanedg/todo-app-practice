import { Project } from "../projectModule/project";
import { createNewProject } from "../projectModule/newProject";
import { sidebarProjectListBuilder } from "./sidebarManipulator";
import { updateProjectChoices } from "./projectChoiceUpdater";

export function createNewProjectEventHandlers(projectList) {
  const newProjectButton = document.getElementById("create-project");
  const newProjectDialog = document.getElementById("new-project-dialog");
  const newProjectForm = document.getElementById("new-project-form");
  const nameInput = document.getElementById("project-name");
  const cancelButton = document.getElementById("new-project-form-cancel");
  const createButton = document.getElementById("new-project-form-create");
  newProjectButton.addEventListener("click", () => {
    newProjectDialog.showModal();
  });

  newProjectDialog.addEventListener("close", () => {
    setTimeout(() => document.activeElement.blur(), 0);
  });

  newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("projectName");
    createNewProject(name, projectList);
    newProjectDialog.close();
    newProjectForm.reset();
    sidebarProjectListBuilder(projectList);
    updateProjectChoices(projectList);
  });

  newProjectForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (newProjectForm.checkValidity()) {
        newProjectForm.requestSubmit();
      } else {
        newProjectForm.reportValidity();
      }
    }
  });

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    newProjectDialog.close();
    newProjectForm.reset();
  });
}
