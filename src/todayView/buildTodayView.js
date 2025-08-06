import { buildTodayOverview } from "../mainContentModule/buildOverview";
import { buildTodayViewContent } from "../mainContentModule/buildMainContent";

export function buildTodayView() {
  buildTodayOverview();
  buildTodayViewContent();
}
