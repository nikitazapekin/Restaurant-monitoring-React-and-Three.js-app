import useCalendar from "../../hooks/useCalendar";
import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import { useState } from "react";
const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth}) => {
  //  const  {month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth } = props
  // const  {month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth }= useCalendar()
    return (
        <>
       
   <CalendarComponent>
                <CurrentData>  {clickedDay}-{month}-{year}</CurrentData>
                <CalendarDatas>
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