import { storeProjectList } from "../localStorage/localStorageHandler";
import { deleteSideBarTask } from "../sidebarModule/deleteSideBarElements";

export function addTaskDeleteEventListener(
  taskDeleteButton,
  task,
  project,
  taskContainer
) {
  taskDeleteButton.addEventListener("click", (e) => {
    const taskIndex = project.taskList.indexOf(task);
    if (taskIndex !== -1) {
      project.taskList.splice(taskIndex, 1);
    }
    taskContainer.remove();
    deleteSideBarTask(task);
    storeProjectList(projectList);
  });
}
