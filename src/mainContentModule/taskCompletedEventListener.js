import { storeProjectList } from "../localStorage/localStorageHandler";
import { switchTaskCompletionStatus } from "../taskModule/task";

export function addTaskCompletedEventListener(
  completedButton,
  task,
  taskContainer
) {
  completedButton.addEventListener("click", (e) => {
    switchTaskCompletionStatus(task);
    storeProjectList(projectList);
    if (task.completed === true) {
      taskCompletedState(taskContainer, completedButton);
    } else {
      taskUncompletedState(taskContainer, completedButton);
    }
    storeProjectList(projectList);
  });
}

export function taskCompletedState(taskContainer, completedButton) {
  taskContainer.style.opacity = "0.3";
  completedButton.style.backgroundColor = "var(--seperation-line-color)";
}

export function taskUncompletedState(taskContainer, completedButton) {
  taskContainer.style.opacity = "1";
  completedButton.style.backgroundColor =
    "var(--main-content-background-color)";
}
