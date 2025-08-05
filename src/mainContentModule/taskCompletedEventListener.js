import { switchTaskCompletionStatus } from "../taskModule/task";

export function addTaskCompletedEventListener(
  completedButton,
  task,
  taskContainer
) {
  completedButton.addEventListener("click", (e) => {
    switchTaskCompletionStatus(task);

    if (task.completed === true) {
      taskContainer.style.opacity = "0.3";
      completedButton.style.backgroundColor = "var(--seperation-line-color)";
    } else {
      taskContainer.style.opacity = "1";
      completedButton.style.backgroundColor =
        "var(--main-content-background-color)";
    }
  });
}
