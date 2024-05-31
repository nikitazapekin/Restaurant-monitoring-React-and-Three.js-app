

/*
import { PersonalFormContent, PersonalFormStyled, PersonalFormWrapper, PersonalIcon, PersonalItemContentItem, PersonalItemContentItemInput, PersonalItemContentItemSubTitle, PersonalItemContentSubmit, PersonalTitle, GridTable, GridTableElement, GridWrapper, GridTableElementBackground, GridTableElementTitle, AmountOfFreePlaces, PersonalTables, PersonalTablesBlock, YourBookedTables } from "./personalFormStyles";
import { Link } from "react-router-dom";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCalendar from "../../hooks/useCalendar";
import { memo } from "react";
import Calendar from "../calendar/calendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import Spinner from "../Spinner/Spinner";
import SureModalWindow from "../SureModal/SureModal";
import useSureModal from "../../hooks/useSureModal";
const PersonalForm = memo(() => {
    const { id } = useParams()
    const { month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth } = useCalendar()
    const { data: oneUser, loading } = useQuery(GET_ONE_USER, {
        variables: {
            id: Number(id)
        }
    })
    const arr = ["Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table"]
    const [isSureModalOpen, setIsSureModalOpen] = useState(false)
    const handleOpen = () => {
        setIsSureModalOpen(true)
    }
    const [isOpen, setIsOpen] = useState(false)
    const [clickedElement, setClickedElement] = useState(1)
    const handleClick = (id) => {
        refetch()
        setIsOpen(true)
        setClickedElement(id)
    }
    const { refetch, allTables, } = GetTablesInfo({ month, year, clickedDay })
    useEffect(() => {
        refetch()
    }, [clickedDay, isOpen]
    )
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    if (loading) {
        return <Spinner />
    }
    const handleDisagree = () => {
        setIsSureModalOpen(false)
    }
    return (
        <PersonalFormWrapper>
            <PersonalFormStyled>
                <PersonalTitle id="section1">Hello {oneUser != undefined && oneUser.getUser != undefined ? oneUser.getUser.username : ""}!</PersonalTitle>
                <PersonalTablesBlock>
                    <PersonalTables>Our tables for booking:</PersonalTables>
                    <YourBookedTables>
                        <Link to={`/yourOffers/${id}`}>
                            Your booked tables
                        </Link>
                    </YourBookedTables>
                </PersonalTablesBlock>
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
            </PersonalFormStyled>
            <ModalWindow open={isOpen}
                clickedElement={clickedElement}
                onClose={() => setIsOpen(false)}
                month={month}
                year={year}
                clickedDay={clickedDay}
                handleOpen={handleOpen}
                setIsOpen={setIsOpen}
            >
            </ModalWindow>
            <SureModalWindow isSureModalOpen={isSureModalOpen}
                handleDisagree={handleDisagree}
            //handleCloseSureModal={handleCloseSureModal} handleOpenSureModal={handleOpenSureModal} 
            />
        </PersonalFormWrapper>
    );
})

export default PersonalForm;
*/




