import { Project } from "../projectModule/project";
import { createNewProject } from "../projectModule/newProject";

export function createNewProjectEventHandlers(projectList) {
  const newProjectButton = document.getElementById("create-project");
  const newProjectDialog = document.getElementById("new-project-dialog");
  const newProjectForm = document.getElementById("new-project-form");
  const nameInput = document.getElementById("project-name");
  const cancelButton = document.getElementById("new-project-form-cancel");
  const createButton = document.getElementById("new-project-form-create");
  console.log(newProjectForm);
  newProjectButton.addEventListener("click", () => {
    newProjectDialog.showModal();
  });

  newProjectDialog.addEventListener("close", () => {
    setTimeout(() => document.activeElement.blur(), 0);
  });

  newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
    const data = new FormData(e.target);
    console.log(data.get("projectName"));
    const name = data.get("projectName");
    createNewProject(name, projectList);
    newProjectDialog.close();
    newProjectForm.reset();
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
