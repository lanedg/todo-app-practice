import { buildProjectViewContent } from "../mainContentModule/buildMainContent";
import { buildProjectOverview } from "../mainContentModule/buildOverview";

export function addProjectTaskEventListener(taskButton, project) {
  taskButton.addEventListener("click", (e) => {
    buildProjectOverview(project);
    buildProjectViewContent(project);
  });
}
