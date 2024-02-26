import { PersonalFormBackgroundStyled, EyeIcon, PersonalFormContent, PersonalFormStyled, PersonalFormWrapper, PersonalIcon, PersonalItemContentItem, PersonalItemContentItemInput, PersonalItemContentItemSubTitle, PersonalItemContentSubmit, PersonalTitle, GridTable, GridTableElement, GridWrapper, GridTableElementBackground, GridTableElementTitle, AmountOfFreePlaces, PersonalTables } from "./personalFormStyles";
import User from "../../assets/user.png"
import Hidden from "../../assets/hidden.png"
import Visible from "../../assets/visible.png"
import Spinner from "../Spinner/Spinner";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_ONE_USER } from "../../query/user";
import { CREATE_USER } from "../../mutations/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCalendar from "../../hooks/useCalendar";
import { memo } from "react";
import Calendar from "../calendar/calendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
const PersonalForm = memo(() => {
    const { id } = useParams()
    const { month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth } = useCalendar()
    const { data: oneUser } = useQuery(GET_ONE_USER, {
        variables: {
            id: Number(id)
        }
    })
    const arr = ["Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table"]
    const [isOpen, setIsOpen] = useState(false)
    const [clickedElement, setClickedElement] = useState(1)

    const handleClick = (id) => {
        setIsOpen(true)
        setClickedElement(id)
    }
    const { refetch, allTables, } = GetTablesInfo({ month, year, clickedDay })
    useEffect(() => {
        refetch()
    }, [clickedDay]
    )
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    return (
        <PersonalFormWrapper>

            {/*
      <button className="open-btn" onClick={()=>setModalActive(true)}>ddd</button>
<TestModal active={modalActive} setActive={setModalActive} />      
    */}
            <PersonalFormStyled>
                <PersonalTitle id="section1">Hello {oneUser != undefined && oneUser.getUser != undefined ? oneUser.getUser.username : ""}!</PersonalTitle>
                <PersonalTables>Our tables for booking:</PersonalTables>
                <Calendar month={month} year={year} clickedDay={clickedDay} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleSelectDay={handleSelectDay} daysInMonth={daysInMonth} />
                <PersonalFormContent>
                    <GridWrapper>
                        <GridTable>
                            {Number(clickedDay) >= Number(currentDay) && arr.map((item, index) => (
                                <GridTableElement
                                    isBooked={allTables ? allTables.getInfornationAboutAbilityOfBooking[index] : false}
                                    data-tooltip="This table is booked for all day"
                                    onClick={allTables && allTables.getInfornationAboutAbilityOfBooking[index] ? "" : () => handleClick(index + 1)}>
                                    <GridTableElementTitle>
                                        {item} {index + 1}
                                    </GridTableElementTitle>
                                    <AmountOfFreePlaces>
                                        4/4
                                    </AmountOfFreePlaces>
                                    <GridTableElementBackground isBooked={allTables ? allTables.getInfornationAboutAbilityOfBooking[index] : false} />
                                </GridTableElement>
                            ))}
                        </GridTable>
                    </GridWrapper>
                </PersonalFormContent>
                <PersonalFormBackgroundStyled />
            </PersonalFormStyled>
            <ModalWindow open={isOpen}
                clickedElement={clickedElement}


                onClose={() => setIsOpen(false)}

                month={month}
                year={year}
                clickedDay={clickedDay}
            >

            </ModalWindow>
        </PersonalFormWrapper>
    );
})

export default PersonalForm;
//Available tables for booking
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll