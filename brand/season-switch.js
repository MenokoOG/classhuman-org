/* ============================================================
   season-switch.js — set the seasonal theme by calendar date
   Drop-in: import and call applySeason() on load.
   ============================================================ */

// Northern-hemisphere meteorological seasons.
// Flip the mapping if your primary audience is southern-hemisphere.
export function seasonForDate(date = new Date()) {
  const m = date.getMonth(); // 0 = Jan
  if (m >= 2 && m <= 4)  return "spring"; // Mar–May
  if (m >= 5 && m <= 7)  return "summer"; // Jun–Aug
  if (m >= 8 && m <= 10) return "autumn"; // Sep–Nov
  return "winter";                        // Dec–Feb
}

export function applySeason(season = seasonForDate()) {
  document.documentElement.setAttribute("data-season", season);
  return season;
}

// Auto-apply on import (comment out if you prefer manual control):
// applySeason();
