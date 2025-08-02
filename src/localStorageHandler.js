export function retrieveProjectList() {
  if (localStorage.getItem("projectList") === null) {
    return [];
  } else {
    const projectList = JSON.parse(localStorage.getItem("projectList"));
    return projectList;
  }
}

export function storeProjectList(projectList) {
  localStorage.setItem("projectList", JSON.stringify(projectList));
}
