import { EventInput } from "@fullcalendar/core/index.js";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
export const createEventId = () => String(eventGuid++);
// 予定データ=INITIAL_EVENTS
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00"
  }
];