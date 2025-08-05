export function addTaskDeleteEventListener(
  taskDeleteButton,
  task,
  project,
  taskContainer
) {
  taskDeleteButton.addEventListener("click", (e) => {
    console.log(project);
    console.log(task);
    console.log(project.taskList);
    const taskIndex = project.taskList.indexOf(task);
    console.log(taskIndex);
    if (taskIndex !== -1) {
      project.taskList.splice(taskIndex, 1);
    }
    console.log(project.taskList);
    taskContainer.remove();
  });
}
