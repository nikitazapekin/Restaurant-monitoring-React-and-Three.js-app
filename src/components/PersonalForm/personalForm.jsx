

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
import { PersonalFormComponent, RestaurantComponentBackground, RadialGradient, PersonalInner, PersonalHeader, PersonalHeaderTitle, PersonalHeaderBtn, Ttl, Ttt, HeaderTitle, HeaderBtn, PersonalMain, PersonalMainInner, PersonalMainInnerTitle, PersonalMainInnerContent, PersonalMainInnerContentBlock, PersonalCalendar, PersonalTables, PersonalBlockTitle, PersonalTableItem, TableItemMiniBlock, TableItemMini, TableItemMain } from "./personalFormStyles";

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
                        My booked tables
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
                             {/*
                                <PersonalTables />
    */}
                    <Calendar month={month} year={year} clickedDay={clickedDay} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleSelectDay={handleSelectDay} daysInMonth={daysInMonth} />
                            </PersonalMainInnerContentBlock>


                            <PersonalMainInnerContentBlock>

                                <PersonalBlockTitle>
                                    Select a table
                                </PersonalBlockTitle>
                                <PersonalTables >

                                    {[...Array(9)].map((_, index) => (

                                        <PersonalTableItem onClick={()=>handleClick(index+1)}
                                    //    onClick={allTables && allTables.getInfornationAboutAbilityOfBooking[index] ? "" : () => handleClick(index + 1)}
                                        >
                                            <TableItemMiniBlock>
                                                <TableItemMini />
                                                <TableItemMini />
                                            </TableItemMiniBlock>
                                            <TableItemMain>
                                                Table {index+1}
                                            </TableItemMain>
                                            <TableItemMiniBlock>
                                                <TableItemMini />
                                                <TableItemMini />
                                            </TableItemMiniBlock>


                                        </PersonalTableItem>
                                    ))}
                                    {/*
    */}

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


/*
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
    
     />
 </PersonalFormWrapper>

 */