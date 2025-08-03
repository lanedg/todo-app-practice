export function updateProjectChoices(projectList) {
  const projectSelect = document.getElementById("project-select");
  projectList.forEach((project) => {
    createIndividualOption(project, projectSelect);
  });
}

function createIndividualOption(project, projectSelect) {
  const newOption = document.createElement("option");
  newOption.value = project.id;
  newOption.textContent = project.name;
  projectSelect.appendChild(newOption);
}

//TODO: test once event handlers have been added.