/*
//import { PersonalFormContent, PersonalFormStyled, PersonalFormWrapper, PersonalIcon, PersonalItemContentItem, PersonalItemContentItemInput, PersonalItemContentItemSubTitle, PersonalItemContentSubmit, PersonalTitle, GridTable, GridTableElement, GridWrapper, GridTableElementBackground, GridTableElementTitle, AmountOfFreePlaces, PersonalTables, PersonalTablesBlock, YourBookedTables } from "./personalFormStyles";
import { Link } from "react-router-dom";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCalendar from "../../hooks/useCalendar";
import { memo } from "react";
import Calendar from "../calendar/calendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import Spinner from "../Spinner/Spinner";
//import SureModalWindow from "../SureModal/SureModal";
import useSureModal from "../../hooks/useSureModal";
import { PersonalFormComponent, RestaurantComponentBackground, RadialGradient, PersonalInner, PersonalHeader, PersonalHeaderTitle, PersonalHeaderBtn, Ttl, Ttt, HeaderTitle, HeaderBtn, PersonalMain, PersonalMainInner, PersonalMainInnerTitle, PersonalMainInnerContent, PersonalMainInnerContentBlock, PersonalCalendar, PersonalTables, PersonalBlockTitle, PersonalTableItem, TableItemMiniBlock, TableItemMini, TableItemMain, TableItemMiniBlockBottom } from "./personalFormStyles";

import Background from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
const PersonalForm = memo(() => {
    const { id } = useParams()
    const { month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth } = useCalendar()
    const { data: oneUser, loading } = useQuery(GET_ONE_USER, {
        variables: {
            id: Number(id)
        }
    })
    const arr = ["Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table"]
    const [isSureModalOpen, setIsSureModalOpen] = useState(false)
    const handleOpen = () => {
        setIsSureModalOpen(true)
    }
    const [isOpen, setIsOpen] = useState(false)
    const [clickedElement, setClickedElement] = useState(1)
    const handleClick = (id) => {
        refetch()
        setIsOpen(true)
        setClickedElement(id)
    }
    const { refetch, allTables, } = GetTablesInfo({ month, year, clickedDay })
    useEffect(() => {
        refetch()
    }, [clickedDay, isOpen]
    )
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    if (loading) {
        return <Spinner />
    }
    const handleDisagree = () => {
        setIsSureModalOpen(false)
    }
    let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <PersonalFormComponent>
            <RestaurantComponentBackground src={Background} />
            <RadialGradient />

            <PersonalInner>
                <PersonalHeader>
                    <HeaderTitle>
                        Hello  {oneUser != undefined && oneUser.getUser != undefined ? oneUser.getUser.username : ""}!
                    </HeaderTitle>
                    <HeaderBtn>
                    <Link to={`/yourOffers/${id}`} style={{color: "#000", textDecoration: "none"}}>
                        My booked tables
                        </Link>
                    </HeaderBtn>
                </PersonalHeader>
 

                <PersonalMain>
                    <PersonalMainInner>

                        <PersonalMainInnerTitle>

                            For booking a table:
                        </PersonalMainInnerTitle>


                        <PersonalMainInnerContent>



                            <PersonalMainInnerContentBlock>
                                <PersonalBlockTitle>
                                    Select date
                                </PersonalBlockTitle>
                           
                    <Calendar month={month} year={year} clickedDay={clickedDay} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleSelectDay={handleSelectDay} daysInMonth={daysInMonth} />
                            </PersonalMainInnerContentBlock>


                            <PersonalMainInnerContentBlock>

                                <PersonalBlockTitle>
                                    Select a table
                                </PersonalBlockTitle>
                                <PersonalTables >

                                    {[...Array(9)].map((_, index) => (

                                        <PersonalTableItem onClick={()=>handleClick(index+1)}
                                        >
                                            <TableItemMiniBlock>
                                                <TableItemMini />
                                                <TableItemMini />
                                            </TableItemMiniBlock>
                                            <TableItemMain>
                                                Table {index+1}
                                            </TableItemMain>
                                            <TableItemMiniBlockBottom>
                                                <TableItemMini />
                                                <TableItemMini />
                                            </TableItemMiniBlockBottom>
                                        </PersonalTableItem>
                                    ))}
                                </PersonalTables>
                            </PersonalMainInnerContentBlock>
                        </PersonalMainInnerContent>
                    </PersonalMainInner>
                </PersonalMain>
            </PersonalInner>
            <ModalWindow
            open={isOpen}
          // open={false}
                clickedElement={clickedElement}
                onClose={() => setIsOpen(false)}
                month={month}
                year={year}
                clickedDay={clickedDay}
                handleOpen={handleOpen}
                setIsOpen={setIsOpen}
            >
            </ModalWindow>
        </PersonalFormComponent>

    );
})

export default PersonalForm;

 */


import { Link } from "react-router-dom";
import React from "react";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ONE_USER } from "../../query/user";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCalendar from "../../hooks/useCalendar";
import { memo } from "react";
import Calendar from "../calendar/calendar";
import GetTablesInfo from "../../hooks/getTablesInfo";
import Spinner from "../Spinner/Spinner";
import SureModalWindow from "../SureModal/SureModal";
import useSureModal from "../../hooks/useSureModal";
import { PersonalFormComponent, RestaurantComponentBackground, RadialGradient, PersonalInner, PersonalHeader, PersonalHeaderTitle, PersonalHeaderBtn, Ttl, Ttt, HeaderTitle, HeaderBtn, PersonalMain, PersonalMainInner, PersonalMainInnerTitle, PersonalMainInnerContent, PersonalMainInnerContentBlock, PersonalCalendar, PersonalTables, PersonalBlockTitle, PersonalTableItem, TableItemMiniBlock, TableItemMini, TableItemMain, TableItemMiniBlockBottom } from "./personalFormStyles";

