import { useEffect, useLayoutEffect, useRef } from "react";
import YourBookedTables from "../../hooks/yourBookedTables";
import { useParams } from "react-router-dom";
import Trash from "../../assets/delete.png"
import { BookingElement, BookingElementText, TrashBox, TrashBoxImage, PersonalFormWrapper, PersonalFormStyled, PersonalTitle, NothingToShowText, Warning, WarningImage } from "./personalFormOffersStyles";
import useRemoveFromBooked from "../../hooks/removeFromBooked";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import WarningSign from "../../assets/warning.png"
import SureModalWindow from "../SureModal/SureModal";
function countdown(time, item, handleRemove) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const end = new Date();
    end.setHours(hours);
    end.setMinutes(minutes + 10);
    end.setSeconds(seconds);
    function formatTime(date) {
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    }
    function update() {
        const currentTime = new Date();
        if (currentTime >= end) {
            console.log("stopped");
            handleRemove(item)
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(update, 1000);
    return formatTime(end);
}


const PersonalFormOffers = () => {
    const { id } = useParams()
    const { oneUser, refetch, loading } = YourBookedTables({ id })
    const [isOpen, setIsOpen] = useState(false)
    const { handleRemove } = useRemoveFromBooked()
    const { confirmingItem, setConfirmingItem } = useState()
    const clickedElement = useRef()
    useEffect(() => {
        refetch()
    }, [])
    useEffect(() => {
        refetch()
    }, [handleRemove])
    if (loading) {
        return <Spinner />
    }
    const handleConfirm = (item) => {
        setIsOpen(true)
        clickedElement.current = item
        console.log(JSON.stringify(el))
    }
    return (<>
        <PersonalFormWrapper>
            <PersonalFormStyled>
                <PersonalTitle>Your booked tables</PersonalTitle>
                {oneUser && (
                    <>
                        {oneUser.getYourBookedTables.map((itemm, indexx) => (
                            itemm.timeForBooking.map((item, index) => (
                                <BookingElement key={index}>
                                    <BookingElementText>
                                        Table №{item.tableID} is booked for {item.timeForBooking}  ({item.dataOfBooking})
                                        Confirm offer for  {countdown(item.timeOfBooking, item, handleRemove)}
                                    </BookingElementText>
                                    {!item.isConfirmed && (
                                        <Warning
                                            onClick={() => handleConfirm(item)}
                                        >
                                            <WarningImage alt="warning" src={WarningSign} />
                                        </Warning>
                                    )}
                                    <TrashBox>
                                        <TrashBoxImage
                                            onClick={() => handleRemove(item)}
                                            src={Trash}
                                            alt="trash" />
                                    </TrashBox>


                                </BookingElement>
                            )
                            )
                        ))}
                        {oneUser.getYourBookedTables.length == 0 ? <NothingToShowText>Nothing to show</NothingToShowText> : <></>}
                    </>
                )
                }
            </PersonalFormStyled>

            <SureModalWindow isOpen={isOpen} setIsOpen={setIsOpen} item={clickedElement} />
        </PersonalFormWrapper>
    </>);
}
export default PersonalFormOffers;





















/*
function countdown(time, timeOfBooking) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const end = new Date();
    end.setHours(hours);
    end.setMinutes(minutes + 5);
    end.setSeconds(seconds);
    function formatTime(date) {
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    }
    function update() {
        const currentTime = new Date();
        console.log(formatTime(currentTime));
        if (currentTime >= end) {
            console.log("stopped");
            clearInterval(intervalId);  
        }
    }

    const intervalId = setInterval(update, 1000);
    // Display timeOfBooking in BookingElementText
    console.log('Time of Booking:', timeOfBooking);
}

const PersonalFormOffers = () => {
    const { id } = useParams()
    const { oneUser, refetch, loading } = YourBookedTables({ id })
    const { handleRemove } = useRemoveFromBooked()
    useEffect(() => {
        refetch()
    }, [])
    useEffect(() => {
        refetch()
    }, [handleRemove])
    if (loading) {
        return <Spinner />
    }
    return (<>
        <PersonalFormWrapper>
            <PersonalFormStyled>
                <PersonalTitle>Your booked tables</PersonalTitle>
                {oneUser && (
                    <>
                        {oneUser.getYourBookedTables.map((itemm, indexx) => (
                            itemm.timeForBooking.map((item, index) => (
                                <BookingElement key={index}>
                                    <BookingElementText>
                                       Table №{item.tableID} is booked for {item.timeForBooking}  ({item.dataOfBooking})
                                    {String(item.isConfirmed)}

                                    
                                    {countdown(item.timeForBooking, item.timeOfBooking)}
                                    </BookingElementText>
                                    <TrashBox>
                                        <TrashBoxImage
                                            onClick={() => handleRemove(item)}
                                            src={Trash}
                                            alt="trash" />
                                    </TrashBox>
                                </BookingElement>
                            )
                            )
                        ))}
                       {oneUser.getYourBookedTables.length==0 ?  <NothingToShowText>Nothing to show</NothingToShowText> : <></>}
                    </>
                )
                }
            </PersonalFormStyled>

        </PersonalFormWrapper>
    </>);
}
export default PersonalFormOffers; */

{/*
<Timer startTime={"20:01:04"} />
*/}