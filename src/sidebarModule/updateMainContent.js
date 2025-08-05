import { buildProjectViewContent } from "../mainContentModule/buildMainContent";

export function updateMainContentAfterAddTask(project) {
  const overview = document.getElementById("overview");
  const currentViewId = overview.getAttribute("data-overview-id");
  if (project.id === currentViewId) {
    buildProjectViewContent(project);
  }
}
