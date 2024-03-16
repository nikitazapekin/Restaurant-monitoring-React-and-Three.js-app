import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth }) => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  //  let currentDate = new Date();
  let currentDate = new Date(year, month , 1);
    currentDate.setDate(1);
    let firstDayOfWeek = currentDate.getDay();
    let firstDayOfWeekText = daysOfWeek[firstDayOfWeek];
    console.log('Первый день месяца - ' + firstDayOfWeekText, firstDayOfWeek);

    return (
        <>
            <CalendarComponent>
                <CurrentData> Selected data {clickedDay}-{month + 1}-{year}</CurrentData>
                <CalendarDatas>
                    {daysOfWeek.map((item, index) => (
                        <CalendarData>{item}</CalendarData>
                    ))}


{Array.from({ length: 7 }, (_, index) => (
        <React.Fragment key={index}>
          {index+1 < firstDayOfWeek ? <CalendarData>-</CalendarData> : null}
        </React.Fragment>
      ))}

         
                    {Array.from({ length: daysInMonth }, (_, index) => (
                        <CalendarData onClick={() => handleSelectDay(index + 1)} key={index}>{index + 1}</CalendarData>
                    ))}
                </CalendarDatas>
                <CalendarComponentSwitchButtons>
                    <CalendarComponentSwitchButton
                        onClick={handleDecrement}
                    >⬅
                        <CalendarComponentSwitchButtonBackground />
                    </CalendarComponentSwitchButton>
                    <CalendarComponentSwitchButton onClick={handleIncrement}>⮕
                        <CalendarComponentSwitchButtonBackground />
                    </CalendarComponentSwitchButton>
                </CalendarComponentSwitchButtons>
            </CalendarComponent>
        </>
    );
}
export default Calendar;