import Background from "../../assets/restaurant/pexels-naimbic-2290753 1.png"
import styles from "./index.module.scss"
import Arrow from "../../assets/arrow.png"
const PersonalForm = memo(() => {
    const { id } = useParams()
    const { month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth } = useCalendar()
    const { data: oneUser, loading } = useQuery(GET_ONE_USER, {
        variables: {
            id: Number(id)
        }
    })
    const arr = ["Table", "Table", "Table", "Table", "Table", "Table", "Table", "Table"]
    const [isSureModalOpen, setIsSureModalOpen] = useState(false)
    const handleOpen = () => {
        setIsSureModalOpen(true)
    }
    const [isOpen, setIsOpen] = useState(false)
    const [clickedElement, setClickedElement] = useState(1)
    const handleClick = (id) => {
        refetch()
        setIsOpen(true)
        setClickedElement(id)
    }
    const { refetch, allTables, } = GetTablesInfo({ month, year, clickedDay })
    useEffect(() => {
        refetch()
    }, [clickedDay, isOpen]
    )
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    if (loading) {
        return <Spinner />
    }
    const handleDisagree = () => {
        setIsSureModalOpen(false)
    }
    let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    currentDate.setDate(1);
    let firstDayOfWeek = currentDate.getDay();
    let firstDayOfWeekText = daysOfWeek[firstDayOfWeek];
    return (
        <>
            <div className={styles.personal}>
                <div className={styles.personal__inner}>
                    <h1 className={styles.personal__username} >
                        Hello  {oneUser != undefined && oneUser.getUser != undefined ? oneUser.getUser.username : ""}!
                    </h1>
                    <Link style={{ textDecoration: "none", color: "#fff" }} to={`/yourOffers/${id}`}>
                        <button className={styles.personal__my}>
                            <p className={styles.personal__my__text}>
                                My booked tables
                            </p>
                        </button>
                    </Link>
                    <p className={styles.tables__title}>
                        For booking a table:
                    </p>
                    <div className={styles.tables}>
                        <div className={styles.table}>
                            <p className={styles.table__title}>
                                Select date
                            </p>
                            <div className={styles.table__inner}>
                                <div className={styles.table__background}>
                                </div>
                                <div className={styles.table__select}>
                                    <p className={styles.table__date}>
                                        {months[month]} {year}
                                    </p>
                                    <div className={styles.table__arrows}>
                                        <div className={styles.table__arrow} onClick={handleDecrement} >
                                            <img src={Arrow} alt="arrow" />
                                        </div>
                                        <div className={styles.table__arrow} onClick={handleIncrement}>
                                            <img src={Arrow} alt="arrow" />
                                        </div>
                                    </div>
                                </div>
                                <Calendar month={month} year={year} clickedDay={clickedDay} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleSelectDay={handleSelectDay} daysInMonth={daysInMonth} />
                            </div>
                        </div>
                        <div className={styles.table}>
                            <p className={styles.table__title}>
                                Select table
                            </p>
                            <div className={styles.table__inner}>
                                <div className={styles.table__tables}>
                                    <div className={styles.table__background}>
                                    </div>
                                    <div className={styles.table__lineBig}>
                                        <div className={styles.tab} onClick={() => handleClick(1)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 1
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.tab} onClick={() => handleClick(2)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 2
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.tab} onClick={() => handleClick(3)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 3
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.table__lineSmall}>
                                        <div className={styles.tab} onClick={() => handleClick(4)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 4
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>

                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.tab} onClick={() => handleClick(5)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>

                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 5
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>

                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.table__lineBig}>
                                        <div className={styles.tab} onClick={() => handleClick(6)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 6
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.tab} onClick={() => handleClick(7)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 7
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.tab} onClick={() => handleClick(8)}>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                            <div className={styles.tab__main}>
                                                Table 8
                                            </div>
                                            <div className={styles.tab__line}>
                                                <div className={styles.tab__chair}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/*

                                    <div onClick={() => handleClick(1)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 1

                                                <div className={styles.table__plate__background}>

                                                </div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>


    */}





                                    {/*

                                        <div onClick={() => handleClick(1)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 1

                                                <div className={styles.table__plate__background}>

                                                </div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>

                                        <div onClick={() => handleClick(2)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 2
                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>



                                        <div onClick={() => handleClick(3)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 3
                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>


                                    </div>






                                */}







                                    {/*


                                    <div className={styles.table__lineSmall}>
                                        <div onClick={() => handleClick(4)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 4
                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>




                                        <div onClick={() => handleClick(5)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 5
                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>


                                    </div>


















                                    <div className={styles.table__lineBig}>
                                        <div onClick={() => handleClick(6)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 6
                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>

                                        <div onClick={() => handleClick(7)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 7

                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>



                                        <div onClick={() => handleClick(8)} className={styles.table__block}>
                                            <div className={styles.table__first__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>
                                            <div className={styles.table__plate}>
                                                Table 8
                                                <div className={styles.table__plate__background}></div>
                                            </div>
                                            <div className={styles.table__second__layer}>
                                                <div className={styles.table__chair}> </div>
                                            </div>

                                        </div>
                                    </div>
*/}
                                </div>

                            </div>
                        </div>




                    </div>
                </div>
            </div>
            <ModalWindow
                open={isOpen}
                //  open={true}
                clickedElement={clickedElement}
                onClose={() => setIsOpen(false)}
                month={month}
                year={year}
                clickedDay={clickedDay}
                handleOpen={handleOpen}
                setIsOpen={setIsOpen}
            >
            </ModalWindow>
            <SureModalWindow //isSureModalOpen={isSureModalOpen}
                isSureModalOpen={true}
                handleDisagree={handleDisagree}
            //handleCloseSureModal={handleCloseSureModal} handleOpenSureModal={handleOpenSureModal} 
            />
        </>
    );
})

export default PersonalForm;
