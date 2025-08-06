import { buildProjectDeleteButton } from "./buildMainContent";

export function buildProjectOverview(project) {
  const overview = document.getElementById("overview");
  overview.innerHTML = "";
  overview.setAttribute("data-overview-id", project.id);
  buildProjectOverviewHeader(project, overview);
}

function buildProjectOverviewHeader(project, overviewContainer) {
  const header = document.createElement("h1");
  header.classList.add("overview-header");
  header.textContent = project.name;
  overviewContainer.appendChild(header);
  buildProjectDeleteButton(project, overviewContainer);
}

export function buildTodayOverview() {
  const overview = document.getElementById("overview");
  overview.innerHTML = "";
  overview.setAttribute("data-overview-id", "today");
  const todayHeader = document.createElement("h1");
  todayHeader.classList.add("overview-header");
  todayHeader.textContent = "Today";
  overview.appendChild(todayHeader);
}
