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

const Calendar = () => {
  return (

<div>
<FullCalendar 
plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
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
  {title:'event', start: '2024-09-14'},
]}
/* 代入検討 */

/>
</div>

  )
}

export default Calendar