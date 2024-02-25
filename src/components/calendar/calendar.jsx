import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import { useState } from "react";
import { useEffect } from "react";
const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth}) => {


    const {refetch,allTables, handleRefetch} =GetTablesInfo({month, year, clickedDay})
useEffect(()=>{
refetch()
}, [clickedDay]
)
    return (
        <>
   <CalendarComponent>
                <CurrentData>  {clickedDay}-{month+1}-{year}</CurrentData>
                <CalendarDatas>
                    {Array.from({ length: daysInMonth }, (_, index) => ( 
                        <CalendarData onClick={()=>handleSelectDay(index + 1)} key={index}>{index + 1}</CalendarData>
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