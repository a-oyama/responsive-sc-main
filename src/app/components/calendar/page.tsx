'use client'

import { useCallback, useState } from "react";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
  ventContentArg,
 } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

//イベントオブジェクト取得
const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback((events: EventApi[]) => {
    console.log("events:", events);  // 確認用
    setCurrentEvents(events);
  }, []);

// 予定の入力
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt("イベントのタイトルを入力してください")?.trim();
    let calendarApi = selectInfo.view.calendar;
    //unselect=スペースのみの場合などは何もしない
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }, []);

//予定の削除
const handleEventClick = useCallback((clickInfo: EventClickArg) => {
  if (
    window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)
  ) {
    clickInfo.event.remove();
  }
}, []);

const renderEventContent = (eventContent: EventContentArg) => (
  <>
    <b>{eventContent.timeText}</b>
    <i>{eventContent.event.title}</i>
  </>
);
//画面
  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          initialView="dayGridMonth"
          selectable={true}
          editable={true} //edit
          initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale="ja"
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          selectMirror={true}
          dayMaxEvents={true}
          navLinks={true}
          businessHours={true}
          handleWindowResize={true}
        />
      </div>
    </div>
  )
}

export default Calendar