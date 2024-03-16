import { PersonalFormWrapper , PersonalFormStyled, PersonalTitle} from "../PersonalForm/personalFormStyles";
const PersonalFormOffers = () => {

    
    return ( <>




<PersonalFormWrapper>
    <PersonalFormStyled>
    <PersonalTitle>Your booked offers</PersonalTitle>



         {/*  
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
                <ModalWindow open={isOpen}
                clickedElement={clickedElement}
                onClose={() => setIsOpen(false)}
                month={month}
                year={year}
                clickedDay={clickedDay}
            >
                            </ModalWindow>
                             */}
                </PersonalFormStyled>
        </PersonalFormWrapper>
    </> );
}
 
export default PersonalFormOffers;