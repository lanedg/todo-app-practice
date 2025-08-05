export function deleteSideBarTask(task) {
  const sideBarTaskToDelete = document.querySelector(
    `[data-taskid="${task.id}"]`
  );
  sideBarTaskToDelete.remove();
}
