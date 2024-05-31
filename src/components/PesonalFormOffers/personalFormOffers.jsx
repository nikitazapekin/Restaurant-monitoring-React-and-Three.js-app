
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
import "./index.css"
import useHistoryTables from "../../hooks/useHistoryTables";
import RestoreModalWindow from "../restoreModal/restoreMofal";
import useRestoreWindow from "../../hooks/useRestoreWindow";
import styles from "./index.module.scss"
import First from "../../assets/Component 2.png"
import Second from "../../assets/Component 3.png"
const PersonalFormOffers = () => {
    const { id } = useParams()
    const { oneUser, refetch, loading } = YourBookedTables({ id })
    const [isOpen, setIsOpen] = useState(false)
    const { handleRemove, handleConfirmTable } = useRemoveFromBooked()
    const [confirmingItem, setConfirmingItem] = useState()
    const { allTablesHistory, handleRefetchHistory } = useHistoryTables()

    const [isEmpty, setIsEmpty] = useState(false)
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
        clickedElement.current = { ...item, isHistory: false };
        setIsOpen(true)
    }
    const handleClickRemove = (item) => {
        handleRemove(item)
        handleRefetchHistory()
    }
    const handleHistoryWindow = (item) => {
        clickedElement.current = { ...item, isHistory: true };
        setIsOpen(prev => !prev)
    }
    return (
        <>
            <div className={styles.reserved}>
                <div className={styles.reserved__inner}>
                    <div className={styles.reserved__background}></div>
                    <h2 className={styles.reserved__title}>
                        Your reserved tables
                    </h2>
                    <div className={styles.reserved__tables}>
                        {oneUser && (
                            <>
                                {oneUser.getYourBookedTables.map((itemm, indexx) => (
                                    itemm.timeForBooking.map((item, index) => (
                                        <>
                                            <div className={styles.reserved__table}>
                                                <div className={styles.reserved__table__left}>
                                                    <p className={styles.reserved__date}>
                                                        Table №{item.tableID} is booked for
                                                        {" " + item.timeForBooking}
                                                        {" (" + item.dataOfBooking + ") "}
                                                    </p>
                                                    {!item.isConfirmed && (
                                                        <p className={styles.reserved__verification}>
                                                            You must confirm reservation
                                                        </p>
                                                    )}
                                                </div>
                                                {!item.isConfirmed && (
                                                    <>
                                                        <TimerComponent
                                                            handleRefetchHistory={handleRefetchHistory}
                                                            isConfirmed={item.isConfirmed} time={item.timeOfBooking} handleRemove={handleRemove} item={item} />
                                                    </>
                                                )}
                                                <div className={styles.reserved__table__right}>
                                                    {!item.isConfirmed && (
                                                        <>
                                                            <img src={First} alt="icon" onClick={() => handleClick(item)} className={styles.reserved__table__img} />
                                                        </>
                                                    )}
                                                    <img src={Second} alt="icon" onClick={() => handleClickRemove(item)} className={styles.reserved__table__img} />
                                                </div>
                                            </div>
                                        </>
                                    ))
                                ))}
                            </>
                        )}
                        <SureModalWindow
                            isOpen={isOpen}
                            setIsOpen={setIsOpen} item={clickedElement} handleConfirm={handleConfirm} />

                        {allTablesHistory && (
                            allTablesHistory.getYourBookedTablesHistory.map(itemm => (
                                <>
                                    {itemm.history.map((item, index) => (
                                        <>
                                            <div className={styles.reserved__table}
                                                onClick={() => handleHistoryWindow(item)}
                                            >
                                                <div className={styles.reserved__table__left}>
                                                    <p className={styles.reserved__date}>
                                                        Table №{item.tableID} is booked for
                                                        {" " + item.timeForBooking}
                                                        {" (" + item.dataOfBooking + ") "}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                    }
                                </>
                            ))
                        )}



                    </div>

                </div>
            </div>

        </>
    );
}

export default PersonalFormOffers;










/*

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
import "./index.css"
import useHistoryTables from "../../hooks/useHistoryTables";
import RestoreModalWindow from "../restoreModal/restoreMofal";
import useRestoreWindow from "../../hooks/useRestoreWindow";
const PersonalFormOffers = () => {
    const { id } = useParams()
    const { oneUser, refetch, loading } = YourBookedTables({ id })
    const [isOpen, setIsOpen] = useState(false)
    const { handleRemove, handleConfirmTable } = useRemoveFromBooked()
    const [confirmingItem, setConfirmingItem] = useState()

    const { allTablesHistory, handleRefetchHistory  } = useHistoryTables()
    const clickedElement = useRef()

    useEffect(() => {
        console.log("HISTTTTTT" + JSON.stringify(allTablesHistory))
    }, [allTablesHistory])
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
        clickedElement.current = { ...item, isHistory: false };
       // clickedElement.current = item
        setIsOpen(true)
    }

    const handleClickRemove = (item) => {

        handleRemove(item)
        handleRefetchHistory()
    }

  
    const handleHistoryWindow = (item) => {
        //  clickedElement.current= item
        clickedElement.current = { ...item, isHistory: true };
        // clickedHistoryElement.current = item
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

                                            {!item.isConfirmed && (

                                                <TimerComponent
                                                handleRefetchHistory={handleRefetchHistory}
                                                isConfirmed={item.isConfirmed} time={item.timeOfBooking} handleRemove={handleRemove} item={item} />
                                                )}
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

                                                onClick={() => handleClickRemove(item)}
                                                src={Trash}
                                                alt="trash" />
                                        </TrashBox>
                                    </BookingElement>
                                )
                                )
                            ))}
                            {oneUser.getYourBookedTables.length === 0 ? <NothingToShowText>Nothing to show</NothingToShowText> : <></>}


                         


                            {allTablesHistory && (
                                allTablesHistory.getYourBookedTablesHistory.map(itemm => (
                                    <>
                                        {itemm.history.map((item, index) => (
                                            <>
                                                <BookingElement
                                                    onClick={() => handleHistoryWindow(item)}
                    
                                                    key={index}>
                                                    <BookingElementText>
                                                        Table №{item.tableID} is booked for {item.timeForBooking}  ({item.dataOfBooking})

                                                    </BookingElementText>


                                                </BookingElement>
                                            </>
                                        ))
                                        }
                                    </>
                                ))
                            )}

                        </>
                    )}
                </PersonalFormStyled>
               
                <SureModalWindow isOpen={isOpen} setIsOpen={setIsOpen} item={clickedElement} handleConfirm={handleConfirm} />

            </PersonalFormWrapper>
          
        </>
    );
}

export default PersonalFormOffers;

*/