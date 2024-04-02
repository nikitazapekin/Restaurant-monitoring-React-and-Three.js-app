
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
import TimerComponent from "../TimerComponent/TimerComponent";

const PersonalFormOffers = () => {
    const { id } = useParams()
    const { oneUser, refetch, loading } = YourBookedTables({ id })
    const [isOpen, setIsOpen] = useState(false)
    const { handleRemove, handleConfirmTable } = useRemoveFromBooked()
    const [confirmingItem, setConfirmingItem] = useState()
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
        handleConfirmTable(item)
        refetch()
    }
    const handleClick = (item) => {
       clickedElement.current = item
        setIsOpen(true)
    }
    return (
        <>
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
                                            <TimerComponent isConfirmed={item.isConfirmed} time={item.timeOfBooking} handleRemove={handleRemove} item={item} />
                                        </BookingElementText>
                                        {!item.isConfirmed && (
                                            <Warning
                                                //  onClick={() => handleConfirm(item)}
                                                onClick={() => handleClick(item)}
                                            //  onClick={()=>setIsOpen(true)}
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
                            {oneUser.getYourBookedTables.length === 0 ? <NothingToShowText>Nothing to show</NothingToShowText> : <></>}
                        </>
                    )}
                </PersonalFormStyled>
                {/* 
               */}
                <SureModalWindow isOpen={isOpen} setIsOpen={setIsOpen} item={clickedElement} handleConfirm={handleConfirm}   />
            </PersonalFormWrapper>
        </>
    );
}

export default PersonalFormOffers;



