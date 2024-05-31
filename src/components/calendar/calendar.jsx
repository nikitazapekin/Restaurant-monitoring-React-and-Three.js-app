


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

/*

import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
//import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import React from "react";
import { CalendarComponent, CalendarData, CalendarDataDay, CalendarDataDisabled, CalendarDatas, CalendarDateBlock, CalendarDateBlockTitle } from "./calendarStyles";
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


                <CalendarDateBlock>
                    <CalendarDateBlockTitle>
                        Selected data {clickedDay}-{month + 1}-{year}
                    </CalendarDateBlockTitle>
                </CalendarDateBlock>

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


        
                </CalendarDatas>
            </CalendarComponent>
        
        </>
    );
}
export default Calendar;
*/










/*
import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import styles from "./index.module.scss"
//import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import React from "react";
import { CalendarComponent, CalendarData, CalendarDataDay, CalendarDataDisabled, CalendarDatas, CalendarDateBlock, CalendarDateBlockTitle } from "./calendarStyles";
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
            <div className={styles.calendar}>

                <div className={styles.calendar__date} >
                    Mo
                </div>
                <div className={styles.calendar__date}>
                    Tu
                </div>
                <div className={styles.calendar__date}>

                    We
                </div>
                <div className={styles.calendar__date}>
                    Th
                </div>
                <div className={styles.calendar__date}>
                    Fr

                </div>
                <div className={styles.calendar__date}>
                    Sa

                </div>
                <div className={styles.calendar__date}>
                    Su

                </div>

                {Array.from({ length: 7 }, (_, index) => (
                    <React.Fragment key={index}>
                        {index + 1 < firstDayOfWeek ? <div className={styles.calendar__item__disable}>-</div> : null}
                    </React.Fragment>
                ))}
                {Array.from({ length: daysInMonth }, (_, index) => (
                    <div className={styles.calendar__item}>{index + 1}</div>
                ))}
            </div>
        </>
    );
}
export default Calendar;

*/







/*
import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import styles from "./index.module.scss";
import React from "react";
import { CalendarComponent, CalendarData, CalendarDataDay, CalendarDataDisabled, CalendarDatas, CalendarDateBlock, CalendarDateBlockTitle } from "./calendarStyles";

const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth }) => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

    // Calculate the first day of the week for the current month
    let currentDate = new Date(year, month, 1);
    currentDate.setDate(1);
    let firstDayOfWeek = (currentDate.getDay() + 6) % 7;  // Adjusting for the week starting on Monday

    // Calculate the last day of the previous month
    let previousMonth = new Date(year, month, 0);
    let lastDayOfPreviousMonth = previousMonth.getDate();

    // Generate the days of the previous month to be displayed
    const previousMonthDays = [];
    for (let i = firstDayOfWeek; i > 0; i--) {
        previousMonthDays.push(lastDayOfPreviousMonth - i + 1);
    }

    return (
        <>
            <div className={styles.calendar}>
                {daysOfWeek.map((day) => (
                    <div className={styles.calendar__date} key={day}>
                        {day}
                    </div>
                ))}

                {previousMonthDays.map((day, index) => (
                    <div className={styles.calendar__item__disable} key={`prev-${index}`}>
                        {day}
                    </div>
                ))}

                {Array.from({ length: daysInMonth }, (_, index) => (
                    <div className={styles.calendar__item} key={`current-${index}`}>
                        {index + 1}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Calendar;



*/





import useCalendar from "../../hooks/useCalendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import styles from "./index.module.scss";
import React from "react";
import { useState } from "react";
import ModalWindow from "../Modal/Modal";
import { CalendarComponent, CalendarData, CalendarDataDay, CalendarDataDisabled, CalendarDatas, CalendarDateBlock, CalendarDateBlockTitle } from "./calendarStyles";

const Calendar = ({ month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth }) => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    let currentDate = new Date(year, month, 1);
    let firstDayOfWeek = (currentDate.getDay() + 6) % 7;
    let previousMonth = new Date(year, month, 0);
    let lastDayOfPreviousMonth = previousMonth.getDate();
    const [isOpen, setIsOpen] = useState(false)
    const [clickedElement, setClickedElement] = useState(1)
    const handleClick = (id) => {
        refetch()
        setIsOpen(true)
        setClickedElement(id)
    }
    const handleOpen = () => {
        setIsSureModalOpen(true)
    }
    const previousMonthDays = [];
    for (let i = firstDayOfWeek; i > 0; i--) {
        previousMonthDays.push(lastDayOfPreviousMonth - i + 1);
    }


    const currentMonthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    const totalDaysDisplayed = previousMonthDays.length + currentMonthDays.length;
    const nextMonthDays = [];
    if (totalDaysDisplayed < 35) {
        const remainingDays = 35 - totalDaysDisplayed;
        for (let i = 1; i <= remainingDays; i++) {
            nextMonthDays.push(i);
        }
    }
    return (
        <>
            <div className={styles.calendar}>
                {daysOfWeek.map((day) => (
                    <div className={styles.calendar__date} key={day}>
                        {day}
                    </div>
                ))}
                {previousMonthDays.map((day, index) => (
                    <div className={styles.calendar__item__disable} key={`prev-${index}`}>
                        {day}
                    </div>
                ))}
                {currentMonthDays.map((day, index) => (
                    <div className={styles.calendar__item} key={`current-${index}`} onClick={() => handleSelectDay(index + 1)}
                        style={day === clickedDay ? { background: '#ce7c00', fontWeight: 600, fontSize: '12px', color: '#fff' } : {}}
                    >
                        {day}
                    </div>
                ))}
                {nextMonthDays.map((day, index) => (
                    <div className={styles.calendar__item__disable} key={`next-${index}`}>
                        {day}
                    </div>
                ))}
            </div>


        </>
    );
};

export default Calendar;
