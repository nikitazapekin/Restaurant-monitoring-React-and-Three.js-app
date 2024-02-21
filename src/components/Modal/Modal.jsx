

import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { OverlayStyles, ErrorTime, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage, ModalTitle, HeaderWrapper, ModalData, GridWrapper, GridTable, GridTableElement, SelectDataTitle, SelectBookingTimeBlock, SelectBookingTimeBlockFrom, SelectingBookingTimeBlockFromTitle, SelectingBookingTime, BookedTime, BookedTimeItem, BookingTimeItemBackground, BookingTimeItemContent, BookingTimeItemContentText } from './ModalStyles';
import Calendar from '../calendar/calendar';
export default function ModalWindow({  open, onClose, clickedElement }) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  const [isError, setIsError] = useState(false)
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = today.toLocaleDateString('en-US', options);
  const [time, setTime] = useState({
    from: "",
    to: ""
  })
  const handleTime = (event) => {
    setTime(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }
  const hasEnglishLetters = (str) => {
    return /[a-zA-Zа-яА-Я]/.test(str);
  }
  const handleBook = () => {
    if (hasEnglishLetters(time.from) || hasEnglishLetters(time.to)) {
      setIsError(true)
    } else {
      onClose()
    }
  }
  useEffect(()=> {
console.log(JSON.stringify(time))
  }, [time])
  return ReactDom.createPortal(
    <>
      <Modal>
        <ModalWrapper>
          <HeaderWrapper>
            <ModalTitle>
              Table № {clickedElement}
            </ModalTitle>
            <ModalData>
              {currentDate}
            </ModalData>
          </HeaderWrapper>
          <SelectDataTitle>
            Select data for booking
          </SelectDataTitle>
          <Calendar />
          <SelectDataTitle>
            Select time booking
          </SelectDataTitle>
          <SelectBookingTimeBlock>
            <SelectBookingTimeBlockFrom>
              <SelectingBookingTimeBlockFromTitle> From</SelectingBookingTimeBlockFromTitle>
              <SelectingBookingTime onChange={(event) => handleTime(event)} name="from" placeholder='From 00:00' />
            </SelectBookingTimeBlockFrom>
            <SelectBookingTimeBlockFrom>
              <SelectingBookingTimeBlockFromTitle> To</SelectingBookingTimeBlockFromTitle>
              <SelectingBookingTime onChange={(event) => handleTime(event)} name="to" placeholder='To 00:00' />
            </SelectBookingTimeBlockFrom>
          </SelectBookingTimeBlock>
          {isError && (
            <ErrorTime>Entered data is incorrect</ErrorTime>
          )}
  <SelectDataTitle>
  Reserved seats for current day
          </SelectDataTitle>
<BookedTime>
  <BookedTimeItem>
    <BookingTimeItemContent>
<BookingTimeItemContentText>
 12:00-14:00
</BookingTimeItemContentText>
<BookingTimeItemContentText>
   4/4
</BookingTimeItemContentText>
    </BookingTimeItemContent>
    <BookingTimeItemBackground />
  </BookedTimeItem>
  
  <BookedTimeItem>
    <BookingTimeItemContent>
<BookingTimeItemContentText>

15:00-19:00
</BookingTimeItemContentText>
<BookingTimeItemContentText>
3/4
</BookingTimeItemContentText>
    </BookingTimeItemContent>
    <BookingTimeItemBackground />
  </BookedTimeItem>
</BookedTime>
          <ModalButton
            onClick={handleBook}
          >
            Submit
          </ModalButton>
        </ModalWrapper>
      </Modal>
      <OverlayStyles />
    </>,
    portalElement || document.body
  );
}