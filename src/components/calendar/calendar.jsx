


/*

import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import React from "react";
const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth }) => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    //  let currentDate = new Date();
    let currentDate = new Date(year, month, 1);
    currentDate.setDate(1);
    let firstDayOfWeek = currentDate.getDay();
    let firstDayOfWeekText = daysOfWeek[firstDayOfWeek];
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
                            {index + 1 < firstDayOfWeek ? <CalendarData>-</CalendarData> : null}
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


*/



import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
//import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import React from "react";
import { CalendarComponent, CalendarData, CalendarDataDay, CalendarDataDisabled, CalendarDatas } from "./calendarStyles";
const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth }) => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    //  let currentDate = new Date();
    let currentDate = new Date(year, month, 1);
    currentDate.setDate(1);
    let firstDayOfWeek = currentDate.getDay();
    let firstDayOfWeekText = daysOfWeek[firstDayOfWeek];

    const arr = [1, 2, 4, 5, 6, 6, 6, 66, 6, 6, 6, 6]
    return (
        <>
            <CalendarComponent>

                Selected data {clickedDay}-{month + 1}-{year}


                <button
                    onClick={handleDecrement}
                >⬅

                </button>
                <button onClick={handleIncrement}>⮕

                </button>



                <CalendarDatas>
                    {daysOfWeek.map((item, index) => (
                        <CalendarDataDay>
                            {item}
                        </CalendarDataDay>
                    ))}

                    {Array.from({ length: 7 }, (_, index) => (
                        <React.Fragment key={index}>
                            {index + 1 < firstDayOfWeek ? <CalendarDataDisabled>-</CalendarDataDisabled> : null}
                        </React.Fragment>
                    ))}

                    {Array.from({ length: daysInMonth }, (_, index) => (
                        <CalendarData onClick={() => handleSelectDay(index + 1)} key={index}>{index + 1}</CalendarData>
                    ))}


                    {/*
{daysOfWeek.map((item, index) => (
                        <CalendarData>{item}</CalendarData>
                    ))}

                {arr.map((item, index)=> (
                    
                    <CalendarData>
                 sa   
                </CalendarData>
            ))}
        */}
                </CalendarDatas>
            </CalendarComponent>
            {/*
            <CalendarComponent>
            <CurrentData> Selected data {clickedDay}-{month + 1}-{year}</CurrentData>
                <CalendarDatas>
                    {daysOfWeek.map((item, index) => (
                        <CalendarData>{item}</CalendarData>
                    ))}


                    {Array.from({ length: 7 }, (_, index) => (
                        <React.Fragment key={index}>
                            {index + 1 < firstDayOfWeek ? <CalendarData>-</CalendarData> : null}
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
                */}
        </>
    );
}
export default Calendar;
