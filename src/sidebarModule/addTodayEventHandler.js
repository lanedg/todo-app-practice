import { buildTodayView } from "../todayView/buildTodayView";

export function addTodayEventHandler() {
  const todayButton = document.getElementById("today-button");
  todayButton.addEventListener("click", (e) => {
    buildTodayView();
  });
}
