'use client'

/* import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから

const Calendar = () => {
  return (

<div>
<FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
</div>

  )
}

export default Calendar */

/* ↑サンプル */

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import jaLocale from '@fullcalendar/core/locales/ja'
import { useCallback } from "react"
import interactionPlugin, 
{ DateClickArg } from "@fullcalendar/interaction"


// 当月を取得
const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

const Calendar = () => {

  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);

  return (

<div>
<FullCalendar 
plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
initialView="dayGridMonth"
locales={[jaLocale]}
locale='ja'
headerToolbar={{
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek listWeek',
}}
/* 代入検討 */
events={[
  {title:'event', date: `${thisMonth()}-15`},
]}
/* 代入検討 */
dateClick={handleDateClick}
/>
</div>

  )
}

export default Calendar