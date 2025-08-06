export function getDatesToday() {
  const todayProjectList = [];
  projectList.forEach((project) => {
    const filteredProject = JSON.parse(JSON.stringify(project));
    convertDateStringToDate(filteredProject);
    filteredProject.taskList = filteredProject.taskList.filter((task) =>
      checkIfDueDateIsToday(task.dueDate)
    );
    if (filteredProject.taskList.length >= 1) {
      todayProjectList.push(filteredProject);
    }
  });
  return todayProjectList;
}

function checkIfDueDateIsToday(taskDate) {
  const currentDate = new Date();
  if (taskDate.getMonth() === currentDate.getMonth()) {
    if (taskDate.getDate() === currentDate.getDate()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function convertDateStringToDate(project) {
  project.taskList.forEach((task) => {
    task.dueDate = new Date(task.dueDate);
  });
}
