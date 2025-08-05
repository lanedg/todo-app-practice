import { buildProjectViewContent } from "../mainContentModule/buildMainContent";

import { buildProjectOverview } from "../mainContentModule/buildOverview";

export function addProjectHeaderEventListener(projectHeaderButton, project) {
  projectHeaderButton.addEventListener("click", (e) => {
    buildProjectOverview(project);
    buildProjectViewContent(project);
  });
}
