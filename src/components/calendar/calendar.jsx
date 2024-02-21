import { CalendarBlock, CalendarComponent, CalendarComponentSwitchButton, CalendarComponentSwitchButtonBackground, CalendarComponentSwitchButtons, CalendarData, CalendarDatas, CurrentData, ErrorTime } from "./calendarStyles";
import { useMemo } from "react";
import { useState } from "react";
const Calendar = () => {
    const date = new Date()
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear())
    const [clickedDay, setClickedDay] = useState(1)
    console.log(date, month)
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };
    const daysInMonth = getDaysInMonth(year, month);
    console.log("DAYS" + daysInMonth)
    const handleIncrement = () => {

        console.log(year)
        if (month == 12) {
            setMonth(1)
            setYear(prev => Number(prev + 1))
        }
        else {

            setMonth(prev => (Number(prev + 1)))
        }
    }
    const handleDecrement = () => {

        console.log(year)
        if (month != 1) {

            setMonth(prev => (Number(prev - 1)))
        } else {
            setYear(prev => Number(prev - 1))
            setMonth(12)
        }
    }
    const handleSelectDay = (day) => {
        setClickedDay(day)
    }
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