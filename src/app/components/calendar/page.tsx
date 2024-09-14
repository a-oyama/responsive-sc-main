'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから

const Calendar = () => {
  return (

<div>
<FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
</div>

  )
}

export default Calendar

/* ↑サンプル */

